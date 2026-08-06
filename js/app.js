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

function getEditorElements() {
  return {
    editorContainer: document.getElementById('editor-container'),
    lineCounter: document.getElementById('line-count'),
    copyButton: document.getElementById('copy-button'),
    downloadButton: document.getElementById('download-button')
  };
}

function bindToolbarActions(editor, editorData, elements) {
  elements.copyButton.addEventListener('click', () => {
    window.MonacoEditorClipboard.copy(editor, window.MonacoEditorToast.show);
  });

  elements.downloadButton.addEventListener('click', () => {
    window.MonacoEditorDownload.download(editor, editorData.fileName, window.MonacoEditorToast.show);
  });
}

function bootstrapEditorApp() {
  const editorData = window.MonacoEditorData;
  const amdRequire = window.require;
  const elements = getEditorElements();

  amdRequire.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });

  amdRequire(['vs/editor/editor.main'], function () {
    const themeName = window.MonacoEditorTheme.define(window.monaco);
    const editor = window.MonacoEditorSetup.createEditor({
      monaco: window.monaco,
      container: elements.editorContainer,
      value: editorData.fileCode,
      language: editorData.language,
      theme: themeName
    });

    window.MonacoEditorSetup.bindLineCounter(editor, elements.lineCounter);
    bindToolbarActions(editor, editorData, elements);
  });
}

loadScriptsInOrder(scriptSources)
  .then(bootstrapEditorApp)
  .catch(error => {
    console.error(error);
    document.getElementById('line-count').textContent = 'Failed to load editor';
  });