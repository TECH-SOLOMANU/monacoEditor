window.MonacoEditorDownload = {
  download(editor, fileName, showToast) {
    if (!editor) return;

    const blob = new Blob([editor.getValue()], { type: 'text/javascript' });
    const element = document.createElement('a');
    element.href = URL.createObjectURL(blob);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    showToast(`Downloading ${fileName}...`);
  }
};