// Single source of truth for all portfolio content.
// Sourced from Chris Dell's CV, Master Resume, Portfolio, and Research Statement (2026).

export const HERO = {
  label: "Sports Media • Educator • Founder",
  headlineLine1: "Sports Media.",
  headlineLine2: "Built Different.",
  subhead:
    "Award-winning Sports Editor, Media Educator, and Tech Founder with 22+ years building newsrooms, audiences, and revenue-generating platforms from scratch.",
  tags: ["Penn State", "Post-Gazette", "CUNY", "NY Times"],
};

export const STATS = [
  { value: "$404K", label: "Video & audio revenue, P-G 2023–2025" },
  { value: "53.8M", label: "Impressions across 1,800+ videos" },
  { value: "$150K+", label: "Subscription revenue, Fantasy Edge Media" },
  { value: "#1", label: "FantasyPros draft accuracy, 235 analysts" },
];

export const TICKER_ITEMS: { text: string; hl?: boolean }[] = [
  { text: "2× APSE Triple Crown (2024 & 2025)", hl: true },
  { text: "$404K sports video & audio revenue" },
  { text: "53.8M impressions · 1,800+ videos" },
  { text: "#1 FantasyPros draft accuracy (2023)", hl: true },
  { text: "500K+ NFL Draft short-form views" },
  { text: "$150K+ subscription revenue" },
  { text: "900K+ podcast downloads in Year 1", hl: true },
  { text: "179% NFL Draft engagement increase" },
  { text: "U.S. Open: 254K pageviews · 397K video views" },
  { text: "BracketX & MockX — AI-powered (2026)", hl: true },
  { text: "25K+ X followers from one viral thread" },
  { text: "Penn State × AP — FIFA World Cup 2026" },
  { text: "Featured in Forbes — Go Baller", hl: true },
];

export const FEATURED_VIDEOS = [
  {
    youtubeId: "iCxp5WAqVdM",
    tag: "Live Production",
    title: "NFL Draft 2-Day Livestream",
    description:
      "Directed a sponsored livestream — set design, scripting, sponsorship integration. Student interns on camera, editing, and analysis.",
    metrics: "33.5K livestream views · 500K+ total · 179% lift",
  },
  {
    youtubeId: "E8iFRnzd-J4",
    tag: "Mini-Doc · Student Production",
    title: "Living the U.S. Open Dream",
    description:
      "Led the Post-Gazette's entire multimedia operation for the U.S. Open at Oakmont. 30+ short-form videos in 10 days.",
    metrics: "254K pageviews · 397K video views · APSE Top 10",
  },
];

export const WORK_CARDS = [
  {
    gradient: "linear-gradient(135deg,#0f172a,#1e3a5f,#3b82f6)",
    label: "Interactive Big Board",
    tag: "Digital Product",
    description:
      "Conceived and led creation of an interactive draft tool with the P-G product team. APSE Top 10 Digital.",
    metrics: "90% time-on-page lift · 125% email open rate lift",
    url: "https://newsinteractive.post-gazette.com/steelers-2025-nfl-draft-picks/",
    cta: "Explore",
  },
  {
    gradient: "linear-gradient(135deg,#064e3b,#065f46,#10b981)",
    label: "U.S. Open Interactive",
    tag: "Interactive · Drone Video",
    description:
      "Interactive hub with drone footage, editorial storytelling, and data visualization for the U.S. Open at Oakmont.",
    metrics: "APSE Top 10 Special Sections (Class A/B)",
    url: "https://newsinteractive.post-gazette.com/2025-us-open-oakmont-country-club/",
    cta: "Explore",
  },
  {
    gradient: "linear-gradient(135deg,#0f0f0f,#1a1a2e,#e11d48)",
    label: "P-G Sports TikTok",
    tag: "Platform Launch",
    description:
      "Launched the Post-Gazette's first sports TikTok channel. Built strategy, trained students from day one.",
    metrics: "350K+ views · 600+ followers in 10 days",
    url: "https://www.tiktok.com/@pgsportsnetwork",
    cta: "View",
  },
  {
    gradient: "linear-gradient(135deg,#1e1b4b,#3730a3,#6366f1)",
    label: "Viral X Thread",
    tag: "Audience Growth",
    description:
      "Weekly buy/sell analysis on X. One thread went viral — 2K to 25K+ followers in 48 hours.",
    metrics: "1.5M+ impressions · 12× follower growth",
    url: "https://x.com/MaddJournalist/status/1841350796459286984",
    cta: "View",
  },
  {
    gradient: "linear-gradient(135deg,#1c1917,#44403c,#78716c)",
    label: "House v. NCAA",
    tag: "Enterprise Reporting",
    description:
      "Directed coverage of the landmark NIL settlement — 20+ stories, exclusive interviews, multiple A1 features.",
    metrics: "",
    url: "https://www.post-gazette.com/sports/ncaa/2025/04/06/house-v-ncaa-nil-settlement-college-sports/stories/202504040042",
    cta: "Read",
  },
  {
    gradient: "linear-gradient(135deg,#7c2d12,#c2410c,#fb923c)",
    label: "Reddit AMA",
    tag: "Community",
    description:
      "Quarterly Q&A with r/fantasyfootball — one of Reddit's largest sports communities.",
    metrics: "1.9M+ views · 2.8K+ comments · 55K+ visitors",
    url: "https://www.reddit.com/r/fantasyfootball/comments/1gi2ovc/",
    cta: "View",
  },
];

export const WRITING_CARDS = [
  {
    tag: "Draft Analysis",
    title: "NFL Draft: Risers, Fallers & Trends",
    description:
      "Data-driven analysis combining scouting intel, advanced metrics, and prediction modeling.",
    url: "https://www.post-gazette.com/sports/fantasy-football/2024/04/25/2024-nfl-draft-mock-news-round-1-predictions-risers-fallers/stories/202404220059",
  },
  {
    tag: "Enterprise Column",
    title: "Jontay Porter & the NBA Betting Crisis",
    description:
      "Examining the fault lines between leagues and commercial sportsbooks.",
    url: "https://www.post-gazette.com/sports/fantasy-football/2024/04/22/sports-betting-scandal-jontay-porter-shohei-ohtani-mizuhara-fanduel-draftkings/stories/202404150143",
  },
  {
    tag: "Betting Guide",
    title: "U.S. Open: Betting with Strokes Gained",
    description:
      "Analytical betting guide applying PGA Tour strokes-gained data.",
    url: "https://www.post-gazette.com/sports/us-open/2025/06/12/chris-dell-us-open-betting-guide-how-to-bet-golf-pga/stories/202505310046",
  },
  {
    tag: "Fantasy Column",
    title: "Fantasy Football Cheat Sheet",
    description:
      "Top players to target in every round. Most-read article of August 2024.",
    url: "https://www.post-gazette.com/sports/fantasy-football/2024/08/25/fantasy-draft-cheat-sheet-strategy-sleepers-league-winners-ppr-espn/stories/202407300151",
  },
  {
    tag: "Enterprise",
    title: "Corruption in NFFC",
    description:
      "The integrity of the fantasy sports industry — a high-stakes contest investigation.",
    url: "https://www.post-gazette.com/sports/fantasy-football/2024/01/28/nffc-scandal-daily-fantasy-football-sports-betting-scandal-draftkings-fanduel/stories/202401220147",
  },
  {
    tag: "Strategy",
    title: "The 10 Commandments of Fantasy Football",
    description:
      "How to win your leagues in 2023. Evergreen strategy breakdown.",
    url: "https://www.post-gazette.com/sports/nfl/2023/08/02/fantasy-football-commandments-draft-strategy-targets-usage-dfs-draftkings-fanduel/stories/202308010082",
  },
];

export const VENTURES = [
  {
    name: "BracketX",
    subtitle: "AI-Powered Analytics · 2026",
    description:
      "Composite college basketball ratings and predictive analytics for March Madness. Designed, developed, and launched entirely using AI.",
    stat: "",
    url: "https://bracketx.co/",
  },
  {
    name: "MockX",
    subtitle: "AI-Powered Draft Tracker · 2026",
    description:
      "NFL Draft consensus tracker aggregating mock draft data into real-time predictive rankings.",
    stat: "",
    url: "https://mockx.co/",
  },
  {
    name: "Fantasy Edge Media",
    subtitle: "Media Platform · Founded 2020",
    description:
      "Direct-to-consumer fantasy sports and betting media platform. Formerly BettingPredators.com.",
    stat: "500+ paid subs · 6.6K newsletter · 900K+ downloads · #1 FantasyPros",
    url: "",
  },
  {
    name: "Go Baller",
    subtitle: "Venture-Backed · 2015–2025 · Forbes",
    description:
      "Sports tech startup backed by Dan Gilbert's Bizdom. Clients: Cavaliers, Dodgers, ESPN, NY Daily News.",
    stat: "",
    url: "https://www.forbes.com/sites/williamnoglows/2015/06/25/versatile-go-baller-adopts-new-model/",
  },
];

export const AWARDS_APSE = [
  { name: "Top 10, Special Sections (A/B combined) — U.S. Open", year: "2025" },
  { name: "Triple Crown, 2nd consecutive year (Class B)", year: "2025" },
  { name: "Top 10, Digital (Class B)", year: "2025" },
  { name: "Top 10, Projects (Class B)", year: "2025" },
  { name: "Top 10, Print Portfolio (Class B)", year: "2025" },
  { name: "Triple Crown (Class B)", year: "2024" },
  { name: "Top 10, Digital (Class B)", year: "2024" },
  { name: "Top 10, Event Coverage (Class B)", year: "2024" },
  { name: "Top 10, Print Portfolio (Class B)", year: "2024" },
];

export const AWARDS_INDIVIDUAL = [
  { name: "FantasyPros Draft Accuracy Champion", year: "2023" },
  { name: "Tow-Knight Center Fellow", year: "2014" },
  { name: "New York Times Student Journalism Fellow", year: "2014" },
  { name: "NAHJ George Ramos Student Projects Fellow", year: "2013" },
  { name: "Dean Stephen Shepard Award", year: "2013" },
];

export const CONTACTS = [
  { label: "Email", url: "mailto:christopher.dell@journalism.cuny.edu" },
  { label: "X / Twitter", url: "https://x.com/MaddJournalist" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/chrisdell" },
  { label: "941-228-1862", url: "tel:9412281862" },
];
