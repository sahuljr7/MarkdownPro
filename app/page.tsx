'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import MarkdownEditor from '@/components/MarkdownEditor';
import {
  Zap,
  Lock,
  Sparkles,
  Eye,
  Download,
  Copy,
  Globe,
  Shield,
  Code,
  FileText,
  Link,
  Image,
  Table,
  List,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const editorRef = useRef<HTMLDivElement>(null);

  const scrollToEditor = () => {
    editorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">MarkdownPro</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm hover:text-primary transition-colors">
              Features
            </a>
            <a href="#guide" className="text-sm hover:text-primary transition-colors">
              Guide
            </a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">
              FAQ
            </a>
            <Button onClick={scrollToEditor} size="sm">
              Try Now
            </Button>
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Fast. Private. Free.
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Markdown to Rich Text Converter
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Convert Markdown instantly with real-time preview. Privacy-first, client-side processing. No installation required.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button onClick={scrollToEditor} size="lg" className="gap-2">
              Start Converting <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#guide">Learn More</a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              <span>100% Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              <span>Works Offline</span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container mx-auto px-4 py-20 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A powerful markdown editor with all the features you need for professional document conversion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Real-Time Preview</h3>
                <p className="text-muted-foreground">
                  See your markdown rendered instantly as you type with split-screen editing
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Instant Conversion</h3>
                <p className="text-muted-foreground">
                  Convert markdown to rich text, HTML, or plain text in milliseconds
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Multiple Export Formats</h3>
                <p className="text-muted-foreground">
                  Export to HTML, Markdown, or copy as rich text for Word, Notion, and more
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Copy className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">One-Click Copy</h3>
                <p className="text-muted-foreground">
                  Copy formatted text directly to clipboard with full formatting preserved
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Works Everywhere</h3>
                <p className="text-muted-foreground">
                  Compatible with Word, Google Docs, Notion, Slack, and all major platforms
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Privacy First</h3>
                <p className="text-muted-foreground">
                  100% client-side processing. Your data never leaves your browser
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section ref={editorRef} className="container mx-auto px-4 py-20 border-t bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try It Now
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start converting markdown to rich text instantly
          </p>
        </div>
        <MarkdownEditor />
      </section>

      <section id="about" className="container mx-auto px-4 py-20 border-t">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About This Tool
            </h2>
            <p className="text-lg text-muted-foreground">
              A modern solution for markdown conversion
            </p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg">
              This Markdown to Rich Text Converter is designed for writers, developers, and content creators who need a fast, reliable way to convert markdown documents into formatted text for various platforms.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Supported Platforms</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              <li>Microsoft Word</li>
              <li>Google Docs</li>
              <li>Notion</li>
              <li>Slack</li>
              <li>Email Clients</li>
              <li>Any Rich Text Editor</li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">Why Client-Side Processing?</h3>
            <p>
              By processing everything in your browser, we ensure:
            </p>
            <ul>
              <li><strong>Privacy:</strong> Your documents never leave your device</li>
              <li><strong>Speed:</strong> No server round-trips mean instant results</li>
              <li><strong>Reliability:</strong> Works offline after initial load</li>
              <li><strong>Security:</strong> Safe for confidential documents</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="guide" className="container mx-auto px-4 py-20 border-t bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to Use
            </h2>
            <p className="text-lg text-muted-foreground">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Paste Markdown</h3>
              <p className="text-muted-foreground">
                Type or paste your markdown content into the left editor panel
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">View Preview</h3>
              <p className="text-muted-foreground">
                See your formatted text in real-time on the right preview panel
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Copy or Export</h3>
              <p className="text-muted-foreground">
                Copy rich text or export to HTML, Word, or PDF format
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 border-t">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Supported Markdown
            </h2>
            <p className="text-lg text-muted-foreground">
              Full GitHub Flavored Markdown support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Headers</h3>
                    <p className="text-sm text-muted-foreground">
                      # H1 through ###### H6
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <List className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Lists</h3>
                    <p className="text-sm text-muted-foreground">
                      Ordered, unordered, and nested lists
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Emphasis</h3>
                    <p className="text-sm text-muted-foreground">
                      **Bold**, *italic*, ~~strikethrough~~
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Code Blocks</h3>
                    <p className="text-sm text-muted-foreground">
                      Inline code and fenced code blocks
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Link className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Links & Images</h3>
                    <p className="text-sm text-muted-foreground">
                      [text](url) and ![alt](image.jpg)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Table className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Tables</h3>
                    <p className="text-sm text-muted-foreground">
                      GitHub Flavored Markdown tables
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Blockquotes</h3>
                    <p className="text-sm text-muted-foreground">
                      &gt; Quote text with proper formatting
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">And More</h3>
                    <p className="text-sm text-muted-foreground">
                      Horizontal rules, task lists, footnotes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="container mx-auto px-4 py-20 border-t bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is this tool completely free?</AccordionTrigger>
              <AccordionContent>
                Yes! This tool is 100% free to use with no limitations. There are no premium features or hidden costs. All functionality is available to everyone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Is my data stored anywhere?</AccordionTrigger>
              <AccordionContent>
                No. All processing happens entirely in your browser using JavaScript. Your markdown content never leaves your device, ensuring complete privacy and security.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What platforms are supported?</AccordionTrigger>
              <AccordionContent>
                The converted rich text works with Microsoft Word, Google Docs, Notion, Slack, email clients, and virtually any application that supports formatted text. HTML export is compatible with all modern web browsers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can I use this offline?</AccordionTrigger>
              <AccordionContent>
                Yes! After the initial page load, the tool works completely offline. Your browser caches all necessary resources, so you can convert markdown without an internet connection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Is it safe for confidential documents?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Since all processing happens locally in your browser with no data transmission to any server, it&apos;s perfectly safe for confidential, sensitive, or proprietary documents.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What markdown syntax is supported?</AccordionTrigger>
              <AccordionContent>
                We support full GitHub Flavored Markdown (GFM), including headers, lists, emphasis, code blocks, tables, links, images, blockquotes, horizontal rules, and more.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Can I export to PDF or Word?</AccordionTrigger>
              <AccordionContent>
                You can export to HTML format directly. For Word documents, copy the rich text and paste it into Microsoft Word. For PDF, you can use your browser&apos;s print-to-PDF feature on the HTML export.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Are there keyboard shortcuts?</AccordionTrigger>
              <AccordionContent>
                Yes! Use Ctrl+S (Cmd+S on Mac) to download your markdown file, and Ctrl+K (Cmd+K) to clear the editor. More shortcuts are available in the toolbar tooltips.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="border-t py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                  <span className="font-bold text-xl">MarkdownPro</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Fast. Private. Free. The modern way to convert markdown to rich text.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Features</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Real-time Preview</li>
                  <li>Multiple Export Formats</li>
                  <li>Privacy First</li>
                  <li>Works Offline</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#guide" className="hover:text-foreground transition-colors">User Guide</a></li>
                  <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
                  <li><a href="https://www.markdownguide.org" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Markdown Guide</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t pt-8 text-center text-sm text-muted-foreground">
              <p>© 2024 MarkdownPro. Built with Next.js and Tailwind CSS.</p>
              <p className="mt-2">100% client-side. Your data never leaves your browser.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
