function createEditor({
  monaco,
  container,
  value,
  language,
  theme,
  settings
}) {
  const editor = monaco.editor.create(container, {
    value,
    language,
    theme,

    automaticLayout: true,

    fontFamily: `'${settings.fontFamily}', monospace`,
    fontSize: settings.fontSize,
    lineHeight: 22,
    tabSize: settings.tabSize,

    wordWrap: settings.wordWrap ? "on" : "off",

    lineNumbers: settings.lineNumbers ? "on" : "off",

    minimap: {
      enabled: settings.minimap
    },

    smoothScrolling: settings.smoothScrolling,

    autoClosingBrackets:
      settings.autoClosingBrackets
        ? "always"
        : "never",

    autoClosingQuotes:
      settings.autoClosingQuotes
        ? "always"
        : "never",

    formatOnPaste: settings.formatOnPaste
  });

  /*
   * V4 Find shortcut
   *
   * Ctrl/Cmd + F -> Disabled
   * Ctrl/Cmd + D -> Custom Find UI
   */

  editor.addCommand(
    monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyF,
    () => {}
  );

  editor.addCommand(
    monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyD,
    () => {
      openCustomFindWidget(editor);
    }
  );

  return editor;
}


/*
 * =========================================
 * Custom Find UI
 * =========================================
 */

function openCustomFindWidget(editor) {
  let widget =
    document.getElementById(
      "v4-custom-find-widget"
    );

  if (!widget) {
    widget =
      createCustomFindWidget(editor);
  }

  widget.classList.add("visible");

  const input =
    widget.querySelector(
      ".v4-find-input"
    );

  input.focus();
  input.select();
}


/*
 * Create the custom Find UI
 */

function createCustomFindWidget(editor) {
  const workspace =
    editor.getContainerDomNode()
      .parentElement;

  const widget =
    document.createElement("div");

  widget.id =
    "v4-custom-find-widget";

  widget.className =
    "v4-find-widget";

  widget.innerHTML = `
    <div class="v4-find-header">
      <span class="v4-find-title">
        Find
      </span>

      <button
        type="button"
        class="v4-find-close"
        aria-label="Close Find"
        title="Close"
      >
        ×
      </button>
    </div>

    <div class="v4-find-row">
      <input
        type="text"
        class="v4-find-input"
        placeholder="Find"
        autocomplete="off"
        spellcheck="false"
      />

      <button
        type="button"
        class="v4-find-button"
      >
        Find
      </button>
    </div>
  `;

  workspace.appendChild(widget);


  const input =
    widget.querySelector(
      ".v4-find-input"
    );

  const findButton =
    widget.querySelector(
      ".v4-find-button"
    );

  const closeButton =
    widget.querySelector(
      ".v4-find-close"
    );


  /*
   * Perform Find
   */

  function findText() {
    const searchText =
      input.value.trim();

    if (!searchText) {
      return;
    }

    const model =
      editor.getModel();

    if (!model) {
      return;
    }

    const matches =
      model.findMatches(
        searchText,
        false,
        false,
        false,
        null,
        false,
        1000
      );

    if (matches.length === 0) {
      return;
    }

    const currentPosition =
      editor.getPosition();

    let selectedMatch =
      matches[0];


    /*
     * Prefer the first match
     * after the current cursor position.
     */

    for (
      const match of matches
    ) {
      const start =
        match.range.getStartPosition();

      if (
        start.lineNumber >
          currentPosition.lineNumber ||
        (
          start.lineNumber ===
            currentPosition.lineNumber &&
          start.column >
            currentPosition.column
        )
      ) {
        selectedMatch = match;
        break;
      }
    }


    editor.setSelection(
      selectedMatch.range
    );

    editor.revealRangeInCenter(
      selectedMatch.range
    );

    editor.focus();
  }


  /*
   * Find button
   */

  findButton.addEventListener(
    "click",
    findText
  );


  /*
   * Enter key also performs Find
   */

  input.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Enter") {
        event.preventDefault();

        findText();
      }

      if (event.key === "Escape") {
        event.preventDefault();

        closeWidget();
      }
    }
  );


  /*
   * Close Find UI
   */

  function closeWidget() {
    widget.classList.remove(
      "visible"
    );

    editor.focus();
  }


  closeButton.addEventListener(
    "click",
    closeWidget
  );


  return widget;
}


function bindLineCounter(
  editor,
  lineCounterElement
) {
  function updateLineCounter() {
    const model =
      editor.getModel();

    if (!model) {
      lineCounterElement.textContent =
        "Lines: 0";

      return;
    }

    lineCounterElement.textContent =
      `Lines: ${model.getLineCount()}`;
  }

  updateLineCounter();

  editor.onDidChangeModelContent(
    updateLineCounter
  );
}


function bindHtmlStats(
  editor,
  statsElement
) {
  function updateHtmlStats() {
    const model =
      editor.getModel();

    if (!model) {
      statsElement.textContent =
        "IDs: 0   Classes: 0   Tags: 0";

      return;
    }

    const content =
      model.getValue();

    const parser =
      new DOMParser();

    const document =
      parser.parseFromString(
        content,
        "text/html"
      );

    const elements =
      document.querySelectorAll("*");

    const idCount =
      document.querySelectorAll(
        "[id]"
      ).length;

    const classNames =
      new Set();

    document
      .querySelectorAll(
        "[class]"
      )
      .forEach(
        (element) => {
          element.classList.forEach(
            (className) => {
              classNames.add(
                className
              );
            }
          );
        }
      );

    statsElement.textContent =
      `IDs: ${idCount}   Classes: ${classNames.size}   Tags: ${elements.length}`;
  }

  updateHtmlStats();

  editor.onDidChangeModelContent(
    updateHtmlStats
  );
}


function bindFontSizeControls(
  editor,
  decreaseButton,
  increaseButton,
  sizeElement
) {
  let fontSize =
    editor.getOption(
      monaco.editor.EditorOption.fontSize
    );

  function updateFontSize() {
    editor.updateOptions({
      fontSize
    });

    sizeElement.textContent =
      `${fontSize}px`;
  }

  decreaseButton.addEventListener(
    "click",
    () => {
      if (fontSize <= 8) {
        return;
      }

      fontSize -= 1;

      updateFontSize();
    }
  );

  increaseButton.addEventListener(
    "click",
    () => {
      if (fontSize >= 32) {
        return;
      }

      fontSize += 1;

      updateFontSize();
    }
  );

  updateFontSize();
}


window.createEditor =
  createEditor;

window.bindLineCounter =
  bindLineCounter;

window.bindHtmlStats =
  bindHtmlStats;

window.bindFontSizeControls =
  bindFontSizeControls;