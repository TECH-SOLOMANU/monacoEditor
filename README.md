<div align="center">

  <h1>⚡ Monaco Editor — Standalone Web Code Editor</h1>
  <p><b>A lightweight, ultra-fast web-based code editor built on VS Code's Monaco Editor engine.</b></p>

  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JS" />
    <img src="https://img.shields.io/badge/Monaco_Editor-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" alt="Monaco" />
    <img src="https://img.shields.io/badge/Compatibility-Universal_file%3A%2F%2F_%26_http%3A%2F%2F-success?style=for-the-badge" alt="Compatibility" />
  </p>

  <p>
    <a href="https://keshavsoft.github.io/monacoEditor/" target="_blank">
      <img src="https://img.shields.io/badge/🚀%20Try%20Live%20Demo-GitHub%20Pages-blue?style=for-the-badge" alt="Live Demo" />
    </a>
  </p>

</div>

---

## 📖 The Project Story & Overview

The **Monaco Editor Standalone Application** is designed to provide developers with a ready-to-use, zero-config web code editor directly in the browser. It features a custom-built dark UI theme, l[...]

---

## ✨ Features & Visual Highlights

<table width="100%">
  <tr>
    <td width="50%" valign="top">
      <h3>🎨 Custom Dark Theme</h3>
      <p>Custom tokenized syntax highlighting (<code>custom-dark</code>) with HSL dark mode background, active line highlights, custom cursor colors, and italicized comments.</p>
    </td>
    <td width="50%" valign="top">
      <h3>📋 Copy & Download</h3>
      <p>One-click clipboard copy with browser fallback mechanism, paired with direct Blob-based file downloading to export <code>end-points.js</code> instantly.</p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>📊 Live Line Counter</h3>
      <p>Real-time line counter integrated into the application statusbar, updating dynamically as lines are edited or deleted.</p>
    </td>
    <td width="50%" valign="top">
      <h3>⚡ Universal Dual Protocol</h3>
      <p>Runs seamlessly via <b>File Explorer double-click</b> (<code>file://</code>) and <b>Live Server</b> (<code>http://</code>) with zero CORS issues.</p>
    </td>
  </tr>
</table>

---

## 📂 Project Architecture

```text
├── index.html                  # Main HTML structure & script execution sequence
├── style.css                   # Glassmorphism dark layout & CSS variables
├── README.md                   # Visual project documentation
├── LOCAL_FILE_LOADING_FIX.md   # Technical deep-dive on file:// protocol fix
└── js/
    ├── app.js                  # Application entry point & AMD loader setup
    ├── core/
    │   ├── editor-data.js      # Sample source code & language metadata
    │   ├── editor-setup.js     # Monaco initialization & statusbar binding
    │   └── editor-theme.js     # Monaco custom-dark theme definition
    ├── features/
    │   ├── clipboard.js        # Copy-to-clipboard handler with fallback
    │   ├── download.js         # Blob exporter
    │   └── toast.js            # Animated toast notification manager
    └── samples/
        └── end-points.js       # Preloaded Express.js sample code
```

---

## 🚀 Getting Started Guide

<details open>
  <summary><b>Method 1: Direct File Explorer Launch (file://)</b></summary>
  <br />
  <ol>
    <li>Navigate to the project root folder.</li>
    <li>Double-click <code>index.html</code> in Windows File Explorer or macOS Finder.</li>
    <li>The editor opens directly in your default browser without needing any local server!</li>
  </ol>
</details>

<details>
  <summary><b>Method 2: Live Server / Local Web Server (http://)</b></summary>
  <br />
  <ol>
    <li>Open the project directory in VS Code.</li>
    <li>Right-click <code>index.html</code> and select <b>Open with Live Server</b>.</li>
    <li>Alternatively, run a static server from terminal:
      <pre><code>npx serve .</code></pre>
    </li>
  </ol>
</details>

---

## 📜 Technical Fix Story: Local File Protocol (`file://`)

<details>
  <summary><b>Click to read the CORS & Script Architecture Story</b></summary>
  <br />
  <h4>The Problem</h4>
  <p>Modern browsers block ES JavaScript modules (<code>&lt;script type="module"&gt;</code> and <code>import/export</code>) on local <code>file://</code> URLs due to strict Same-Origin / CORS res[...]
  
  <h4>The Resolution</h4>
  <p>To eliminate CORS restrictions while keeping modularity:</p>
  <ul>
    <li>Script files assign their exported modules to the <code>window</code> scope (e.g., <code>window.createEditor</code>, <code>window.editorData</code>).</li>
    <li>HTML script tags in <code>index.html</code> load core and feature scripts in ordered sequence before <code>app.js</code>.</li>
  </ul>
  <p>See <a href="LOCAL_FILE_LOADING_FIX.md">LOCAL_FILE_LOADING_FIX.md</a> for full technical details.</p>
</details>

---

<div align="center">
  <hr />
  <p>Built with ❤️ using <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript</b>, and <b>Monaco Editor CDN</b>.</p>
</div>
