let editor;


const VS_PATH =
  "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs";


function getEditorSettings() {

  const defaultSettings = {
    fontSize: 14,
    fontFamily: "Courier New",
    tabSize: 2,
    wordWrap: true,
    lineNumbers: true,
    minimap: false,
    theme: "dark",
    smoothScrolling: true,
    autoClosingBrackets: true,
    autoClosingQuotes: true,
    formatOnPaste: false
  };


  const savedSettings =
    localStorage.getItem(
      "monaco-editor-settings"
    );


  if (!savedSettings) {
    return defaultSettings;
  }


  try {

    return {
      ...defaultSettings,
      ...JSON.parse(savedSettings)
    };

  } catch (error) {

    return defaultSettings;

  }
}


function bootstrap() {

  const amdRequire =
    window.require;


  amdRequire.config({
    paths: {
      vs: VS_PATH
    }
  });


  amdRequire(
    ["vs/editor/editor.main"],
    () => {

      const themeName =
        window.defineTheme(
          window.monaco
        );


      const editorSettings =
        getEditorSettings();


      editor =
        window.createEditor({

          monaco: window.monaco,

          container:
            document.getElementById(
              "editor-container"
            ),

          value:
            window.editorData.fileCode,

          language:
            window.editorData.language,

          theme:
            themeName,

          settings:
            editorSettings

        });


      window.bindLineCounter(
        editor,
        document.getElementById(
          "line-count"
        )
      );


      const statusbar =
        document.querySelector(
          ".statusbar-item:last-child"
        );


      const htmlStats =
        document.createElement(
          "span"
        );


      htmlStats.id =
        "html-stats";


      htmlStats.textContent =
        "IDs: 0   Classes: 0   Tags: 0";


      statusbar.insertBefore(
        htmlStats,
        statusbar.firstChild
      );


      window.bindHtmlStats(
        editor,
        htmlStats
      );


      const actions =
        document.querySelector(
          ".actions"
        );


      const fontControls =
        document.createElement(
          "div"
        );


      fontControls.className =
        "font-size-controls";


      fontControls.innerHTML = `
        <button
          id="font-decrease"
          class="font-size-button"
          type="button"
          title="Decrease font size">
          A−
        </button>

        <span
          id="font-size-value"
          class="font-size-value">
          ${editorSettings.fontSize}px
        </span>

        <button
          id="font-increase"
          class="font-size-button"
          type="button"
          title="Increase font size">
          A+
        </button>
      `;


      actions.insertBefore(
        fontControls,
        actions.firstChild
      );


      window.bindFontSizeControls(
        editor,

        document.getElementById(
          "font-decrease"
        ),

        document.getElementById(
          "font-increase"
        ),

        document.getElementById(
          "font-size-value"
        )
      );


      document
        .getElementById("copy-button")
        .addEventListener(
          "click",
          () => {

            window.copy(
              editor,
              window.showToast
            );

          }
        );


      document
        .getElementById("download-button")
        .addEventListener(
          "click",
          () => {

            window.download(
              editor,
              window.editorData.fileName,
              window.showToast
            );

          }
        );


      const uploadButton =
        document.getElementById(
          "upload-button"
        );


      const fileUploadInput =
        document.getElementById(
          "file-upload-input"
        );


      uploadButton.addEventListener(
        "click",
        () => {

          fileUploadInput.click();

        }
      );


      fileUploadInput.addEventListener(
        "change",
        () => {

          window.uploadHTMLFile({

            input:
              fileUploadInput,

            editor,

            editorData:
              window.editorData,

            fileNameElement:
              document.getElementById(
                "file-name"
              ),

            showToast:
              window.showToast

          });

        }
      );

    }
  );
}


if (window.require) {
  bootstrap();
}