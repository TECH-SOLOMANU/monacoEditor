# ⚡ Monaco Editor — Standalone Web Code Editor Platform

> **Production-grade web code editor suite powered by VS Code's Monaco Engine, live `@babel/standalone` AST parse error markers, red squiggly underlines, mouse hover tooltips, AST inspector side drawer, live split preview, and multi-file tab management.**

---

## 🌐 Official Live Links

| Resource | Official URL | Description |
|---|---|---|
| 🏠 **Main Official Website** | [https://keshavsoft.github.io/monacoEditor/](https://keshavsoft.github.io/monacoEditor/) | Official project homepage & standalone editor |
| 📁 **byExtension Portal** | [https://keshavsoft.github.io/monacoEditor/byExtension/](https://keshavsoft.github.io/monacoEditor/byExtension/index.html) | Master extension selector portal hub |
| 🩵 **Version 8 (Ultimate Suite)** | [https://keshavsoft.github.io/monacoEditor/byExtension/v8/](https://keshavsoft.github.io/monacoEditor/byExtension/v8/jsFiles/index.html) | AST Inspector, Live Preview, Error Console & Multi-Tabs |
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
│   └── byExtension/                 # GitHub Pages Live Deployment Directory
│       ├── index.html               # Main Portal Page (with Version 1 to Version 8 links)
│       ├── v7/                      # Version 7 byExtension Suite
│       │   ├── jsFiles/             # JS Editor, settings.html, howToUse.html
│       │   └── htmlFiles/           # HTML Editor, settings.html, howToUse.html
│       └── v8/                      # Version 8 Ultimate Suite
│           ├── jsFiles/             # Ultimate JS Editor (AST Inspector, Preview, Console)
│           └── htmlFiles/           # Ultimate HTML Editor (Split Preview & Live Stats)
```

---

## 🛠️ Core Technology Stack

- **Monaco Editor (v0.45.0)**: VS Code browser editing engine loaded natively via Require.js AMD CDN.
- **Babel Standalone (`@babel/standalone`)**: In-browser JavaScript AST parsing with `errorRecovery: true`.
- **Tailwind CSS**: Modern utility styling for portal pages, drawers, and settings interfaces.
- **HTML5 FileReader & Blob APIs**: 1-click file uploading and exporting.

---

## 📖 Complete Documentation Suite

- [👨‍💻 Developer Guide (`dev.md`)](dev.md) — Technical architecture, AST marker integration & PR workflow.
- [📖 User Operations Guide (`howto.md`)](howto.md) — Keyboard shortcuts, settings guide & drawer usage.
