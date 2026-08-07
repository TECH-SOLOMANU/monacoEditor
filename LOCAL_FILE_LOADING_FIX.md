# Local File Protocol (`file://`) Compatibility Fix

## Overview

When opening `index.html` locally via double-clicking in File Explorer (`file:///...`), browser security policies block JavaScript ES Modules (`<script type="module">` and `import`/`export` syntax). This document explains the root cause of the issue, the solution implemented, and the updated project architecture.

---

## 1. Root Cause Analysis

### The Difference Between HTTP and File Protocols

* **HTTP Server (`http://127.0.0.1:5500`)**: When served through Live Server, the browser makes standard HTTP GET requests for module dependencies. The server returns HTTP headers, allowing the browser to resolve `import` statements safely.
* **Local Disk (`file:///...`)**: When opened directly from disk, browsers assign an origin of `null`. Modern browsers enforce strict Same-Origin / CORS security policies that block ES Module loading (`<script type="module">` and `import ... from './file.js'`) over `file://` URLs.

### Browser Console Error
```text
Access to script at 'file:///C:/Users/.../js/core/editor-data.js' from origin 'null' 
has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: 
http, data, isolated-app, chrome-extension, chrome, https.
```

---

## 2. Solution Implemented

To ensure the application runs seamlessly in **both** local file mode (`file://`) and web server mode (`http://`), ES module imports were refactored into standard browser scripts attached to the global `window` object.

### Architectural Summary

1. **Global Window Scope Exposure**: Modules assign their functions and data structures directly to `window`:
   * `js/core/editor-data.js` → `window.editorData`
   * `js/core/editor-setup.js` → `window.createEditor`, `window.bindLineCounter`
   * `js/core/editor-theme.js` → `window.defineTheme`
   * `js/features/toast.js` → `window.showToast`
   * `js/features/clipboard.js` → `window.copy`
   * `js/features/download.js` → `window.download`

2. **Sequential Script Tags in HTML**: In `index.html`, `<script type="module">` was replaced with standard `<script src="...">` tags loaded in dependency order before `app.js`.

---

## 3. File Breakdown

| File | Changes Made |
| :--- | :--- |
| `index.html` | Replaced `<script type="module">` with standard `<script src="...">` tags for core and feature scripts. |
| `js/app.js` | Removed ES `import` statements and referenced `window.*` helper functions. |
| `js/core/editor-data.js` | Converted `export const editorData` to `window.editorData`. |
| `js/core/editor-setup.js` | Converted `export function` definitions to `window.createEditor` and `window.bindLineCounter`. |
| `js/core/editor-theme.js` | Converted `export function defineTheme` to `window.defineTheme`. |
| `js/features/toast.js` | Exposed `window.showToast`. |
| `js/features/clipboard.js` | Exposed `window.copy`. |
| `js/features/download.js` | Exposed `window.download`. |

> **Note**: Historical reference directories `v1/` and `v2/` were kept completely untouched.

---

## 4. How to Verify

1. **Local File Mode**: Double-click `index.html` in Windows File Explorer. The editor will initialize without CORS errors.
2. **Live Server Mode**: Right-click `index.html` in VS Code and click "Open with Live Server". The editor will continue to work as expected.
