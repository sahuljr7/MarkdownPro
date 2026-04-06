'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Copy, Download, Upload, FileText, Eye, Code, Trash2, Sun, Moon, Columns2 as Columns, Rows2 as Rows, BookOpen, FileCode } from 'lucide-react';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, HeadingLevel, TextRun, Table, TableCell, TableRow, BorderStyle, convertInchesToTwip } from 'docx';

const SAMPLE_MARKDOWN = `# Markdown to Rich Text Converter

## Welcome! 👋

This is a **powerful** and *beautiful* markdown editor with real-time preview.

### Features

- ✨ Real-time preview
- 🔒 Privacy-first (100% client-side)
- 🚀 Lightning fast
- 📱 Fully responsive
- 🎨 Dark mode support

### Code Example

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
  return true;
}
\`\`\`

### Tables

| Feature | Status |
|---------|--------|
| Markdown to HTML | ✅ |
| Export to PDF | ✅ |
| Dark Mode | ✅ |

> This is a blockquote. It can contain multiple lines and **formatting**.

[Learn more about Markdown](https://www.markdownguide.org)

---

**Try it yourself!** Start typing in the left panel.
`;

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('');
  const [viewMode, setViewMode] = useState<'split' | 'stacked'>('split');
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<HTMLTextAreaElement>(null);

  const wordCount = markdown.trim().split(/\s+/).filter(Boolean).length;
  const charCount = markdown.length;
  const readingTime = Math.ceil(wordCount / 200);

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        handleDownloadMarkdown();
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        handleClear();
      }
    };

    document.addEventListener('keydown', handleKeyboard);
    return () => document.removeEventListener('keydown', handleKeyboard);
  }, [markdown]);

  const handleCopyRichText = useCallback(async () => {
    try {
      const html = convertMarkdownToHTML(markdown);
      const blob = new Blob([html], { type: 'text/html' });
      const clipboardItem = new ClipboardItem({
        'text/html': blob,
        'text/plain': new Blob([markdown], { type: 'text/plain' }),
      });
      await navigator.clipboard.write([clipboardItem]);
      toast({
        title: 'Copied!',
        description: 'Rich text copied to clipboard',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to copy rich text',
        variant: 'destructive',
      });
    }
  }, [markdown, toast]);

  const handleCopyPlainText = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      toast({
        title: 'Copied!',
        description: 'Plain text copied to clipboard',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to copy text',
        variant: 'destructive',
      });
    }
  }, [markdown, toast]);

  const convertMarkdownToHTML = (md: string): string => {
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; line-height: 1.6; padding: 2rem; max-width: 800px; margin: 0 auto; }
    h1, h2, h3, h4, h5, h6 { margin-top: 1.5em; margin-bottom: 0.5em; font-weight: 600; line-height: 1.25; }
    h1 { font-size: 2em; border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
    h2 { font-size: 1.5em; border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; }
    code { background: #f6f8fa; padding: 0.2em 0.4em; border-radius: 3px; font-size: 85%; }
    pre { background: #f6f8fa; padding: 16px; border-radius: 6px; overflow: auto; }
    pre code { background: none; padding: 0; }
    blockquote { border-left: 4px solid #dfe2e5; padding-left: 1em; color: #6a737d; margin: 0; }
    table { border-collapse: collapse; width: 100%; margin: 1em 0; }
    table th, table td { border: 1px solid #dfe2e5; padding: 6px 13px; }
    table th { background: #f6f8fa; font-weight: 600; }
    a { color: #0366d6; text-decoration: none; }
    a:hover { text-decoration: underline; }
    img { max-width: 100%; }
    hr { border: none; border-top: 2px solid #eaecef; margin: 2em 0; }
  </style>
</head>
<body>${md}</body>
</html>`;
  };

  const handleExportHTML = useCallback(() => {
    const html = convertMarkdownToHTML(markdown);
    const blob = new Blob([html], { type: 'text/html' });
    saveAs(blob, 'document.html');
    toast({
      title: 'Exported!',
      description: 'HTML file downloaded',
    });
  }, [markdown, toast]);

  const cleanMarkdownText = (text: string): string => {
    return text
      .replace(/^#+\s+/gm, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/__(.*?)__/g, '$1')
      .replace(/_(.+?)_/g, '$1')
      .replace(/~~(.*?)~~/g, '$1')
      .replace(/\[(.*?)\]\(.*?\)/g, '$1')
      .replace(/!\[(.*?)\]\(.*?\)/g, '$1')
      .replace(/`([^`]+)`/g, '$1')
      .replace(/^[-*+]\s+/gm, '')
      .replace(/^\d+\.\s+/gm, '')
      .replace(/^>\s+/gm, '')
      .replace(/^```[\s\S]*?```/gm, (match) => match.split('\n').slice(1, -1).join('\n'))
      .replace(/\|(.+?)\|/g, '$1')
      .trim();
  };

  const parseMarkdownToParagraphs = (md: string) => {
    const lines = md.split('\n');
    const paragraphs: Paragraph[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      if (line.startsWith('# ')) {
        const cleanedText = cleanMarkdownText(line.replace('# ', ''));
        paragraphs.push(new Paragraph({
          text: cleanedText,
          heading: HeadingLevel.HEADING_1,
          spacing: { after: 200 },
        }));
      } else if (line.startsWith('## ')) {
        const cleanedText = cleanMarkdownText(line.replace('## ', ''));
        paragraphs.push(new Paragraph({
          text: cleanedText,
          heading: HeadingLevel.HEADING_2,
          spacing: { after: 200 },
        }));
      } else if (line.startsWith('### ')) {
        const cleanedText = cleanMarkdownText(line.replace('### ', ''));
        paragraphs.push(new Paragraph({
          text: cleanedText,
          heading: HeadingLevel.HEADING_3,
          spacing: { after: 200 },
        }));
      } else if (line.startsWith('- ') || line.startsWith('* ')) {
        while (i < lines.length && (lines[i].startsWith('- ') || lines[i].startsWith('* '))) {
          const cleanedText = cleanMarkdownText(lines[i].replace(/^[-*] /, ''));
          paragraphs.push(new Paragraph({
            text: cleanedText,
            spacing: { after: 100 },
            indent: { left: 720 },
            bullet: { level: 0 },
          }));
          i++;
        }
        continue;
      } else if (line.match(/^\d+\. /)) {
        while (i < lines.length && lines[i].match(/^\d+\. /)) {
          const cleanedText = cleanMarkdownText(lines[i].replace(/^\d+\. /, ''));
          paragraphs.push(new Paragraph({
            text: cleanedText,
            spacing: { after: 100 },
            indent: { left: 720 },
          }));
          i++;
        }
        continue;
      } else if (line.startsWith('```')) {
        let codeBlock = '';
        i++;
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeBlock += lines[i] + '\n';
          i++;
        }
        const cleanedCode = cleanMarkdownText(codeBlock.trim());
        paragraphs.push(new Paragraph({
          text: cleanedCode,
          spacing: { after: 200 },
          shading: { fill: 'E8E8E8' },
        }));
      } else if (line.startsWith('> ')) {
        const cleanedText = cleanMarkdownText(line.replace('> ', ''));
        paragraphs.push(new Paragraph({
          text: cleanedText,
          spacing: { after: 200 },
          border: {
            left: {
              color: '999999',
              space: 1,
              style: BorderStyle.SINGLE,
              size: 12,
            },
          },
          children: [
            new TextRun({
              text: cleanedText,
              italics: true,
            }),
          ],
        }));
      } else if (line.trim() !== '') {
        const cleanedText = cleanMarkdownText(line);
        paragraphs.push(new Paragraph({
          text: cleanedText,
          spacing: { after: 200 },
        }));
      }

      i++;
    }

    return paragraphs;
  };

  const handleExportDocx = useCallback(async () => {
    try {
      const doc = new Document({
        sections: [{
          children: parseMarkdownToParagraphs(markdown),
        }],
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, 'document.docx');
      toast({
        title: 'Exported!',
        description: 'Word document downloaded',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to export Word document',
        variant: 'destructive',
      });
    }
  }, [markdown, toast]);

  const convertMarkdownToPlainTextHTML = (md: string): string => {
    const plainText = cleanMarkdownText(md)
      .split('\n')
      .map(line => `<p>${line.trim() ? line.replace(/</g, '&lt;').replace(/>/g, '&gt;') : '<br />'}</p>`)
      .join('\n');

    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; line-height: 1.6; padding: 2rem; max-width: 800px; margin: 0 auto; }
    p { margin: 0.5em 0; }
  </style>
</head>
<body>${plainText}</body>
</html>`;
  };

  const handleExportPDF = useCallback(() => {
    try {
      const html = convertMarkdownToPlainTextHTML(markdown);
      const printWindow = window.open('', '', 'width=800,height=600');
      if (printWindow) {
        printWindow.document.write(html);
        printWindow.document.close();
        printWindow.print();
      }
      toast({
        title: 'Print dialog opened',
        description: 'Select "Save as PDF" to export',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to open print dialog',
        variant: 'destructive',
      });
    }
  }, [markdown, toast]);

  const handleDownloadMarkdown = useCallback(() => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    saveAs(blob, 'document.md');
    toast({
      title: 'Downloaded!',
      description: 'Markdown file saved',
    });
  }, [markdown, toast]);

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          setMarkdown(content);
          toast({
            title: 'File loaded!',
            description: file.name,
          });
        };
        reader.readAsText(file);
      }
    },
    [toast]
  );

  const handleLoadSample = useCallback(() => {
    setMarkdown(SAMPLE_MARKDOWN);
    toast({
      title: 'Sample loaded!',
      description: 'Try editing the markdown',
    });
  }, [toast]);

  const handleClear = useCallback(() => {
    setMarkdown('');
    toast({
      title: 'Cleared!',
      description: 'Editor reset',
    });
  }, [toast]);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && (file.name.endsWith('.md') || file.name.endsWith('.markdown'))) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = e.target?.result as string;
          setMarkdown(content);
          toast({
            title: 'File loaded!',
            description: file.name,
          });
        };
        reader.readAsText(file);
      }
    },
    [toast]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className="w-full">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".md,.markdown"
                onChange={handleFileUpload}
                className="hidden"
              />
              <Button variant="outline" size="sm" onClick={handleLoadSample}>
                <BookOpen className="w-4 h-4 mr-2" />
                Sample
              </Button>
              <Button variant="outline" size="sm" onClick={handleClear}>
                <Trash2 className="w-4 h-4 mr-2" />
                Clear
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleCopyPlainText}>
                <FileText className="w-4 h-4 mr-2" />
                Copy Text
              </Button>
              <Button variant="outline" size="sm" onClick={handleCopyRichText}>
                <Copy className="w-4 h-4 mr-2" />
                Copy Rich
              </Button>
              <Button variant="outline" size="sm" onClick={handleDownloadMarkdown}>
                <FileCode className="w-4 h-4 mr-2" />
                .md
              </Button>
              <Button variant="outline" size="sm" onClick={handleExportHTML}>
                <Code className="w-4 h-4 mr-2" />
                HTML
              </Button>
              <Button variant="outline" size="sm" onClick={handleExportDocx}>
                <FileText className="w-4 h-4 mr-2" />
                DOCX
              </Button>
              <Button variant="outline" size="sm" onClick={handleExportPDF}>
                <Download className="w-4 h-4 mr-2" />
                PDF
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setViewMode(viewMode === 'split' ? 'stacked' : 'split')
                }
                className="hidden md:flex"
              >
                {viewMode === 'split' ? (
                  <Rows className="w-4 h-4" />
                ) : (
                  <Columns className="w-4 h-4" />
                )}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
            <span>{wordCount} words</span>
            <span>{charCount} characters</span>
            <span>{readingTime} min read</span>
          </div>
        </div>
      </div>

      <div className="md:hidden border-b">
        <div className="flex">
          <button
            onClick={() => setActiveTab('edit')}
            className={`flex-1 px-4 py-2 text-sm font-medium ${
              activeTab === 'edit'
                ? 'border-b-2 border-primary bg-muted'
                : 'text-muted-foreground'
            }`}
          >
            <Code className="w-4 h-4 inline mr-2" />
            Edit
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 px-4 py-2 text-sm font-medium ${
              activeTab === 'preview'
                ? 'border-b-2 border-primary bg-muted'
                : 'text-muted-foreground'
            }`}
          >
            <Eye className="w-4 h-4 inline mr-2" />
            Preview
          </button>
        </div>
      </div>

      <div
        className={`container mx-auto px-4 py-6 grid gap-6 ${
          viewMode === 'split'
            ? 'md:grid-cols-2'
            : 'grid-cols-1'
        }`}
      >
        <div
          className={`${
            activeTab === 'edit' ? 'block' : 'hidden md:block'
          }`}
        >
          <div className="relative h-[600px] rounded-lg border bg-card shadow-sm">
            <textarea
              ref={editorRef}
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              placeholder="Start typing Markdown..."
              className="w-full h-full p-6 bg-transparent resize-none focus:outline-none font-mono text-sm"
            />
          </div>
        </div>

        <div
          className={`${
            activeTab === 'preview' ? 'block' : 'hidden md:block'
          }`}
        >
          <div className="relative h-[600px] rounded-lg border bg-card shadow-sm overflow-auto">
            <div className="p-6 prose prose-neutral dark:prose-invert max-w-none">
              {markdown ? (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    code(props) {
                      const { children, className, ...rest } = props;
                      const match = /language-(\w+)/.exec(className || '');
                      return match ? (
                        <SyntaxHighlighter
                          style={theme === 'dark' ? oneDark : oneLight}
                          language={match[1]}
                          PreTag="div"
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code className={className} {...rest}>
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {markdown}
                </ReactMarkdown>
              ) : (
                <div className="text-muted-foreground text-center mt-12">
                  <Eye className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  <p>Preview will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
