const presets = {
  errors: `import dotenv from "dotenv";
import express from "express";
import dotenv from "dotenv";
import express from "express";

dotenv.config({ path: ".env" });

const app = express();
const app = express();
const app = express();

app.use("/api", routerFromapi);

if (process.env.OPEN_BROWSER === "true") {
    // exec("start http://localhost:3000");
}
`,
  clean: `import express from 'express';

const tablePath = "Data/doctors.json";
const router = express.Router();

router.get('/showAll', (req, res) => {
  res.json({ status: "success", data: [] });
});

export { router };
`,
  async: `import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/health', async (req, res) => {
  res.send({ status: 'ok', timestamp: Date.now() });
});

app.listen(3000, () => console.log('Server running on port 3000'));
`
};

let editor;
let currentFileName = "end-points.js";
let currentFontSize = 14;
let untitledCount = 1;

const filesBuffer = {
  "end-points.js": presets.errors,
  "app-clean.js": presets.clean
};

const VS_PATH = "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs";

function loadSavedSettings() {
  try {
    const raw = localStorage.getItem("monaco_settings");
    return raw ? JSON.parse(raw) : {};
  } catch (err) {
    return {};
  }
}

// 1. Validate Code with Babel AST Parser
function validateAndInspect(editorInstance) {
  const model = editorInstance.getModel();
  if (!model) return;

  const code = editorInstance.getValue();
  filesBuffer[currentFileName] = code;

  const markers = [];
  const errorLogs = [];
  let astData = null;

  if (window.Babel) {
    try {
      const result = window.Babel.transform(code, {
        ast: true,
        code: false,
        sourceType: "module"
      });

      astData = result.ast;

      if (result.ast?.errors && result.ast.errors.length > 0) {
        for (const err of result.ast.errors) {
          const line = err.loc?.line || 1;
          const col = err.loc?.column || 1;

          const errorMsg = `[Babel AST Error] ${err.message}`;
          markers.push({
            startLineNumber: line,
            startColumn: col,
            endLineNumber: line,
            endColumn: col + 15,
            message: errorMsg,
            severity: window.monaco.MarkerSeverity.Error
          });

          errorLogs.push({ line, col, message: err.message });
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

      errorLogs.push({ line, col, message: err.message });
    }
  }

  // Set Monaco Model Markers
  window.monaco.editor.setModelMarkers(model, "babel", markers);

  const errCountElem = document.getElementById("error-count");
  if (errCountElem) errCountElem.textContent = errorLogs.length;

  renderErrorConsole(errorLogs);
  renderASTTree(astData);
  updateLivePreview(code);
}

function renderErrorConsole(errors) {
  const consoleList = document.getElementById("console-log-list");
  if (!consoleList) return;

  if (errors.length === 0) {
    consoleList.innerHTML = `<em style="color: #34d399;">✔ No AST errors detected. Clean code!</em>`;
    return;
  }

  consoleList.innerHTML = errors.map((err, idx) => `
    <div class="error-row" data-line="${err.line}" data-col="${err.col}" style="padding: 4px 8px; border-bottom: 1px solid #21262d; cursor: pointer; display: flex; gap: 10px; align-items: center;" onmouseover="this.style.background='#21262d'" onmouseout="this.style.background='transparent'">
      <span style="color: #f87171; font-weight: bold;">[Error ${idx + 1}]</span>
      <span style="color: #38bdf8;">Line ${err.line}:${err.col}</span>
      <span style="color: #fca5a5;">${err.message}</span>
    </div>
  `).join('');

  consoleList.querySelectorAll('.error-row').forEach(row => {
    row.addEventListener('click', () => {
      const line = parseInt(row.getAttribute('data-line'), 10);
      const col = parseInt(row.getAttribute('data-col'), 10);
      if (editor && line) {
        editor.revealLineInCenter(line);
        editor.setPosition({ lineNumber: line, column: col });
        editor.focus();
      }
    });
  });
}

function renderASTTree(ast) {
  const astOutput = document.getElementById("ast-json-output");
  if (!astOutput) return;

  if (!ast || !ast.program) {
    astOutput.textContent = "Unable to generate AST due to syntax failure.";
    return;
  }

  const groupedNodes = {};
  for (const node of ast.program.body) {
    const type = node.type;
    if (!groupedNodes[type]) groupedNodes[type] = [];
    groupedNodes[type].push({
      type: node.type,
      startLine: node.loc?.start?.line,
      endLine: node.loc?.end?.line
    });
  }

  const resultObj = {
    type: ast.type,
    sourceType: ast.program.sourceType,
    totalBodyStatements: ast.program.body.length,
    groupedByNodeType: groupedNodes
  };

  astOutput.textContent = JSON.stringify(resultObj, null, 2);
}

function updateLivePreview(code) {
  const previewIframe = document.getElementById("preview-iframe");
  if (!previewIframe) return;

  const doc = previewIframe.contentDocument || previewIframe.contentWindow.document;
  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <style>body { font-family: monospace; background: #1e1e1e; color: #d4d4d4; padding: 15px; }</style>
    </head>
    <body>
      <h3>Console Output Log</h3>
      <div id="output">Running script...</div>
      <script>
        const output = document.getElementById("output");
        console.log = (...args) => {
          output.innerHTML += "<div>> " + args.join(" ") + "</div>";
        };
        try {
          ${code}
          output.innerHTML += "<div style='color:#4ec9b0;'>✔ Script Executed Successfully</div>";
        } catch(err) {
          output.innerHTML += "<div style='color:#f14c4c;'>❌ Execution Error: " + err.message + "</div>";
        }
      </script>
    </body>
    </html>
  `);
  doc.close();
}

// Switch active file tab
function switchToFile(fileName) {
  currentFileName = fileName;
  const titleElem = document.getElementById("file-title");
  if (titleElem) titleElem.textContent = currentFileName;

  if (filesBuffer[currentFileName] === undefined) {
    filesBuffer[currentFileName] = `// ${currentFileName}\n\n`;
  }

  editor.setValue(filesBuffer[currentFileName]);
  validateAndInspect(editor);

  // Update tab styles
  document.querySelectorAll(".tab-item").forEach(t => {
    if (t.getAttribute("data-file") === fileName) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });
}

function bootstrap() {
  const saved = loadSavedSettings();
  currentFontSize = saved.fontSize || 14;

  const fontDisplay = document.getElementById("font-size-val");
  if (fontDisplay) fontDisplay.textContent = `${currentFontSize}px`;

  const amdRequire = window.require;

  amdRequire.config({
    paths: {
      vs: VS_PATH
    }
  });

  amdRequire(["vs/editor/editor.main"], () => {
    if (window.monaco.languages?.typescript?.javascriptDefaults) {
      window.monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: false,
        noSyntaxValidation: false,
        diagnosticCodesToIgnore: []
      });
    }

    editor = window.monaco.editor.create(document.getElementById("editor-container"), {
      value: filesBuffer[currentFileName],
      language: "javascript",
      theme: saved.theme || "vs-dark",
      automaticLayout: true,
      fontFamily: saved.fontFamily || "'Courier New', Courier, monospace",
      fontSize: currentFontSize,
      lineHeight: 22,
      tabSize: saved.tabSize || 2,
      wordWrap: saved.wordWrap || "on",
      lineNumbers: saved.lineNumbers || "on",
      minimap: { enabled: saved.minimap !== false },
      smoothScrolling: saved.smoothScroll !== false,
      autoClosingBrackets: saved.autoBrackets !== false ? "always" : "never",
      autoClosingQuotes: saved.autoQuotes !== false ? "always" : "never",
      formatOnPaste: saved.formatOnPaste || false,
      hover: { enabled: true, delay: 200 },
      renderValidationDecorations: "on"
    });

    const updateLineCount = () => {
      document.getElementById("line-count").textContent = `Lines: ${editor.getModel()?.getLineCount() || 0}`;
    };
    updateLineCount();
    editor.onDidChangeModelContent(updateLineCount);

    validateAndInspect(editor);

    editor.onDidChangeModelContent(() => {
      validateAndInspect(editor);
    });

    // 1. Presets Selector Handler
    document.getElementById("preset-selector")?.addEventListener("change", (e) => {
      const val = e.target.value;
      if (presets[val]) {
        editor.setValue(presets[val]);
        validateAndInspect(editor);
      }
    });

    // 2. AST Drawer Handlers
    const astDrawer = document.getElementById("ast-drawer");
    document.getElementById("toggle-ast-btn")?.addEventListener("click", () => {
      astDrawer?.classList.toggle("open");
    });
    document.getElementById("close-ast-drawer")?.addEventListener("click", () => {
      astDrawer?.classList.remove("open");
    });

    // 3. Live Preview Drawer Handler
    const previewContainer = document.getElementById("preview-container");
    document.getElementById("toggle-preview-btn")?.addEventListener("click", () => {
      previewContainer?.classList.toggle("open");
      editor.layout();
    });

    // 4. Error Console Drawer Handlers
    const consoleDrawer = document.getElementById("console-drawer");
    document.getElementById("toggle-console-btn")?.addEventListener("click", () => {
      consoleDrawer?.classList.toggle("open");
    });
    document.getElementById("close-console")?.addEventListener("click", () => {
      consoleDrawer?.classList.remove("open");
    });

    // 5. Existing Tabs Click Handlers
    document.querySelectorAll(".tab-item").forEach(tab => {
      tab.addEventListener("click", () => {
        const file = tab.getAttribute("data-file");
        switchToFile(file);
      });
    });

    // 6. (+) NEW TAB CREATION HANDLER
    document.getElementById("add-tab-btn")?.addEventListener("click", () => {
      const inputName = prompt("Enter new JavaScript file name:", `untitled-${untitledCount}.js`);
      if (!inputName) return;

      const newFileName = inputName.endsWith(".js") ? inputName : `${inputName}.js`;
      untitledCount++;

      // Create new tab element
      const addBtn = document.getElementById("add-tab-btn");
      const tabDiv = document.createElement("div");
      tabDiv.className = "tab-item";
      tabDiv.setAttribute("data-file", newFileName);
      tabDiv.innerHTML = `<span>📄 ${newFileName}</span>`;

      tabDiv.addEventListener("click", () => {
        switchToFile(newFileName);
      });

      // Insert tab before (+) button
      addBtn.parentNode.insertBefore(tabDiv, addBtn);

      // Switch editor to new tab
      switchToFile(newFileName);
    });

    // 7. Font Size Controls (A- 14px A+)
    const fontDecBtn = document.getElementById("font-decrease");
    const fontIncBtn = document.getElementById("font-increase");

    fontDecBtn?.addEventListener("click", () => {
      if (currentFontSize > 10) {
        currentFontSize -= 1;
        editor.updateOptions({ fontSize: currentFontSize });
        if (fontDisplay) fontDisplay.textContent = `${currentFontSize}px`;
        saved.fontSize = currentFontSize;
        localStorage.setItem("monaco_settings", JSON.stringify(saved));
      }
    });

    fontIncBtn?.addEventListener("click", () => {
      if (currentFontSize < 24) {
        currentFontSize += 1;
        editor.updateOptions({ fontSize: currentFontSize });
        if (fontDisplay) fontDisplay.textContent = `${currentFontSize}px`;
        saved.fontSize = currentFontSize;
        localStorage.setItem("monaco_settings", JSON.stringify(saved));
      }
    });

    // 8. Upload JS File Handler
    const uploadBtn = document.getElementById("upload-button");
    const uploadInput = document.getElementById("file-upload-input");

    uploadBtn?.addEventListener("click", () => {
      uploadInput?.click();
    });

    uploadInput?.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      currentFileName = file.name;
      const titleElem = document.getElementById("file-title");
      if (titleElem) titleElem.textContent = currentFileName;

      // Add tab if not exists
      let existingTab = document.querySelector(`.tab-item[data-file="${currentFileName}"]`);
      if (!existingTab) {
        const addBtn = document.getElementById("add-tab-btn");
        const tabDiv = document.createElement("div");
        tabDiv.className = "tab-item";
        tabDiv.setAttribute("data-file", currentFileName);
        tabDiv.innerHTML = `<span>📄 ${currentFileName}</span>`;
        tabDiv.addEventListener("click", () => switchToFile(currentFileName));
        addBtn.parentNode.insertBefore(tabDiv, addBtn);
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target.result;
        filesBuffer[currentFileName] = fileContent;
        switchToFile(currentFileName);
      };
      reader.readAsText(file);
    });

    // 9. Copy & Download Handlers
    document.getElementById("copy-button")?.addEventListener("click", () => {
      navigator.clipboard.writeText(editor.getValue());
      alert("Code copied to clipboard!");
    });

    document.getElementById("download-button")?.addEventListener("click", () => {
      const blob = new Blob([editor.getValue()], { type: "text/javascript" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = currentFileName;
      a.click();
    });
  });
}

if (window.require) {
  bootstrap();
}
