// All site content lives here so copy edits never require touching components.

export const profile = {
  name: 'Sebastien A. Renault',
  initials: 'SR',
  role: 'Software Engineer & CS Graduate 2026',
  tagline:
    'I design and ship full-stack systems — from PostgreSQL schemas to cross-platform clients.',
  bio: 'Computer Science graduate of Christopher Newport University (May 2026). My most recent build is an AI-powered news platform on Flutter, Python, and Supabase, where I led architecture for a team of three. Bilingual in English and French.',
  tags: ['Full-Stack', 'System Design', 'Python', 'Flutter', 'AI Integration'],
  links: {
    github: 'https://github.com/srenault93',
    linkedin: 'https://www.linkedin.com/in/sebastien-renault-82b3bb295',
    email: 'srenault93@gmail.com',
  },
}

export const capstone = {
  award: "People's Choice · CNU 2026 Capstone Fair",
  eyebrow: 'Featured · Senior Capstone 2026',
  name: 'QuickFeed',
  subtitle: 'AI News Aggregator',
  status: 'Pending Play Store review',
  repo: 'https://github.com/srenault93/CNU_2026_CAPSTONE',
  summary:
    'A cross-platform mobile app that delivers a personalized, AI-summarized daily briefing instead of an endless feed. I led the technical side for a team of three, owning the stack, schema, and architecture from day one. It won People’s Choice at the 2026 Capstone Fair, voted across every department by faculty and students.',
  problem:
    'Most news apps drown the reader in infinite scroll or hide curation behind a paywall. The goal: deliver the day’s signal in a finite, finishable briefing that respects the reader’s time — cheaply enough that the unit economics survive growth.',
  architecture: ['Firecrawl', 'GPT-4o-mini', 'Supabase', 'Flutter'],
  architectureNote:
    'A daily Python cron on Railway pulls fresh URLs per topic, scrapes them, summarizes through OpenAI against a strict JSON schema, and writes results to Supabase. The Flutter client only ever reads pre-generated articles — no per-user inference, no per-request LLM calls.',
  decisions: [
    {
      label: 'Database',
      text: 'Chose Supabase over Firebase to keep direct SQL schema control and fine-grained auth. Designed the PostgreSQL schema, indexes, and RLS policies from scratch.',
    },
    {
      label: 'Cost model',
      text: 'A Firecrawl + GPT-4o-mini pipeline that scales with topics, not users. API costs stay flat regardless of how many people install the app.',
    },
    {
      label: 'Backend shape',
      text: 'A scheduled Python job, not a request-response server. The expensive AI work runs once per topic per day; the app just reads from Supabase.',
    },
    {
      label: 'Frontend',
      text: 'Flutter — a single Dart codebase targeting Android and iOS without two separate language stacks.',
    },
  ],
  engineering: [
    {
      title: 'SIGALRM hard timeout',
      text: 'The cron sets a 10-minute wall-clock alarm so a hung network call can’t loop the container forever. Orphaned "running" rows are recovered on the next invocation by a stale-run sweeper.',
    },
    {
      title: 'Strict JSON schema on model output',
      text: 'OpenAI responses are validated against a Pydantic schema with enums (pov, sentiment) and exact-count constraints (5 key points). Invalid output triggers one retry on truncated content; if that fails, only the article is dropped, never the whole run.',
    },
  ],
  outcomes: [
    "People’s Choice winner at the 2026 Capstone Fair, voted across all departments",
    'Pending Google Play Store publication',
    '15 active topics across the catalog',
  ],
  stack: ['Flutter', 'Python', 'Supabase', 'PostgreSQL', 'Railway', 'GPT-4o-mini', 'Firecrawl', 'Pydantic'],
  screens: [
    {
      src: '/images/screenshot-briefing.png',
      alt: 'Daily briefing screen showing What Happened Today with three top stories',
    },
    {
      src: '/images/screenshot-welcome.jpeg',
      alt: 'Welcome screen with personalized greeting and swipe-down for today’s news',
    },
  ],
}

// GitHub account that owns the project repos (used for live README fetching).
export const githubUser = 'srenault93'

// Every project that gets its own detail page (/project/:slug).
// `repo` is the GitHub repo name — its README is fetched live at runtime.
// `video` is a path under /public (e.g. '/videos/quickfeed.mp4'); null → placeholder.
// `highlights` are short editable bullets shown above the README.
export const projectList = [
  {
    slug: 'quickfeed',
    name: 'QuickFeed',
    tagline: 'AI-summarized daily news briefing',
    year: '2026',
    role: 'Lead Engineer · Team of 3',
    language: 'Dart · Python',
    featured: true,
    repo: 'CNU_2026_CAPSTONE',
    repoUrl: 'https://github.com/srenault93/CNU_2026_CAPSTONE',
    liveUrl: null,
    video: null,
    desc: 'A cross-platform mobile app that delivers a personalized, AI-summarized daily briefing instead of an endless feed. Won People’s Choice at the 2026 CNU Capstone Fair.',
    stack: ['Flutter', 'Python', 'Supabase', 'PostgreSQL', 'Railway', 'GPT-4o-mini', 'Firecrawl', 'Pydantic'],
    highlights: [
      'Led architecture, schema, and the full stack for a three-person team.',
      'A daily Python cron scrapes, summarizes, and writes to Supabase — the app only ever reads pre-generated articles, so AI cost scales with topics, not users.',
      'Strict Pydantic JSON schema on model output with retry + per-article fallback; SIGALRM wall-clock timeout guards the cron container.',
      'People’s Choice winner at the 2026 Capstone Fair, voted across all departments.',
    ],
    screens: [
      { src: '/images/screenshot-briefing.png', alt: 'QuickFeed daily briefing screen' },
      { src: '/images/screenshot-welcome.jpeg', alt: 'QuickFeed welcome screen' },
    ],
    // Small support sites built around the app — shown as supporting work, not standalone projects.
    supporting: [
      { label: 'Beta testers site', url: 'https://srenault93.github.io/quickfeed-testers' },
      { label: 'Privacy policy', url: 'https://srenault93.github.io/quickfeed-privacy' },
    ],
  },
  {
    slug: 'gb-emulator',
    name: 'Game Boy Emulator',
    tagline: 'A cycle-aware Game Boy emulator in C++',
    year: '2025',
    role: 'Solo project',
    language: 'C++',
    repo: 'GB-Emulator',
    repoUrl: 'https://github.com/srenault93/GB-Emulator',
    liveUrl: null,
    video: null,
    desc: 'An emulator for the original Game Boy — CPU, memory map, and graphics — written from scratch in C++ to run real cartridge ROMs.',
    stack: ['C++', 'Emulation', 'Systems Programming'],
    highlights: [
      'Implements the Sharp LR35902 CPU core: registers, flags, and the instruction set.',
      'Models the memory map, cartridge loading, and the PPU graphics pipeline.',
      'A from-scratch systems project — see the README for build steps and current status.',
    ],
    screens: [],
  },
  {
    slug: 'chip-8',
    name: 'CHIP-8 Interpreter',
    tagline: 'A complete CHIP-8 virtual machine in C++',
    year: '2024',
    role: 'Solo project',
    language: 'C++',
    repo: 'Chip-8-Emulator',
    repoUrl: 'https://github.com/srenault93/Chip-8-Emulator',
    liveUrl: null,
    video: null,
    demoGif: '/images/chip8-demo.gif',
    desc: 'A CHIP-8 virtual machine implementing the fetch-decode-execute cycle, all 35 opcodes, the display subsystem, and keypad input to run original ROMs.',
    stack: ['C++', 'Makefile', 'Systems Programming'],
    highlights: [
      'Full fetch-decode-execute CPU loop covering all 35 opcodes.',
      'Models the 4K memory layout, registers, stack, timers, and 64×32 display.',
      'Maps the 16-key hex keypad to keyboard input to play classic ROMs.',
    ],
    screens: [
      { src: '/images/chip8.png', alt: 'CHIP-8 emulator running a test ROM with green-phosphor display and on-screen keypad' },
    ],
  },
  {
    slug: 'asteroids',
    name: 'Vector Asteroids',
    tagline: 'An arcade game built from scratch in PyGame',
    year: '2026',
    role: 'Solo project',
    language: 'Python',
    repo: 'asteroids-pygame',
    repoUrl: 'https://github.com/srenault93/asteroids-pygame',
    liveUrl: null,
    video: null,
    desc: 'A from-scratch Asteroids clone in Python and PyGame — thrust-based ship physics, screen wrap-around, asteroids that split when shot, particle explosions, scoring, lives, and escalating waves.',
    stack: ['Python', 'PyGame', 'SDL2', 'Game Development'],
    highlights: [
      'Fixed-timestep 60 FPS game loop with frame-rate-independent movement and exponential ship friction.',
      'Entity-based design — ship, bullets, asteroids, and particles each own their update and draw logic, with circle-based collision resolution.',
      'Procedurally generated jagged asteroids that split into smaller rocks on impact.',
      'Built on the same SDL2 layer as my Game Boy and CHIP-8 emulators.',
    ],
    screens: [
      { src: '/images/asteroids.png', alt: 'Vector Asteroids gameplay — ship firing through a field of asteroids' },
    ],
  },
  {
    slug: 'starfall',
    name: 'Starfall',
    tagline: 'An arcade dodge game built with Godot 4',
    year: '2026',
    role: 'Solo project',
    language: 'GDScript',
    repo: 'starfall-godot',
    repoUrl: 'https://github.com/srenault93/starfall-godot',
    liveUrl: null,
    video: null,
    desc: 'A from-scratch arcade dodge game in Godot 4 and GDScript — steer a ship through an accelerating stream of falling blocks, with the spawn rate and fall speed ramping up the longer you survive.',
    stack: ['Godot 4', 'GDScript', 'Game Development'],
    highlights: [
      'A menu / playing / game-over state machine driving the whole game from a single Node2D.',
      'Difficulty scales with survival time — spawn interval and fall speed both ramp continuously.',
      'Immediate-mode rendering in _draw() with Rect2-based collision; no external art assets.',
    ],
    screens: [
      { src: '/images/starfall.png', alt: 'Starfall gameplay — ship dodging falling blocks' },
    ],
  },
  {
    slug: 'francisco-portfolio',
    name: 'Francisco Portfolio',
    tagline: 'A portfolio site built for a friend',
    year: '2025',
    role: 'Freelance / client work',
    language: 'HTML · CSS',
    repo: 'Francisco-portfolio',
    repoUrl: 'https://github.com/srenault93/Francisco-portfolio',
    liveUrl: 'https://srenault93.github.io/Francisco-portfolio',
    video: null,
    desc: 'A personal portfolio site designed and built for a friend — turning someone else’s story into a clean, responsive web presence.',
    stack: ['HTML', 'CSS', 'Web Design'],
    highlights: [
      'Designed and shipped end-to-end for a real client.',
      'Responsive layout focused on clarity and fast load.',
    ],
    screens: [],
  },
  {
    slug: 'portfolio',
    name: 'This Portfolio',
    tagline: 'The site you’re looking at',
    year: '2026',
    role: 'Solo project',
    language: 'React · CSS',
    repo: 'srenault93.github.io',
    repoUrl: 'https://github.com/srenault93/srenault93.github.io',
    liveUrl: 'https://srenault93.github.io',
    video: null,
    desc: 'A React + Vite portfolio with hand-written CSS, motion-driven interactions, client-side routing, and a GitHub Actions deploy pipeline.',
    stack: ['React', 'Vite', 'CSS', 'Motion', 'GitHub Actions'],
    highlights: [
      'Hand-written CSS design system — no UI framework.',
      'Client-side routing with live per-project README rendering.',
      'Fully responsive, animated with Motion, deployed via GitHub Actions.',
    ],
    screens: [],
  },
]

export const getProject = (slug) => projectList.find((p) => p.slug === slug)

export const experience = [
  {
    date: '2022 — Present',
    role: 'Server & Cook',
    company: 'Cinema Café',
    bullets: [
      'Worked across kitchen and front-of-house roles for over three years in a high-volume restaurant.',
      'Trained new team members and kept service moving through dinner rushes.',
      'Practiced clear communication and reliability under sustained time pressure.',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Science in Computer Science',
  school: 'Christopher Newport University',
  detail: 'Graduated May 2026 · Bilingual: English & French',
  courses: [
    { code: 'CPSC 480 / 280', name: 'Software Design & Engineering' },
    { code: 'CPSC 420', name: 'Algorithms' },
    { code: 'CPSC 410', name: 'Operating Systems' },
    { code: 'CPSC 440', name: 'Database Management Systems' },
    { code: 'CPSC 360', name: 'Programming Language Concepts' },
    { code: 'CPSC 327', name: 'C++ Programming' },
    { code: 'CPSC 270', name: 'Data & File Structures' },
    { code: 'ENGR 213', name: 'Discrete Structures' },
    { code: 'CPEN 214', name: 'Digital Logic Design' },
    { code: 'PCSE 495', name: 'User Interface & UX Design' },
  ],
  skills: [
    'Python', 'C++', 'Java', 'Dart', 'SQL', 'HTML / CSS', 'Flutter',
    'Supabase', 'PostgreSQL', 'Railway', 'Git / GitHub', 'Linux',
    'REST APIs', 'System Design', 'CI/CD',
  ],
}

export const nav = [
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
]
