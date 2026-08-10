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

  reader.addEventListener("load", async () => {
    const content = typeof reader.result === "string" ? reader.result : "";

    editor.setValue(content);
    window.monaco.editor.setModelLanguage(editor.getModel(), language);
    editorData.fileName = file.name;
    editorData.fileCode = content;
    editorData.language = language;
    fileNameElement.textContent = file.name;
    languageElement.textContent = language === "html" ? "HTML" : "JavaScript";
    input.value = "";

    try {
      const response = await fetch("/api/uploads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: file.name, content })
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error);
      }

      showToast(`${file.name} saved to ${result.filePath}.`);
    } catch {
      showToast("File loaded in the editor. Run node server.js to save uploads.", "error");
    }
  });

  reader.addEventListener("error", () => {
    showToast(`Unable to read ${file.name}.`, "error");
    input.value = "";
  });

  reader.readAsText(file);
}

window.uploadJavaScriptFile = uploadJavaScriptFile;
