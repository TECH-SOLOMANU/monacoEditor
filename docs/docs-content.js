/**
 * AI-Driven Monaco Editor Architecture - Exhaustive Content Store
 * Contains high-level engineering specifications, design rationale, research analysis,
 * Mermaid diagram schemas, component blueprints, and roadmap data.
 */

window.DOCS_DATA = [
  /* ==========================================================================
     1. INTRODUCTION
     ========================================================================== */
  {
    id: "introduction",
    number: "01",
    title: "1. Introduction & Engineering Philosophy",
    subtitle: "Re-imagining the software development platform around Artificial Intelligence as the primary interaction model.",
    badge: "VISION & ARCHITECTURE",
    content: `
      <h2>Executive Overview</h2>
      <p>
        The software engineering landscape is at a critical inflection point. For over four decades, Integrated Development Environments (IDEs) have evolved incrementally around a single core assumption: <strong>the human developer is the primary typist and manual navigator of code</strong>. From early terminal text editors to modern environments like VS Code, JetBrains, and Sublime Text, the primary interface design has focused on line-by-line file mutation, panel arrangement, directory trees, and keyboard shortcuts.
      </p>
      <p>
        This project rejects that incremental evolution. <strong>This project is NOT another VS Code clone.</strong>
      </p>
      <p>
        Instead, it represents the architectural blueprint for an <strong>AI-First Browser-Native Engineering Platform</strong>. In this platform, the Monaco Editor engine is detached from legacy desktop assumptions and repurposed purely as a high-performance <em>visualization, inspection, and verification pane</em>. Artificial Intelligence becomes the core orchestrator, structural planner, and primary software editor between developer intent and codebase transformation.
      </p>

      <div class="callout callout-important">
        <div class="callout-title">Core Vision Statement</div>
        <p>
          Developers should operate at the level of architectural intent, domain boundaries, state invariants, and system contracts. The machine—backed by structured LLM agents, local AST parsers, and project context graphs—should handle file navigation, dependency tracking, multi-file edits, syntactic verification, and continuous refactoring.
        </p>
      </div>

      <h2>Primary Objectives</h2>
      <div class="card-grid">
        <div class="doc-card">
          <div class="doc-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
          </div>
          <div class="doc-card-title">Minimize Cognitive Friction</div>
          <div class="doc-card-text">Eliminate manual tab-switching, regex file searches, and manual line-by-line refactoring across multi-folder codebases.</div>
        </div>
        <div class="doc-card">
          <div class="doc-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div class="doc-card-title">Zero-Install Browser Engine</div>
          <div class="doc-card-text">Deliver instant startup, universal compatibility, zero-config CORS support, and cross-platform execution via modern Web APIs.</div>
        </div>
        <div class="doc-card">
          <div class="doc-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          </div>
          <div class="doc-card-title">AI as Primary Interface</div>
          <div class="doc-card-text">Shift from keystroke-driven editor inputs to structured dialogue, automated execution planning, and live file diff streaming.</div>
        </div>
      </div>

      <h2>Target Audience & Target Ecosystems</h2>
      <p>This architectural proposal targets:</p>
      <ul>
        <li><strong>Principal Software Architects & Staff Engineers</strong> evaluating the transition from legacy local IDEs to cloud/browser agentic platforms.</li>
        <li><strong>AI Systems Engineers</strong> building agentic code generation workflows, context indexing engines, and automated diff patchers.</li>
        <li><strong>Developer Experience (DX) Teams</strong> at enterprise platforms (e.g., Stripe, AWS, Vercel, Google) looking to embed intelligent code editing runtimes into cloud consoles.</li>
      </ul>

      <h2>Engineering Philosophy Matrix</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Dimension</th>
              <th>Traditional IDE Paradigm</th>
              <th>AI-First Platform Paradigm (This Project)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Primary Interface</strong></td>
              <td>Keyboard typist, manual cursor manipulation, file trees</td>
              <td>Natural language intent, system contracts, AI dialogue</td>
            </tr>
            <tr>
              <td><strong>Code Editor Role</strong></td>
              <td>Central workstation container where all work happens</td>
              <td>Monaco Editor rendering engine for inspection and visual diff approval</td>
            </tr>
            <tr>
              <td><strong>Context Resolution</strong></td>
              <td>Developer opens 15 tabs and holds graph in human memory</td>
              <td>Autonomous Context Engine (AST parsing, RAG, dependency graphs)</td>
            </tr>
            <tr>
              <td><strong>Multi-File Editing</strong></td>
              <td>Manual sequential edits file by file</td>
              <td>Parallel atomic diff generation across project VFS</td>
            </tr>
            <tr>
              <td><strong>Runtime Environment</strong></td>
              <td>Heavy local process (Node/Electron/C++ desktop app)</td>
              <td>Browser sandboxed runtime (WebAssembly, OPFS, WebContainers)</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  /* ==========================================================================
     2. PROBLEM STATEMENT
     ========================================================================== */
  {
    id: "problem-statement",
    number: "02",
    title: "2. Problem Statement & Industry Bottlenecks",
    subtitle: "Analyzing why current software development workflows bottleneck human engineering throughput.",
    badge: "WORKFLOW ANALYSIS",
    content: `
      <h2>The Crisis of Modern Software Complexity</h2>
      <p>
        Modern software development suffers from an exponential growth in cognitive overhead. While frameworks, cloud tools, and package managers have boosted ecosystem power, they have simultaneously expanded the surface area of boilerplate, configuration, and architectural fragmentation.
      </p>

      <h2>Core Developer Pain Points</h2>
      <div class="card-grid">
        <div class="doc-card">
          <div class="doc-card-title">1. Constant Context Switching</div>
          <div class="doc-card-text">
            Engineers spend up to 40% of their daily bandwidth jumping between file trees, tracking import aliases, searching symbol definitions, reading API documentation, and cross-referencing schema declarations.
          </div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">2. Repetitive Mechanical Editing</div>
          <div class="doc-card-text">
            Adding a single backend endpoint requires editing an Express route, updating a schema validator, adding a controller function, creating a database query, writing a DTO interface, and updating test mocks.
          </div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">3. Visual & Workspace Clutter</div>
          <div class="doc-card-text">
            Traditional IDEs overflow with dozens of open editor tabs, sidebars, integrated terminals, debuggers, and extension widgets, overwhelming cognitive focus.
          </div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">4. Fragmented Knowledge</div>
          <div class="doc-card-text">
            Code context is scattered across local memory, Git commit logs, Slack threads, Jira tickets, and external documentation without a unified semantic index.
          </div>
        </div>
      </div>

      <div class="callout callout-warning">
        <div class="callout-title">The Fundamental Friction</div>
        <p>
          Developers spend 70% of their time navigating, understanding, and plumbing code connections, and only 30% solving core algorithmic and domain logic problems.
        </p>
      </div>

      <h2>Imperative vs. Intent-Driven Development</h2>
      <p>
        The fundamental limitation of existing tools is their reliance on <em>Imperative Manipulation</em>. The engineer must specify <code>HOW</code> to execute every keystroke. The industry urgently requires a transition to <em>Intent-Driven Development</em>, where the engineer specifies <code>WHAT</code> system state should exist.
      </p>

      <div class="mermaid-container">
        <div class="mermaid-label">Diagram 2.1 — Structural Friction in Current Workflows</div>
        <pre class="mermaid">
flowchart TD
    A[Human Developer Intent] --> B[Manual File Tree Search]
    B --> C[Open 12 Related Tabs]
    C --> D[Manual Lines Editing]
    D --> E[Syntax / Import Errors]
    E --> F[Context Loss & Interruption]
    F --> D
    D --> G[Manual Build & Test Verification]
    G --> H[Final Code Commit]

    style A fill:#1e293b,stroke:#3b82f6,stroke-width:2px;
    style E fill:#450a0a,stroke:#f43f5e,stroke-width:2px;
    style F fill:#450a0a,stroke:#f43f5e,stroke-width:2px;
        </pre>
      </div>
    `
  },

  /* ==========================================================================
     3. WHY MOVE BEYOND TRADITIONAL EDITORS
     ========================================================================== */
  {
    id: "why-beyond-editors",
    number: "03",
    title: "3. Why Move Beyond Traditional Editors",
    subtitle: "The shift from localized file editors to autonomous AI project orchestrators.",
    badge: "PARADIGM SHIFT",
    content: `
      <h2>The Limits of Legacy IDE Architectures</h2>
      <p>
        Legacy desktop IDEs (VS Code, IntelliJ) were built around desktop-era operating system primitives: local file systems, native window frames, extension hosts bound to local Node.js binaries, and heavy memory footprints.
      </p>
      <p>
        While extensions like GitHub Copilot or Cursor add inline autocompletion panels onto these editors, they remain fundamentally <em>bolted-on overlays</em>. The underlying editor core still assumes a human typist navigating a single active file tab.
      </p>

      <h2>The Changing Role of Artificial Intelligence</h2>
      <p>
        Artificial Intelligence is evolving through three distinct generations in software engineering:
      </p>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Gen 1: Inline Autocomplete (2021-2023)</div>
          <div class="timeline-title">Single Line & Block Copilots</div>
          <p>Predicts the next 5-10 lines of text inside an active file tab based on shallow surrounding buffer context.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Gen 2: Conversational Chat Sidebars (2023-2025)</div>
          <div class="timeline-title">Chat Panels & Basic File Inclusion</div>
          <p>Chat interfaces embedded next to the editor that generate code snippets which the user manually copy-pastes or accepts file-by-file.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase" style="color:var(--accent-emerald);">Gen 3: AI-First Agent Platforms (2025+)</div>
          <div class="timeline-title">Autonomous Project Architects (This Project)</div>
          <p>AI acts as the core operating platform. AI ingests project context, executes multi-file planning, modifies virtual file systems, runs AST validations, and presents rendered diffs to Monaco Editor.</p>
        </div>
      </div>

      <h2>Future Development Loop Blueprint</h2>
      <div class="mermaid-container">
        <div class="mermaid-label">Diagram 3.1 — The Intent-Driven Agent Loop</div>
        <pre class="mermaid">
sequenceDiagram
    autonumber
    actor Developer
    participant Agent as AI Agent Orchestrator
    participant Context as Context Engine (AST & Graph)
    participant VFS as Virtual File System
    participant Monaco as Monaco Render Engine

    Developer->>Agent: Prompt: "Add JWT Auth to Doctor Endpoints"
    Agent->>Context: Query Dependency Graph & Schemas
    Context-->>Agent: Returns endpoint tree & config dependencies
    Agent->>Agent: Formulate Execution Plan
    Agent->>VFS: Apply Multi-File Atomic Diffs
    VFS->>Monaco: Stream Visual Diff & Active File View
    Monaco-->>Developer: Render visual highlight for approval
    Developer->>Agent: Confirm / Refine Intent
        </pre>
      </div>
    `
  },

  /* ==========================================================================
     4. WHY MONACO EDITOR
     ========================================================================== */
  {
    id: "why-monaco",
    number: "04",
    title: "4. Why Monaco Editor Was Selected",
    subtitle: "Analyzing Monaco Editor's role as the premier browser code rendering engine.",
    badge: "ENGINE SELECTION",
    content: `
      <h2>Monaco Editor vs. VS Code Desktop</h2>
      <p>
        Monaco Editor is the core browser-compatible code editor engine that powers VS Code. It provides the exact text rendering, syntax tokenization, virtualized line viewport, marker highlights, and keyboard keybinding engine as VS Code, but operates entirely within a browser DOM context without desktop dependencies.
      </p>

      <h2>Core Capabilities Leveraged</h2>
      <ul>
        <li><strong>Virtualized DOM Viewport:</strong> Efficiently renders files with hundreds of thousands of lines by rendering only the visible viewport elements.</li>
        <li><strong>Built-in Tokenizer & Theme Engine:</strong> Rich language tokenizers (Monarch) and customizable RGB/HSL theme definitions.</li>
        <li><strong>Language Service Worker Architecture:</strong> Web Worker isolation for background syntax checks, code folding, and line decoration.</li>
        <li><strong>Decorations & Markers API:</strong> Programmatic insertion of inline AI suggestions, code diff highlights, line counters, and error squigglies.</li>
      </ul>

      <h2>Missing Responsibilities (What Monaco Does NOT Do)</h2>
      <div class="callout callout-warning">
        <div class="callout-title">Architectural Boundaries</div>
        <p>
          Monaco Editor is strictly a <strong>rendering and text buffer component</strong>. It has NO built-in understanding of project file systems, multi-file workspaces, cross-file import graphs, git history, or AI capabilities.
        </p>
      </div>

      <h2>Technology Decision Matrix</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Editor Core Candidate</th>
              <th>DOM Performance</th>
              <th>VS Code Parity</th>
              <th>Browser Native</th>
              <th>Architectural Verdict</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Monaco Editor</strong></td>
              <td><span class="badge badge-green">Excellent (Virtualized)</span></td>
              <td><span class="badge badge-green">100% Native Core</span></td>
              <td><span class="badge badge-green">Native Web Workers</span></td>
              <td><span class="badge badge-blue">SELECTED ENGINE</span></td>
            </tr>
            <tr>
              <td><strong>CodeMirror 6</strong></td>
              <td><span class="badge badge-green">Excellent</span></td>
              <td><span class="badge badge-amber">Partial Keymap</span></td>
              <td><span class="badge badge-green">Native JS</span></td>
              <td>Rejected (Less VS Code ecosystem parity)</td>
            </tr>
            <tr>
              <td><strong>Ace Editor</strong></td>
              <td><span class="badge badge-amber">Moderate</span></td>
              <td><span class="badge badge-amber">Low</span></td>
              <td><span class="badge badge-green">Native JS</span></td>
              <td>Rejected (Legacy architecture)</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  /* ==========================================================================
     5. EXISTING PROJECT ARCHITECTURE
     ========================================================================== */
  {
    id: "existing-architecture",
    number: "05",
    title: "5. Existing Project Architecture Analysis",
    subtitle: "Deep-dive audit of the current prototype structure, execution sequence, and file loading mechanism.",
    badge: "CODEBASE AUDIT",
    content: `
      <h2>Current Codebase Directory Structure</h2>
      <pre><code>├── index.html                  # Core HTML structure & script execution sequence
├── style.css                   # Glassmorphism dark layout & CSS tokens
├── README.md                   # Visual project documentation
├── LOCAL_FILE_LOADING_FIX.md   # Technical deep-dive on file:// protocol fix
└── js/
    ├── app.js                  # Application bootstrap & AMD loader setup
    ├── core/
    │   ├── editor-data.js      # Global mock file state & language metadata
    │   ├── editor-setup.js     # Monaco instantiation & statusbar binding
    │   └── editor-theme.js     # Custom-dark theme definition
    ├── features/
    │   ├── clipboard.js        # Copy utility with fallback execCommand
    │   ├── download.js         # Blob exporter
    │   └── toast.js            # Animated notification manager
    └── samples/
        └── end-points.js       # Preloaded Express.js sample source file</code></pre>

      <h2>Module Breakdown & Responsibilities</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>File Path</th>
              <th>Layer</th>
              <th>Exposed Symbol</th>
              <th>Responsibilities & Implementation Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>js/core/editor-data.js</code></td>
              <td>Data Layer</td>
              <td><code>window.editorData</code></td>
              <td>Stores the default sample file name (<code>end-points.js</code>), language identifier (<code>javascript</code>), and preloaded Express.js REST API code string.</td>
            </tr>
            <tr>
              <td><code>js/core/editor-theme.js</code></td>
              <td>Core / Styling</td>
              <td><code>window.defineTheme</code></td>
              <td>Registers the custom <code>custom-dark</code> Monaco theme with custom token rules for comments, keywords, strings, and background (<code>#111827</code>).</td>
            </tr>
            <tr>
              <td><code>js/core/editor-setup.js</code></td>
              <td>Core / Editor</td>
              <td><code>window.createEditor</code><br><code>window.bindLineCounter</code></td>
              <td>Instantiates Monaco Editor via <code>monaco.editor.create</code>, configures fonts (Courier New), line wrapping, minimap, and binds live line count listeners.</td>
            </tr>
            <tr>
              <td><code>js/features/toast.js</code></td>
              <td>Feature / UI</td>
              <td><code>window.showToast</code></td>
              <td>Creates animated SVG toast notifications with HTML escaping to prevent XSS. Automatically removes toast after 3 seconds.</td>
            </tr>
            <tr>
              <td><code>js/features/clipboard.js</code></td>
              <td>Feature / Utility</td>
              <td><code>window.copy</code></td>
              <td>Copies editor content to clipboard using <code>navigator.clipboard.writeText</code> with an asynchronous fallback to <code>document.execCommand('copy')</code>.</td>
            </tr>
            <tr>
              <td><code>js/features/download.js</code></td>
              <td>Feature / Utility</td>
              <td><code>window.download</code></td>
              <td>Extracts editor text, constructs an in-memory <code>Blob</code> with MIME <code>text/javascript</code>, triggers link click export, and revokes Object URL.</td>
            </tr>
            <tr>
              <td><code>js/app.js</code></td>
              <td>Bootstrap Entry</td>
              <td><code>bootstrap()</code></td>
              <td>Configures AMD require path for Monaco CDN (<code>cdnjs.../vs</code>), initializes theme, creates editor, and attaches header click event handlers.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Universal Protocol Compatibility Layer (file:// and http://)</h2>
      <p>
        As detailed in <code>LOCAL_FILE_LOADING_FIX.md</code>, standard ES JavaScript modules (<code>import/export</code>) are blocked by modern browser CORS security policies when loading directly via local file double-click (<code>file:///...</code>) because the browser origin evaluates to <code>null</code>.
      </p>

      <div class="callout callout-tip">
        <div class="callout-title">Architectural Resolution</div>
        <p>
          To maintain modular code organization while supporting 100% zero-config execution on both <code>file://</code> and <code>http://</code> protocols, modules assign their interface symbols directly to <code>window</code> scope and are loaded via ordered HTML script tags in <code>index.html</code>.
        </p>
      </div>

      <h2>Execution Sequence Diagram</h2>
      <div class="mermaid-container">
        <div class="mermaid-label">Diagram 5.1 — Current Prototype Startup Sequence</div>
        <pre class="mermaid">
sequenceDiagram
    autonumber
    participant Browser DOM
    participant ScriptTag as Standard Script Loader
    participant AMD as Monaco AMD Require Loader
    participant Setup as editor-setup.js
    participant App as app.js

    Browser DOM->>ScriptTag: Load editor-data.js -> window.editorData
    ScriptTag->>ScriptTag: Load editor-theme.js -> window.defineTheme
    ScriptTag->>ScriptTag: Load editor-setup.js -> window.createEditor
    ScriptTag->>ScriptTag: Load feature scripts (toast, clipboard, download)
    ScriptTag->>AMD: Load loader.js from CDN
    AMD->>App: Trigger bootstrap()
    App->>AMD: amdRequire.config({ paths: { vs: CDN } })
    AMD-->>App: AMD Module vs/editor/editor.main loaded
    App->>Setup: defineTheme(monaco) & createEditor(...)
    Setup-->>Browser DOM: Render Monaco view inside #editor-container
    App->>Setup: bindLineCounter(editor, lineCountElem)
        </pre>
      </div>
    `
  },

  /* ==========================================================================
     6. CURRENT LIMITATIONS
     ========================================================================== */
  {
    id: "current-limitations",
    number: "06",
    title: "6. Current Limitations & Architectural Gaps",
    subtitle: "Detailed breakdown of current prototype constraints requiring next-generation redesign.",
    badge: "GAP ANALYSIS",
    content: `
      <h2>The Prototype Boundary</h2>
      <p>
        The current implementation serves as an effective proof-of-concept for standalone browser Monaco rendering. However, evaluated as a complete software development platform, it exhibits several fundamental architectural limitations.
      </p>

      <h2>7 Major Technical Bottlenecks</h2>
      <div class="card-grid">
        <div class="doc-card">
          <div class="doc-card-title">1. Static Data Memory Model</div>
          <div class="doc-card-text">
            Source code is hardcoded as a static JavaScript string in <code>window.editorData.fileCode</code>. Edits exist only in transient Monaco buffer memory and are lost on page refresh.
          </div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">2. Single-File Scope</div>
          <div class="doc-card-text">
            The editor operates on a single file (<code>end-points.js</code>). There is no multi-file directory tree, workspace drawer, or tab switching mechanism.
          </div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">3. No Virtual File System (VFS)</div>
          <div class="doc-card-text">
            No abstraction layer exists to communicate with local disk directories (File System Access API) or persist files in browser storage (OPFS / IndexedDB).
          </div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">4. Lack of Project Intelligence</div>
          <div class="doc-card-text">
            There is no local Abstract Syntax Tree (AST) parser to analyze symbol references, function signatures, or route handlers across imports.
          </div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">5. Absence of Cross-File Graph</div>
          <div class="doc-card-text">
            The imports in <code>end-points.js</code> (e.g., <code>./showAll/controller.js</code>) are unresolved strings without underlying file buffers or dependency links.
          </div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">6. Zero AI Context Engine</div>
          <div class="doc-card-text">
            No pipeline exists for prompt construction, model provider integration (OpenAI/Anthropic/Gemini), token budget management, or streaming diff patch parsing.
          </div>
        </div>
      </div>

      <div class="callout callout-caution">
        <div class="callout-title">Architectural Verdict</div>
        <p>
          To transform this prototype into an AI-first development platform, we must build a multi-layered platform infrastructure around Monaco Editor rather than adding superficial features to the existing script files.
        </p>
      </div>

      <h2>Limitation Analysis Matrix</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Subsystem Boundary</th>
              <th>Current Prototype State</th>
              <th>Required Target State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Persistence</strong></td>
              <td>Static JS global string</td>
              <td>Origin Private File System (OPFS) + Local Disk API</td>
            </tr>
            <tr>
              <td><strong>Workspace</strong></td>
              <td>Single file buffer</td>
              <td>Multi-file Virtual Tree with reactive state</td>
            </tr>
            <tr>
              <td><strong>Semantics</strong></td>
              <td>Basic Monaco JS monarch tokenizer</td>
              <td>Tree-Sitter / Babel AST parser + WebWorker LSP</td>
            </tr>
            <tr>
              <td><strong>AI Integration</strong></td>
              <td>None</td>
              <td>Autonomous AI Agent Orchestrator with streaming diff engine</td>
            </tr>
            <tr>
              <td><strong>Execution Runtime</strong></td>
              <td>None (Static browser render)</td>
              <td>In-browser WebContainer / WebAssembly Node sandbox</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  /* ==========================================================================
     7. FUTURE ARCHITECTURE
     ========================================================================== */
  {
    id: "future-architecture",
    number: "07",
    title: "7. Future AI-First Architecture Specification",
    subtitle: "Blueprint for a 10-subsystem autonomous browser development platform.",
    badge: "SYSTEM DESIGN",
    content: `
      <h2>High-Level System Architecture Blueprint</h2>
      <p>
        The next-generation platform decouples code rendering from system logic. The browser platform is divided into 10 decoupled, high-performance architectural subsystems.
      </p>

      <div class="mermaid-container">
        <div class="mermaid-label">Diagram 7.1 — 10 Subsystem Component Architecture Diagram</div>
        <pre class="mermaid">
graph TD
    subgraph Client UI & Interaction Layer
        User[Developer Intent Input]
        Monaco[Monaco Code Rendering Layer]
        Preview[Live WebContainer Sandbox]
    end

    subgraph Core AI Agent System
        Agent[AI Agent Orchestrator]
        PromptEng[Dynamic Prompt Engine]
    end

    subgraph Intelligence & Context Layer
        Context[Project Context Engine]
        AST[Tree-Sitter AST Indexer]
        Graph[Cross-File Dependency Graph]
    end

    subgraph Workspace & Storage Layer
        Workspace[Workspace Manager]
        VFS[Virtual File System OPFS]
        Memory[Project Event Memory Storage]
    end

    subgraph Extension & Integration Layer
        Plugin[Plugin & Middleware Layer]
        ToolProto[Tool Extension Protocol]
    end

    User --> Agent
    Agent --> PromptEng
    PromptEng --> Context
    Context --> AST
    Context --> Graph
    AST --> VFS
    Graph --> VFS
    Agent --> VFS
    VFS --> Monaco
    VFS --> Preview
    VFS --> Memory
    Plugin --> Agent
    ToolProto --> Plugin

    style Agent fill:#1e1b4b,stroke:#8b5cf6,stroke-width:2px;
    style Context fill:#064e3b,stroke:#10b981,stroke-width:2px;
    style VFS fill:#1e293b,stroke:#3b82f6,stroke-width:2px;
    style Monaco fill:#172554,stroke:#60a5fa,stroke-width:2px;
        </pre>
      </div>

      <h2>Detailed Specification of the 10 Core Subsystems</h2>

      <div class="accordion open">
        <div class="accordion-header">
          <span>1. AI Agent Orchestrator & Reasoning Layer</span>
          <span class="accordion-icon">▼</span>
        </div>
        <div class="accordion-body">
          <p>
            Acts as the brain of the platform. Evaluates user intent prompts, breaks down tasks into multi-step execution plans, dispatches tools (file search, AST query, diff generator), and streams atomic file edits.
          </p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header">
          <span>2. Workspace Manager</span>
          <span class="accordion-icon">▼</span>
        </div>
        <div class="accordion-body">
          <p>
            Manages workspace session state, active tabs, open file handles, project root metadata, and coordinate state synchronization between the VFS and UI layout.
          </p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header">
          <span>3. Project Context Engine (AST + RAG + Graph)</span>
          <span class="accordion-icon">▼</span>
        </div>
        <div class="accordion-body">
          <p>
            Maintains a real-time semantic index of the codebase. Uses WebWorker Tree-Sitter parsing to build a cross-file symbol dependency graph, ensuring LLM prompts receive minimal, precise context tokens.
          </p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header">
          <span>4. Dynamic Prompt Engine</span>
          <span class="accordion-icon">▼</span>
        </div>
        <div class="accordion-body">
          <p>
            Assembles structured LLM payloads combining system rules, context snippets, AST definitions, active file diffs, and formatting constraints while staying within token budgets.
          </p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header">
          <span>5. Virtual File System (VFS) & OPFS</span>
          <span class="accordion-icon">▼</span>
        </div>
        <div class="accordion-body">
          <p>
            A ultra-fast browser file storage engine built on Origin Private File System (OPFS) and File System Access API. Provides synchronous, high-throughput file read/write operations without native desktop OS tools.
          </p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header">
          <span>6. Project Memory & Event Stream Storage</span>
          <span class="accordion-icon">▼</span>
        </div>
        <div class="accordion-body">
          <p>
            Records an append-only event stream of all AI actions, developer feedback, and file state mutations, allowing instant undo/redo, time-travel debugging, and audit trails.
          </p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header">
          <span>7. Monaco Code Rendering Layer</span>
          <span class="accordion-icon">▼</span>
        </div>
        <div class="accordion-body">
          <p>
            Pure visual presentation pane. Displays active file buffers, inline AI diff highlights, line count decorations, syntax diagnostics, and manual override capabilities.
          </p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header">
          <span>8. Extensible Plugin & Middleware Layer</span>
          <span class="accordion-icon">▼</span>
        </div>
        <div class="accordion-body">
          <p>
            Provides hook event listeners (<code>onBeforeAIDiff</code>, <code>onFileSave</code>, <code>onContextBuild</code>) allowing developers to plug in custom linters, formatters, and security scanners.
          </p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header">
          <span>9. Live WebContainer / WebAssembly Sandbox</span>
          <span class="accordion-icon">▼</span>
        </div>
        <div class="accordion-body">
          <p>
            Executes Node.js processes, runs Express web servers, and builds frontend assets directly inside the browser using WebAssembly and WebContainers for instant hot-reload previews.
          </p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header">
          <span>10. Tool Extension Protocol</span>
          <span class="accordion-icon">▼</span>
        </div>
        <div class="accordion-body">
          <p>
            Standardized API protocol for registering AI agent tools (e.g., REST API caller, database migration generator, OpenAPI schema parser).
          </p>
        </div>
      </div>
    `
  },

  /* ==========================================================================
     8. RESEARCH
     ========================================================================== */
  {
    id: "research",
    number: "08",
    title: "8. Technical Research Deep-Dives",
    subtitle: "Exhaustive research papers across 10 modern web & AI engineering domains.",
    badge: "RESEARCH PAPERS",
    content: `
      <h2>10 Technical Research Modules</h2>
      <p>
        Building an AI-first web development platform requires synthesising breakthrough technologies across browser runtimes, language server protocols, incremental parsing, and LLM context window engineering.
      </p>

      <!-- Topic 1 -->
      <div class="callout callout-note">
        <h3>Research Topic 8.1 — Monaco Editor Internals & Virtualized DOM</h3>
        <p><strong>Purpose:</strong> Maximize rendering throughput for 500,000+ line code buffers in browser environments.</p>
        <p><strong>Architecture:</strong> Monaco utilizes a split model-view architecture. Text lines are stored in a piece-tree data structure (O(1) line insertions). The view layer calculates line offsets and renders only the DOM nodes visible within the current scroll bounding box.</p>
        <p><strong>Integration Strategy:</strong> Bind Monaco text models directly to VFS Web Workers via <code>monaco.editor.createModel</code> with SharedArrayBuffer memory sync.</p>
      </div>

      <!-- Topic 2 -->
      <div class="callout callout-note">
        <h3>Research Topic 8.2 — VS Code Architecture vs. Browser Monaco</h3>
        <p><strong>Purpose:</strong> Isolate Monaco from desktop Node.js bindings to run natively in sandboxed web pages.</p>
        <p><strong>Architecture:</strong> Desktop VS Code runs Electron with a Node.js main process and isolated Extension Host processes. In our web platform, the Extension Host is replaced by WebWorker threads communicating via Structured Clone messages.</p>
        <p><strong>Integration Strategy:</strong> Deploy WebWorker adapters for language services without requiring Node <code>child_process</code> dependencies.</p>
      </div>

      <!-- Topic 3 -->
      <div class="callout callout-note">
        <h3>Research Topic 8.3 — Language Server Protocol (LSP) over WebSockets / WebWorkers</h3>
        <p><strong>Purpose:</strong> Provide cross-file auto-complete, go-to-definition, and diagnostics without local backend compilers.</p>
        <p><strong>Architecture:</strong> Compile LSP servers (e.g., TypeScript Language Service, Pyright) into WebAssembly/JS workers. JSON-RPC protocol messages are passed over <code>PostMessage</code> or WebSocket channels.</p>
        <p><strong>Integration Strategy:</strong> Connect Monaco's <code>monaco.languages.registerCompletionItemProvider</code> to worker-hosted LSP clients.</p>
      </div>

      <!-- Topic 4 -->
      <div class="callout callout-note">
        <h3>Research Topic 8.4 — File System Access API & OPFS Runtimes</h3>
        <p><strong>Purpose:</strong> Fast, persistent file access directly from local disk and browser sandboxed storage.</p>
        <p><strong>Architecture:</strong> File System Access API (<code>showDirectoryPicker</code>) grants direct read/write handles to local folders. Origin Private File System (OPFS) provides low-latency, synchronous <code>FileSystemSyncAccessHandle</code> operations in Web Workers.</p>
        <p><strong>Integration Strategy:</strong> Dual-tier VFS using OPFS as primary high-speed cache and File System Access API for local disk synchronization.</p>
      </div>

      <!-- Topic 5 -->
      <div class="callout callout-note">
        <h3>Research Topic 8.5 — WebContainers & WASM Runtime Engines</h3>
        <p><strong>Purpose:</strong> Run full Node.js servers, npm installs, and dev servers inside browser tab WebWorkers.</p>
        <p><strong>Architecture:</strong> WebContainers execute an OS-like virtual kernel compiled to WebAssembly, implementing virtual TCP sockets, file systems, and process trees inside browser workers.</p>
        <p><strong>Integration Strategy:</strong> Mount project VFS into WebContainer root to enable instant live web preview of Express APIs without external servers.</p>
      </div>

      <!-- Topic 6 -->
      <div class="callout callout-note">
        <h3>Research Topic 8.6 — Incremental AST Parsing (Tree-Sitter)</h3>
        <p><strong>Purpose:</strong> Maintain real-time syntax tree structures on every keystroke without re-parsing whole files.</p>
        <p><strong>Architecture:</strong> Tree-Sitter uses an incremental LR parsing algorithm. When a file edit occurs, Tree-Sitter updates only the affected AST nodes in sub-millisecond execution times.</p>
        <p><strong>Integration Strategy:</strong> Run Tree-Sitter WebAssembly in background threads to populate the Project Context Engine on file changes.</p>
      </div>

      <!-- Topic 7 -->
      <div class="callout callout-note">
        <h3>Research Topic 8.7 — Cross-File Dependency Graphs & Symbol Indexing</h3>
        <p><strong>Purpose:</strong> Resolve imports, exported interfaces, and routing links across multi-directory codebases.</p>
        <p><strong>Architecture:</strong> Construct a Directed Acyclic Graph (DAG) of symbol references. Nodes represent files/symbols; edges represent imports, function calls, and type dependencies.</p>
        <p><strong>Integration Strategy:</strong> Use the dependency DAG to perform automated context pruning when constructing LLM prompts.</p>
      </div>

      <!-- Topic 8 -->
      <div class="callout callout-note">
        <h3>Research Topic 8.8 — AI Code Generation & Diff Streaming Protocol</h3>
        <p><strong>Purpose:</strong> Stream multi-file modifications smoothly into Monaco without broken UI state.</p>
        <p><strong>Architecture:</strong> AI agents output structured unified diff JSON or line-range streaming events. The client applies diffs atomically to VFS buffers using operational transform algorithms.</p>
        <p><strong>Integration Strategy:</strong> Render streaming additions in Monaco as inline green decorations and line deletions as red decorations.</p>
      </div>

      <!-- Topic 9 -->
      <div class="callout callout-note">
        <h3>Research Topic 8.9 — Context Engineering & Token Budget Optimization</h3>
        <p><strong>Purpose:</strong> Fit 100,000-line repository context into LLM context windows without token bloat or high costs.</p>
        <p><strong>Architecture:</strong> Re-rank context snippets using hybrid search (AST graph distance + BM25 keyword matching + vector similarity). Strip whitespace, comments, and unused code bodies.</p>
        <p><strong>Integration Strategy:</strong> Limit prompt context to exact target function signatures, immediate caller dependencies, and relevant config schemas.</p>
      </div>

      <!-- Topic 10 -->
      <div class="callout callout-note">
        <h3>Research Topic 8.10 — Future Intent-Driven Development Runtimes</h3>
        <p><strong>Purpose:</strong> Transition software engineering from line-by-line typing to goal-driven autonomous agent collaboration.</p>
        <p><strong>Architecture:</strong> The IDE interface shifts from an editor-centric layout to a conversational goal canvas flanked by auto-updating visual previews and system verification badges.</p>
        <p><strong>Integration Strategy:</strong> Use Monaco as a collapsible approval drawer while presenting high-level system architectural trees as the main interaction interface.</p>
      </div>
    `
  },

  /* ==========================================================================
     9. ROADMAP
     ========================================================================== */
  {
    id: "roadmap",
    number: "09",
    title: "9. Engineering Roadmap & Milestones",
    subtitle: "10-phase execution timeline from architecture specification to global platform ecosystem.",
    badge: "EXECUTION PLAN",
    content: `
      <h2>10-Phase Platform Execution Timeline</h2>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 01 — Completed</div>
          <div class="timeline-title">Architecture & System Specification</div>
          <p>Exhaustive system blueprinting, CORS file protocol fixes, standalone Monaco initialization, and engineering documentation design (Current Phase).</p>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 02 — Q3 2026</div>
          <div class="timeline-title">Virtual File System & OPFS Storage Engine</div>
          <p>Implement high-speed browser file persistence using OPFS WebWorkers and File System Access API integration.</p>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 03 — Q3 2026</div>
          <div class="timeline-title">Multi-File Workspace & Tab Manager</div>
          <p>Build reactive multi-file sidebar tree view, active tab controller, and multi-buffer Monaco model manager.</p>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 04 — Q4 2026</div>
          <div class="timeline-title">Tree-Sitter AST & Context Indexer</div>
          <p>Integrate WebAssembly Tree-Sitter parser worker to build real-time symbol tables and cross-file import graphs.</p>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 05 — Q4 2026</div>
          <div class="timeline-title">AI Agent Orchestrator & Streaming Diffs</div>
          <p>Implement LLM agent provider bridge (OpenAI/Anthropic/Gemini), prompt engine, and operational diff patcher.</p>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 06 — Q1 2027</div>
          <div class="timeline-title">WebContainer Live Preview Integration</div>
          <p>Embed in-browser Node.js sandbox runtime for live API server execution and instant visual preview panes.</p>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 07 — Q1 2027</div>
          <div class="timeline-title">Performance Optimization & Worker Hardening</div>
          <p>Optimize WebWorker SharedArrayBuffer sync, memory garbage collection, and Monaco line viewport rendering.</p>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 08 — Q2 2027</div>
          <div class="timeline-title">Automated Testing & Safety Guardrails</div>
          <p>Implement background syntax verification, automated AST linting on AI diffs, and regression test suites.</p>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 09 — Q2 2027</div>
          <div class="timeline-title">Production Distribution & Edge Hosting</div>
          <p>Deploy PWA offline capabilities, CDN asset distribution, and enterprise single-sign-on (SSO) integrations.</p>
        </div>

        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 10 — Q3 2027</div>
          <div class="timeline-title">Plugin Marketplace & Ecosystem Scaling</div>
          <p>Launch open extension protocol for custom AI tools, theme plugins, and third-party WebContainer runtimes.</p>
        </div>
      </div>
    `
  },

  /* ==========================================================================
     10. RISKS
     ========================================================================== */
  {
    id: "risks",
    number: "10",
    title: "10. Risk Assessment & Technical Mitigations",
    subtitle: "Evaluating potential performance, memory, security, and AI execution hazards.",
    badge: "RISK MANAGEMENT",
    content: `
      <h2>Risk Matrix & Architectural Safeguards</h2>
      <p>
        Designing a complex agentic IDE inside a web browser requires proactive mitigation of browser runtime constraints, thread bottlenecks, and AI reliability failure modes.
      </p>

      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Risk Category</th>
              <th>Identified Hazard</th>
              <th>Severity</th>
              <th>Architectural Mitigation Strategy</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Browser Limitations</strong></td>
              <td>Main UI thread lockup during heavy AST parsing or diff computations.</td>
              <td><span class="badge badge-amber">High</span></td>
              <td>Offload 100% of Tree-Sitter parsing, diff generation, and context search to dedicated Web Workers.</td>
            </tr>
            <tr>
              <td><strong>Memory Footprint</strong></td>
              <td>V8 Heap memory overflow when indexing large repositories (50,000+ files).</td>
              <td><span class="badge badge-amber">High</span></td>
              <td>Implement OPFS chunk paging, LRU memory caching, and dispose inactive Monaco text models.</td>
            </tr>
            <tr>
              <td><strong>Security Boundaries</strong></td>
              <td>Malicious AI code generation executing arbitrary scripts in browser storage.</td>
              <td><span class="badge badge-purple">Critical</span></td>
              <td>Enforce strict Content Security Policy (CSP), sandbox WebContainers in isolated <code>&lt;iframe&gt;</code> domains.</td>
            </tr>
            <tr>
              <td><strong>AI Hallucinations</strong></td>
              <td>AI agent generates invalid imports or non-existent function calls.</td>
              <td><span class="badge badge-amber">High</span></td>
              <td>Pre-apply diffs to a hidden AST validator before rendering; highlight invalid symbols in red markers.</td>
            </tr>
            <tr>
              <td><strong>Network Latency</strong></td>
              <td>High token payload size causes slow response times for streaming diffs.</td>
              <td><span class="badge badge-blue">Medium</span></td>
              <td>Use local WebAssembly AST search to prune context windows down to minimal relevant diff chunks.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },

  /* ==========================================================================
     11. FUTURE SCOPE
     ========================================================================== */
  {
    id: "future-scope",
    number: "11",
    title: "11. Future Horizon & Product Scope",
    subtitle: "Exploring next-frontier capabilities in autonomous software engineering.",
    badge: "FUTURE HORIZON",
    content: `
      <h2>8 Visionary Product Domains</h2>
      <div class="card-grid">
        <div class="doc-card">
          <div class="doc-card-title">1. Voice-Driven Architectural Programming</div>
          <div class="doc-card-text">Direct conversational interaction with the AI Agent Orchestrator to refactor systems and generate modules hands-free.</div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">2. Autonomous AI Background Swarms</div>
          <div class="doc-card-text">Specialized AI agents working asynchronously in background threads to fix lint warnings, update dependencies, and generate unit tests.</div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">3. AI Project Architect Mode</div>
          <div class="doc-card-text">High-level visual diagramming canvas where system block diagrams automatically materialize as concrete codebase VFS files.</div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">4. Continuous Refactoring Engine</div>
          <div class="doc-card-text">Proactive identification and elimination of technical debt, stale code paths, and security vulnerabilities without human prompting.</div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">5. Universal Project Knowledge Graph</div>
          <div class="doc-card-text">A living graph mapping code symbols to Jira stories, Slack decisions, API specs, and Git commit histories.</div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">6. Real-time Multi-User CRDT Collaboration</div>
          <div class="doc-card-text">Conflict-free Replicated Data Types (Yjs / Automerge) enabling seamless real-time co-authoring between multiple developers and AI agents.</div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">7. Edge-Cloud Hybrid Workspace Sync</div>
          <div class="doc-card-text">Local browser OPFS file editing with background synchronization to distributed cloud dev environments (AWS / GCP / Cloudflare Workers).</div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">8. AI Agent Tool Marketplace</div>
          <div class="doc-card-text">An open ecosystem where developers publish and monetize specialized agent tools, AST analyzers, and domain-specific code generators.</div>
        </div>
      </div>
    `
  },

  /* ==========================================================================
     12. CONCLUSION
     ========================================================================== */
  {
    id: "conclusion",
    number: "12",
    title: "12. Architectural Conclusion & Synthesis",
    subtitle: "Final synthesis on why AI becomes the primary software interface.",
    badge: "SYNTHESIS",
    content: `
      <h2>Summary of the Engineering Vision</h2>
      <p>
        The Monaco Editor standalone prototype built in this repository represents the initial foundation of a much larger architectural shift. Monaco Editor is an exceptional text rendering engine, but it is not the destination—it is a component.
      </p>
      <p>
        The future of software development belongs to <strong>AI-First Platforms</strong> where artificial intelligence serves as the primary operational system between human intent and software codebases. By abstracting context indexing into background AST workers, persisting workspaces via high-speed browser OPFS file systems, and presenting changes through streaming visual diffs, we unlock an unprecedented level of developer productivity.
      </p>

      <div class="callout callout-important">
        <div class="callout-title">Final Architectural Principle</div>
        <p>
          We do not build tools to make engineers type code faster. We build platforms to liberate engineers from typing code at all—enabling them to spend 100% of their creative genius designing systems, establishing domain models, and shaping the future of technology.
        </p>
      </div>

      <div class="page-nav-footer">
        <a href="#future-scope" class="nav-card">
          <span class="nav-card-dir">Previous Topic</span>
          <span class="nav-card-title">← 11. Future Scope</span>
        </a>
        <a href="#introduction" class="nav-card nav-card-next">
          <span class="nav-card-dir">Return to Start</span>
          <span class="nav-card-title">01. Introduction →</span>
        </a>
      </div>
    `
  }
];
