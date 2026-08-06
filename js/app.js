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

function bootstrapEditorApp() {
  const editorData = window.MonacoEditorData;
  const amdRequire = window.require;
  amdRequire.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });

  amdRequire(['vs/editor/editor.main'], function () {
    const themeName = window.MonacoEditorTheme.define(window.monaco);
    const editor = window.MonacoEditorSetup.createEditor({
      monaco: window.monaco,
      container: document.getElementById('editor-container'),
      value: editorData.fileCode,
      language: editorData.language,
      theme: themeName
    });

    window.MonacoEditorSetup.bindLineCounter(editor, document.getElementById('line-count'));

    document.getElementById('copy-button').addEventListener('click', () => {
      window.MonacoEditorClipboard.copy(editor, window.MonacoEditorToast.show);
    });

    document.getElementById('download-button').addEventListener('click', () => {
      window.MonacoEditorDownload.download(editor, editorData.fileName, window.MonacoEditorToast.show);
    });
  });
}

loadScriptsInOrder(scriptSources)
  .then(bootstrapEditorApp)
  .catch(error => {
    console.error(error);
    document.getElementById('line-count').textContent = 'Failed to load editor';
  });