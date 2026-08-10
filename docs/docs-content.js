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
    subtitle: "Honest architectural audit explaining why the prototype cannot yet become a complete AI-driven development platform.",
    badge: "GAP ANALYSIS",
    content: `
      <h2>Executive Assessment</h2>
      <p>
        As a Senior Software Architect reviewing this early-stage engineering product, the current Monaco Editor prototype demonstrates a successful <strong>rendering-layer proof-of-concept</strong>. It validates browser-native code display, CORS-safe module loading, and a clean modular bootstrap sequence. However, evaluated against the vision of an AI-first development platform, the system exhibits ten structural gaps that prevent it from understanding, modifying, or orchestrating real software projects.
      </p>

      <div class="callout callout-warning">
        <div class="callout-title">Architectural Verdict</div>
        <p>
          The prototype is a <em>single-pane text viewer</em>, not a development platform. Every limitation below is intentional scaffolding from Phase 1 — but collectively they define the boundary where incremental feature additions must stop and a new platform architecture must begin.
        </p>
      </div>

      <h2>Current vs. Target Platform Comparison</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Capability</th>
              <th>Current Prototype (v5)</th>
              <th>Target AI Platform</th>
              <th>Gap Severity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Data Source</strong></td>
              <td>Hardcoded string in <code>editor-data.js</code></td>
              <td>Dynamic VFS with OPFS + disk sync</td>
              <td><span class="badge badge-purple">Critical</span></td>
            </tr>
            <tr>
              <td><strong>File Scope</strong></td>
              <td>Single file (<code>end-points.js</code>)</td>
              <td>Multi-file workspace with tab manager</td>
              <td><span class="badge badge-purple">Critical</span></td>
            </tr>
            <tr>
              <td><strong>Project Loading</strong></td>
              <td>Static preload at page load</td>
              <td>Folder picker, drag-drop, cloud import</td>
              <td><span class="badge badge-amber">High</span></td>
            </tr>
            <tr>
              <td><strong>Semantic Understanding</strong></td>
              <td>Monarch syntax coloring only</td>
              <td>AST parsing + LSP + dependency graph</td>
              <td><span class="badge badge-purple">Critical</span></td>
            </tr>
            <tr>
              <td><strong>AI Integration</strong></td>
              <td>None</td>
              <td>Agent orchestrator + context engine</td>
              <td><span class="badge badge-purple">Critical</span></td>
            </tr>
            <tr>
              <td><strong>Persistence</strong></td>
              <td>Lost on refresh</td>
              <td>Project memory + event stream + undo</td>
              <td><span class="badge badge-amber">High</span></td>
            </tr>
            <tr>
              <td><strong>Execution</strong></td>
              <td>Static render only</td>
              <td>WebContainer live preview</td>
              <td><span class="badge badge-amber">High</span></td>
            </tr>
            <tr>
              <td><strong>Scalability</strong></td>
              <td>~50 lines, one buffer</td>
              <td>50,000+ files, worker-indexed</td>
              <td><span class="badge badge-amber">High</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Limitation Severity Matrix</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Limitation</th>
              <th>Severity</th>
              <th>Blocks AI Platform?</th>
              <th>Effort to Resolve</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>1</td><td>Static Sample Data</td><td><span class="severity-critical">Critical</span></td><td>Yes</td><td>Medium</td></tr>
            <tr><td>2</td><td>Single-File Workflow</td><td><span class="severity-critical">Critical</span></td><td>Yes</td><td>Medium</td></tr>
            <tr><td>3</td><td>No Workspace Management</td><td><span class="severity-critical">Critical</span></td><td>Yes</td><td>High</td></tr>
            <tr><td>4</td><td>No Dynamic Project Loading</td><td><span class="severity-high">High</span></td><td>Yes</td><td>Medium</td></tr>
            <tr><td>5</td><td>No Project Memory</td><td><span class="severity-high">High</span></td><td>Yes</td><td>High</td></tr>
            <tr><td>6</td><td>No Dependency Graph</td><td><span class="severity-critical">Critical</span></td><td>Yes</td><td>High</td></tr>
            <tr><td>7</td><td>No Project Understanding</td><td><span class="severity-critical">Critical</span></td><td>Yes</td><td>Very High</td></tr>
            <tr><td>8</td><td>No AI Context Pipeline</td><td><span class="severity-critical">Critical</span></td><td>Yes</td><td>Very High</td></tr>
            <tr><td>9</td><td>Limited Scalability</td><td><span class="severity-high">High</span></td><td>Partial</td><td>High</td></tr>
            <tr><td>10</td><td>Browser Runtime Constraints</td><td><span class="severity-high">High</span></td><td>Partial</td><td>Ongoing</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Detailed Limitation Analysis</h2>

      <div class="limitation-block">
        <h3>1. Static Sample Data</h3>
        <div class="limitation-grid">
          <div><dt>Current Situation</dt><dd>Source code lives as a hardcoded JavaScript template string in <code>js/core/editor-data.js</code>. The Express router sample (<code>end-points.js</code>) is injected at bootstrap and never reloaded.</dd></div>
          <div><dt>Why It Exists</dt><dd>Phase 1 prioritized zero-config demo execution over persistence. A static string eliminates async file I/O, CORS complications with dynamic imports, and backend dependencies.</dd></div>
          <div><dt>Engineering Impact</dt><dd>No separation between data layer and presentation layer. Cannot test multi-file scenarios, diff application, or save/load cycles. All state is ephemeral Monaco buffer memory.</dd></div>
          <div><dt>User Impact</dt><dd>Developers cannot open their own projects. Edits vanish on refresh. Copy/download are the only export paths — no real project workflow.</dd></div>
          <div><dt>Possible Solution</dt><dd>Introduce a Virtual File System abstraction backed by OPFS (Origin Private File System) with optional File System Access API for local disk binding.</dd></div>
          <div><dt>Future Improvement</dt><dd>Cloud workspace sync, Git integration, and automatic snapshot versioning via append-only project memory.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>2. Single-File Workflow</h3>
        <div class="limitation-grid">
          <div><dt>Current Situation</dt><dd>Monaco instantiates exactly one <code>ITextModel</code> bound to <code>end-points.js</code>. Import statements reference <code>./showAll/controller.js</code> and similar paths that do not exist in any buffer.</dd></div>
          <div><dt>Why It Exists</dt><dd>Multi-file editing requires tab management, model lifecycle, active-file routing, and sidebar UI — all deferred to later phases.</dd></div>
          <div><dt>Engineering Impact</dt><dd>Cross-file refactoring, go-to-definition, and import resolution are impossible. The sample file's import graph is a lie — unresolved dead references.</dd></div>
          <div><dt>User Impact</dt><dd>Users see a realistic-looking file but cannot navigate the project it belongs to. The experience mimics an IDE without providing IDE capabilities.</dd></div>
          <div><dt>Possible Solution</dt><dd>Build a Workspace Manager with reactive file tree, tab controller, and multi-model Monaco registry keyed by file path.</dd></div>
          <div><dt>Future Improvement</dt><dd>Split-pane editing, pinned tabs, breadcrumb navigation, and AI-suggested file groupings based on dependency clusters.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>3. Lack of Workspace Management</h3>
        <div class="limitation-grid">
          <div><dt>Current Situation</dt><dd>No concept of a "project root," open workspace, or session state. The application bootstraps identically every time with the same single file.</dd></div>
          <div><dt>Why It Exists</dt><dd>Workspace management is a platform-level concern that depends on VFS, state management, and UI shell architecture not yet built.</dd></div>
          <div><dt>Engineering Impact</dt><dd>Cannot scope operations (search, replace, AI context) to a project boundary. No way to track which files are dirty, recently opened, or part of the active session.</dd></div>
          <div><dt>User Impact</dt><dd>No project switcher, no "Open Folder," no session restore. Every visit is a fresh demo, not a development session.</dd></div>
          <div><dt>Possible Solution</dt><dd>Implement a Workspace Manager service owning project metadata, open file handles, layout state, and coordination between VFS and UI panels.</dd></div>
          <div><dt>Future Improvement</dt><dd>Multi-workspace tabs, cloud-linked projects, and workspace-level AI memory profiles.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>4. No Dynamic Project Loading</h3>
        <div class="limitation-grid">
          <div><dt>Current Situation</dt><dd>Projects cannot be loaded at runtime. There is no folder picker, drag-and-drop import, URL-based project fetch, or Git clone integration.</dd></div>
          <div><dt>Why It Exists</dt><dd>Dynamic loading requires File System Access API permissions, async directory traversal, MIME detection, and progressive indexing — all absent from the prototype.</dd></div>
          <div><dt>Engineering Impact</dt><dd>The platform cannot be validated against real codebases. Testing is limited to the single embedded sample, masking scalability and parsing issues.</dd></div>
          <div><dt>User Impact</dt><dd>Users cannot bring their own code. The tool remains a demo, not a workspace they can adopt for daily development.</dd></div>
          <div><dt>Possible Solution</dt><dd>File System Access API (<code>showDirectoryPicker</code>) for local folders; OPFS for browser-persisted projects; optional ZIP/Git import pipeline.</dd></div>
          <div><dt>Future Improvement</dt><dd>Incremental project indexing on load, background dependency resolution, and smart caching of parsed ASTs.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>5. No Project Memory</h3>
        <div class="limitation-grid">
          <div><dt>Current Situation</dt><dd>No event log, undo/redo stack, session history, or AI interaction record. Clipboard and download are stateless one-shot operations.</dd></div>
          <div><dt>Why It Exists</dt><dd>Project memory requires persistent storage, event sourcing architecture, and conflict resolution — foundational infrastructure not yet implemented.</dd></div>
          <div><dt>Engineering Impact</dt><dd>AI agents cannot learn from prior edits within a session. No audit trail for generated code. Cannot revert AI-applied diffs atomically.</dd></div>
          <div><dt>User Impact</dt><dd>Lost work on accidental refresh. No "what did the AI change?" history. No confidence in experimenting with AI suggestions.</dd></div>
          <div><dt>Possible Solution</dt><dd>Append-only event stream in IndexedDB/OPFS recording file mutations, AI actions, and user approvals with time-travel undo.</dd></div>
          <div><dt>Future Improvement</dt><dd>Cross-session AI memory, project-level decision logs linked to code changes, and collaborative edit history.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>6. No Dependency Graph</h3>
        <div class="limitation-grid">
          <div><dt>Current Situation</dt><dd>Import statements in the sample file are syntactic text only. No graph connects <code>end-points.js</code> to its controller modules, config schemas, or data files.</dd></div>
          <div><dt>Why It Exists</dt><dd>Building a dependency graph requires parsing all project files, resolving module paths, and maintaining an incremental index — none of which exist.</dd></div>
          <div><dt>Engineering Impact</dt><dd>AI cannot determine blast radius of a change. Refactoring an exported function cannot propagate to importers. Context selection for LLM prompts is blind.</dd></div>
          <div><dt>User Impact</dt><dd>Developers must manually trace imports. AI suggestions would miss cross-file impacts, producing broken code on acceptance.</dd></div>
          <div><dt>Possible Solution</dt><dd>Tree-Sitter WASM parser in WebWorker building a directed acyclic graph of file/symbol dependencies, updated incrementally on edits.</dd></div>
          <div><dt>Future Improvement</dt><dd>Runtime dependency tracing via WebContainer, API route graphs, and database schema linkage visualization.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>7. No Project Understanding</h3>
        <div class="limitation-grid">
          <div><dt>Current Situation</dt><dd>Monaco provides syntax highlighting via Monarch tokenizer rules. There is no AST, no symbol table, no type information, and no semantic diagnostics beyond basic JS token classification.</dd></div>
          <div><dt>Why It Exists</dt><dd>Semantic analysis requires Language Server Protocol integration, WebWorker isolation, and incremental parsing infrastructure.</dd></div>
          <div><dt>Engineering Impact</dt><dd>The platform is text-blind to structure. Cannot answer "where is this function called?" or "what routes does this router expose?" programmatically.</dd></div>
          <div><dt>User Impact</dt><dd>No autocomplete beyond Monaco defaults, no go-to-definition, no find-all-references. The editor feels like Notepad++ with themes, not an IDE.</dd></div>
          <div><dt>Possible Solution</dt><dd>Project Context Engine combining Tree-Sitter AST, LSP language services, and symbol indexing in dedicated WebWorkers.</dd></div>
          <div><dt>Future Improvement</dt><dd>Natural language project queries ("show me all endpoints that modify doctors"), architecture diagram auto-generation.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>8. No AI Context Pipeline</h3>
        <div class="limitation-grid">
          <div><dt>Current Situation</dt><dd>Zero integration with LLM providers. No prompt templates, no token budgeting, no streaming diff parser, no agent tool registry.</dd></div>
          <div><dt>Why It Exists</dt><dd>AI integration depends on all prior limitations being addressed — without project understanding and VFS, there is nothing meaningful to send to a model.</dd></div>
          <div><dt>Engineering Impact</dt><dd>The core product vision (AI as primary interface) is entirely unimplemented. Monaco renders text; nothing interprets or generates it intelligently.</dd></div>
          <div><dt>User Impact</dt><dd>No AI assistance whatsoever. Users must manually write, navigate, and refactor all code. The "AI-First Platform" vision exists only in documentation.</dd></div>
          <div><dt>Possible Solution</dt><dd>Prompt Engine assembling structured context from AST/graph; AI Agent Orchestrator managing multi-step plans and streaming diffs to VFS.</dd></div>
          <div><dt>Future Improvement</dt><dd>Multi-agent swarms, autonomous refactoring, voice-driven intent, and project-level architectural planning.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>9. Limited Scalability</h3>
        <div class="limitation-grid">
          <div><dt>Current Situation</dt><dd>Architecture handles one ~50-line file on the main thread. No worker offloading, no lazy loading, no model disposal, no memory management strategy.</dd></div>
          <div><dt>Why It Exists</dt><dd>Scalability patterns (worker pools, LRU caches, virtualized trees) are premature for a rendering proof-of-concept.</dd></div>
          <div><dt>Engineering Impact</dt><dd>Opening a 10,000-file repository would freeze the browser. AST indexing, if added naively on the main thread, would cause UI jank.</dd></div>
          <div><dt>User Impact</dt><dd>Platform unusable for real-world projects. Enterprise codebases with thousands of files are entirely out of scope today.</dd></div>
          <div><dt>Possible Solution</dt><dd>WebWorker thread pool for parsing/indexing; lazy Monaco model creation; OPFS chunk paging; dispose inactive models.</dd></div>
          <div><dt>Future Improvement</dt><dd>Incremental indexing, priority queues for visible files, and cloud-side pre-indexing for large monorepos.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>10. Browser Runtime Constraints</h3>
        <div class="limitation-grid">
          <div><dt>Current Situation</dt><dd>All logic runs on the main UI thread. No WebWorkers, no SharedArrayBuffer, no service workers. Subject to sandbox memory limits (~2-4 GB), no native Node.js, no shell access.</dd></div>
          <div><dt>Why It Exists</dt><dd>Browser-first design trades native OS power for zero-install universal access. The prototype has not yet implemented worker offloading or WASM runtimes.</dd></div>
          <div><dt>Engineering Impact</dt><dd>Cannot run native compilers, Docker containers, or unrestricted file system operations. Heavy computation blocks UI rendering.</dd></div>
          <div><dt>User Impact</dt><dd>Perceived slowness on large projects. Cannot run backend servers natively (requires WebContainers). Some browser APIs unavailable in Safari/Firefox.</dd></div>
          <div><dt>Possible Solution</dt><dd>WebWorkers for all heavy tasks; WebContainers for Node.js sandbox; COOP/COEP headers for SharedArrayBuffer; progressive enhancement per browser.</dd></div>
          <div><dt>Future Improvement</dt><dd>Hybrid cloud compute for heavy indexing; PWA offline mode; edge-deployed language servers.</dd></div>
        </div>
      </div>

      <h2>Current Architecture — Limitation Overlay</h2>
      <div class="mermaid-container">
        <div class="mermaid-label">Diagram 6.1 — Prototype Gaps Highlighted in Red</div>
        <pre class="mermaid">
flowchart TD
    subgraph Existing["What Exists Today"]
        HTML[index.html]
        Data[editor-data.js - Static String]
        Setup[editor-setup.js - Monaco Create]
        Features[clipboard / download / toast]
        Monaco[Monaco Editor - Single Buffer]
    end

    subgraph Missing["What Is Missing - Blockers"]
        VFS[Virtual File System]
        WS[Workspace Manager]
        AST[AST / LSP Parser]
        Graph[Dependency Graph]
        AI[AI Context Engine]
        Memory[Project Memory]
        Preview[Live Preview Runtime]
    end

    HTML --> Data
    Data --> Setup
    Setup --> Monaco
    Features --> Monaco

    VFS -.->|blocks| WS
    WS -.->|blocks| AST
    AST -.->|blocks| Graph
    Graph -.->|blocks| AI
    AI -.->|blocks| Memory
    VFS -.->|blocks| Preview

    style Missing fill:#450a0a,stroke:#f43f5e,stroke-width:2px
    style Existing fill:#064e3b,stroke:#10b981,stroke-width:2px
        </pre>
      </div>

      <h2>Future Improvement Roadmap (Limitation Resolution Order)</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Step 1 — Foundation</div>
          <div class="timeline-title">VFS + Dynamic Loading</div>
          <p>Resolves: Static Data, No Dynamic Project Loading. Enables real file persistence and folder import.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Step 2 — Workspace</div>
          <div class="timeline-title">Multi-File + Tab Manager</div>
          <p>Resolves: Single-File Workflow, No Workspace Management. Enables project-scoped operations.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Step 3 — Intelligence</div>
          <div class="timeline-title">AST + Dependency Graph + LSP</div>
          <p>Resolves: No Project Understanding, No Dependency Graph. Enables semantic code operations.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Step 4 — AI Layer</div>
          <div class="timeline-title">Context Engine + Agent Orchestrator</div>
          <p>Resolves: No AI Context Pipeline. Enables intent-driven development.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Step 5 — Scale &amp; Memory</div>
          <div class="timeline-title">Workers + Project Memory + WebContainers</div>
          <p>Resolves: Limited Scalability, Browser Constraints, No Project Memory. Enables production-grade usage.</p>
        </div>
      </div>

      <div class="callout callout-important">
        <div class="callout-title">The Case for New Architecture</div>
        <p>
          These ten limitations are not bugs to patch — they are <strong>missing subsystems</strong>. Adding AI chat to the current <code>app.js</code> bootstrap would produce a chatbot beside a text viewer, not an intelligent development platform. The path forward requires building a decoupled, multi-layer architecture where Monaco becomes one rendering component among twelve coordinated services. Section 7 defines that architecture.
        </p>
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
    subtitle: "CTO-level blueprint for a next-generation AI-first browser development platform with twelve decoupled subsystems.",
    badge: "SYSTEM DESIGN",
    content: `
      <h2>Architectural Thesis</h2>
      <p>
        The next-generation platform decouples <strong>intent processing</strong> from <strong>code rendering</strong>. Monaco Editor becomes a pure visualization pane — one component in a twelve-subsystem architecture where AI agents orchestrate project understanding, file mutation, and verification through structured pipelines rather than ad-hoc chat interactions.
      </p>

      <h2>Layer Architecture Overview</h2>
      <div class="mermaid-container">
        <div class="mermaid-label">Diagram 7.1 — Four-Layer Platform Architecture</div>
        <pre class="mermaid">
flowchart TB
    subgraph L1["Layer 1 — Interaction & Presentation"]
        UI[Developer Intent UI]
        Monaco[Monaco Rendering Layer]
        Preview[Live Preview Sandbox]
    end

    subgraph L2["Layer 2 — AI Orchestration"]
        Agent[AI Agent]
        Prompt[Prompt Engine]
    end

    subgraph L3["Layer 3 — Intelligence & Context"]
        Context[Project Context Engine]
        DepAnalyzer[Dependency Analyzer]
        LangSvc[Language Services]
        Memory[Project Memory]
    end

    subgraph L4["Layer 4 — Infrastructure & Extension"]
        Workspace[Workspace Manager]
        VFS[Virtual File System]
        Plugin[Plugin Manager]
        ExtLayer[Future Extension Layer]
    end

    UI --> Agent
    Agent --> Prompt
    Prompt --> Context
    Context --> DepAnalyzer
    Context --> LangSvc
    Agent --> VFS
    VFS --> Monaco
    VFS --> Preview
    Workspace --> VFS
    Agent --> Memory
    Plugin --> Agent
    ExtLayer --> Plugin

    style L1 fill:#172554,stroke:#60a5fa
    style L2 fill:#1e1b4b,stroke:#8b5cf6
    style L3 fill:#064e3b,stroke:#10b981
    style L4 fill:#1e293b,stroke:#3b82f6
        </pre>
      </div>

      <h2>Component Interaction Sequence</h2>
      <div class="mermaid-container">
        <div class="mermaid-label">Diagram 7.2 — Intent-to-Diff Execution Flow</div>
        <pre class="mermaid">
sequenceDiagram
    autonumber
    actor Dev as Developer
    participant Agent as AI Agent
    participant Prompt as Prompt Engine
    participant Context as Project Context Engine
    participant Dep as Dependency Analyzer
    participant VFS as Virtual File System
    participant Monaco as Monaco Layer
    participant Mem as Project Memory

    Dev->>Agent: Natural language intent
    Agent->>Context: Request relevant symbols & files
    Context->>Dep: Query dependency graph
    Dep-->>Context: Importers, exports, route tree
    Context-->>Agent: Pruned context bundle
    Agent->>Prompt: Assemble structured prompt
    Prompt-->>Agent: Token-optimized payload
    Agent->>Agent: Generate execution plan
    Agent->>VFS: Apply atomic multi-file diffs
    VFS->>Monaco: Stream visual diff decorations
    VFS->>Mem: Record mutation event
    Monaco-->>Dev: Render diff for approval
    Dev->>Agent: Confirm or refine
        </pre>
      </div>

      <h2>Data Flow Architecture</h2>
      <div class="mermaid-container">
        <div class="mermaid-label">Diagram 7.3 — Unidirectional Data Flow</div>
        <pre class="mermaid">
flowchart LR
    Intent[User Intent] --> Agent[AI Agent]
    Agent --> Plan[Execution Plan]
    Plan --> Diff[Diff Generator]
    Diff --> VFS[VFS Write]
    VFS --> Index[Context Re-Index]
    Index --> Graph[Dependency Graph Update]
    VFS --> Render[Monaco Render]
    VFS --> Run[Live Preview]
    VFS --> Log[Project Memory Log]

    style Intent fill:#1e1b4b,stroke:#8b5cf6
    style VFS fill:#1e293b,stroke:#3b82f6
    style Render fill:#172554,stroke:#60a5fa
        </pre>
      </div>

      <h2>Responsibility Matrix</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Component</th>
              <th>Primary Responsibility</th>
              <th>Layer</th>
              <th>Depends On</th>
              <th>Consumed By</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>AI Agent</strong></td><td>Intent interpretation, plan execution, tool dispatch</td><td>AI Orchestration</td><td>Prompt Engine, Context Engine, VFS</td><td>Developer UI</td></tr>
            <tr><td><strong>Workspace Manager</strong></td><td>Session state, tabs, project root, layout</td><td>Infrastructure</td><td>VFS</td><td>Monaco, UI Shell</td></tr>
            <tr><td><strong>Project Context Engine</strong></td><td>Semantic index, symbol tables, RAG retrieval</td><td>Intelligence</td><td>Dependency Analyzer, Language Services</td><td>Prompt Engine, AI Agent</td></tr>
            <tr><td><strong>Prompt Engine</strong></td><td>Token-budgeted LLM payload assembly</td><td>AI Orchestration</td><td>Context Engine</td><td>AI Agent</td></tr>
            <tr><td><strong>Virtual File System</strong></td><td>File CRUD, OPFS persistence, disk sync</td><td>Infrastructure</td><td>Browser storage APIs</td><td>All layers</td></tr>
            <tr><td><strong>Monaco Rendering Layer</strong></td><td>Text display, diff highlights, manual edits</td><td>Presentation</td><td>VFS</td><td>Developer</td></tr>
            <tr><td><strong>Live Preview</strong></td><td>WebContainer runtime, hot reload</td><td>Presentation</td><td>VFS</td><td>Developer</td></tr>
            <tr><td><strong>Plugin Manager</strong></td><td>Extension lifecycle, hook dispatch</td><td>Extension</td><td>Future Extension Layer</td><td>AI Agent, VFS</td></tr>
            <tr><td><strong>Project Memory</strong></td><td>Event stream, undo/redo, AI history</td><td>Intelligence</td><td>VFS</td><td>AI Agent, Developer</td></tr>
            <tr><td><strong>Dependency Analyzer</strong></td><td>Import graph, symbol references, blast radius</td><td>Intelligence</td><td>Language Services</td><td>Context Engine, AI Agent</td></tr>
            <tr><td><strong>Language Services</strong></td><td>LSP diagnostics, completion, go-to-def</td><td>Intelligence</td><td>VFS, Tree-Sitter WASM</td><td>Monaco, Context Engine</td></tr>
            <tr><td><strong>Future Extension Layer</strong></td><td>Tool protocol, marketplace SDK, API surface</td><td>Extension</td><td>Plugin Manager</td><td>Third-party developers</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Component Specifications</h2>

      <div class="accordion open">
        <div class="accordion-header"><span>1. AI Agent</span><span class="accordion-icon">▼</span></div>
        <div class="accordion-body">
          <p class="spec-label">Responsibility</p>
          <p>Central orchestrator interpreting developer intent, decomposing tasks into execution plans, dispatching tools (file search, AST query, diff apply), and managing multi-step agentic workflows with human-in-the-loop approval gates.</p>
          <p class="spec-label">Inputs</p>
          <p>Natural language prompts, structured commands, context bundles from Project Context Engine, tool results, user approval/rejection signals.</p>
          <p class="spec-label">Outputs</p>
          <p>Execution plans, multi-file unified diffs, tool call sequences, streaming status events, error recovery strategies.</p>
          <p class="spec-label">Internal Workflow</p>
          <p>Parse intent → classify task type → query context → build plan → execute tools sequentially → validate AST → stream diffs → await approval → commit to VFS → log to Project Memory.</p>
          <p class="spec-label">Interactions</p>
          <p>Consumes Prompt Engine payloads; reads/writes VFS; queries Context Engine and Dependency Analyzer; renders via Monaco; logs to Project Memory; invokes Plugin hooks.</p>
          <p class="spec-label">Benefits</p>
          <p>Transforms the platform from a text editor into an autonomous engineering assistant capable of cross-file reasoning and atomic change application.</p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header"><span>2. Workspace Manager</span><span class="accordion-icon">▼</span></div>
        <div class="accordion-body">
          <p class="spec-label">Responsibility</p>
          <p>Owns workspace session lifecycle: project root path, open file set, active tab, dirty flags, sidebar layout, and recent file history.</p>
          <p class="spec-label">Inputs</p>
          <p>Folder picker selections, VFS mount events, tab switch commands, session restore tokens.</p>
          <p class="spec-label">Outputs</p>
          <p>Active file path, open tab list, workspace metadata, layout state snapshots.</p>
          <p class="spec-label">Internal Workflow</p>
          <p>Mount VFS root → enumerate directory tree → initialize tab state → route active file changes to Monaco model registry → persist session on close.</p>
          <p class="spec-label">Interactions</p>
          <p>Coordinates VFS reads/writes; tells Monaco which model to display; notifies Context Engine of workspace scope changes.</p>
          <p class="spec-label">Benefits</p>
          <p>Provides the project boundary that scopes all search, AI context, and refactoring operations to a coherent codebase.</p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header"><span>3. Project Context Engine</span><span class="accordion-icon">▼</span></div>
        <div class="accordion-body">
          <p class="spec-label">Responsibility</p>
          <p>Maintains a real-time semantic index of the entire workspace: symbol tables, function signatures, route definitions, config schemas, and RAG-retrievable code embeddings.</p>
          <p class="spec-label">Inputs</p>
          <p>File change events from VFS, parsed ASTs from Language Services, dependency edges from Dependency Analyzer.</p>
          <p class="spec-label">Outputs</p>
          <p>Context bundles (ranked file snippets), symbol lookup results, architecture summaries, embedding vectors for similarity search.</p>
          <p class="spec-label">Internal Workflow</p>
          <p>On file change → incremental AST update → update symbol index → refresh dependency edges → re-rank context cache → serve queries from AI Agent/Prompt Engine.</p>
          <p class="spec-label">Interactions</p>
          <p>Fed by Language Services and Dependency Analyzer; serves Prompt Engine and AI Agent; triggers Monaco diagnostic markers.</p>
          <p class="spec-label">Benefits</p>
          <p>Enables precise, token-efficient AI context instead of blind whole-repo dumps — the foundation of reliable code generation.</p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header"><span>4. Prompt Engine</span><span class="accordion-icon">▼</span></div>
        <div class="accordion-body">
          <p class="spec-label">Responsibility</p>
          <p>Assembles structured LLM payloads combining system rules, pruned context snippets, active file state, diff history, and formatting constraints within strict token budgets.</p>
          <p class="spec-label">Inputs</p>
          <p>Context bundles, user intent, model provider config, token limits, conversation history from Project Memory.</p>
          <p class="spec-label">Outputs</p>
          <p>Provider-specific prompt payloads (OpenAI messages, Anthropic blocks, Gemini parts), token usage estimates.</p>
          <p class="spec-label">Internal Workflow</p>
          <p>Receive intent → select context via graph distance ranking → strip comments/whitespace → inject system rules → validate token count → truncate with priority → dispatch to provider.</p>
          <p class="spec-label">Interactions</p>
          <p>Consumes Context Engine; serves AI Agent; reads Project Memory for conversation continuity.</p>
          <p class="spec-label">Benefits</p>
          <p>Maximizes LLM accuracy per token spent — critical for cost control and hallucination reduction on large codebases.</p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header"><span>5. Virtual File System (VFS)</span><span class="accordion-icon">▼</span></div>
        <div class="accordion-body">
          <p class="spec-label">Responsibility</p>
          <p>Unified file abstraction providing CRUD operations, atomic multi-file transactions, OPFS persistence, and optional local disk synchronization via File System Access API.</p>
          <p class="spec-label">Inputs</p>
          <p>File read/write/delete requests, diff patches from AI Agent, directory mount commands, disk sync triggers.</p>
          <p class="spec-label">Outputs</p>
          <p>File contents, directory listings, change events (pub/sub), transaction commit/rollback confirmations.</p>
          <p class="spec-label">Internal Workflow</p>
          <p>Receive operation → validate path → apply to OPFS buffer → emit change event → notify subscribers (Monaco, Context Engine, Preview) → optionally sync to disk handle.</p>
          <p class="spec-label">Interactions</p>
          <p>Central hub: all components read/write through VFS. Monaco binds models to VFS buffers. WebContainer mounts VFS as root filesystem.</p>
          <p class="spec-label">Benefits</p>
          <p>Decouples storage from rendering — enables AI diffs, undo, cloud sync, and live preview from a single source of truth.</p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header"><span>6. Monaco Rendering Layer</span><span class="accordion-icon">▼</span></div>
        <div class="accordion-body">
          <p class="spec-label">Responsibility</p>
          <p>Pure visual presentation: syntax highlighting, diff decorations (green additions, red deletions), inline AI suggestions, manual edit capture, and line/status bar binding.</p>
          <p class="spec-label">Inputs</p>
          <p>Active file content from VFS, theme config, decoration ranges, diagnostic markers from Language Services.</p>
          <p class="spec-label">Outputs</p>
          <p>User keystroke edits (written back to VFS), cursor position, selected text ranges, approval/rejection UI events.</p>
          <p class="spec-label">Internal Workflow</p>
          <p>Bind ITextModel to VFS path → apply theme → render viewport → listen for edits → debounce write-back to VFS → apply inline decorations on AI diff stream.</p>
          <p class="spec-label">Interactions</p>
          <p>Read-only consumer of VFS for display; write-back on manual edits; receives decorations from AI Agent diff stream.</p>
          <p class="spec-label">Benefits</p>
          <p>Leverages battle-tested VS Code rendering engine without inheriting desktop IDE complexity — exactly the role Monaco was designed for.</p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header"><span>7. Live Preview</span><span class="accordion-icon">▼</span></div>
        <div class="accordion-body">
          <p class="spec-label">Responsibility</p>
          <p>In-browser execution environment running Node.js servers, npm scripts, and frontend dev servers via WebContainer WASM sandbox with hot-reload on VFS changes.</p>
          <p class="spec-label">Inputs</p>
          <p>VFS project root mount, run configuration (start script, port), file change events.</p>
          <p class="spec-label">Outputs</p>
          <p>Live iframe preview URL, console log stream, process exit codes, network request traces.</p>
          <p class="spec-label">Internal Workflow</p>
          <p>Mount VFS → boot WebContainer kernel → npm install (cached) → execute start script → watch VFS changes → hot-reload affected modules → stream logs to UI panel.</p>
          <p class="spec-label">Interactions</p>
          <p>Mounts VFS as filesystem; displays output in iframe panel; AI Agent can query runtime errors for self-correction loops.</p>
          <p class="spec-label">Benefits</p>
          <p>Closes the edit-verify loop inside the browser — developers see AI changes running instantly without external servers.</p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header"><span>8. Plugin Manager</span><span class="accordion-icon">▼</span></div>
        <div class="accordion-body">
          <p class="spec-label">Responsibility</p>
          <p>Extension lifecycle management: registration, activation, hook dispatch, sandboxed execution, and version compatibility enforcement.</p>
          <p class="spec-label">Inputs</p>
          <p>Plugin manifests, hook events (onBeforeAIDiff, onFileSave, onContextBuild), user enable/disable commands.</p>
          <p class="spec-label">Outputs</p>
          <p>Hook callback results, registered AI tools, custom UI panel contributions, lint/format transformations.</p>
          <p class="spec-label">Internal Workflow</p>
          <p>Load manifest → validate permissions → register hooks → on event, dispatch to plugins in priority order → collect results → pass to requesting component.</p>
          <p class="spec-label">Interactions</p>
          <p>Extends AI Agent tool registry; intercepts VFS save events; augments Context Engine with custom analyzers.</p>
          <p class="spec-label">Benefits</p>
          <p>Enables ecosystem growth — domain-specific tools (OpenAPI generators, DB migrators) without modifying core platform code.</p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header"><span>9. Project Memory</span><span class="accordion-icon">▼</span></div>
        <div class="accordion-body">
          <p class="spec-label">Responsibility</p>
          <p>Append-only event store recording all file mutations, AI actions, user approvals, and session metadata for undo/redo, audit trails, and cross-session AI continuity.</p>
          <p class="spec-label">Inputs</p>
          <p>VFS commit events, AI Agent action logs, user feedback signals, session boundaries.</p>
          <p class="spec-label">Outputs</p>
          <p>Undo/redo stacks, time-travel snapshots, AI conversation history, audit export (JSON/CSV).</p>
          <p class="spec-label">Internal Workflow</p>
          <p>On mutation → append event to IndexedDB log → update undo stack → on undo, replay inverse operations on VFS → prune old events per retention policy.</p>
          <p class="spec-label">Interactions</p>
          <p>Written by AI Agent and VFS; read by Prompt Engine for conversation context; exposed to Developer via history panel.</p>
          <p class="spec-label">Benefits</p>
          <p>Builds trust in AI suggestions — every change is reversible, traceable, and learnable across sessions.</p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header"><span>10. Dependency Analyzer</span><span class="accordion-icon">▼</span></div>
        <div class="accordion-body">
          <p class="spec-label">Responsibility</p>
          <p>Constructs and maintains a directed graph of file imports, symbol references, type dependencies, and API route connections across the workspace.</p>
          <p class="spec-label">Inputs</p>
          <p>Parsed ASTs, module resolution rules (tsconfig paths, package.json), VFS file tree.</p>
          <p class="spec-label">Outputs</p>
          <p>Dependency DAG, blast-radius queries, circular dependency warnings, import path suggestions.</p>
          <p class="spec-label">Internal Workflow</p>
          <p>On file parse → extract import/export statements → resolve paths against project root → add edges to graph → on query, traverse graph with depth limit → return affected file set.</p>
          <p class="spec-label">Interactions</p>
          <p>Fed by Language Services; serves Context Engine (context pruning) and AI Agent (refactoring scope).</p>
          <p class="spec-label">Benefits</p>
          <p>Prevents AI from making locally-correct but globally-breaking changes — the safety net for multi-file code generation.</p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header"><span>11. Language Services</span><span class="accordion-icon">▼</span></div>
        <div class="accordion-body">
          <p class="spec-label">Responsibility</p>
          <p>Hosts Language Server Protocol clients in WebWorkers providing autocomplete, diagnostics, hover info, go-to-definition, find-references, and code actions.</p>
          <p class="spec-label">Inputs</p>
          <p>File contents from VFS, cursor position, LSP server WASM binaries (TypeScript, Python, etc.).</p>
          <p class="spec-label">Outputs</p>
          <p>Completion items, diagnostic markers, hover markdown, location URIs, code action lists.</p>
          <p class="spec-label">Internal Workflow</p>
          <p>Initialize LSP worker → sync VFS file on change via didOpen/didChange → on cursor move, request completion/hover → return results to Monaco providers.</p>
          <p class="spec-label">Interactions</p>
          <p>Reads VFS; feeds parsed ASTs to Dependency Analyzer and Context Engine; renders diagnostics in Monaco.</p>
          <p class="spec-label">Benefits</p>
          <p>Brings VS Code-grade language intelligence to the browser without Electron — validates AI output in real-time.</p>
        </div>
      </div>

      <div class="accordion">
        <div class="accordion-header"><span>12. Future Extension Layer</span><span class="accordion-icon">▼</span></div>
        <div class="accordion-body">
          <p class="spec-label">Responsibility</p>
          <p>Public API surface and SDK for third-party developers to build plugins, AI tools, custom language servers, and marketplace-distributed extensions.</p>
          <p class="spec-label">Inputs</p>
          <p>Extension SDK calls, marketplace package downloads, API key configurations.</p>
          <p class="spec-label">Outputs</p>
          <p>Registered extension capabilities, marketplace listings, versioned API contracts.</p>
          <p class="spec-label">Internal Workflow</p>
          <p>Publish SDK → developer builds extension → submit to marketplace → platform validates sandbox permissions → Plugin Manager loads on user install.</p>
          <p class="spec-label">Interactions</p>
          <p>Defines contracts consumed by Plugin Manager; exposes VFS, Context Engine, and AI Agent as extension APIs.</p>
          <p class="spec-label">Benefits</p>
          <p>Transforms the platform from a product into an ecosystem — the long-term moat for sustainable growth.</p>
        </div>
      </div>

      <div class="callout callout-important">
        <div class="callout-title">Design Principle</div>
        <p>
          Every component communicates through the VFS and event bus — never through direct DOM manipulation or shared global state. This mirrors the VS Code Extension Host pattern adapted for browser WebWorkers, ensuring each subsystem can be developed, tested, and replaced independently.
        </p>
      </div>
    `
  },

  /* ==========================================================================
     8. RESEARCH
     ========================================================================== */
  {
    id: "research",
    number: "08",
    title: "8. Research & Technology Decisions",
    subtitle: "Engineering research document evaluating ten foundational technologies for the AI-first browser platform.",
    badge: "RESEARCH PAPERS",
    content: `
      <h2>Research Methodology</h2>
      <p>
        Each technology below was evaluated against five criteria: browser compatibility, AI platform fit, implementation complexity, long-term maintainability, and ecosystem maturity. This is an engineering decision record, not a tutorial — conclusions drive architectural commitments in Sections 7 and 9.
      </p>

      <h2>Technology Evaluation Summary</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Technology</th>
              <th>Platform Role</th>
              <th>Adoption Priority</th>
              <th>Maturity</th>
              <th>Verdict</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Monaco Editor</strong></td><td>Rendering layer</td><td><span class="badge badge-green">P0 — Now</span></td><td>Production</td><td>Selected</td></tr>
            <tr><td><strong>VS Code Architecture</strong></td><td>Pattern reference</td><td><span class="badge badge-green">P0 — Now</span></td><td>Production</td><td>Adapt patterns</td></tr>
            <tr><td><strong>LSP</strong></td><td>Language intelligence</td><td><span class="badge badge-blue">P1 — Phase 4</span></td><td>Production</td><td>Selected</td></tr>
            <tr><td><strong>File System Access API</strong></td><td>Local disk binding</td><td><span class="badge badge-blue">P1 — Phase 3</span></td><td>Stable (Chrome)</td><td>Selected</td></tr>
            <tr><td><strong>WebContainers</strong></td><td>Live preview runtime</td><td><span class="badge badge-amber">P2 — Phase 6</span></td><td>Production</td><td>Selected</td></tr>
            <tr><td><strong>Dependency Graphs</strong></td><td>Context pruning</td><td><span class="badge badge-blue">P1 — Phase 4</span></td><td>Established pattern</td><td>Build custom</td></tr>
            <tr><td><strong>Incremental Parsing</strong></td><td>Real-time AST</td><td><span class="badge badge-blue">P1 — Phase 4</span></td><td>Production</td><td>Tree-Sitter</td></tr>
            <tr><td><strong>Context Engineering</strong></td><td>AI prompt quality</td><td><span class="badge badge-amber">P2 — Phase 5</span></td><td>Emerging</td><td>Build custom</td></tr>
            <tr><td><strong>AI Code Generation</strong></td><td>Core product value</td><td><span class="badge badge-amber">P2 — Phase 5</span></td><td>Rapidly evolving</td><td>Multi-provider</td></tr>
            <tr><td><strong>Future AI IDEs</strong></td><td>Competitive landscape</td><td><span class="badge badge-purple">P3 — Monitor</span></td><td>Early</td><td>Differentiate</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Detailed Research Modules</h2>

      <div class="limitation-block">
        <h3>8.1 — Monaco Editor</h3>
        <div class="limitation-grid">
          <div><dt>What It Is</dt><dd>The browser-native code editor engine extracted from VS Code. Provides virtualized DOM rendering, Monarch syntax tokenization, Web Worker language services, and a rich decorations/markers API.</dd></div>
          <div><dt>Why It Matters</dt><dd>It is the only production-grade editor core with full VS Code rendering parity that runs entirely in a browser tab without Electron.</dd></div>
          <div><dt>Advantages</dt><dd>Virtualized viewport (500K+ lines), VS Code keybindings, theming API, diff editor mode, massive ecosystem familiarity, CDN availability.</dd></div>
          <div><dt>Limitations</dt><dd>No file system, no workspace, no AI, no project model. AMD loader dependency. Large bundle (~2MB). Limited mobile support.</dd></div>
          <div><dt>Alternatives</dt><dd>CodeMirror 6 (lighter, less VS Code parity), Ace Editor (legacy), Prism (highlight-only, not an editor).</dd></div>
          <div><dt>Integration Strategy</dt><dd>Use as pure rendering pane bound to VFS text models. One ITextModel per open file. Decorations API for AI diff streaming. Never embed business logic in Monaco callbacks.</dd></div>
          <div><dt>Long-Term Value</dt><dd>Stable rendering foundation for 5+ years. Microsoft actively maintains parity with VS Code releases. Reduces UI engineering to near-zero.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>8.2 — VS Code Architecture</h3>
        <div class="limitation-grid">
          <div><dt>What It Is</dt><dd>Electron desktop app with multi-process architecture: main process, renderer, extension host, language servers, terminal, and debug adapter — all communicating via RPC.</dd></div>
          <div><dt>Why It Matters</dt><dd>It is the proven blueprint for decoupling editor rendering from language intelligence and extension execution — the exact pattern our browser platform must replicate.</dd></div>
          <div><dt>Advantages</dt><dd>Battle-tested separation of concerns. Extension isolation prevents plugin crashes from killing the editor. LSP standard originated here.</dd></div>
          <div><dt>Limitations</dt><dd>Desktop-bound (Node.js, Electron, native file I/O). Extension host assumes local process spawning. Cannot run directly in browser sandbox.</dd></div>
          <div><dt>Alternatives</dt><dd>Theia IDE (browser-adaptable Eclipse project), code-server (VS Code on server), custom greenfield architecture.</dd></div>
          <div><dt>Integration Strategy</dt><dd>Adapt the Extension Host → WebWorker pattern. Replace Node child_process with WebWorkers/WASM. Replace local FS with OPFS VFS. Keep Monaco as renderer.</dd></div>
          <div><dt>Long-Term Value</dt><dd>Any developer who knows VS Code extension development can contribute to our Plugin Manager with minimal retraining.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>8.3 — Language Server Protocol (LSP)</h3>
        <div class="limitation-grid">
          <div><dt>What It Is</dt><dd>JSON-RPC protocol standardizing communication between editors and language intelligence servers (autocomplete, diagnostics, hover, go-to-definition, refactoring).</dd></div>
          <div><dt>Why It Matters</dt><dd>Provides production-grade language intelligence without building parsers for every language. TypeScript, Python, Rust, Go servers already exist.</dd></div>
          <div><dt>Advantages</dt><dd>Language-agnostic editor integration. Massive server ecosystem. Standard message format. Monaco has built-in LSP client adapters.</dd></div>
          <div><dt>Limitations</dt><dd>Servers expect file system access (needs VFS adapter). WASM compilation required for browser. Memory-heavy for large projects. WebSocket/worker transport adds latency.</dd></div>
          <div><dt>Alternatives</dt><dd>Direct Tree-Sitter queries (lighter, less semantic), Babel/TypeScript compiler API in workers, custom per-language parsers.</dd></div>
          <div><dt>Integration Strategy</dt><dd>Compile language servers to WASM. Run in dedicated WebWorkers. VFS implements LSP file notification protocol (didOpen, didChange, didClose). Bridge to Monaco providers.</dd></div>
          <div><dt>Long-Term Value</dt><dd>Instant multi-language support. New languages become available as the LSP ecosystem grows — zero platform code changes.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>8.4 — File System Access API</h3>
        <div class="limitation-grid">
          <div><dt>What It Is</dt><dd>Browser API (<code>showDirectoryPicker</code>, <code>showOpenFilePicker</code>) granting web apps read/write access to user-selected local directories via persistent file handles.</dd></div>
          <div><dt>Why It Matters</dt><dd>Enables "Open Folder" workflow in a browser IDE — the minimum viable project loading experience developers expect.</dd></div>
          <div><dt>Advantages</dt><dd>Direct disk read/write without upload/download. Persistent permissions across sessions. Works with existing local Git repos.</dd></div>
          <div><dt>Limitations</dt><dd>Chromium-only (no Firefox/Safari as of 2026). Requires HTTPS or localhost. User must grant permission per folder. No recursive watch natively.</dd></div>
          <div><dt>Alternatives</dt><dd>OPFS-only (no disk sync), drag-and-drop ZIP import, cloud Git clone via API, Electron/Tauri for full FS access.</dd></div>
          <div><dt>Integration Strategy</dt><dd>Dual-tier VFS: OPFS as primary high-speed cache, File System Access API for disk sync on save. Graceful degradation to OPFS-only on unsupported browsers.</dd></div>
          <div><dt>Long-Term Value</dt><dd>As browser support expands, becomes the standard bridge between browser IDE and local development workflows.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>8.5 — WebContainers</h3>
        <div class="limitation-grid">
          <div><dt>What It Is</dt><dd>StackBlitz technology running a Node.js-compatible OS kernel compiled to WebAssembly inside a browser tab, with virtual TCP sockets, process tree, and npm support.</dd></div>
          <div><dt>Why It Matters</dt><dd>Enables live backend preview (Express, Fastify, Next.js) without external servers — critical for closing the AI edit-verify loop in-browser.</dd></div>
          <div><dt>Advantages</dt><dd>Full npm install/run cycle. Sub-second boot times. No cloud infrastructure cost. Sandboxed security boundary.</dd></div>
          <div><dt>Limitations</dt><dd>Chromium-only. No native binary addons. Memory ceiling (~1GB practical). Cold start for large node_modules. Licensing considerations for commercial use.</dd></div>
          <div><dt>Alternatives</dt><dd>Remote dev containers (GitHub Codespaces), Docker via WebAssembly (runwasi), client-side esbuild for frontend-only preview.</dd></div>
          <div><dt>Integration Strategy</dt><dd>Mount VFS as WebContainer filesystem root. Auto-detect package.json start script. Stream console output to UI panel. Trigger hot-reload on VFS file change events.</dd></div>
          <div><dt>Long-Term Value</dt><dd>Transforms browser IDE from code viewer to full-stack development environment — the key differentiator from simple online editors.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>8.6 — Dependency Graphs</h3>
        <div class="limitation-grid">
          <div><dt>What It Is</dt><dd>Directed graph data structure mapping file-to-file imports, symbol references, type dependencies, and API route connections across a codebase.</dd></div>
          <div><dt>Why It Matters</dt><dd>AI code generation without dependency awareness produces locally-correct but globally-breaking changes. The graph is the safety net.</dd></div>
          <div><dt>Advantages</dt><dd>Enables blast-radius analysis, smart context pruning, impact visualization, and safe multi-file refactoring.</dd></div>
          <div><dt>Limitations</dt><dd>Dynamic imports and runtime requires are hard to resolve statically. Graph must be incrementally updated on every edit. Large monorepos produce massive graphs.</dd></div>
          <div><dt>Alternatives</dt><dd>Full-repo context dump to LLM (expensive, imprecise), manual file selection by user, ripgrep-based text search without semantic links.</dd></div>
          <div><dt>Integration Strategy</dt><dd>Build DAG in WebWorker from Tree-Sitter AST exports/imports. Store as adjacency list in IndexedDB. Query by BFS/DFS with depth limits for context pruning.</dd></div>
          <div><dt>Long-Term Value</dt><dd>Foundation for autonomous refactoring, architecture visualization, and intelligent navigation — capabilities no text editor provides.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>8.7 — Incremental Parsing (Tree-Sitter)</h3>
        <div class="limitation-grid">
          <div><dt>What It Is</dt><dd>Parser generator producing fast, incremental AST updates using GLR parsing algorithms. Re-parses only affected tree nodes on edit — sub-millisecond for typical changes.</dd></div>
          <div><dt>Why It Matters</dt><dd>Full re-parse on every keystroke is infeasible for large files. Incremental parsing enables real-time AST indexing without blocking the UI thread.</dd></div>
          <div><dt>Advantages</dt><dd>40+ language grammars. WASM compilation for browser. Error-tolerant parsing (works on incomplete code). Used by GitHub, Neovim, Zed.</dd></div>
          <div><dt>Limitations</dt><dd>Syntax-level only (no type information). WASM binary adds ~200KB per language. Custom grammars require Rust toolchain.</dd></div>
          <div><dt>Alternatives</dt><dd>Babel parser (JS-only, not incremental), TypeScript compiler API (heavy, JS/TS only), regex-based extraction (fragile).</dd></div>
          <div><dt>Integration Strategy</dt><dd>Run Tree-Sitter WASM in dedicated WebWorker. On VFS file change, send edit delta → receive updated AST → feed to Dependency Analyzer and Context Engine.</dd></div>
          <div><dt>Long-Term Value</dt><dd>Real-time code understanding at scale — the prerequisite for any intelligent feature (AI, navigation, refactoring, linting).</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>8.8 — Context Engineering</h3>
        <div class="limitation-grid">
          <div><dt>What It Is</dt><dd>The discipline of selecting, ranking, compressing, and structuring code context for LLM prompts to maximize generation accuracy within token budget constraints.</dd></div>
          <div><dt>Why It Matters</dt><dd>LLM context windows are finite and expensive. Blindly sending entire repositories produces worse results than sending 2KB of precisely targeted context.</dd></div>
          <div><dt>Advantages</dt><dd>Dramatically improves AI accuracy. Reduces token costs by 10-50x. Enables working with codebases far larger than context windows.</dd></div>
          <div><dt>Limitations</dt><dd>No established standard methodology. Requires tuning per project type. Ranking algorithms may miss relevant context. Embedding models add infrastructure.</dd></div>
          <div><dt>Alternatives</dt><dd>Full-file inclusion (simple, wasteful), RAG with vector DB (powerful, complex), user manual file selection (reliable, slow).</dd></div>
          <div><dt>Integration Strategy</dt><dd>Hybrid ranking: dependency graph distance (primary) + BM25 keyword match (secondary) + optional vector similarity (tertiary). Strip comments/whitespace. Inject only function signatures for distant dependencies.</dd></div>
          <div><dt>Long-Term Value</dt><dd>The moat of AI coding platforms — raw LLM access is commoditized, but context quality determines output reliability.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>8.9 — AI Code Generation</h3>
        <div class="limitation-grid">
          <div><dt>What It Is</dt><dd>Large Language Models (GPT-4, Claude, Gemini) trained on code corpora, capable of generating, modifying, explaining, and refactoring source code from natural language instructions.</dd></div>
          <div><dt>Why It Matters</dt><dd>This is the core value proposition — transforming developer intent into executable code changes across multiple files autonomously.</dd></div>
          <div><dt>Advantages</dt><dd>Handles boilerplate, cross-file refactoring, documentation, test generation. Rapidly improving capability. Multi-provider competition drives quality up and cost down.</dd></div>
          <div><dt>Limitations</dt><dd>Hallucinated imports/functions. Non-deterministic output. Token costs at scale. Latency for complex tasks. Requires validation pipeline.</dd></div>
          <div><dt>Alternatives</dt><dd>Rule-based code templates (reliable, inflexible), fine-tuned smaller models (cheaper, less capable), human-only editing (slow, reliable).</dd></div>
          <div><dt>Integration Strategy</dt><dd>Multi-provider abstraction layer. Structured diff output format (not free text). Pre-apply validation via AST/LSP before rendering. Human approval gate before VFS commit.</dd></div>
          <div><dt>Long-Term Value</dt><dd>As models improve, the platform's value increases without code changes — the AI Agent layer is provider-agnostic by design.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>8.10 — Future AI IDEs</h3>
        <div class="limitation-grid">
          <div><dt>What It Is</dt><dd>Emerging category of development environments (Cursor, Windsurf, Devin, Replit Agent) where AI is the primary interface rather than a sidebar addon to a traditional editor.</dd></div>
          <div><dt>Why It Matters</dt><dd>Defines the competitive landscape and user expectations our platform must meet or exceed to be viable.</dd></div>
          <div><dt>Advantages</dt><dd>Validates market demand. Open-source models reducing lock-in. Browser-native approaches (StackBlitz) proving feasibility.</dd></div>
          <div><dt>Limitations</dt><dd>Most are Electron/desktop-bound. Vendor lock-in to specific LLM providers. Limited customization. Proprietary context engines.</dd></div>
          <div><dt>Alternatives</dt><dd>Build on Cursor/Windsurf (fast, no control), fork VS Code (heavy, Electron-bound), greenfield browser platform (this project).</dd></div>
          <div><dt>Integration Strategy</dt><dd>Differentiate on browser-native zero-install, open plugin ecosystem, multi-provider AI, and transparent context engineering — not on competing with desktop IDE feature parity.</dd></div>
          <div><dt>Long-Term Value</dt><dd>First-mover advantage in browser-native AI-first IDE space. Platform becomes infrastructure others build on via Plugin Manager marketplace.</dd></div>
        </div>
      </div>

      <div class="callout callout-tip">
        <div class="callout-title">Architecture Note — Technology Stack Cohesion</div>
        <p>
          These ten technologies are not independent choices — they form a dependency chain: <strong>VFS → Tree-Sitter → Dependency Graph → Context Engineering → LSP → AI Agent → Monaco Render → WebContainer Preview</strong>. Each layer must be operational before the next delivers value. The roadmap in Section 9 respects this ordering.
        </p>
      </div>

      <h2>Build vs. Buy Decision Matrix</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Capability</th>
              <th>Build Custom</th>
              <th>Integrate Existing</th>
              <th>Decision</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Code rendering</td><td>6+ months</td><td>Monaco (CDN)</td><td><span class="badge badge-green">Integrate</span></td></tr>
            <tr><td>File storage</td><td>2 months</td><td>OPFS + FS Access API</td><td><span class="badge badge-green">Integrate</span></td></tr>
            <tr><td>Syntax parsing</td><td>12+ months per language</td><td>Tree-Sitter WASM</td><td><span class="badge badge-green">Integrate</span></td></tr>
            <tr><td>Language intelligence</td><td>18+ months per language</td><td>LSP servers</td><td><span class="badge badge-green">Integrate</span></td></tr>
            <tr><td>Runtime preview</td><td>12+ months</td><td>WebContainers</td><td><span class="badge badge-green">Integrate</span></td></tr>
            <tr><td>AI context engine</td><td>3-4 months</td><td>No suitable product</td><td><span class="badge badge-blue">Build</span></td></tr>
            <tr><td>AI agent orchestrator</td><td>2-3 months</td><td>LangChain (partial)</td><td><span class="badge badge-blue">Build</span></td></tr>
            <tr><td>Dependency graph</td><td>1-2 months</td><td>No browser-native product</td><td><span class="badge badge-blue">Build</span></td></tr>
          </tbody>
        </table>
      </div>
    `
  },

  /* ==========================================================================
     9. ROADMAP
     ========================================================================== */
  {
    id: "roadmap",
    number: "09",
    title: "9. Implementation Roadmap & Milestones",
    subtitle: "Nine-phase execution plan from research validation to production platform with future expansion.",
    badge: "EXECUTION PLAN",
    content: `
      <h2>Roadmap Overview</h2>
      <p>
        Development is structured into nine logical phases, each producing independently testable deliverables. Phases respect the technology dependency chain identified in Section 8 — VFS before workspace, workspace before intelligence, intelligence before AI integration.
      </p>

      <div class="mermaid-container">
        <div class="mermaid-label">Diagram 9.1 — Phase Dependency Graph</div>
        <pre class="mermaid">
flowchart LR
    P1[Phase 1 - Research] --> P2[Phase 2 - Core Editor]
    P2 --> P3[Phase 3 - Workspace]
    P3 --> P4[Phase 4 - Dynamic FS]
    P4 --> P5[Phase 5 - AI Context]
    P5 --> P6[Phase 6 - AI Integration]
    P6 --> P7[Phase 7 - Testing]
    P7 --> P8[Phase 8 - Production]
    P8 --> P9[Phase 9 - Expansion]

    style P1 fill:#064e3b,stroke:#10b981
    style P6 fill:#1e1b4b,stroke:#8b5cf6
    style P8 fill:#172554,stroke:#60a5fa
        </pre>
      </div>

      <h2>Phase Timeline</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 1 — Completed</div>
          <div class="timeline-title">Research &amp; Architecture Specification</div>
          <p>Q2 2026 — Current documentation, prototype audit, technology evaluation.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 2 — Q3 2026</div>
          <div class="timeline-title">Core Editor Enhancement</div>
          <p>Multi-model Monaco, theme system, keyboard shortcuts, diff view mode.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 3 — Q3 2026</div>
          <div class="timeline-title">Workspace Management</div>
          <p>File tree sidebar, tab controller, session state, layout persistence.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 4 — Q4 2026</div>
          <div class="timeline-title">Dynamic File System</div>
          <p>OPFS VFS, File System Access API, folder import, project memory events.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 5 — Q4 2026</div>
          <div class="timeline-title">AI Context Engine</div>
          <p>Tree-Sitter WASM, dependency graph, LSP integration, context ranking.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 6 — Q1 2027</div>
          <div class="timeline-title">AI Integration</div>
          <p>Agent orchestrator, prompt engine, streaming diffs, multi-provider bridge.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 7 — Q1 2027</div>
          <div class="timeline-title">Testing &amp; Optimization</div>
          <p>Worker hardening, memory profiling, E2E test suite, performance benchmarks.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 8 — Q2 2027</div>
          <div class="timeline-title">Production Release</div>
          <p>PWA, CDN deployment, WebContainer preview, SSO, security audit.</p>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-phase">Phase 9 — Q3 2027+</div>
          <div class="timeline-title">Future Expansion</div>
          <p>Plugin marketplace, cloud workspaces, collaborative editing, voice programming.</p>
        </div>
      </div>

      <h2>Detailed Phase Specifications</h2>

      <div class="milestone-grid">
        <div class="milestone-card phase-complete">
          <div class="milestone-phase">Phase 1 — Research</div>
          <div class="milestone-title">Research &amp; Architecture Specification</div>
          <p class="milestone-meta"><strong>Objective:</strong> Validate technical feasibility and produce exhaustive architecture documentation.</p>
          <p class="milestone-meta"><strong>Features:</strong> Prototype audit, technology evaluation, gap analysis, system design, roadmap planning.</p>
          <p class="milestone-meta"><strong>Deliverables:</strong> This documentation site, CORS file:// fix, modular Monaco prototype (v5).</p>
          <p class="milestone-meta"><strong>Risks:</strong> Over-documentation without implementation momentum.</p>
          <p class="milestone-meta"><strong>Dependencies:</strong> None — foundational phase.</p>
          <p class="milestone-meta"><strong>Success Criteria:</strong> Architecture approved. All 12 documentation sections complete. Prototype renders in browser.</p>
        </div>

        <div class="milestone-card">
          <div class="milestone-phase">Phase 2 — Core Editor</div>
          <div class="milestone-title">Core Editor Enhancement</div>
          <p class="milestone-meta"><strong>Objective:</strong> Evolve Monaco from single-file demo to multi-model editor foundation.</p>
          <p class="milestone-meta"><strong>Features:</strong> Multi-model registry, diff editor view, enhanced theming, command palette skeleton, keyboard shortcut system.</p>
          <p class="milestone-meta"><strong>Deliverables:</strong> Refactored editor core module, model lifecycle manager, diff decoration prototype.</p>
          <p class="milestone-meta"><strong>Risks:</strong> Monaco AMD loader conflicts with ES module architecture.</p>
          <p class="milestone-meta"><strong>Dependencies:</strong> Phase 1 architecture decisions.</p>
          <p class="milestone-meta"><strong>Success Criteria:</strong> Switch between 3+ in-memory file models. Render inline diff decorations.</p>
        </div>

        <div class="milestone-card">
          <div class="milestone-phase">Phase 3 — Workspace</div>
          <div class="milestone-title">Workspace Management</div>
          <p class="milestone-meta"><strong>Objective:</strong> Introduce project-scoped session management with file tree and tab system.</p>
          <p class="milestone-meta"><strong>Features:</strong> Sidebar file tree, tab bar, active file routing, dirty indicators, session restore.</p>
          <p class="milestone-meta"><strong>Deliverables:</strong> Workspace Manager service, file tree UI component, tab controller module.</p>
          <p class="milestone-meta"><strong>Risks:</strong> UI complexity explosion. State synchronization bugs between tabs and models.</p>
          <p class="milestone-meta"><strong>Dependencies:</strong> Phase 2 multi-model editor.</p>
          <p class="milestone-meta"><strong>Success Criteria:</strong> Open 10+ files in tabs. Tree navigation switches active editor. Session persists in sessionStorage.</p>
        </div>

        <div class="milestone-card">
          <div class="milestone-phase">Phase 4 — Dynamic FS</div>
          <div class="milestone-title">Dynamic File System</div>
          <p class="milestone-meta"><strong>Objective:</strong> Replace static sample data with real file persistence and project loading.</p>
          <p class="milestone-meta"><strong>Features:</strong> OPFS-backed VFS, File System Access API folder picker, drag-drop import, auto-save, project memory event log.</p>
          <p class="milestone-meta"><strong>Deliverables:</strong> VFS module, OPFS worker, folder import UI, undo/redo stack.</p>
          <p class="milestone-meta"><strong>Risks:</strong> OPFS browser compatibility gaps. File handle permission revocation. Large folder import performance.</p>
          <p class="milestone-meta"><strong>Dependencies:</strong> Phase 3 workspace manager.</p>
          <p class="milestone-meta"><strong>Success Criteria:</strong> Open local folder via picker. Edit files. Refresh page — changes persist. Undo last edit.</p>
        </div>

        <div class="milestone-card">
          <div class="milestone-phase">Phase 5 — AI Context</div>
          <div class="milestone-title">AI Context Engine</div>
          <p class="milestone-meta"><strong>Objective:</strong> Build semantic project understanding for intelligent code operations.</p>
          <p class="milestone-meta"><strong>Features:</strong> Tree-Sitter WASM parser, dependency graph builder, LSP worker integration, context ranking engine, symbol search.</p>
          <p class="milestone-meta"><strong>Deliverables:</strong> Context Engine worker, dependency DAG store, LSP bridge, go-to-definition working.</p>
          <p class="milestone-meta"><strong>Risks:</strong> WASM binary size. Parser performance on large files. LSP server memory consumption.</p>
          <p class="milestone-meta"><strong>Dependencies:</strong> Phase 4 VFS (needs real files to parse).</p>
          <p class="milestone-meta"><strong>Success Criteria:</strong> Go-to-definition works cross-file. Dependency graph visualized. Context bundle generated for sample query.</p>
        </div>

        <div class="milestone-card phase-future">
          <div class="milestone-phase">Phase 6 — AI Integration</div>
          <div class="milestone-title">AI Agent Integration</div>
          <p class="milestone-meta"><strong>Objective:</strong> Connect LLM providers to the platform for intent-driven code generation.</p>
          <p class="milestone-meta"><strong>Features:</strong> AI Agent orchestrator, Prompt Engine, multi-provider API bridge, streaming diff parser, approval UI.</p>
          <p class="milestone-meta"><strong>Deliverables:</strong> Agent module, prompt templates, diff applicator, provider config UI.</p>
          <p class="milestone-meta"><strong>Risks:</strong> AI hallucination producing broken code. Token cost overruns. Streaming diff race conditions.</p>
          <p class="milestone-meta"><strong>Dependencies:</strong> Phase 5 context engine (AI needs project understanding).</p>
          <p class="milestone-meta"><strong>Success Criteria:</strong> Natural language prompt modifies 3+ files correctly. Diffs rendered in Monaco. User approval before commit.</p>
        </div>

        <div class="milestone-card phase-future">
          <div class="milestone-phase">Phase 7 — Testing</div>
          <div class="milestone-title">Testing &amp; Optimization</div>
          <p class="milestone-meta"><strong>Objective:</strong> Harden platform for real-world project sizes and usage patterns.</p>
          <p class="milestone-meta"><strong>Features:</strong> WebWorker pool optimization, memory profiling, lazy model loading, E2E test suite, AI output validation pipeline.</p>
          <p class="milestone-meta"><strong>Deliverables:</strong> Performance benchmarks, test coverage report, memory leak fixes, worker crash recovery.</p>
          <p class="milestone-meta"><strong>Risks:</strong> Performance targets unmet for 1000+ file repos. Test flakiness with AI non-determinism.</p>
          <p class="milestone-meta"><strong>Dependencies:</strong> Phases 4-6 functional.</p>
          <p class="milestone-meta"><strong>Success Criteria:</strong> 1000-file project loads in under 10s. No main thread jank during indexing. 80%+ test coverage on core modules.</p>
        </div>

        <div class="milestone-card phase-future">
          <div class="milestone-phase">Phase 8 — Production</div>
          <div class="milestone-title">Production Release</div>
          <p class="milestone-meta"><strong>Objective:</strong> Deploy publicly accessible, secure, performant platform.</p>
          <p class="milestone-meta"><strong>Features:</strong> PWA offline mode, CDN asset pipeline, WebContainer live preview, CSP security headers, SSO auth.</p>
          <p class="milestone-meta"><strong>Deliverables:</strong> Production deployment, security audit report, user onboarding flow, monitoring dashboard.</p>
          <p class="milestone-meta"><strong>Risks:</strong> Security vulnerabilities in AI-generated code execution. WebContainer licensing. Browser compatibility matrix.</p>
          <p class="milestone-meta"><strong>Dependencies:</strong> Phase 7 stability validation.</p>
          <p class="milestone-meta"><strong>Success Criteria:</strong> Public URL live. Lighthouse score 90+. Zero critical security findings. Express sample runs in WebContainer preview.</p>
        </div>

        <div class="milestone-card phase-future">
          <div class="milestone-phase">Phase 9 — Expansion</div>
          <div class="milestone-title">Future Expansion</div>
          <p class="milestone-meta"><strong>Objective:</strong> Build ecosystem moat through plugins, collaboration, and advanced AI capabilities.</p>
          <p class="milestone-meta"><strong>Features:</strong> Plugin marketplace, cloud workspace sync, CRDT collaborative editing, voice programming, AI background swarms.</p>
          <p class="milestone-meta"><strong>Deliverables:</strong> Extension SDK, marketplace portal, cloud sync service, collaboration prototype.</p>
          <p class="milestone-meta"><strong>Risks:</strong> Ecosystem chicken-and-egg problem. Cloud infrastructure costs. CRDT complexity with AI concurrent edits.</p>
          <p class="milestone-meta"><strong>Dependencies:</strong> Phase 8 production platform with active users.</p>
          <p class="milestone-meta"><strong>Success Criteria:</strong> 10+ third-party plugins published. Cloud workspace sync functional. Multi-user editing prototype demo.</p>
        </div>
      </div>

      <div class="callout callout-note">
        <div class="callout-title">Critical Path</div>
        <p>
          The critical path is: <strong>Phase 4 (VFS) → Phase 5 (Context) → Phase 6 (AI)</strong>. Everything before Phase 4 enables the platform shell. Everything after Phase 6 scales and distributes it. Delays in Phase 4 or 5 directly delay the core product value proposition.
        </p>
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
    subtitle: "Engineering risk analysis with severity matrices, probability assessment, and mitigation strategies.",
    badge: "RISK MANAGEMENT",
    content: `
      <h2>Risk Assessment Framework</h2>
      <p>
        Building an AI-first development platform inside a browser sandbox introduces risks across runtime constraints, AI reliability, security boundaries, and long-term maintainability. Each risk is scored by severity (impact if realized) and probability (likelihood of occurrence).
      </p>

      <h2>Risk Matrix — Severity vs. Probability</h2>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Risk</th>
              <th>Severity</th>
              <th>Probability</th>
              <th>Risk Score</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI Hallucinations / Incorrect Code</td>
              <td><span class="severity-critical">Critical</span></td>
              <td><span class="severity-high">High</span></td>
              <td>9/10</td>
              <td><span class="badge badge-purple">P0</span></td>
            </tr>
            <tr>
              <td>Security — Malicious AI Code Execution</td>
              <td><span class="severity-critical">Critical</span></td>
              <td><span class="severity-medium">Medium</span></td>
              <td>8/10</td>
              <td><span class="badge badge-purple">P0</span></td>
            </tr>
            <tr>
              <td>Browser Memory Limits (Large Projects)</td>
              <td><span class="severity-high">High</span></td>
              <td><span class="severity-high">High</span></td>
              <td>8/10</td>
              <td><span class="badge badge-amber">P1</span></td>
            </tr>
            <tr>
              <td>Main Thread UI Lockup</td>
              <td><span class="severity-high">High</span></td>
              <td><span class="severity-high">High</span></td>
              <td>7/10</td>
              <td><span class="badge badge-amber">P1</span></td>
            </tr>
            <tr>
              <td>Browser API Compatibility Gaps</td>
              <td><span class="severity-high">High</span></td>
              <td><span class="severity-medium">Medium</span></td>
              <td>6/10</td>
              <td><span class="badge badge-amber">P1</span></td>
            </tr>
            <tr>
              <td>Dependency Management in WebContainers</td>
              <td><span class="severity-medium">Medium</span></td>
              <td><span class="severity-high">High</span></td>
              <td>6/10</td>
              <td><span class="badge badge-blue">P2</span></td>
            </tr>
            <tr>
              <td>LLM Provider Lock-in / Cost Escalation</td>
              <td><span class="severity-medium">Medium</span></td>
              <td><span class="severity-medium">Medium</span></td>
              <td>5/10</td>
              <td><span class="badge badge-blue">P2</span></td>
            </tr>
            <tr>
              <td>User Experience Complexity</td>
              <td><span class="severity-medium">Medium</span></td>
              <td><span class="severity-high">High</span></td>
              <td>5/10</td>
              <td><span class="badge badge-blue">P2</span></td>
            </tr>
            <tr>
              <td>Future Maintenance Burden</td>
              <td><span class="severity-medium">Medium</span></td>
              <td><span class="severity-medium">Medium</span></td>
              <td>4/10</td>
              <td><span class="badge badge-blue">P2</span></td>
            </tr>
            <tr>
              <td>WebContainer Licensing Restrictions</td>
              <td><span class="severity-low">Low</span></td>
              <td><span class="severity-medium">Medium</span></td>
              <td>3/10</td>
              <td><span class="badge badge-green">P3</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Detailed Risk Analysis</h2>

      <div class="limitation-block">
        <h3>Browser Limitations</h3>
        <div class="limitation-grid">
          <div><dt>Description</dt><dd>Sandboxed browser environments impose memory ceilings (~2-4 GB), no native Node.js, restricted file system access, and varying API support across Chrome/Firefox/Safari.</dd></div>
          <div><dt>Cause</dt><dd>Fundamental browser security model designed to protect users from malicious web pages — not optimized for IDE workloads.</dd></div>
          <div><dt>Severity</dt><dd><span class="severity-high">High</span></dd></div>
          <div><dt>Probability</dt><dd><span class="severity-high">High</span> — will affect every user on large projects</dd></div>
          <div><dt>Mitigation</dt><dd>WebWorker offloading for all heavy computation. OPFS chunk paging. Lazy model loading. Progressive enhancement per browser. Cloud compute fallback for indexing.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>Performance Bottlenecks</h3>
        <div class="limitation-grid">
          <div><dt>Description</dt><dd>AST parsing, dependency graph construction, and LLM context assembly can block or degrade UI responsiveness on projects with 1000+ files.</dd></div>
          <div><dt>Cause</dt><dd>JavaScript single-threaded main loop. WASM parser initialization cost. Unoptimized full-repo indexing on project load.</dd></div>
          <div><dt>Severity</dt><dd><span class="severity-high">High</span></dd></div>
          <div><dt>Probability</dt><dd><span class="severity-high">High</span> — inevitable without worker architecture</dd></div>
          <div><dt>Mitigation</dt><dd>Dedicated WebWorker thread pool. Incremental indexing (visible files first). SharedArrayBuffer for zero-copy data transfer. RequestIdleCallback for background work.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>Large Project Scalability</h3>
        <div class="limitation-grid">
          <div><dt>Description</dt><dd>Enterprise monorepos with 50,000+ files exceed browser memory and indexing capacity, rendering the platform unusable.</dd></div>
          <div><dt>Cause</dt><dd>Attempting to index entire repository in-browser. Loading all Monaco models simultaneously. Unbounded dependency graph in memory.</dd></div>
          <div><dt>Severity</dt><dd><span class="severity-high">High</span></dd></div>
          <div><dt>Probability</dt><dd><span class="severity-medium">Medium</span> — affects enterprise users specifically</dd></div>
          <div><dt>Mitigation</dt><dd>Virtual file tree (load on expand). LRU model cache with max 20 open models. Scope indexing to workspace subfolder. Cloud-side pre-indexing service for monorepos.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>Memory Consumption</h3>
        <div class="limitation-grid">
          <div><dt>Description</dt><dd>Monaco text models, AST trees, LSP server state, and WebContainer processes collectively consume hundreds of MB to GB of heap memory.</dd></div>
          <div><dt>Cause</dt><dd>Each open file creates a Monaco model (~2x file size in memory). LSP servers cache entire project type information. WebContainer runs full Node.js runtime.</dd></div>
          <div><dt>Severity</dt><dd><span class="severity-high">High</span></dd></div>
          <div><dt>Probability</dt><dd><span class="severity-high">High</span> — measurable on projects over 100 files</dd></div>
          <div><dt>Mitigation</dt><dd>Dispose inactive Monaco models. Single LSP server instance with file eviction. WebContainer boot only on explicit preview request. Memory monitoring dashboard with user warnings.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>Security Concerns</h3>
        <div class="limitation-grid">
          <div><dt>Description</dt><dd>AI-generated code could contain malicious scripts, data exfiltration logic, or dependency confusion attacks executed within the browser sandbox or WebContainer.</dd></div>
          <div><dt>Cause</dt><dd>LLM training data includes vulnerable code patterns. No inherent security validation in generated output. WebContainer sandbox may have escape vectors.</dd></div>
          <div><dt>Severity</dt><dd><span class="severity-critical">Critical</span></dd></div>
          <div><dt>Probability</dt><dd><span class="severity-medium">Medium</span> — depends on prompt injection and model behavior</dd></div>
          <div><dt>Mitigation</dt><dd>Strict Content Security Policy. AI diffs reviewed before VFS commit. WebContainer in isolated iframe with separate origin. Static analysis scan on generated code. No auto-execution without user approval.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>AI Hallucinations</h3>
        <div class="limitation-grid">
          <div><dt>Description</dt><dd>LLM generates code referencing non-existent imports, invented function signatures, or incorrect API usage that compiles visually but fails at runtime.</dd></div>
          <div><dt>Cause</dt><dd>Models predict plausible-looking code without true project understanding. Context window may miss critical dependency information. Non-deterministic generation.</dd></div>
          <div><dt>Severity</dt><dd><span class="severity-critical">Critical</span></dd></div>
          <div><dt>Probability</dt><dd><span class="severity-high">High</span> — occurs in 10-30% of multi-file generations without validation</dd></div>
          <div><dt>Mitigation</dt><dd>Pre-apply AST validation before rendering diffs. Red squiggly markers on unresolved symbols. Dependency graph verification of imports. Human approval gate. Self-correction loop with runtime error feedback.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>Incorrect Code Generation</h3>
        <div class="limitation-grid">
          <div><dt>Description</dt><dd>AI produces syntactically valid but logically incorrect code — wrong business logic, inverted conditions, missing error handling, broken edge cases.</dd></div>
          <div><dt>Cause</dt><dd>LLMs optimize for plausible patterns, not correctness proofs. Lack of runtime test execution before presenting code to user.</dd></div>
          <div><dt>Severity</dt><dd><span class="severity-high">High</span></dd></div>
          <div><dt>Probability</dt><dd><span class="severity-high">High</span> — inherent to current LLM capabilities</dd></div>
          <div><dt>Mitigation</dt><dd>Live Preview auto-runs generated code. AI-generated unit tests executed in WebContainer. Diff review UI highlights logic changes prominently. Encourage incremental small changes over large generations.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>Dependency Management</h3>
        <div class="limitation-grid">
          <div><dt>Description</dt><dd>npm install in WebContainers is slow, memory-intensive, and may fail on packages requiring native binary compilation (node-gyp).</dd></div>
          <div><dt>Cause</dt><dd>WebContainer WASM kernel lacks native addon support. Full node_modules can exceed 500MB. Network latency for package downloads.</dd></div>
          <div><dt>Severity</dt><dd><span class="severity-medium">Medium</span></dd></div>
          <div><dt>Probability</dt><dd><span class="severity-high">High</span> — affects most Node.js projects</dd></div>
          <div><dt>Mitigation</dt><dd>Pre-bundled common dependencies cache. esm.sh/skypack CDN imports where possible. Warn users about native addon limitations. Support import-map based projects.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>Future Maintenance</h3>
        <div class="limitation-grid">
          <div><dt>Description</dt><dd>Rapid evolution of LLM providers, browser APIs, Monaco versions, and WebContainer releases creates ongoing integration maintenance burden.</dd></div>
          <div><dt>Cause</dt><dd>Platform integrates 10+ external technologies, each with independent release cycles and breaking changes.</dd></div>
          <div><dt>Severity</dt><dd><span class="severity-medium">Medium</span></dd></div>
          <div><dt>Probability</dt><dd><span class="severity-medium">Medium</span> — certain over 2+ year horizon</dd></div>
          <div><dt>Mitigation</dt><dd>Abstraction layers for each external dependency (provider-agnostic AI, VFS-agnostic storage). Automated integration tests. Pin CDN versions with scheduled upgrade reviews. Modular architecture enables component replacement.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>User Experience Challenges</h3>
        <div class="limitation-grid">
          <div><dt>Description</dt><dd>Developers accustomed to VS Code may find the AI-first interface disorienting. Trust calibration with AI suggestions requires careful UX design.</dd></div>
          <div><dt>Cause</dt><dd>Paradigm shift from imperative typing to intent-driven interaction. AI non-determinism conflicts with developer expectation of reproducibility.</dd></div>
          <div><dt>Severity</dt><dd><span class="severity-medium">Medium</span></dd></div>
          <div><dt>Probability</dt><dd><span class="severity-high">High</span> — affects all new users during onboarding</dd></div>
          <div><dt>Mitigation</dt><dd>Progressive disclosure (manual editor always available). Clear diff approval UI. Undo always visible. Hybrid mode: AI sidebar + traditional editor. Onboarding tutorial with sample project.</dd></div>
        </div>
      </div>

      <div class="callout callout-caution">
        <div class="callout-title">Top Risk — AI Reliability</div>
        <p>
          The single greatest platform risk is not technical — it is <strong>trust</strong>. If AI-generated code breaks projects more often than it helps, developers will revert to manual editing and the platform value proposition collapses. Every architectural decision (context engine, dependency graph, validation pipeline, approval gates) exists primarily to mitigate this risk.
        </p>
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
    subtitle: "Visionary capabilities beyond current technology — realistic engineering possibilities for the next decade.",
    badge: "FUTURE HORIZON",
    content: `
      <h2>Beyond Today's Platform</h2>
      <p>
        The nine-phase roadmap delivers a production AI-first browser IDE. This section explores capabilities that become feasible once that foundation exists — each evaluated for technical feasibility, practical utility, and long-term industry impact.
      </p>

      <div class="limitation-block">
        <h3>Voice Programming</h3>
        <div class="limitation-grid">
          <div><dt>Vision</dt><dd>Developers speak architectural intent — "Add pagination to the doctors endpoint with cursor-based navigation" — and the AI Agent executes multi-file changes hands-free.</dd></div>
          <div><dt>Practical Use</dt><dd>Accessibility for developers with RSI. Code review while walking. Rapid prototyping during meetings. Pair programming with voice-driven AI.</dd></div>
          <div><dt>Technical Feasibility</dt><dd><span class="badge badge-green">High</span> — Web Speech API + existing AI Agent pipeline. Whisper-level accuracy sufficient for structured commands.</dd></div>
          <div><dt>Challenges</dt><dd>Ambient noise, technical vocabulary recognition, disambiguation of homophones (e.g., "route" vs "root"), privacy in open offices.</dd></div>
          <div><dt>Long-Term Impact</dt><dd>Expands the developer audience beyond keyboard typists. Makes software engineering accessible to architects and PMs who think in systems, not syntax.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>AI Pair Programmer</h3>
        <div class="limitation-grid">
          <div><dt>Vision</dt><dd>A persistent AI collaborator that watches your editing patterns, anticipates next actions, suggests improvements proactively, and learns your coding style over weeks.</dd></div>
          <div><dt>Practical Use</dt><dd>Real-time suggestions as you type (beyond autocomplete). "You usually add error handling here." "This pattern matches your auth middleware — want me to apply it?"</dd></div>
          <div><dt>Technical Feasibility</dt><dd><span class="badge badge-green">High</span> — Project Memory + Context Engine enable style learning. Streaming inference fast enough for inline suggestions.</dd></div>
          <div><dt>Challenges</dt><dd>Suggestion fatigue (too many interruptions). Privacy of coding patterns. Balancing proactive vs. reactive assistance.</dd></div>
          <div><dt>Long-Term Impact</dt><dd>Reduces junior developer ramp-up time from months to weeks. Captures senior engineer patterns as reusable AI knowledge.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>Autonomous Coding</h3>
        <div class="limitation-grid">
          <div><dt>Vision</dt><dd>Developer describes a feature at the system level. AI Agent autonomously plans, implements, tests, and presents a complete working feature across multiple files without line-by-line guidance.</dd></div>
          <div><dt>Practical Use</dt><dd>"Implement CRUD for the patients table following the same pattern as doctors." AI reads existing patterns, generates all files, runs tests, shows working preview.</dd></div>
          <div><dt>Technical Feasibility</dt><dd><span class="badge badge-amber">Medium</span> — Requires mature Context Engine, Dependency Analyzer, and WebContainer test loop. Current LLMs capable for well-scoped tasks.</dd></div>
          <div><dt>Challenges</dt><dd>Error compounding across multi-step plans. Maintaining architectural consistency. Developer trust for unsupervised changes.</dd></div>
          <div><dt>Long-Term Impact</dt><dd>10x throughput for boilerplate features. Developers shift from implementers to reviewers and architects.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>Autonomous Refactoring</h3>
        <div class="limitation-grid">
          <div><dt>Vision</dt><dd>Background AI continuously identifies code smells, dead paths, security vulnerabilities, and outdated patterns — proposing and executing refactors with developer approval.</dd></div>
          <div><dt>Practical Use</dt><dd>Weekly "health report" showing technical debt reduction opportunities. One-click approval to modernize deprecated API usage across 40 files.</dd></div>
          <div><dt>Technical Feasibility</dt><dd><span class="badge badge-amber">Medium</span> — Dependency graph enables safe refactoring. AST diff validation prevents breakage. Requires robust test coverage detection.</dd></div>
          <div><dt>Challenges</dt><dd>False positives in smell detection. Merge conflicts with concurrent human edits. Refactoring semantics preservation.</dd></div>
          <div><dt>Long-Term Impact</dt><dd>Codebases stay healthy without dedicated refactoring sprints. Technical debt becomes a solved problem rather than an accumulating liability.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>AI Project Architect</h3>
        <div class="limitation-grid">
          <div><dt>Vision</dt><dd>High-level visual canvas where developers draw system blocks (API Gateway, Auth Service, Database) and AI materializes them as concrete codebase files, configs, and deployment scripts.</dd></div>
          <div><dt>Practical Use</dt><dd>Greenfield project scaffolding. Architecture migration planning. Onboarding visualization for new team members.</dd></div>
          <div><dt>Technical Feasibility</dt><dd><span class="badge badge-amber">Medium</span> — LLMs excel at template generation from structured descriptions. Diagram-to-code is an active research area.</dd></div>
          <div><dt>Challenges</dt><dd>Diagram ambiguity. Maintaining sync between visual model and actual code as project evolves. Over-abstraction risk.</dd></div>
          <div><dt>Long-Term Impact</dt><dd>Software architecture becomes a living, editable artifact — not a PowerPoint slide that diverges from reality on day one.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>Project Knowledge Graph</h3>
        <div class="limitation-grid">
          <div><dt>Vision</dt><dd>A unified semantic graph connecting code symbols to Jira tickets, Slack decisions, API specifications, Git commits, and documentation — queryable in natural language.</dd></div>
          <div><dt>Practical Use</dt><dd>"Why was this validation logic changed?" → Graph traverses from function to commit to Slack thread to Jira ticket with full context.</dd></div>
          <div><dt>Technical Feasibility</dt><dd><span class="badge badge-amber">Medium</span> — Dependency graph is the code layer. External integrations (Jira API, Slack API, Git) are well-documented.</dd></div>
          <div><dt>Challenges</dt><dd>Entity resolution across systems. Keeping graph current in real-time. Privacy/access control for sensitive discussions.</dd></div>
          <div><dt>Long-Term Impact</dt><dd>Eliminates the "why was this built this way?" question that consumes 20% of engineering onboarding time.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>Intelligent Navigation</h3>
        <div class="limitation-grid">
          <div><dt>Vision</dt><dd>Navigate codebases by intent rather than file paths — "Show me the authentication flow" highlights the chain of files, functions, and middleware involved.</dd></div>
          <div><dt>Practical Use</dt><dd>New developer onboarding. Debugging production issues by tracing execution paths. Security audits tracing data flow.</dd></div>
          <div><dt>Technical Feasibility</dt><dd><span class="badge badge-green">High</span> — Dependency graph + AST symbols + LLM query interpretation. Similar to GitHub Copilot Workspace navigation.</dd></div>
          <div><dt>Challenges</dt><dd>Dynamic/runtime paths invisible to static analysis. Ranking relevance of navigation results. Performance on large graphs.</dd></div>
          <div><dt>Long-Term Impact</dt><dd>Any developer can understand any codebase in hours, not weeks — dissolving the "bus factor" problem.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>Plugin Marketplace</h3>
        <div class="limitation-grid">
          <div><dt>Vision</dt><dd>Open ecosystem where developers publish and monetize specialized AI tools, language analyzers, deployment integrations, and domain-specific code generators.</dd></div>
          <div><dt>Practical Use</dt><dd>Stripe API integration plugin. Prisma schema generator. AWS CDK deployment tool. Custom lint rules for company coding standards.</dd></div>
          <div><dt>Technical Feasibility</dt><dd><span class="badge badge-green">High</span> — Plugin Manager + Future Extension Layer designed for this. VS Code marketplace proves the model.</dd></div>
          <div><dt>Challenges</dt><dd>Security sandboxing for third-party plugins. Quality curation. Revenue sharing model. API stability guarantees.</dd></div>
          <div><dt>Long-Term Impact</dt><dd>Platform value grows exponentially through community contributions — the VS Code marketplace generated billions in ecosystem value.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>Cloud Workspace</h3>
        <div class="limitation-grid">
          <div><dt>Vision</dt><dd>Browser-local OPFS editing with seamless background sync to cloud dev environments (AWS Cloud9, GitHub Codespaces, Cloudflare Workers) for compute-heavy tasks.</dd></div>
          <div><dt>Practical Use</dt><dd>Start editing locally on a flight. Land — cloud environment has synced changes and pre-warmed test suite. Heavy indexing runs in cloud.</dd></div>
          <div><dt>Technical Feasibility</dt><dd><span class="badge badge-amber">Medium</span> — CRDT sync protocols (Yjs) mature. Cloud dev environments exist. Conflict resolution is the hard part.</dd></div>
          <div><dt>Challenges</dt><dd>Sync latency and conflict resolution. Cost of cloud compute. Data sovereignty requirements for enterprise.</dd></div>
          <div><dt>Long-Term Impact</dt><dd>True "development anywhere" — local speed with cloud power, eliminating the laptop-as-bottleneck paradigm.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>Collaborative Editing</h3>
        <div class="limitation-grid">
          <div><dt>Vision</dt><dd>Multiple developers and AI agents editing the same project simultaneously with conflict-free merge, live cursors, and shared AI context.</dd></div>
          <div><dt>Practical Use</dt><dd>Pair programming remotely. Code review with inline edits. AI agent and human editing the same file concurrently.</dd></div>
          <div><dt>Technical Feasibility</dt><dd><span class="badge badge-amber">Medium</span> — CRDT libraries (Yjs, Automerge) production-ready. Monaco has CRDT binding examples. AI concurrent edits need careful sequencing.</dd></div>
          <div><dt>Challenges</dt><dd>AI-human edit conflicts. CRDT performance on large files. Permission models for shared workspaces. Network partition handling.</dd></div>
          <div><dt>Long-Term Impact</dt><dd>Software development becomes a multiplayer experience — team throughput scales beyond individual keyboard bandwidth.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>AI Testing</h3>
        <div class="limitation-grid">
          <div><dt>Vision</dt><dd>AI automatically generates, executes, and maintains test suites based on code changes, API contracts, and runtime behavior observed in WebContainer preview.</dd></div>
          <div><dt>Practical Use</dt><dd>Every AI-generated feature includes auto-generated unit and integration tests. Regression tests updated when APIs change. Coverage gaps identified proactively.</dd></div>
          <div><dt>Technical Feasibility</dt><dd><span class="badge badge-green">High</span> — LLMs generate reasonable test code today. WebContainer can execute test runners. Coverage tools run in WASM.</dd></div>
          <div><dt>Challenges</dt><dd>Test quality vs. quantity. Flaky test generation. Maintaining tests as code evolves. Testing non-deterministic AI-generated logic.</dd></div>
          <div><dt>Long-Term Impact</dt><dd>Test coverage becomes a solved default rather than a sprint-afterthought — dramatically reducing production bugs.</dd></div>
        </div>
      </div>

      <div class="limitation-block">
        <h3>AI Code Review</h3>
        <div class="limitation-grid">
          <div><dt>Vision</dt><dd>Every change — whether human or AI generated — passes through an AI review agent checking security, performance, style consistency, and architectural alignment before merge.</dd></div>
          <div><dt>Practical Use</dt><dd>Pre-commit review highlighting SQL injection risks, N+1 queries, and naming convention violations. Architecture drift detection.</dd></div>
          <div><dt>Technical Feasibility</dt><dd><span class="badge badge-green">High</span> — Static analysis + LLM reasoning + project context. Similar to GitHub Copilot code review features emerging in 2025-2026.</dd></div>
          <div><dt>Challenges</dt><dd>False positive fatigue. Understanding project-specific conventions. Reviewing AI-generated code that looks correct but isn't.</dd></div>
          <div><dt>Long-Term Impact</dt><dd>Code review bottleneck eliminated. Senior engineer review time shifts from syntax checking to architecture and design evaluation.</dd></div>
        </div>
      </div>

      <h2>Future Capability Timeline</h2>
      <div class="mermaid-container">
        <div class="mermaid-label">Diagram 11.1 — Capability Maturity Horizon</div>
        <pre class="mermaid">
flowchart LR
    subgraph Near["2026-2027 — Platform Launch"]
        N1[Multi-File Workspace]
        N2[AI Code Generation]
        N3[Live Preview]
        N4[Plugin SDK]
    end

    subgraph Mid["2027-2028 — Ecosystem Growth"]
        M1[Plugin Marketplace]
        M2[AI Pair Programmer]
        M3[Intelligent Navigation]
        M4[AI Testing]
    end

    subgraph Far["2028-2030 — Autonomous Platform"]
        F1[Autonomous Coding]
        F2[Voice Programming]
        F3[Project Knowledge Graph]
        F4[Collaborative AI Editing]
    end

    Near --> Mid --> Far

    style Near fill:#064e3b,stroke:#10b981
    style Mid fill:#1e1b4b,stroke:#8b5cf6
    style Far fill:#172554,stroke:#60a5fa
        </pre>
      </div>

      <div class="callout callout-important">
        <div class="callout-title">Guiding Principle</div>
        <p>
          Every future capability listed here builds on the platform foundation defined in Section 7. None are science fiction — each has identifiable technology prerequisites and a plausible 2-4 year delivery horizon. The platform architecture is designed to accommodate them without structural rewrites.
        </p>
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
    subtitle: "Final synthesis reconnecting the complete engineering journey from problem to vision.",
    badge: "SYNTHESIS",
    content: `
      <h2>The Complete Engineering Journey</h2>
      <p>
        This documentation chronicles the architectural evolution from a single-file Monaco Editor prototype to the blueprint of an AI-first browser development platform. Each section builds on the last — forming a coherent engineering narrative that moves from <em>what exists</em> to <em>what is missing</em> to <em>what must be built</em>.
      </p>

      <h2>Reconnecting the Architecture</h2>

      <div class="card-grid">
        <div class="doc-card">
          <div class="doc-card-title">The Problem (Section 2)</div>
          <div class="doc-card-text">Modern software complexity forces developers to spend 70% of their time navigating and plumbing code rather than solving domain problems. Context switching, repetitive editing, and fragmented knowledge create a throughput ceiling.</div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">Why Change Is Needed (Section 3)</div>
          <div class="doc-card-text">AI is evolving from inline autocomplete (Gen 1) to conversational chat (Gen 2) to autonomous project orchestration (Gen 3). Legacy IDEs bolt AI onto human-typist assumptions — the wrong foundation for Gen 3.</div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">Why Monaco Editor (Section 4)</div>
          <div class="doc-card-text">Monaco provides battle-tested VS Code rendering in the browser — virtualized DOM, theming, decorations, Web Worker architecture. It is the rendering layer, not the platform. Selected over CodeMirror and Ace for ecosystem parity.</div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">Current Architecture (Section 5)</div>
          <div class="doc-card-text">The prototype validates modular bootstrap, CORS-safe file:// loading, and Monaco instantiation. Seven focused modules: editor-data, editor-setup, editor-theme, toast, clipboard, download, and app bootstrap.</div>
        </div>
      </div>

      <div class="card-grid">
        <div class="doc-card">
          <div class="doc-card-title">Current Limitations (Section 6)</div>
          <div class="doc-card-text">Ten structural gaps — static data, single-file scope, no workspace, no VFS, no dependency graph, no project understanding, no AI context, limited scalability, browser constraints. These are missing subsystems, not bugs.</div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">Future Architecture (Section 7)</div>
          <div class="doc-card-text">Twelve decoupled subsystems across four layers: AI Agent, Workspace Manager, Context Engine, Prompt Engine, VFS, Monaco Layer, Live Preview, Plugin Manager, Project Memory, Dependency Analyzer, Language Services, Extension Layer.</div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">Research Findings (Section 8)</div>
          <div class="doc-card-text">Ten technologies evaluated. Integrate Monaco, LSP, Tree-Sitter, OPFS, WebContainers. Build custom Context Engine, Dependency Graph, and AI Agent. Context quality is the platform moat.</div>
        </div>
        <div class="doc-card">
          <div class="doc-card-title">Roadmap &amp; Risks (Sections 9-10)</div>
          <div class="doc-card-text">Nine phases from research to expansion. Critical path: VFS → Context Engine → AI Integration. Top risk: AI reliability and developer trust. Every validation pipeline exists to mitigate hallucination.</div>
        </div>
      </div>

      <h2>Architecture Evolution Diagram</h2>
      <div class="mermaid-container">
        <div class="mermaid-label">Diagram 12.1 — From Prototype to Platform</div>
        <pre class="mermaid">
flowchart LR
    subgraph Today["Today — Prototype"]
        T1[Static Sample Data]
        T2[Single Monaco Buffer]
        T3[Copy / Download]
    end

    subgraph Next["Next — Platform Core"]
        N1[VFS + Workspace]
        N2[AST + Dependency Graph]
        N3[AI Agent + Context]
    end

    subgraph Future["Future — Ecosystem"]
        F1[Plugin Marketplace]
        F2[Cloud Workspaces]
        F3[Autonomous Engineering]
    end

    Today -->|Phase 2-4| Next
    Next -->|Phase 5-8| Future

    style Today fill:#450a0a,stroke:#f43f5e
    style Next fill:#1e1b4b,stroke:#8b5cf6
    style Future fill:#064e3b,stroke:#10b981
        </pre>
      </div>

      <h2>What We Have Proven</h2>
      <ul>
        <li><strong>Browser-native code editing works.</strong> Monaco renders flawlessly from CDN with zero backend infrastructure.</li>
        <li><strong>Modular architecture is viable.</strong> Seven focused modules with clean separation bootstrapped via window globals for file:// compatibility.</li>
        <li><strong>The rendering layer is solved.</strong> Syntax highlighting, theming, line counting, copy, and download are production-quality today.</li>
        <li><strong>The gap is everything around the editor.</strong> File systems, project intelligence, AI orchestration, and live execution — the platform layer.</li>
      </ul>

      <h2>What Must Be Built</h2>
      <ul>
        <li><strong>Virtual File System</strong> — the single most important next step. Without persistent, multi-file storage, nothing else delivers value.</li>
        <li><strong>Project Context Engine</strong> — the moat. Raw LLM access is commoditized; precise context engineering is the differentiator.</li>
        <li><strong>AI Agent Orchestrator</strong> — the product. Everything else exists to make AI code generation reliable, safe, and trustworthy.</li>
        <li><strong>Validation Pipeline</strong> — the trust layer. AST verification, dependency checking, and human approval gates before every AI commit.</li>
      </ul>

      <div class="callout callout-important">
        <div class="callout-title">Final Architectural Principle</div>
        <p>
          <strong>Monaco Editor is not the final product.</strong> It is the rendering layer of a much larger AI-driven software engineering ecosystem. The editor displays what the platform understands and what the AI modifies — it does not drive the workflow.
        </p>
        <p style="margin-top: 0.75rem; margin-bottom: 0;">
          The long-term vision is to create an intelligent development platform where AI becomes the primary interface and software projects become understandable, navigable, and modifiable through natural interaction. Developers operate at the level of intent, architecture, and domain design — liberated from the mechanical burden of file navigation, import tracking, and line-by-line mutation.
        </p>
      </div>

      <h2>The Path Forward</h2>
      <p>
        Phase 1 is complete. The architecture is documented. The prototype validates the rendering foundation. The research confirms technology feasibility. The roadmap sequences the work. The risks are identified and mitigated. The future scope inspires the destination.
      </p>
      <p>
        What remains is execution — building the twelve subsystems defined in Section 7, one phase at a time, starting with the Virtual File System in Phase 4. Each phase produces independently valuable software. Each milestone moves the platform closer to the vision where a developer opens a browser tab, describes what they want to build, and watches an intelligent system make it real.
      </p>
      <p>
        Software engineering is entering its most transformative decade. The tools we build today will define how an entire generation of developers interacts with code. This platform — browser-native, AI-first, open to extension — is designed to lead that transformation.
      </p>

      <div class="callout callout-tip">
        <div class="callout-title">Monaco Editor → AI Platform</div>
        <p>
          We do not build tools to make engineers type code faster. We build platforms to liberate engineers from typing code at all — enabling them to spend their creative genius designing systems, establishing domain models, and shaping the future of technology.
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
