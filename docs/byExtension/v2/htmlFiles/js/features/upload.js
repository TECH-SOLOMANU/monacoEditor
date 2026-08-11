function uploadHTMLFile({
  input,
  editor,
  editorData,
  fileNameElement,
  showToast
}) {
  const [file] = input.files;

  if (!file) {
    return;
  }

  if (!file.name.toLowerCase().endsWith(".html")) {
    showToast("Please select an HTML (.html) file.", "error");
    input.value = "";
    return;
  }

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    const content =
      typeof reader.result === "string" ? reader.result : "";

    editor.setValue(content);

    editorData.fileName = file.name;
    editorData.fileCode = content;
    editorData.language = "html";

    fileNameElement.textContent = file.name;

    window.monaco.editor.setModelLanguage(
      editor.getModel(),
      "html"
    );

    showToast(`${file.name} loaded successfully.`);

    input.value = "";
  });

  reader.addEventListener("error", () => {
    showToast(`Unable to read ${file.name}.`, "error");
    input.value = "";
  });

  reader.readAsText(file);
}

window.uploadHTMLFile = uploadHTMLFile;