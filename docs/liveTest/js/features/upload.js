function uploadJavaScriptFile({
  input,
  editor,
  editorData,
  fileNameElement,
  languageElement,
  showToast
}) {
  const [file] = input.files;

  if (!file) {
    return;
  }

  const extension = file.name.split(".").pop().toLowerCase();
  const language = extension === "html" ? "html" : "javascript";

  if (extension !== "js" && extension !== "html") {
    showToast("Please select a JavaScript (.js) or HTML (.html) file.", "error");
    input.value = "";
    return;
  }

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    const content = typeof reader.result === "string" ? reader.result : "";

    editor.setValue(content);
    window.monaco.editor.setModelLanguage(editor.getModel(), language);
    editorData.fileName = file.name;
    editorData.fileCode = content;
    editorData.language = language;
    fileNameElement.textContent = file.name;
    languageElement.textContent = language === "html" ? "HTML" : "JavaScript";
    showToast(`${file.name} loaded successfully.`);
    input.value = "";
  });

  reader.addEventListener("error", () => {
    showToast(`Unable to read ${file.name}.`, "error");
    input.value = "";
  });

  reader.readAsText(file);
}

window.uploadJavaScriptFile = uploadJavaScriptFile;
