let editor;

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

function bootstrap() {
  const appDependencies = window.MonacoEditorApp;
  const amdRequire = window.require;
  amdRequire.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs' } });

  amdRequire(['vs/editor/editor.main'], function () {
    const themeName = window.MonacoEditorTheme.define(window.monaco);
    editor = window.MonacoEditorSetup.createEditor({
      monaco: window.monaco,
      container: document.getElementById('editor-container'),
      value: appDependencies.data.fileCode,
      language: appDependencies.data.language,
      theme: themeName
    });

    window.MonacoEditorSetup.bindLineCounter(editor, document.getElementById('line-count'));

    window.copyCode = function () {
      window.MonacoEditorClipboard.copy(editor, window.MonacoEditorToast.show);
    };

    window.downloadCode = function () {
      window.MonacoEditorDownload.download(editor, appDependencies.data.fileName, window.MonacoEditorToast.show);
    };
  });
}

loadScriptsInOrder(scriptSources)
  .then(bootstrap)
  .catch(error => {
    console.error(error);
    document.getElementById('line-count').textContent = 'Failed to load editor';
  });