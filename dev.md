# 👨‍💻 Developer Guide — Monaco Editor Architecture & Contributor Manual

> **Official Live Website**: [https://keshavsoft.github.io/monacoEditor/](https://keshavsoft.github.io/monacoEditor/)  
> **Official byExtension Portal**: [https://keshavsoft.github.io/monacoEditor/byExtension/](https://keshavsoft.github.io/monacoEditor/byExtension/index.html)

---

## 1. System Architecture & Component Design

Monaco Editor is engineered as a zero-build, modular client-side application running natively in the browser via AMD Require.js CDN loading.

```text
               ┌──────────────────────────────────────────────┐
               │              HTML / User Input               │
               └──────────────────────┬───────────────────────┘
                                      │
                                      ▼
               ┌──────────────────────────────────────────────┐
               │     Monaco Editor Engine (v0.45.0 AMD)       │
               └──────────────────────┬───────────────────────┘
                                      │
                                      ▼
         ┌──────────────────────────────────────────────────────────┐
         │             Live Keystroke Validation Hook               │
         └──────────┬────────────────────────────────────┬──────────┘
                    │                                    │
                    ▼                                    ▼
┌──────────────────────────────────────┐ ┌──────────────────────────────────────┐
│       @babel/standalone Parser       │ │       Regex HTML Stats Parser        │
│   (errorRecovery: true AST Scope)    │ │   (IDs, Classes & Tags Counting)     │
└───────────────────┬──────────────────┘ └──────────────────┬───────────────────┘
                    │                                       │
                    ▼                                       ▼
┌──────────────────────────────────────┐ ┌──────────────────────────────────────┐
│  monaco.editor.setModelMarkers()     │ │      Footer Statusbar UI Update      │
│ (Red Squigglies & Hover Tooltips)    │ │    (IDs: X  Classes: Y  Tags: Z)    │
└──────────────────────────────────────┘ └──────────────────────────────────────┘
```

---

## 2. Core Technical Implementations

### A. Babel AST Error Marker Integration (`setModelMarkers`)

To feed custom Babel parse and scope errors into Monaco Editor's diagnostic layer:

```javascript
function validateWithBabel(editorInstance) {
  const model = editorInstance.getModel();
  if (!model) return;

  const code = editorInstance.getValue();
  const markers = [];

  if (window.Babel) {
    try {
      const result = window.Babel.transform(code, {
        ast: true,
        code: false,
        sourceType: "module"
      });

      if (result.ast?.errors && result.ast.errors.length > 0) {
        for (const err of result.ast.errors) {
          const line = err.loc?.line || 1;
          const col = err.loc?.column || 1;

          markers.push({
            startLineNumber: line,
            startColumn: col,
            endLineNumber: line,
            endColumn: col + 15,
            message: `[Babel AST Error] ${err.message}`,
            severity: window.monaco.MarkerSeverity.Error
          });
        }
      }
    } catch (err) {
      const line = err.loc?.line || 1;
      const col = err.loc?.column || 1;

      markers.push({
        startLineNumber: line,
        startColumn: col,
        endLineNumber: line,
        endColumn: col + 15,
        message: `[Babel Parse Error] ${err.message}`,
        severity: window.monaco.MarkerSeverity.Error
      });
    }
  }

  // Set markers to render Monaco red squiggly lines & mouse hover error tooltips
  window.monaco.editor.setModelMarkers(model, "babel", markers);
}
```

### B. LocalStorage Settings Synchronization

Preferences set in `settings.html` are persisted under the `monaco_settings` key:

```javascript
function loadSavedSettings() {
  try {
    const raw = localStorage.getItem("monaco_settings");
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    return {};
  }
}

// Pass saved options directly to monaco.editor.create()
const saved = loadSavedSettings();
editor = window.monaco.editor.create(container, {
  value: fileCode,
  language: "javascript",
  theme: saved.theme || "vs-dark",
  fontSize: saved.fontSize || 14,
  fontFamily: saved.fontFamily || "'Courier New', Courier, monospace",
  tabSize: saved.tabSize || 2,
  wordWrap: saved.wordWrap || "on",
  lineNumbers: saved.lineNumbers || "on",
  minimap: { enabled: saved.minimap !== false }
});
```

### C. Multi-File Tab Management & Jump-To-Line Error Console

In Version 8 (`v8/`), file contents are maintained in an in-memory `filesBuffer` object:

```javascript
const filesBuffer = {
  "end-points.js": "// code...",
  "app-clean.js": "// code..."
};

function switchToFile(fileName) {
  currentFileName = fileName;
  editor.setValue(filesBuffer[currentFileName]);
  validateWithBabel(editor);
}
```

When an error row in the bottom Error Console is clicked:

```javascript
editor.revealLineInCenter(line);
editor.setPosition({ lineNumber: line, column: col });
editor.focus();
```

---

## 3. GitHub Pages Deployment Architecture

**IMPORTANT**: GitHub Pages for this repository publishes from the **`docs/byExtension/`** directory.

When contributing new version features:
1. Place new version folders under `docs/byExtension/vX/` (e.g. `docs/byExtension/v7/`, `docs/byExtension/v8/`).
2. Update the `All Versions` section in `docs/byExtension/index.html`.
3. Commit and submit a Pull Request to `keshavsoft/monacoEditor`.

---

## 4. Local Development & Testing

Start a local HTTP server inside the repository root:

```bash
# Start server on port 3005
python -m http.server 3005
```

Open in browser:
- Main Website: `http://localhost:3005/index.html`
- Main Portal: `http://localhost:3005/docs/byExtension/index.html`
- Version 8 JS Editor: `http://localhost:3005/docs/byExtension/v8/jsFiles/index.html`
