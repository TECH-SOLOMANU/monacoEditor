# 📖 User Operations Guide — How to Use Monaco Editor

> **Official Live Website**: [https://keshavsoft.github.io/monacoEditor/](https://keshavsoft.github.io/monacoEditor/)  
> **Official byExtension Portal**: [https://keshavsoft.github.io/monacoEditor/byExtension/](https://keshavsoft.github.io/monacoEditor/byExtension/index.html)

Welcome to the **Monaco Editor** User Operations Manual. This guide provides step-by-step instructions for using all features across **Version 6, Version 7, and Version 8**.

---

## 🌟 Quick Feature Navigation Guide

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        MONACO EDITOR TOOLBAR                           │
├───────────────┬───────────────────┬───────────────────┬────────────────┤
│ ⚡ Presets    │ 🌳 AST Inspector  │ 👁 Live Preview   │ A-  14px  A+   │
│ Select Sample │ Slide Side Drawer │ Split Render View │ Scale Font Size│
├───────────────┼───────────────────┼───────────────────┼────────────────┤
│ ⚙ Settings    │ 📖 Help Guide     │ ↑ Upload File     │ 📥 Download    │
│ Preferences   │ Shortcuts List    │ Load Local Code   │ Save File      │
└───────────────┴───────────────────┴───────────────────┴────────────────┘
```

---

## 1. Using Error Markers & Mouse Hover Tooltips

1. Load or type JavaScript code into the editor.
2. If syntax errors or duplicate declarations occur (e.g. `import dotenv` twice), a **Red Squiggly Underline** automatically appears under the line.
3. **Hover your mouse cursor over the red squiggly underline**:
   - An interactive **Mouse Hover Tooltip Popup Card** displays the exact error message and line number!

---

## 2. Using Version 8 Advanced Drawers & Features

### 🌳 A. Babel AST Inspector Side Drawer
- Click **`🌳 AST Inspector`** in the header.
- A sliding side panel opens on the right, displaying the live AST JSON tree (`ast.program.body`) grouped by node types (`ImportDeclaration`, `VariableDeclaration`, etc.).

### 👁 B. Live Split-Screen Render Preview
- Click **`👁 Live Preview`** in the header.
- A side-by-side execution window opens, rendering HTML markup or JavaScript console logs in real time as you edit code!

### ❌ C. Clickable Error Console Bottom Drawer
- Click **`❌ Errors: N`** in the bottom status bar.
- A collapsible bottom log table displays all active syntax/AST errors.
- **Click any error row**: The Monaco Editor cursor instantly jumps directly to that exact line and column!

### 📄 D. VS Code Multi-File Tabs & (+) New File System
- Switch between loaded files (`end-points.js`, `app-clean.js`) using the top tab bar.
- Click the **`+`** button to create a new file tab (e.g. `custom.js`) with an independent in-memory code buffer.

---

## 3. Configuring Custom Settings (`settings.html`)

Click the **`⚙ Settings`** button in the header to open the dedicated Settings page:

- **Font Size**: Adjust slider from `10px` to `24px`.
- **Font Family**: Choose between `Courier New`, `Fira Code`, or `Inter`.
- **Tab Size**: Select `2 Spaces`, `4 Spaces`, or `8 Spaces`.
- **Word Wrap**: Toggle line wrapping on or off.
- **Line Numbers**: Toggle line number display.
- **Minimap**: Show or hide the code overview minimap on the right.
- **Theme**: Switch between `Dark` (`vs-dark`), `Light` (`vs-light`), or `High Contrast` (`hc-black`).

Click **`Save Settings`** to apply changes. Your preferences are saved automatically in `localStorage` and persist across browser sessions!

---

## ⌨️ Essential Keyboard Shortcuts

| Action | Windows / Linux | macOS |
|---|---|---|
| **Find & Replace** | `Ctrl + F` | `Cmd + F` |
| **Toggle Word Wrap** | `Alt + Z` | `Option + Z` |
| **Toggle Line Comment** | `Ctrl + /` | `Cmd + /` |
| **Format Document** | `Ctrl + Shift + F` | `Cmd + Option + F` |
| **Trigger Autocomplete** | `Ctrl + Space` | `Cmd + Space` |
| **Duplicate Line Down** | `Shift + Alt + Down` | `Shift + Option + Down` |
