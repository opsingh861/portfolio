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
    bio: "I'm a backend engineer currently at Infineon Technologies, where I own the API platform and define standards across the org. My work sits at the intersection of software engineering, DevSecOps, and developer tooling — I care about systems that are fast, observable, and maintainable at scale. I'm not a framework tourist; I pick tools that solve problems. My stack leans backend-first: .NET, Node.js, Python, Postgres, Redis, Docker, Kubernetes. I'm equally fluent in cloud-native CI/CD and AI agent orchestration. Outside work, I'm building side projects that push production limits and grinding competitive programming to stay sharp.",
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
      date: "2025-03-01",
      title: "Why API latency matters more than you think",
      excerpt:
        "Most engineers focus on throughput. Here's why latency is the metric that will break you at scale — and the three changes that cut our p99 by 96%.",
      url: "https://www.linkedin.com/in/opsingh861",
      tags: ["backend", "performance", "api"],
    },
    {
      date: "2025-01-15",
      title: "DevSecOps isn't optional anymore",
      excerpt:
        "After integrating SAST, DAST, and dependency scanning into our GitLab CI pipeline, here's what we learned about shifting security left without killing developer velocity.",
      url: "https://www.linkedin.com/in/opsingh861",
      tags: ["devsecops", "security", "cicd"],
    },
    {
      date: "2024-11-10",
      title: "Building an AI Agent Registry from scratch",
      excerpt:
        "How we built an internal registry for reusable AI agents at Infineon — the architecture decisions, the tradeoffs, and what we'd do differently.",
      url: "https://www.linkedin.com/in/opsingh861",
      tags: ["ai", "platform", "engineering"],
    },
  ],
};
