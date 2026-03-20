import { siteUrl } from "@/lib/site-config";

export type NavItem = {
  href: string;
  label: string;
};

export type MetricCard = {
  label: string;
  value: string;
  note: string;
};

export type DeveloperSurfaceRow = {
  label: string;
  value: string;
};

export type FeatureCard = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export type AccessPath = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  cta: string;
  href: string;
};

export type GuideCard = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  className?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export { siteUrl };
export const siteName = "MiniMax M2.7";
export const siteDescription =
  "A search-ready MiniMax M2.7 guide covering benchmarks, API access, pricing, MiniMax-M2.7-highspeed, features, and official developer docs.";

export const officialLinks = {
  apiPlatform: "https://platform.minimax.io",
  developerDocs: "https://platform.minimax.io/docs",
  agent: "https://agent.minimax.io",
  modelOverview: "https://www.minimax.io/models/text/m27",
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/official-links", label: "Official Links" },
];

export const homeKeywords = [
  "MiniMax M2.7 API",
  "MiniMax M2.7 benchmarks",
  "MiniMax M2.7 pricing",
  "M2.7-highspeed",
];

export const benchmarkCards: MetricCard[] = [
  {
    label: "SWE-Pro",
    value: "56.22%",
    note: "Official M2.7 launch copy says this score approaches Opus-level performance.",
  },
  {
    label: "Terminal Bench 2",
    value: "57.0%",
    note: "Used as the proof point for deeper understanding of complex engineering systems.",
  },
  {
    label: "VIBE-Pro",
    value: "55.6%",
    note: "Presented as evidence that end-to-end project delivery extends beyond coding snippets.",
  },
  {
    label: "GDPval-AA ELO",
    value: "1495",
    note: "The launch page positions this as the highest score among open-source models in that benchmark.",
  },
];

export const heroSignals = [
  {
    label: "Skill adherence",
    value: "97%",
    note: "On 40 complex skills cases above 2000 tokens, according to the public launch page.",
  },
  {
    label: "Model variants",
    value: "2",
    note: "MiniMax-M2.7 and MiniMax-M2.7-highspeed are described as result-equivalent access options.",
  },
];

export const developerSurfaceRows: DeveloperSurfaceRow[] = [
  {
    label: "Endpoint",
    value: "POST /v1/text/chatcompletion_v2",
  },
  {
    label: "API",
    value: "v2.1 connected",
  },
  {
    label: "Models",
    value: "MiniMax-M2.7 / MiniMax-M2.7-highspeed",
  },
  {
    label: "Auth",
    value: "Bearer token",
  },
];

export const toolCompatibility = [
  "Claude Code",
  "Roo Code",
  "Kilo Code",
  "Cline",
  "Codex CLI",
  "OpenCode",
  "Droid",
  "TRAE",
  "Grok CLI",
  "Cursor",
];

export const highlightCards: FeatureCard[] = [
  {
    eyebrow: "01 / Coding",
    title: "End-to-end engineering delivery",
    description:
      "M2.7 is presented as strong in full project delivery, bug hunting, security checks, and other real software engineering tasks.",
    bullets: [
      "Better fit for workflows that move from repo analysis to implementation to verification",
      "Built to stay useful when context is messy rather than perfectly scoped",
      "Makes benchmark claims that map back to practical coding scenarios",
    ],
  },
  {
    eyebrow: "02 / Agents",
    title: "Longer-running tool and agent work",
    description:
      "The launch material emphasizes complex agent harnesses, tool scaffolding generalization, and reliable behavior under longer task chains.",
    bullets: [
      "Strong fit for CLI, IDE, and automation surfaces that demand consistent tool usage",
      "Designed around workflows that span many steps rather than one answer",
      "High skill-adherence framing makes it relevant for orchestration-heavy use",
    ],
  },
  {
    eyebrow: "03 / Editing",
    title: "Office-suite and multi-turn editing fidelity",
    description:
      "M2.7 is explicitly positioned as improved for Excel, PowerPoint, and Word editing tasks with better multi-turn modifications.",
    bullets: [
      "Useful for structured edits that must preserve layout or existing content",
      "Supports higher-fidelity document operations, not just summarization",
      "More aligned with production productivity teams than generic chat use",
    ],
  },
  {
    eyebrow: "04 / Interaction",
    title: "Identity preservation and emotional range",
    description:
      "Beyond productivity scenarios, the public narrative also highlights identity consistency and emotional intelligence for interactive experiences.",
    bullets: [
      "Opens room for interactive product design beyond strict workflow automation",
      "Extends the model story into entertainment and conversational product surfaces",
      "Balances serious utility messaging with broader product imagination",
    ],
  },
];

export const researchPaths: GuideCard[] = [
  {
    eyebrow: "Benchmarks",
    title: "Read benchmark claims with context",
    description:
      "Use the FAQ page to interpret SWE-Pro, Terminal Bench 2, VIBE-Pro, and highspeed claims before treating them as product proof.",
    href: "/faq",
    cta: "Open FAQ",
    className: "bg-[linear-gradient(160deg,#1b2e40_0%,#355c7d_48%,#68a6d8_100%)]",
  },
  {
    eyebrow: "Use cases",
    title: "Match workflows to the strongest M2.7 fits",
    description:
      "The features page narrows the story to coding, agent work, document editing, and complex tool execution instead of generic AI copy.",
    href: "/features",
    cta: "Review features",
    className: "bg-[linear-gradient(160deg,#102532_0%,#1d4957_48%,#7cd4d3_100%)]",
  },
  {
    eyebrow: "Pricing",
    title: "Verify pricing and highspeed access paths",
    description:
      "The pricing page explains where to confirm live token plans and how MiniMax positions the highspeed variant for faster throughput.",
    href: "/pricing",
    cta: "Review pricing",
    className: "bg-[linear-gradient(150deg,#23152f_0%,#4c2f69_50%,#d69fea_100%)]",
  },
  {
    eyebrow: "Official sources",
    title: "Jump to the right MiniMax surface",
    description:
      "The official links page turns the API platform, docs, MiniMax Agent, and model overview into one clean decision map.",
    href: "/official-links",
    cta: "Open official links",
    className: "bg-[linear-gradient(150deg,#142017_0%,#27563d_48%,#b5d96f_100%)]",
  },
];

export const siteGuideLinks: GuideCard[] = [
  {
    eyebrow: "Capabilities",
    title: "Features breakdown",
    description:
      "Map public claims to coding, agent, editing, and environment workflows before deciding whether the model fits your use case.",
    href: "/features",
    cta: "Open features",
  },
  {
    eyebrow: "Evaluation",
    title: "Pricing and access paths",
    description:
      "Use the pricing page to decide whether you need the direct API route, token-plan research, or a quicker agent-based evaluation path.",
    href: "/pricing",
    cta: "Open pricing",
  },
  {
    eyebrow: "Evidence",
    title: "FAQ and benchmark context",
    description:
      "Cross-check the most repeated search questions before you leave for the official docs so benchmark and highspeed claims stay grounded.",
    href: "/faq",
    cta: "Open FAQ",
  },
];

export const accessPaths: AccessPath[] = [
  {
    eyebrow: "01 / API",
    title: "Direct platform integration",
    description:
      "Use the official API platform if you want direct control of product logic, routing, prompting, and application-level UX.",
    points: [
      "Two model variants: M2.7 and M2.7-highspeed",
      "Direct developer docs and auth flow",
      "Best fit for products, apps, and custom agent loops",
    ],
    cta: "Open API platform",
    href: officialLinks.apiPlatform,
  },
  {
    eyebrow: "02 / Plans",
    title: "Token-plan workflow",
    description:
      "Use the official plan surface if you want current pricing context and the faster-path experience highlighted on the launch page.",
    points: [
      "Official pricing and plan information lives on MiniMax surfaces",
      "Launch page notes unchanged price with stronger performance",
      "Useful for teams deciding how to operationalize sustained usage",
    ],
    cta: "View token plans",
    href: officialLinks.apiPlatform,
  },
  {
    eyebrow: "03 / Agent",
    title: "No-build evaluation with MiniMax Agent",
    description:
      "Use the agent route if you want to feel the model's reasoning and programming assistance before integrating it yourself.",
    points: [
      "General agent platform built on M2.7",
      "Good for immediate evaluation without implementation work",
      "Useful for validating fit before engineering a full integration",
    ],
    cta: "Try MiniMax Agent",
    href: officialLinks.agent,
  },
];

export const featureGroups: FeatureCard[] = [
  {
    eyebrow: "Code delivery",
    title: "Serious software engineering tasks",
    description:
      "The M2.7 launch narrative directly references end-to-end project delivery, log analysis, code security, and machine-learning work.",
    bullets: [
      "Suited to long repo-context tasks rather than tiny isolated prompts",
      "Backed by public benchmark positioning around SWE-Pro and Terminal Bench 2",
      "Designed to support a complete engineering loop from diagnosis to execution",
    ],
  },
  {
    eyebrow: "Agent work",
    title: "Complex agent harnesses and tool behavior",
    description:
      "MiniMax frames M2.7 as capable of independently building and operating a complex agent harness to complete productivity-heavy tasks.",
    bullets: [
      "Strong match for tool-using interfaces and agentic execution models",
      "Publicly highlighted for complex environment interaction",
      "High skill-adherence framing points to better multi-step consistency",
    ],
  },
  {
    eyebrow: "Office fidelity",
    title: "High-fidelity Excel, PPT, and Word edits",
    description:
      "The model is specifically marketed around stronger domain expertise and better multi-turn modifications in office workflows.",
    bullets: [
      "Useful for teams that need structured edits, not just drafting",
      "Better fit for iterative document refinement",
      "Supports an operations-and-productivity site narrative beyond pure coding",
    ],
  },
  {
    eyebrow: "Environment control",
    title: "Real interaction with complex operating contexts",
    description:
      "M2.7 is positioned as more capable in complex environments, which makes it relevant for workflows involving tools, files, and branching actions.",
    bullets: [
      "Important for terminal-driven or browser-assisted agent tasks",
      "Extends beyond chat into operational workflows",
      "Supports the model's productivity-first positioning",
    ],
  },
  {
    eyebrow: "Creative identity",
    title: "Identity preservation and emotional intelligence",
    description:
      "The public release notes mention stronger identity consistency and emotional intelligence, opening broader use cases than enterprise productivity alone.",
    bullets: [
      "Useful for interactive product experiences or character-led surfaces",
      "Adds nuance to the overall product story",
      "Shows M2.7 is not being framed as purely utilitarian",
    ],
  },
];

export const pricingPaths: AccessPath[] = [
  {
    eyebrow: "Platform",
    title: "Official API platform",
    description:
      "Best for teams that want direct model access and need to embed M2.7 in a product, service, or internal tool.",
    points: [
      "Developer login, docs, and model access in one place",
      "Supports the standard and highspeed M2.7 variants",
      "The cleanest route for serious product integration",
    ],
    cta: "Open API platform",
    href: officialLinks.apiPlatform,
  },
  {
    eyebrow: "Token plan",
    title: "Plan-based faster path",
    description:
      "Best for teams that want current plan context and the improved-speed workflow referenced in the launch materials.",
    points: [
      "Launch page says token-plan users get higher inference speed benefits",
      "Keeps live pricing details on the official platform",
      "Useful when evaluating sustained workload economics",
    ],
    cta: "View official plans",
    href: officialLinks.apiPlatform,
  },
  {
    eyebrow: "Agent surface",
    title: "MiniMax Agent evaluation",
    description:
      "Best for users who want to assess the model's programming or reasoning behavior quickly, without wiring their own interface first.",
    points: [
      "Low-friction evaluation path",
      "Good for internal testing and capability feel-checking",
      "Useful before committing engineering time to full integration",
    ],
    cta: "Try MiniMax Agent",
    href: officialLinks.agent,
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What is MiniMax M2.7 best for?",
    answer:
      "Public M2.7 materials position the model for complex productivity work, especially coding, agent execution, office editing, and real-world multi-step delivery.",
  },
  {
    question: "What are MiniMax M2.7 benchmark scores?",
    answer:
      "The public launch page highlights 56.22% on SWE-Pro, 55.6% on VIBE-Pro, 57.0% on Terminal Bench 2, and a 1495 ELO score on GDPval-AA.",
  },
  {
    question: "What is the difference between MiniMax M2.7 and MiniMax-M2.7-highspeed?",
    answer:
      "MiniMax says MiniMax-M2.7 and MiniMax-M2.7-highspeed produce the same results, while the highspeed variant is positioned as the faster-serving option.",
  },
  {
    question: "Which workflows fit MiniMax M2.7 best?",
    answer:
      "The strongest fit is work that spans tools, edits, or multiple steps: full project delivery, document iteration, agent harness execution, and complex environment interaction.",
  },
  {
    question: "Is MiniMax M2.7 only for coding use cases?",
    answer:
      "No. Coding is a major part of the story, but the public release also highlights Office Suite editing, domain expertise in professional work, and interactive use cases with stronger identity preservation.",
  },
  {
    question: "How do I access the MiniMax M2.7 API?",
    answer:
      "The primary official routes are the MiniMax API Platform, the Developer Docs, and the MiniMax Agent surface for lower-friction evaluation.",
  },
  {
    question: "Where can I check MiniMax M2.7 pricing?",
    answer:
      "Use the official MiniMax platform for current pricing or token-plan details. This site intentionally points users there instead of freezing numbers that may change.",
  },
  {
    question: "What does MiniMax say about M2.7 speed and token plans?",
    answer:
      "It states that price remains unchanged while performance improves, and that token-plan users automatically benefit from higher inference speeds.",
  },
  {
    question: "What API endpoint is shown for MiniMax M2.7?",
    answer:
      "The page shows `https://api.minimax.io/v1/text/chatcompletion_v2` for text chat completion usage examples.",
  },
  {
    question: "Which developer tools work with MiniMax M2.7?",
    answer:
      "The official page explicitly features compatibility across multiple developer tools, which makes that ecosystem story important for builders evaluating adoption fit.",
  },
  {
    question: "Can I test MiniMax M2.7 without building a product integration?",
    answer:
      "Yes. The MiniMax Agent route is a useful official evaluation path if you want to test reasoning and programming assistance without building your own UI first.",
  },
  {
    question: "What is the best first click for MiniMax M2.7 integration?",
    answer:
      "Go to the official API Platform first, then move into the Developer Docs for authentication, model routing, and integration details.",
  },
];

export const contactLinks = [
  {
    eyebrow: "Build",
    title: "API Platform",
    description:
      "Open the official platform when you want authentication, model access, and the shortest path to a direct MiniMax M2.7 integration.",
    cta: "Open API platform",
    href: officialLinks.apiPlatform,
  },
  {
    eyebrow: "Implement",
    title: "Developer Docs",
    description:
      "Use the docs for request shapes, endpoint guidance, and integration examples once you are past evaluation and ready to wire the model.",
    cta: "Open docs",
    href: officialLinks.developerDocs,
  },
  {
    eyebrow: "Evaluate",
    title: "MiniMax Agent",
    description:
      "Use the agent surface when you want to feel M2.7 in action before building your own product interface or CLI workflow around it.",
    cta: "Open agent",
    href: officialLinks.agent,
  },
  {
    eyebrow: "Study",
    title: "Public Model Page",
    description:
      "Use the public model page when you want the launch narrative, benchmark framing, and product positioning that this site summarizes.",
    cta: "Read overview",
    href: officialLinks.modelOverview,
  },
];
