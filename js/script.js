const contents = [
  {
    title: "Learn Postgres",
    description: "PostgreSQL と SQL の基本を、手を動かしながら学ぶハンズオン教材です。",
    tags: ["PostgreSQL", "SQL", "Database", "Beginner"],
    status: "published",
    icon: "SQL",
    pageUrl: "https://akilab.github.io/learn-postgres/",
    repoUrl: "https://github.com/akilab/learn-postgres.git",
    date: "2026-07-31"
  },
  {
    title: "Claude Agent SDK Hands-on",
    description: "Claude Agent SDK を使って、エージェントを構築するハンズオン教材です。",
    tags: ["Claude", "Agent", "API", "Advanced"],
    status: "draft",
    icon: ">_",
    pageUrl: "https://akilab.github.io/claude-agent-sdk-hands-on/",
    repoUrl: "https://github.com/akilab/claude-agent-sdk-hands-on.git",
    date: "2025-05-22"
  },
  {
    title: "Streamline SSE",
    description: "SSE (Server-Sent Events) を使ってリアルタイムなAIアプリを作るステップバイステップ教材です。",
    tags: ["SSE", "API", "Beginner", "JavaScript"],
    status: "published",
    icon: "~~~",
    pageUrl: "https://akilab.github.io/streamline-sse/",
    repoUrl: "https://github.com/akilab/streamline-sse.git",
    date: "2025-05-18"
  },
  {
    title: "Claude Practice",
    description: "Claude 活用のプロンプトとワークフローを集めた練習用コンテンツです。",
    tags: ["Claude", "Beginner", "Prompt"],
    status: "published",
    icon: "AI",
    pageUrl: "https://akilab.github.io/claude-practice/",
    repoUrl: "https://github.com/akilab/claude-practice.git",
    date: "2025-05-10"
  },
  {
    title: "Mac Terminal Practice",
    description: "Mac のターミナル操作を基礎から体験的に学べるハンズオン教材です。",
    tags: ["Mac", "Beginner"],
    status: "published",
    icon: "⌘",
    pageUrl: "https://akilab.github.io/mac-terminal-practice/",
    repoUrl: "https://github.com/akilab/mac-terminal-practice.git",
    relatedUrl: "https://github.com/akilab/mac-git-practice-lab.git",
    date: "2025-05-08"
  },
  {
    title: "Claude Code Lab Builder",
    description: "Claude Code と組み合わせて、学習環境とラボ教材を構築するためのSkillです。",
    tags: ["Claude", "Skills", "Advanced"],
    status: "skills",
    icon: "</>",
    repoUrl: "https://github.com/akilab/claude-code-lab-builder.git",
    date: "2025-04-26"
  },
  {
    title: "Git Essentials",
    description: "Git の基本操作を練習するための補助教材です。",
    tags: ["Git", "Beginner"],
    status: "published",
    icon: "git",
    repoUrl: "https://github.com/akilab/mac-git-practice-lab.git",
    date: "2025-04-20"
  },
  {
    title: "Legacy GitHub Pages Guide",
    description: "静的サイト公開の旧ガイドです。記録用として残しています。",
    tags: ["Git", "GitHub Pages", "Deploy"],
    status: "retired",
    icon: "old",
    repoUrl: "https://github.com/akilab",
    date: "2025-03-12"
  }
];

const updateItems = [
  {
    date: "2026-07-31",
    label: "追加",
    labelClass: "pill-new",
    text: "Learn Postgres を追加しました"
  },
  {
    date: "2026-07-26",
    label: "作成",
    labelClass: "pill-new",
    text: "Claude Agent SDK Hands-on を作成しました"
  },
  {
    date: "2026-07-26",
    label: "作成",
    labelClass: "pill-new",
    text: "Streamline SSE を作成しました"
  },
  {
    date: "2026-07-26",
    label: "作成",
    labelClass: "pill-new",
    text: "AI Start UP を作成しました"
  }
];

const tagDefinitions = [
  { name: "Claude", description: "ClaudeやClaude Codeを使う教材。", filter: true },
  { name: "Skills", description: "AI用Skillや教材制作の仕組みに関するもの。", filter: true },
  { name: "CLI", description: "今後追加するコマンドラインツール用の分類。" },
  { name: "AI", description: "AgentsやAGENTS.mdなど、AI開発全般を扱う分類候補。" },
  { name: "Beginner", description: "初めて触る人でも進めやすい入門教材。", filter: true },
  { name: "Agent", description: "AIエージェントの設計や実装に関する教材。", filter: true },
  { name: "API", description: "外部APIやアプリ連携を扱う教材。", filter: true },
  { name: "SSE", description: "Server-Sent Eventsなどリアルタイム通信の教材。", filter: true },
  { name: "PostgreSQL", description: "PostgreSQLを使ったデータベース学習教材。", filter: true },
  { name: "SQL", description: "SQLでデータを操作・取得する学習教材。", filter: true },
  { name: "Database", description: "データベース設計や操作を扱う教材。", filter: true },
  { name: "Mac", description: "Mac操作や環境づくりを学ぶ教材。", filter: true },
  { name: "Git", description: "GitやGitHubを使った開発フローの教材。", filter: true },
  { name: "GitHub Pages", description: "GitHub Pagesで公開する静的サイト教材。" },
  { name: "Advanced", description: "基礎を終えた後に取り組む発展的な教材。" },
  { name: "JavaScript", description: "JavaScriptを使った実装を含む教材。" },
  { name: "Prompt", description: "プロンプト設計や使い方の練習教材。" },
  { name: "Deploy", description: "公開や配備の流れを扱う教材。" }
];

const statusDefinitions = [
  {
    key: "published",
    label: "Published",
    description: "利用可能な教材。GitHub Pagesがない補助教材も含みます。",
    order: 1
  },
  {
    key: "skills",
    label: "Skills",
    description: "教材そのものではなく、Skillや教材制作に関するもの。",
    order: 2
  },
  {
    key: "draft",
    label: "Draft",
    description: "作成中、または内容を調整している教材。",
    order: 3
  },
  {
    key: "paused",
    label: "Paused",
    description: "一時的に公開や更新を止めている教材。",
    order: 4
  },
  {
    key: "retired",
    label: "Retired",
    description: "公開終了、または旧版として記録だけ残す教材。",
    order: 5
  },
  {
    key: "hidden",
    label: "Hidden",
    description: "一時的にサイト上へ表示しない教材。",
    order: 6,
    private: true
  }
];

const statusLabels = Object.fromEntries(statusDefinitions.map((status) => [status.key, status.label]));
const statusOrder = Object.fromEntries(statusDefinitions.map((status) => [status.key, status.order]));

const state = {
  filter: "all",
  query: "",
  sort: "newest"
};

const grid = document.querySelector("#contentGrid");
const emptyState = document.querySelector("#emptyState");
const updateList = document.querySelector("#updateList");
const searchInput = document.querySelector("#siteSearch");
const sortSelect = document.querySelector("#sortSelect");
const filterBar = document.querySelector("#filterBar");
const tagGuide = document.querySelector("#tagGuide");
const statusGuide = document.querySelector("#statusGuide");
const themeButtons = [...document.querySelectorAll("[data-theme-option]")];
const themeStylesheet = document.querySelector("#themeStylesheet");
const tagCloud = document.querySelector("#tagCloud");
const backToTopButton = document.querySelector("#backToTop");
const scrollTopButtons = [...document.querySelectorAll("[data-scroll-top]")];
let filterButtons = [];

const THEME_STORAGE_KEY = "ai-start-up-theme";
const DEFAULT_THEME = "simple";
const themeAliases = {
  friendly: "simple",
  firm: "cute"
};

function visibleContents() {
  const query = state.query.trim().toLowerCase();

  return contents
    .filter((item) => item.status !== "hidden")
    .filter((item) => state.filter === "all" || item.tags.includes(state.filter))
    .filter((item) => {
      if (!query) return true;
      const haystack = [item.title, item.description, item.status, ...item.tags].join(" ").toLowerCase();
      return haystack.includes(query);
    })
    .sort((a, b) => {
      if (state.sort === "title") return a.title.localeCompare(b.title, "ja");
      if (state.sort === "status") return statusOrder[a.status] - statusOrder[b.status];
      return new Date(b.date) - new Date(a.date);
    });
}

function renderCards() {
  const items = visibleContents();
  grid.innerHTML = items.map(renderCard).join("");
  emptyState.hidden = items.length > 0;
}

function renderUpdates() {
  if (!updateList) return;

  updateList.innerHTML = updateItems.map((item) => {
    const date = new Date(item.date);
    const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;

    return `
      <li>
        <time datetime="${escapeHtml(item.date)}">${formattedDate}</time>
        <span class="pill ${escapeHtml(item.labelClass)}">${escapeHtml(item.label)}</span>
        ${escapeHtml(item.text)}
      </li>
    `;
  }).join("");
}

function renderFilters() {
  const filterTags = tagDefinitions.filter((tag) => tag.filter);
  filterBar.innerHTML = [
    `<button type="button" class="is-active" data-filter="all">すべて</button>`,
    ...filterTags.map((tag) => `
      <button type="button" data-filter="${escapeHtml(tag.name)}">${escapeHtml(tag.name)}</button>
    `)
  ].join("");

  filterButtons = [...filterBar.querySelectorAll("[data-filter]")];
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter));
  });
}

function renderGuideList(element, items, options = {}) {
  if (!element) return;
  const visibleItems = options.includePrivate ? items : items.filter((item) => !item.private);

  element.innerHTML = visibleItems.map((item) => `
    <div>
      <dt>${escapeHtml(item.label || item.name)}</dt>
      <dd>${escapeHtml(item.description)}</dd>
    </div>
  `).join("");
}

function renderCard(item) {
  const disabled = !item.pageUrl || item.status === "retired" || item.status === "paused";
  const muted = item.status === "retired" ? " is-muted" : "";
  const lessonLabel = "Open";
  const lessonLink = disabled
    ? `<span class="lesson-link is-disabled">${lessonLabel}</span>`
    : `<a class="lesson-link" href="${item.pageUrl}" target="_blank" rel="noreferrer">${lessonLabel}</a>`;

  return `
    <article class="course-card${muted}">
      <div class="course-top">
        <span class="course-icon">${escapeHtml(item.icon)}</span>
        <span class="status-badge status-${item.status}">${statusLabels[item.status]}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
      <ul class="tag-list">
        ${item.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}
      </ul>
      <div class="course-actions">
        ${lessonLink}
        <a class="repo-link" href="${item.repoUrl}" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </article>
  `;
}

function renderTagCloud() {
  const counts = contents
    .filter((item) => item.status !== "hidden")
    .flatMap((item) => item.tags)
    .reduce((map, tag) => {
      map[tag] = (map[tag] || 0) + 1;
      return map;
    }, {});

  tagCloud.innerHTML = Object.entries(counts)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 12)
    .map(([tag, count]) => `
      <button type="button" data-cloud-filter="${escapeHtml(tag)}">
        ${escapeHtml(tag)} <span>${count}</span>
      </button>
    `)
    .join("");

  tagCloud.querySelectorAll("[data-cloud-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      setFilter(button.dataset.cloudFilter);
      document.querySelector("#library").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setFilter(filter) {
  state.filter = filter;

  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });

  tagCloud.querySelectorAll("[data-cloud-filter]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.cloudFilter === filter);
  });

  renderCards();
}

function normalizeTheme(theme) {
  const normalizedTheme = themeAliases[theme] || theme;
  return normalizedTheme === "cute" ? "cute" : DEFAULT_THEME;
}

function setTheme(theme) {
  const normalizedTheme = normalizeTheme(theme);

  document.body.dataset.theme = normalizedTheme;
  if (themeStylesheet) {
    themeStylesheet.disabled = normalizedTheme !== "cute";
  }
  localStorage.setItem(THEME_STORAGE_KEY, normalizedTheme);
  themeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.themeOption === normalizedTheme);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => setTheme(button.dataset.themeOption));
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderCards();
});

sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderCards();
});

const scrollToPageTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

if (backToTopButton) {
  const toggleBackToTop = () => {
    backToTopButton.classList.toggle("is-visible", window.scrollY > 520);
  };

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();
}

scrollTopButtons.forEach((button) => {
  button.addEventListener("click", scrollToPageTop);
});

setTheme(localStorage.getItem(THEME_STORAGE_KEY));

renderUpdates();
renderFilters();
renderGuideList(tagGuide, tagDefinitions);
renderGuideList(statusGuide, statusDefinitions);
renderTagCloud();
renderCards();
