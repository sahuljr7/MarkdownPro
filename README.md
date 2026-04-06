# MarkdownPro

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-bwelhmpf)

A modern, privacy-first **Markdown to Rich Text Converter** built with Next.js. Convert your markdown documents instantly with real-time preview, multiple export formats, and full GitHub Flavored Markdown support—all processed entirely in your browser.

---

## ✨ Features

- 🚀 **Real-Time Preview** - See your markdown rendered instantly as you type with split-screen editing
- ⚡ **Instant Conversion** - Convert markdown to rich text, HTML, or plain text in milliseconds
- 📥 **Multiple Export Formats** - Export to HTML, Markdown, or copy as rich text for Word, Notion, and more
- 📋 **One-Click Copy** - Copy formatted text directly to clipboard with full formatting preserved
- 🌐 **Works Everywhere** - Compatible with Word, Google Docs, Notion, Slack, and all major platforms
- 🔒 **Privacy First** - 100% client-side processing. Your data never leaves your browser
- 🌙 **Dark Mode Support** - Beautiful themes that adapt to your preference
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | [Next.js 13](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| **Markdown Processing** | [react-markdown](https://github.com/remarkjs/react-markdown), [rehype-raw](https://github.com/rehypejs/rehype-raw), [remark-gfm](https://github.com/remarkjs/remark-gfm) |
| **Code Highlighting** | [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter), [Prism.js](https://prismjs.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Deployment** | [Netlify](https://www.netlify.com/) |

---

## 📁 Project Structure

```
markdownpro/
├── app/                      # Next.js App Router pages
│   ├── globals.css          # Global styles & Tailwind config
│   ├── layout.tsx           # Root layout with providers
│   ├── page.tsx             # Main landing page
│   └── providers.tsx        # Theme & context providers
├── components/
│   ├── MarkdownEditor.tsx   # Core markdown editor component
│   └── ui/                  # shadcn/ui components
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── ... (40+ components)
├── hooks/
│   └── use-toast.ts         # Toast notification hook
├── lib/
│   └── utils.ts             # Utility functions (cn helper)
├── public/                   # Static assets
├── components.json          # shadcn/ui configuration
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd markdownpro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📖 Usage

### How to Convert Markdown

1. **Paste Markdown** - Type or paste your markdown content into the left editor panel
2. **View Preview** - See your formatted text in real-time on the right preview panel
3. **Copy or Export** - Use the toolbar buttons to:
   - 📋 Copy as rich text
   - 📄 Export as HTML
   - 💾 Download as Markdown
   - 📑 Export to PDF/Word (via docx/pdfkit)

### Supported Markdown Syntax

MarkdownPro supports **GitHub Flavored Markdown (GFM)** including:

| Feature | Syntax Example |
|---------|---------------|
| Headers | `# H1` through `###### H6` |
| Bold | `**bold text**` |
| Italic | `*italic text*` |
| Strikethrough | `~~strikethrough~~` |
| Links | `[text](url)` |
| Images | `![alt](image.jpg)` |
| Code (inline) | `` `code` `` |
| Code blocks | ` ```language ` |
| Tables | `\| col1 \| col2 \|` |
| Lists | `- item` or `1. item` |
| Blockquotes | `> quote` |
| Task lists | `- [ ] task` |
| Horizontal rules | `---` |

---

## 🎯 Supported Platforms

Export your converted content to any of these platforms:

- ✅ Microsoft Word
- ✅ Google Docs
- ✅ Notion
- ✅ Slack
- ✅ Email Clients (Gmail, Outlook, etc.)
- ✅ Any Rich Text Editor

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

---

## 🌟 Why Client-Side Processing?

By processing everything in your browser, MarkdownPro ensures:

- 🔐 **Privacy** - Your documents never leave your device
- ⚡ **Speed** - No server round-trips mean instant results
- 📶 **Reliability** - Works offline after initial load
- 🛡️ **Security** - Safe for confidential documents

---

## 📦 Key Dependencies

```json
{
  "next": "13.5.1",
  "react": "18.2.0",
  "react-dom": "18.2.0",
  "react-markdown": "^10.1.0",
  "rehype-raw": "^7.0.0",
  "remark-gfm": "^4.0.1",
  "tailwindcss": "3.3.3",
  "@radix-ui/*": "Various UI primitives",
  "lucide-react": "^0.446.0"
}
```

---

## 🎨 Customization

### Changing the Theme

The app uses shadcn/ui with CSS variables for theming. Modify `app/globals.css` to customize colors:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  /* ... */
}
```

### Adding New UI Components

Use shadcn/ui CLI to add new components:

```bash
npx shadcn-ui@latest add <component-name>
```

---

## 🚀 Deployment

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy!

The project includes a `netlify.toml` configuration for optimal Next.js deployment.

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Markdown parsing by [remark](https://github.com/remarkjs/remark)

---

<p align="center">Made with ❤️ using Next.js and TypeScript</p>
