/**
 * AI-Driven Monaco Architecture Documentation Platform - Application Logic
 * Handles client-side hash routing, search indexing, Mermaid diagram rendering,
 * interactive modals, copy-to-clipboard code blocks, and UI state updates.
 */

(function () {
  let activeSectionId = "introduction";

  /**
   * Initialize Platform Application
   */
  function init() {
    setupMermaid();
    buildSidebar();
    bindEvents();
    handleHashChange();
    setupSearch();
  }

  /**
   * Configure Mermaid.js Diagram Engine
   */
  function setupMermaid() {
    if (window.mermaid) {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          darkMode: true,
          background: "#0e1422",
          primaryColor: "#1e293b",
          primaryTextColor: "#f8fafc",
          primaryBorderColor: "#3b82f6",
          lineColor: "#60a5fa",
          secondaryColor: "#111726",
          tertiaryColor: "#0b0f17"
        },
        fontFamily: "Inter, sans-serif"
      });
    }
  }

  /**
   * Build Sidebar Navigation Tree from DOCS_DATA
   */
  function buildSidebar() {
    const sidebarContainer = document.getElementById("sidebar-menu");
    if (!sidebarContainer || !window.DOCS_DATA) return;

    sidebarContainer.innerHTML = "";

    window.DOCS_DATA.forEach((doc) => {
      const li = document.createElement("li");
      li.className = "sidebar-item";

      const a = document.createElement("a");
      a.className = `sidebar-link ${doc.id === activeSectionId ? "active" : ""}`;
      a.href = `#${doc.id}`;
      a.setAttribute("data-section-id", doc.id);

      a.innerHTML = `
        <span class="sidebar-link-num">${doc.number}</span>
        <span>${escapeHTML(doc.title.replace(/^\d+\.\s*/, ""))}</span>
      `;

      li.appendChild(a);
      sidebarContainer.appendChild(li);
    });
  }

  /**
   * Bind DOM Event Listeners
   */
  function bindEvents() {
    window.addEventListener("hashchange", handleHashChange);

    // Mobile menu toggle
    const mobileToggleBtn = document.getElementById("mobile-toggle");
    const sidebar = document.getElementById("doc-sidebar");
    if (mobileToggleBtn && sidebar) {
      mobileToggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("mobile-open");
      });
    }

    // Modal inspection controls
    const inspectBtn = document.getElementById("inspect-code-btn");
    const modalOverlay = document.getElementById("code-modal");
    const modalCloseBtn = document.getElementById("modal-close-btn");

    if (inspectBtn && modalOverlay) {
      inspectBtn.addEventListener("click", () => {
        modalOverlay.classList.add("active");
        initModalMonaco();
      });
    }

    if (modalCloseBtn && modalOverlay) {
      modalCloseBtn.addEventListener("click", () => {
        modalOverlay.classList.remove("active");
      });
    }

    if (modalOverlay) {
      modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) {
          modalOverlay.classList.remove("active");
        }
      });
    }
  }

  /**
   * Handle Hash Route Changes (#introduction, #problem-statement, etc.)
   */
  function handleHashChange() {
    const hash = window.location.hash.replace("#", "").trim();
    const doc = window.DOCS_DATA.find((d) => d.id === hash);

    if (doc) {
      activeSectionId = doc.id;
    } else {
      activeSectionId = "introduction";
    }

    renderSection(activeSectionId);
    updateSidebarState(activeSectionId);
    updateBreadcrumbs(activeSectionId);
    window.scrollTo(0, 0);

    // Close mobile sidebar on navigate
    const sidebar = document.getElementById("doc-sidebar");
    if (sidebar) sidebar.classList.remove("mobile-open");
  }

  /**
   * Render Section Content into Main Container
   */
  function renderSection(sectionId) {
    const container = document.getElementById("doc-content-container");
    const doc = window.DOCS_DATA.find((d) => d.id === sectionId);

    if (!container || !doc) return;

    // Build Prev / Next Navigation
    const currentIndex = window.DOCS_DATA.findIndex((d) => d.id === sectionId);
    const prevDoc = currentIndex > 0 ? window.DOCS_DATA[currentIndex - 1] : null;
    const nextDoc = currentIndex < window.DOCS_DATA.length - 1 ? window.DOCS_DATA[currentIndex + 1] : null;

    let navFooterHTML = "";
    if (sectionId !== "conclusion") {
      navFooterHTML = `
        <div class="page-nav-footer">
          ${
            prevDoc
              ? `<a href="#${prevDoc.id}" class="nav-card">
                  <span class="nav-card-dir">Previous Section</span>
                  <span class="nav-card-title">← ${escapeHTML(prevDoc.title)}</span>
                 </a>`
              : `<div class="nav-card" style="visibility:hidden"></div>`
          }
          ${
            nextDoc
              ? `<a href="#${nextDoc.id}" class="nav-card nav-card-next">
                  <span class="nav-card-dir">Next Section</span>
                  <span class="nav-card-title">${escapeHTML(nextDoc.title)} →</span>
                 </a>`
              : `<div class="nav-card nav-card-next" style="visibility:hidden"></div>`
          }
        </div>
      `;
    }

    container.innerHTML = `
      <div class="doc-section active">
        <div class="page-header">
          <span class="page-badge">${doc.badge}</span>
          <h1 class="page-title">${escapeHTML(doc.title)}</h1>
          <p class="page-subtitle">${escapeHTML(doc.subtitle)}</p>
        </div>
        
        <div class="doc-body">
          ${doc.content}
        </div>

        ${navFooterHTML}
      </div>
    `;

    // Render Mermaid diagrams in newly injected DOM
    if (window.mermaid) {
      setTimeout(() => {
        try {
          window.mermaid.run({
            querySelector: ".mermaid"
          });
        } catch (e) {
          console.warn("Mermaid rendering warning:", e);
        }
      }, 50);
    }

    // Attach copy button listeners to pre code blocks
    attachCopyButtons();
    // Attach accordion toggles
    attachAccordionToggles();
  }

  /**
   * Attach Copy Buttons to Code Blocks
   */
  function attachCopyButtons() {
    const preBlocks = document.querySelectorAll("pre:not(.mermaid)");
    preBlocks.forEach((pre) => {
      if (pre.querySelector(".code-copy-btn")) return;

      const btn = document.createElement("button");
      btn.className = "code-copy-btn";
      btn.textContent = "Copy";

      btn.addEventListener("click", () => {
        const code = pre.querySelector("code") ? pre.querySelector("code").innerText : pre.innerText;
        navigator.clipboard.writeText(code).then(() => {
          btn.textContent = "Copied!";
          setTimeout(() => (btn.textContent = "Copy"), 2000);
        });
      });

      pre.appendChild(btn);
    });
  }

  /**
   * Attach Expandable Accordion Toggles
   */
  function attachAccordionToggles() {
    const accordions = document.querySelectorAll(".accordion-header");
    accordions.forEach((header) => {
      header.addEventListener("click", () => {
        const parent = header.parentElement;
        parent.classList.toggle("open");
      });
    });
  }

  /**
   * Update Sidebar Active Link Highlight
   */
  function updateSidebarState(sectionId) {
    const links = document.querySelectorAll(".sidebar-link");
    links.forEach((link) => {
      if (link.getAttribute("data-section-id") === sectionId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  /**
   * Update Breadcrumb Indicator
   */
  function updateBreadcrumbs(sectionId) {
    const breadcrumbCurrent = document.getElementById("breadcrumb-current");
    const doc = window.DOCS_DATA.find((d) => d.id === sectionId);

    if (breadcrumbCurrent && doc) {
      breadcrumbCurrent.textContent = doc.title;
    }
  }

  /**
   * Setup Live Search Indexing
   */
  function setupSearch() {
    const searchInput = document.getElementById("search-input");
    if (!searchInput) return;

    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        buildSidebar();
        return;
      }

      const sidebarContainer = document.getElementById("sidebar-menu");
      if (!sidebarContainer) return;

      sidebarContainer.innerHTML = "";

      const matches = window.DOCS_DATA.filter((doc) => {
        return (
          doc.title.toLowerCase().includes(query) ||
          doc.subtitle.toLowerCase().includes(query) ||
          doc.content.toLowerCase().includes(query)
        );
      });

      if (matches.length === 0) {
        sidebarContainer.innerHTML = `<li style="padding:0.75rem; font-size:0.8rem; color:var(--text-muted);">No matching sections found</li>`;
        return;
      }

      matches.forEach((doc) => {
        const li = document.createElement("li");
        li.className = "sidebar-item";

        const a = document.createElement("a");
        a.className = `sidebar-link ${doc.id === activeSectionId ? "active" : ""}`;
        a.href = `#${doc.id}`;
        a.setAttribute("data-section-id", doc.id);

        a.innerHTML = `
          <span class="sidebar-link-num">${doc.number}</span>
          <span>${escapeHTML(doc.title.replace(/^\d+\.\s*/, ""))}</span>
        `;

        li.appendChild(a);
        sidebarContainer.appendChild(li);
      });
    });
  }

  /**
   * Initialize Live Code Inspector Modal with Monaco Editor instance
   */

  let modalEditorInstance = null;

  function initModalMonaco() {
    const container = document.getElementById("modal-editor-container");
    if (!container) return;

    if (modalEditorInstance) {
      return;
    }

    if (window.monaco) {
      modalEditorInstance = window.monaco.editor.create(container, {
        value: `// Live Prototype Inspection: app.js
let editor;

const VS_PATH = "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.45.0/min/vs";

function bootstrap() {
  const amdRequire = window.require;

  amdRequire.config({
    paths: { vs: VS_PATH }
  });

  amdRequire(["vs/editor/editor.main"], () => {
    const themeName = window.defineTheme(window.monaco);

    editor = window.createEditor({
      monaco: window.monaco,
      container: document.getElementById("editor-container"),
      value: window.editorData.fileCode,
      language: window.editorData.language,
      theme: themeName
    });

    window.bindLineCounter(editor, document.getElementById("line-count"));
  });
}

if (window.require) {
  bootstrap();
}`,
        language: "javascript",
        theme: "vs-dark",
        automaticLayout: true,
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: 13,
        minimap: { enabled: false }
      });
    }
  }

  /**
   * Helper: Escape HTML
   */
  function escapeHTML(text) {
    if (typeof text !== "string") return text;
    return text.replace(/[&<>'"]/g, (char) => {
      const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" };
      return map[char];
    });
  }

  // Initialize on DOM Ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
