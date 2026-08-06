import { editorData } from "./core/editor-data.js";
import { defineTheme } from "./core/editor-theme.js";
import {
  createEditor,
  bindLineCounter
} from "./core/editor-setup.js";
import { copy } from "./features/clipboard.js";
import { download } from "./features/download.js";
import { showToast } from "./features/toast.js";

let editor;

<<<<<<< HEAD
const scriptSources = [
  'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs/loader.js',
  'js/core/editor-data.js',
  'js/core/editor-theme.js',
  'js/core/editor-setup.js',
  'js/features/toast.js',
  'js/features/clipboard.js',
  'js/features/download.js'
];

function loadScript(source) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = source;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load ${source}`));
    document.head.appendChild(script);
  });
}

async function loadScriptsInOrder(sources) {
  for (const source of sources) {
    await loadScript(source);
  }
}
=======
const VS_PATH =
  "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs";
>>>>>>> 40aef2b (Refactor Monaco Editor using ES module imports)

function bootstrap() {
  const appDependencies = window.MonacoEditorApp;
  const amdRequire = window.require;

  amdRequire.config({
    paths: {
      vs: VS_PATH
    }
  });

  amdRequire(["vs/editor/editor.main"], () => {
    const themeName = defineTheme(window.monaco);

    editor = createEditor({
      monaco: window.monaco,
      container: document.getElementById("editor-container"),
      value: editorData.fileCode,
      language: editorData.language,
      theme: themeName
    });

    bindLineCounter(
      editor,
      document.getElementById("line-count")
    );

    document
      .getElementById("copy-button")
      .addEventListener("click", () => {
        copy(editor, showToast);
      });

    document
      .getElementById("download-button")
      .addEventListener("click", () => {
        download(
          editor,
          editorData.fileName,
          showToast
        );
      });
  });
}

<<<<<<< HEAD
loadScriptsInOrder(scriptSources)
  .then(bootstrap)
  .catch(error => {
    console.error(error);
    document.getElementById('line-count').textContent = 'Failed to load editor';
  });
=======
if (window.require) {
  bootstrap();
}
>>>>>>> 40aef2b (Refactor Monaco Editor using ES module imports)
