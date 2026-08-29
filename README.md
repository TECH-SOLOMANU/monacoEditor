# ⚡ Monaco Editor — Standalone Web Code Editor Platform

> **Production-grade web code editor suite powered by VS Code's Monaco Engine, live `@babel/standalone` AST parse error markers, red squiggly underlines, mouse hover tooltips, AST inspector side drawer, live split preview, and multi-file tab management.**

---

## 🌐 Official Live Links

| Resource | Official URL | Description |
|---|---|---|
| 🏠 **Main Official Website** | [https://keshavsoft.github.io/monacoEditor/](https://keshavsoft.github.io/monacoEditor/) | Official project homepage & standalone editor |
| 📁 **byExtension Portal** | [https://keshavsoft.github.io/monacoEditor/byExtension/](https://keshavsoft.github.io/monacoEditor/byExtension/index.html) | Master extension selector portal hub |
| 🩵 **Version 8 (Ultimate Suite)** | [https://keshavsoft.github.io/monacoEditor/byExtension/v8/](https://keshavsoft.github.io/monacoEditor/byExtension/v8/jsFiles/index.html) | AST Inspector, Live Preview, Error Console & Multi-Tabs |
| 📊 **Online vs Monaco v8 Benchmarking** | [https://keshavsoft.github.io/monacoEditor/byExtension/online_vs_our_monaco_editor.html](https://keshavsoft.github.io/monacoEditor/byExtension/online_vs_our_monaco_editor.html) | Industry comparative analysis matrix (Playground, ASTExplorer, CodePen vs v8) |
| ⚙️ **Generic Diagnostics Analysis** | [https://keshavsoft.github.io/monacoEditor/byExtension/monaco_generic_error_analysis.html](https://keshavsoft.github.io/monacoEditor/byExtension/monaco_generic_error_analysis.html) | Language-agnostic Monaco error diagnostic specification (JS vs HTML) |
| 🌳 **Babel AST Architecture Guide** | [https://keshavsoft.github.io/monacoEditor/byExtension/babel_ast_guide.html](https://keshavsoft.github.io/monacoEditor/byExtension/babel_ast_guide.html) | Live interactive Babel AST architecture specification |
| 💜 **Version 7 (byExtension)** | [https://keshavsoft.github.io/monacoEditor/byExtension/v7/](https://keshavsoft.github.io/monacoEditor/byExtension/v7/jsFiles/index.html) | Modular `byExtension` suite with `settings.html` |
| 🔴 **Version 6 (Hover Errors)** | [https://keshavsoft.github.io/monacoEditor/v6/](https://keshavsoft.github.io/monacoEditor/v6/index.html) | Out-of-the-box JS error markers & hover tooltips |

---

## 🌟 Version Evolution Matrix

| Version | Architecture & Key Features |
|---|---|
| **v1 - v3** | Single-page Monaco Editor loading static `end-points.js` with AMD Require.js loader, custom dark theme, clipboard copy, and blob download. |
| **v4 - v5** | Introduced modular file architecture separated into `core/`, `features/`, and `samples/`. |
| **v6** | **Out-of-the-Box Error Markers & Mouse Hover Tooltips**: Integrated `@babel/standalone` CDN with `errorRecovery: true` and bound error line/column coordinates to Monaco via `monaco.editor.setModelMarkers()`. |
| **v7** | **`byExtension` Architecture & Settings Suite**: Built extension-specific subfolders (`jsFiles/`, `htmlFiles/`), dedicated `settings.html` with LocalStorage persistence, `howToUse.html` guide, and live HTML stats counter (`IDs`, `Classes`, `Tags`). |
| **v8** | **Ultimate Master Workspace**: Added **Live Split-Screen Render Preview**, **Babel AST Inspector Side Drawer**, **Clickable Error Console Drawer (Jump-to-Line)**, **Quick Presets Code Selector**, and **VS Code Multi-File Tabs with (+) New File System**. |

---

## 📂 Project Directory Structure

```text
monacoEditor/
├── index.html                       # Standalone Editor Application Entry Point
├── README.md                        # Master Project Documentation & Overview
├── dev.md                           # Developer & Contributor Architecture Guide
├── howto.md                         # End-User Operations & Shortcuts Guide
├── style.css                        # Glassmorphism Dark Layout Stylesheet
├── docs/
│   ├── online_vs_our_monaco_editor.html # Online Editors vs Monaco v8 Comparative Analysis
│   ├── monaco_generic_error_analysis.html  # Generic Diagnostic Specification (JS vs HTML)
│   ├── babel_ast_guide.html         # Babel AST Architecture Guide
│   └── byExtension/                 # GitHub Pages Live Deployment Directory
│       ├── index.html               # Main Portal Page (with Version 1 to Version 8 links)
│       ├── online_vs_our_monaco_editor.html # Live Comparative Analysis Specification
│       ├── monaco_generic_error_analysis.html  # Live Generic Diagnostic Analysis Page
│       ├── babel_ast_guide.html     # Live Babel AST Guide Page
│       ├── v7/                      # Version 7 byExtension Suite
│       └── v8/                      # Version 8 Ultimate Suite
```

---

## 🛠️ Core Technology Stack

- **Monaco Editor (v0.45.0)**: VS Code browser editing engine loaded natively via Require.js AMD CDN.
- **Babel Standalone (`@babel/standalone`)**: In-browser JavaScript AST parsing with `errorRecovery: true`.
- **Tailwind CSS**: Modern utility styling for portal pages, drawers, and settings interfaces.
- **HTML5 FileReader & Blob APIs**: 1-click file uploading and exporting.

---

## 📖 Complete Documentation Suite

- [📊 Online Editors vs Monaco v8 Benchmarking (Live Site)](https://keshavsoft.github.io/monacoEditor/byExtension/online_vs_our_monaco_editor.html) — Comparative feature matrix (Playground, ASTExplorer, CodePen vs v8).
- [⚙️ Monaco Generic Diagnostics Analysis (Live Site)](https://keshavsoft.github.io/monacoEditor/byExtension/monaco_generic_error_analysis.html) — Generic error marker analysis (JS vs HTML) & multi-language architecture.
- [🌳 Babel AST Architecture Guide (Live Site)](https://keshavsoft.github.io/monacoEditor/byExtension/babel_ast_guide.html) — Technical AST parsing, marker injection & AST Inspector architecture.
- [👨‍💻 Developer Guide (`dev.md`)](dev.md) — Technical architecture, AST marker integration & PR workflow.
- [📖 User Operations Guide (`howto.md`)](howto.md) — Keyboard shortcuts, settings guide & drawer usage.
