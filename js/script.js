const contents = [
  {
    title: "Claude Agent SDK Hands-on",
    description: "Claude Agent SDK を使って、エージェントを構築するハンズオン教材です。",
    tags: ["Claude", "Agent", "API", "Advanced"],
    status: "published",
    icon: ">_",
    pageUrl: "https://akilab.github.io/claude-agent-sdk-hands-on/",
    repoUrl: "https://github.com/akilab/claude-agent-sdk-hands-on.git",
    date: "2025-05-22",
    score: 128
  },
  {
    title: "Streamline SSE",
    description: "SSE (Server-Sent Events) を使ってリアルタイムなAIアプリを作るステップバイステップ教材です。",
    tags: ["SSE", "API", "Beginner", "JavaScript"],
    status: "published",
    icon: "~~~",
    pageUrl: "https://akilab.github.io/streamline-sse/",
    repoUrl: "https://github.com/akilab/streamline-sse.git",
    date: "2025-05-18",
    score: 96
  },
  {
    title: "Claude Practice",
    description: "Claude 活用のプロンプトとワークフローを集めた練習用コンテンツです。",
    tags: ["Claude", "Beginner", "Prompt"],
    status: "draft",
    icon: "AI",
    pageUrl: "https://akilab.github.io/claude-practice/",
    repoUrl: "https://github.com/akilab/claude-practice.git",
    date: "2025-05-10",
    score: 74
  },
  {
    title: "Mac Terminal Practice",
    description: "Mac のターミナル操作を基礎から体験的に学べるハンズオン教材です。",
    tags: ["Mac", "Terminal", "Beginner"],
    status: "published",
    icon: "⌘",
    pageUrl: "https://akilab.github.io/mac-terminal-practice/",
    repoUrl: "https://github.com/akilab/mac-terminal-practice.git",
    relatedUrl: "https://github.com/akilab/mac-git-practice-lab.git",
    date: "2025-05-08",
    score: 88
  },
  {
    title: "Claude Code Lab Builder",
    description: "Claude Code と組み合わせて、学習環境とラボ教材を構築するための制作ツールです。",
    tags: ["Claude", "Tooling", "Advanced"],
    status: "tooling",
    icon: "</>",
    repoUrl: "https://github.com/akilab/claude-code-lab-builder.git",
    date: "2025-04-26",
    score: 64
  },
  {
    title: "Git Essentials",
    description: "Git の基本操作を練習するための補助教材です。公開準備中です。",
    tags: ["Git", "Beginner", "Terminal"],
    status: "paused",
    icon: "git",
    repoUrl: "https://github.com/akilab/mac-git-practice-lab.git",
    date: "2025-04-20",
    score: 53
  },
  {
    title: "Legacy GitHub Pages Guide",
    description: "静的サイト公開の旧ガイドです。記録用として残しています。",
    tags: ["Git", "GitHub Pages", "Deploy"],
    status: "retired",
    icon: "old",
    repoUrl: "https://github.com/akilab",
    date: "2025-03-12",
    score: 37
  }
];

const statusLabels = {
  published: "Published",
  draft: "Draft",
  paused: "Paused",
  retired: "Retired",
  tooling: "Tooling",
  hidden: "Hidden"
};

const statusOrder = {
  published: 1,
  tooling: 2,
  draft: 3,
  paused: 4,
  retired: 5,
  hidden: 6
};

const state = {
  filter: "all",
  query: "",
  sort: "newest"
};

const grid = document.querySelector("#contentGrid");
const emptyState = document.querySelector("#emptyState");
const searchInput = document.querySelector("#siteSearch");
const sortSelect = document.querySelector("#sortSelect");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const themeButtons = [...document.querySelectorAll("[data-theme-option]")];
const themeStylesheet = document.querySelector("#themeStylesheet");
const tagCloud = document.querySelector("#tagCloud");
const rankingList = document.querySelector("#rankingList");

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

function renderRanking() {
  if (!rankingList) return;

  rankingList.innerHTML = [...contents]
    .filter((item) => item.status !== "hidden")
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((item) => `
      <li>
        <span>${escapeHtml(item.title)}</span>
        <span class="status-badge status-${item.status}">${statusLabels[item.status]}</span>
      </li>
    `)
    .join("");
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

function setTheme(theme) {
  document.body.dataset.theme = theme;
  if (themeStylesheet) {
    themeStylesheet.disabled = theme !== "firm";
  }
  localStorage.setItem("ai-start-up-theme", theme);
  themeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.themeOption === theme);
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

filterButtons.forEach((button) => {
  button.addEventListener("click", () => setFilter(button.dataset.filter));
});

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

const savedTheme = localStorage.getItem("ai-start-up-theme");
if (savedTheme === "firm" || savedTheme === "friendly") {
  setTheme(savedTheme);
}

renderTagCloud();
renderRanking();
renderCards();
