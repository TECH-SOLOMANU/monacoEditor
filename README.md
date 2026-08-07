# Monaco Editor - Standalone JavaScript Code Editor

A lightweight, modern standalone web code editor built with VS Code's **Monaco Editor** engine. Features custom dark syntax highlighting, one-click code copy, file download capability, live status bar statistics, and universal execution across both local disk files (`file://`) and web servers (`http://`).

---

## ✨ Features

* 🎨 **Custom Dark Theme (`custom-dark`)**: Tailored color palette with styled keywords, strings, numbers, comments, line numbers, and custom cursor highlights.
* 📋 **One-Click Clipboard Copy**: Instantly copy editor contents to clipboard with fallback support and animated toast notifications.
* 💾 **File Download**: Download the current editor content directly as `end-points.js`.
* 📊 **Live Line Counter**: Dynamic line counter in the status bar updating automatically on editor content changes.
* ⚡ **Universal Execution**: Optimized script loading system allowing `index.html` to run seamlessly directly from Windows File Explorer (`file://`) or via HTTP local servers (e.g., Live Server).

---

## 📁 Project Structure

```text
├── index.html                  # Main UI entry point
├── style.css                   # Modern CSS layout, variables, & animations
├── README.md                   # Project documentation
├── LOCAL_FILE_LOADING_FIX.md   # Technical guide on local file protocol compatibility
└── js/
    ├── app.js                  # Main application initializer & AMD loader setup
    ├── core/
    │   ├── editor-data.js      # Initial code sample & editor metadata
    │   ├── editor-setup.js     # Monaco editor creation & line counter binding
    │   └── editor-theme.js     # Custom Monaco dark theme definition
    ├── features/
    │   ├── clipboard.js        # Copy code functionality with fallback
    │   ├── download.js         # Blob-based file downloader
    │   └── toast.js            # Animated toast notification component
    └── samples/
        └── end-points.js       # Preloaded Express.js sample code
```

---

## 🚀 Getting Started

No installation or build step is required! You can open the project in either of two ways:

### Option 1: Direct Local File (Double-Click)
Double-click `index.html` directly in your file manager. The application loads Monaco Editor from CDN and runs locally without any CORS errors.

### Option 2: Live Server / HTTP Web Server
Right-click `index.html` in VS Code and select **Open with Live Server**, or serve the folder using any HTTP server:
```bash
# Example using npx serve
npx serve .
```

---

## 🛠️ Built With

* [Monaco Editor](https://microsoft.github.io/monaco-editor/) (`v0.45.0`) — Browser-based code editor engine.
* [Google Fonts](https://fonts.google.com/) — Inter & Outfit typography.
* Vanilla HTML5, CSS3, & JavaScript (ES6+).
