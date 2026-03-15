// portfolio.config.ts
// ============================================================
// SINGLE SOURCE OF TRUTH — Edit this file to update all content
// ============================================================

export const portfolioConfig = {
  meta: {
    name: "Aditya Dhanraj",
    title: "Backend & API Engineer",
    description:
      "Backend & API Engineer building high-performance APIs, developer platforms, and backend systems that scale. Based in Bangalore, India.",
    url: "https://adityacodes.dev",
    email: "opsingh861@gmail.com",
    phone: "6202908846",
    location: "Bangalore, Karnataka",
    linkedin: "https://linkedin.com/in/opsingh861",
    github: "https://github.com/opsingh861",
    // resume is a local file in the public directory for easy downloading
    resumeUrl: "/Aditya_Dhanraj_Resume.pdf",
  },

  openToWork: true,

  hero: {
    taglines: ["Backend Engineer.", "API Platform Owner."],
    summary:
      "I build high-performance APIs, developer platforms, and backend systems that scale.",
  },

  about: {
    bio: "I'm a backend engineer currently at Infineon Technologies, where I own the API platform and define standards across the org. My work sits at the intersection of software engineering, DevSecOps, and developer tooling. I care about systems that are fast, observable, and maintainable at scale. I'm not a framework tourist; I pick tools that solve problems. My stack leans backend-first: .NET, Node.js, Python, Postgres, Redis, Docker, Kubernetes. I'm equally fluent in cloud-native CI/CD and AI agent orchestration. Outside work, I'm building side projects that push production limits and grinding competitive programming to stay sharp.",
    stats: [
      { label: "Year at Infineon", value: "1+", suffix: "" },
      { label: "API Latency Reduction", value: "96", suffix: "%" },
      { label: "Problems Solved", value: "650", suffix: "+" },
    ],
  },

  experience: [
    {
      role: "Software Development Engineer — API Platform",
      company: "Infineon Technologies",
      location: "Bangalore, Karnataka",
      period: "Jun 2025 – Present",
      type: "Full-time",
      bullets: [
        "Developed an internal registry for reusable AI agents and developer tools, accelerating adoption of AI-assisted workflows across engineering teams.",
        "Define API standards, test coverage requirements, and automated quality gates enforced via CI/CD pipelines.",
        "Lead API governance initiatives — driving consistency, versioning, and discoverability across 30+ internal services.",
        "Building the next-gen developer platform that abstracts infrastructure complexity for backend teams.",
      ],
    },
    {
      role: "Software Development Intern — API & DevSecOps",
      company: "Infineon Technologies",
      location: "Bangalore, Karnataka",
      period: "Jul 2024 – May 2025",
      type: "Internship",
      bullets: [
        "Standardised the company's API landscape organisation-wide — established naming conventions, schema validation, and versioning policies.",
        "Built Python automation for REST/GraphQL endpoint generation from DB connection strings, saving 40+ hours/week across teams.",
        "Architected DevSecOps delivery workflow adopted as team standard — integrated SAST, DAST, and dependency scanning into GitLab CI.",
        "Reduced mean time to deploy by 60% by streamlining multi-environment promotion workflows using ArgoCD.",
        "Mentored 3 junior interns on clean API design principles, Git workflows, and test-driven development.",
      ],
    },
  ],

  projects: [
    {
      title: "BlinkLink",
      subtitle: "High-Performance URL Shortening Platform",
      description:
        "Production-grade URL shortener with QR codes and real-time analytics. Reduced API latency 96% via Redis caching. Handles 10k+ concurrent requests with sub-10ms p99 latency.",
      stack: [
        "Node.js",
        "React",
        "MongoDB",
        "Redis",
        "Docker",
        "AWS",
        "NGINX",
        "Jenkins",
      ],
      github: "https://github.com/opsingh861/blinklink",
      live: "",
      featured: true,
      period: "Apr – May 2024",
    },
    {
      title: "Lucy",
      subtitle: "AI Voice Assistant",
      description:
        "Voice-activated AI assistant with wake-word detection, OpenAI NLU, and OS-level desktop automation. Can browse the web, control applications, and execute system commands via natural language.",
      stack: ["Python", "OpenAI API"],
      github: "https://github.com/opsingh861/lucy",
      live: "",
      featured: false,
      period: "May – Jun 2023",
    },
  ],

  skills: {
    "Core Backend": [
      ".NET",
      "Node.js",
      "Python (FastAPI)",
      "TypeScript",
      "REST APIs",
      "GraphQL",
      "Microservices",
    ],
    "DevOps / Platform": [
      "Docker",
      "Kubernetes",
      "OpenShift",
      "Jenkins",
      "ArgoCD",
      "GitLab CI",
      "Tekton",
      "DevSecOps",
      "CI/CD Pipeline Design",
    ],
    Databases: ["PostgreSQL", "MySQL", "MSSQL", "MongoDB", "Redis"],
    "AI / Agent Systems": ["MCP", "ADK", "RAG", "N8N", "Copilot", "OpenAI API"],
    Familiar: ["Java", "C++", "Rust", "React.js", "Next.js", "Vue.js"],
  },

  achievements: [
    {
      title: "Smart India Hackathon (SIH) Finalist",
      year: "2023",
      description:
        "Competed against thousands of teams nationwide in India's largest hackathon.",
      icon: "trophy",
    },
  ],

  certifications: [
    // Add certifications as you earn them:
    // { name: "AWS Solutions Architect Associate", issuer: "AWS", year: "2025", badge: "/badges/aws-saa.png", url: "..." }
  ],

  education: [
    {
      degree: "B.Tech Computer Science & Engineering",
      institution: "Lovely Professional University",
      location: "Jalandhar",
      period: "2021 – 2025",
      gpa: "8.37/10",
    },
  ],

  linkedinPosts: [
    {
      date: "2026-03-01",
      title: "Harness Engineering: The Real AI Advantage",
      excerpt:
        "The real differentiator in 2026 isn't the model — it's the agent harness around it. Context management, tool orchestration, retry logic, and sub-agent coordination are what make AI reliable in production.",
      url: "https://www.linkedin.com/posts/opsingh861_aiengineering-agenticai-harnessengineering-activity-7432480848643465216-sbOE",
      tags: ["agenticai", "harnessengineering", "aiinfrastructure"],
    },
    {
      date: "2026-02-22",
      title: "AI Overuse: When Deterministic Logic Trumps GenAI",
      excerpt:
        "Not everything needs Generative AI. Knowing when a simple algorithm outperforms an LLM — and having the discipline to choose it — is the real engineering skill in 2026.",
      url: "https://www.linkedin.com/posts/opsingh861_aiengineering-generativeai-softwareengineering-activity-7429919491289083904-YKSO",
      tags: ["aiengineering", "generativeai", "softwareengineering"],
    },
    {
      date: "2026-02-15",
      title: "LLM Context Rot: Why Attention Fades with Long Chats",
      excerpt:
        "LLMs degrade as conversations grow — context rot. The attention mechanism has hard limits, and how you engineer what enters the context window determines the quality of your AI system.",
      url: "https://www.linkedin.com/posts/opsingh861_aiengineering-llm-contextengineering-activity-7427415463812300800-YfeS",
      tags: ["llm", "contextengineering", "agenticai"],
    },
    {
      date: "2026-02-08",
      title: "Prompt Engineering vs Context Engineering",
      excerpt:
        "They are NOT the same. Prompt engineering is how you ask; context engineering is what you give the model to reason over. Confusing them leads to brittle, unpredictable AI applications.",
      url: "https://www.linkedin.com/posts/opsingh861_aiengineering-promptengineering-contextengineering-activity-7424851683744186370-bEdz",
      tags: ["promptengineering", "contextengineering", "llm"],
    },
    {
      date: "2026-02-01",
      title: "Dockerfile Best Practices for Performance & Security",
      excerpt:
        "Lessons from real CI/CD pipelines: choosing minimal base images, leveraging layer caching, multi-stage builds, and running as non-root can cut image size and attack surface significantly.",
      url: "https://www.linkedin.com/posts/opsingh861_docker-devops-cloudengineering-activity-7422323156109152256-yWFg",
      tags: ["docker", "devops", "containersecurity"],
    },
    {
      date: "2026-01-25",
      title: "MCPs Explained: Why Too Many Tools Confuse AI Agents",
      excerpt:
        "MCPs are functions for AI agents — each exposing a name, description, and parameters the LLM reads before deciding what to call. More tools means more decision overhead and more failure modes.",
      url: "https://www.linkedin.com/posts/opsingh861_aiengineering-agenticai-mcp-activity-7419774885842800640-kBHv",
      tags: ["agenticai", "mcp", "toolcalling"],
    },
    {
      date: "2026-01-18",
      title: "AI Agent Performance Degrades Beyond 128 Tools",
      excerpt:
        "Enabling 132 MCPs in Copilot/Cursor triggers a real warning at 128. Every tool adds to the LLM's selection overhead — keep your agent toolset lean, scoped, and purposeful.",
      url: "https://www.linkedin.com/posts/opsingh861_aiengineering-githubcopilot-cursorai-activity-7417226982289129472-Pjiy",
      tags: ["aiengineering", "mcp", "githubcopilot"],
    },
    {
      date: "2026-01-11",
      title: "AI in Engineering: Balancing Trust and Control",
      excerpt:
        "Agentic AI can write your entire codebase while you grab coffee. The power is real — but so is the risk. Knowing when to let the agent run and when to review is the engineering discipline that matters now.",
      url: "https://www.linkedin.com/posts/opsingh861_softwareengineering-aiintech-githubcopilot-activity-7414501040500379649-HHhG",
      tags: ["softwareengineering", "aiintech", "agenticai"],
    },
  ],
};
