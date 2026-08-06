export const profile = {
  name: "Abhijith Jaideep",
  role: "Software Engineer",
  focus: "Mobile Development · Full-Stack · Cloud",
  location: "Melbourne, VIC",
  workRights: "Full working rights in Australia, no sponsorship required",
  email: "abhijithjaideep176@gmail.com",
  phone: "0469326984",
  linkedin: "https://www.linkedin.com/in/abhijith-jaideep/",
  github: "https://github.com/Abhijith-Jaideep",
  headshot: "/images/headshot.png",
  resumePdf: "/resume/Abhijith_Jaideep_Resume.pdf",
  resumeDocx: "/resume/Abhijith_Jaideep_Resume.docx",
};

export const uvp =
  "I ship production mobile apps end-to-end, from native Android and Flutter front-ends to the Flask APIs and AWS infrastructure behind them.";

export const heroMetrics = [
  { value: "3", label: "production mobile & cloud builds" },
  { value: "20+", label: "structured PRs shipped in an Agile team" },
  { value: "AWS", label: "Certified Cloud Practitioner" },
  { value: "0", label: "sponsorship required" },
];

export type PlatformTag = "Mobile" | "Full-Stack" | "Cloud" | "Backend";

export interface CaseStudy {
  slug: string;
  name: string;
  tagline: string;
  period: string;
  location: string;
  platformTags: PlatformTag[];
  summary: string;
  problem: string;
  role: string;
  architecture: string[];
  highlights: string[];
  outcome: string[];
  stack: string[];
  links: {
    demoVideo: string | null;
    repo: string | null;
    live: string | null;
  };
  media: {
    kind: "phone" | "diagram";
    /** Omit to render the "coming soon" placeholder instead of a real clip. */
    src?: string;
    poster?: string;
    caption?: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "kalakshetra-events-hub",
    name: "Kalakshetra Events Hub",
    tagline: "Native Android event booking & venue management app",
    period: "May 2026 – Present",
    location: "Kochi, India",
    platformTags: ["Mobile"],
    summary:
      "A Kotlin/Jetpack Compose event booking app built for a live events venue, targeting 250+ early users with a goal of capturing 60% of the venue's total user base.",
    problem:
      "The venue managed event discovery, hall rental, and bookings manually, with no self-serve way for customers to browse events, view a gallery, or complete a booking end to end.",
    role:
      "Sole engineer. Designed and built the app from scratch, including the reusable UI system and the booking business logic.",
    architecture: [
      "Kotlin + Jetpack Compose, following Material Design principles",
      "Reusable component library: navigation, forms, cards, custom theming, structured layouts",
      "End-to-end booking business logic: customer details, GST fields, payment information, booking summaries",
    ],
    highlights: [
      "Event discovery, gallery browsing, contact details, and full booking workflows",
      "Component library was built to extend cleanly into future projects, not just this app",
      "Designed the hall-rental and event-participation flows around real venue operations, including GST-compliant billing fields",
    ],
    outcome: [
      "Targeting 250+ early users",
      "Goal of capturing 60% of the venue's total user base",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Material Design"],
    links: {
      demoVideo: null,
      repo: "https://github.com/Abhijith-Jaideep/Kalakshetra-App",
      live: null,
    },
    media: { kind: "phone" },
  },
  {
    slug: "sustainapet",
    name: "SustainaPet",
    tagline: "Flutter app + Flask BFF helping young Australians cut their carbon footprint",
    period: "Jul 2025 – Nov 2025",
    location: "Melbourne, VIC",
    platformTags: ["Full-Stack", "Mobile"],
    summary:
      "A production-ready customer-facing platform pairing a Flutter mobile app with a Flask backend-for-frontend, built as a postgraduate industry experience project.",
    problem:
      "Helping young Australians understand and reduce their carbon footprint required turning something tedious (receipt-by-receipt tracking) into a fast, game-like habit.",
    role:
      "Full-stack contributor across the mobile app and BFF, covering API pipelines, ranking logic, and UI workflows, shipped as part of a cross-functional Agile team.",
    architecture: [
      "Flutter mobile app talking to a Flask backend-for-frontend (BFF)",
      "REST API pipelines converting scanned grocery receipts into structured data via OCR",
      "Graph models with backend validation powering leaderboards and ranking logic",
      "Database-backed workflows shipped across multiple releases",
    ],
    highlights: [
      "Receipt-based carbon estimation via Optical Character Recognition (OCR)",
      "Leaderboards and dynamic UI workflows built on top of validated ranking logic",
      "End-to-end validation across the request pipeline, not just the happy path",
    ],
    outcome: [
      "20+ structured pull requests contributed",
      "Shipped a production-ready app across multiple release cycles",
      "Built and reviewed under linting, formatting, and static-analysis standards from day one",
    ],
    stack: ["Flutter", "Dart", "Flask", "Python", "REST APIs", "OCR"],
    links: {
      demoVideo: "/video/sustainapet-scan.mp4",
      repo: "https://github.com/Abhijith-Jaideep/SustainaPet",
      live: null,
    },
    media: {
      kind: "phone",
      src: "/video/sustainapet-scan.mp4",
      poster: "/video/sustainapet-poster.jpg",
      caption: "Receipt scan to carbon estimate",
    },
  },
  {
    slug: "bird-classification-pipeline",
    name: "Bird Classification Cloud Pipeline",
    tagline: "Cloud-native ML pipeline for wildlife photographers and birdwatchers",
    period: "Feb 2025 – Jun 2025",
    location: "Melbourne, VIC",
    platformTags: ["Cloud", "Backend"],
    summary:
      "A serverless AWS pipeline that classifies uploaded bird images and videos using ML models, built as a university cloud-computing project.",
    problem:
      "Birdwatchers and wildlife photographers needed a fast, accurate way to identify species from their own photos and footage without manual lookup.",
    role:
      "Designed and built the backend pipeline end to end, covering infrastructure, containerization, and operational debugging.",
    architecture: [
      "AWS Lambda functions triggered on upload, backed by S3 for media storage",
      "DynamoDB / PostgreSQL for structured metadata and classification results",
      "ML model integration for image and video species classification",
      "Dockerized backend dependencies for consistent, reproducible deployment",
    ],
    highlights: [
      "Serverless design, so no idle infrastructure cost between uploads",
      "Proactively debugged runtime failures using CloudWatch logs",
      "Built to handle both image and video classification through the same pipeline",
    ],
    outcome: [
      "Delivered a working cloud-native classification pipeline from infrastructure to inference",
      "Hands-on production of the AWS skills later formalized in Cloud Practitioner certification",
    ],
    stack: ["AWS Lambda", "S3", "DynamoDB", "PostgreSQL", "Docker", "CloudWatch"],
    links: {
      demoVideo: null,
      repo: null,
      live: null,
    },
    media: { kind: "diagram" },
  },
];

export const notableBuild = {
  name: "Robotic Railway Assistant",
  tagline: "Patented Raspberry Pi-based intelligent robotic assistant",
  period: "Jun 2022 – May 2023",
  location: "Kochi, India",
  summary:
    "Bachelor's capstone project: an interactive robotic railway assistant giving passengers destination and train-announcement guidance in 10+ languages.",
  highlights: [
    "Patented design built on Raspberry Pi with a custom 3D-printed body",
    "Neural network model queried Google APIs for translation and Railway system APIs for live train/announcement data",
    "Multilingual voice assistant using speech recognition, translation APIs, and text-to-speech across 10+ languages",
  ],
  stack: ["Raspberry Pi", "Python", "Neural Networks", "Speech Recognition", "Google APIs"],
};

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Postgraduate Industry Experience Project: SustainaPet",
    org: "Monash University (Industry Partner Project)",
    period: "Jul 2025 – Nov 2025",
    location: "Melbourne, VIC",
    bullets: [
      "Developed and deployed cloud-based frontend and backend platform components, including receipt-based carbon estimation",
      "Designed, integrated, and tested REST API pipelines converting scanned images to text via OCR, leaderboards, and graph models with backend validation",
      "Performed end-to-end validation, built ranking logic, and dynamic UI workflows",
      "Wrote clean, maintainable, testable code under linting, formatting, static analysis, and code review standards, contributing 20+ structured pull requests",
      "Collaborated cross-functionally within an Agile sprint framework across the full lifecycle: planning, design, implementation, testing, deployment support",
    ],
  },
  {
    role: "Software Engineer",
    org: "Suyati Technologies",
    period: "Nov 2021 – Nov 2022",
    location: "Kochi, India",
    bullets: [
      "Built and deployed an AI application ranking potential insurance buyers by likelihood to convert, reducing effort and time to reach probable buyers by 30%",
      "Helped design and build a comment-sanitiser model detecting and filtering toxic comments on a proprietary social platform",
      "Deployed a blog site supporting account creation, image posting, and user commenting",
      "Improved code quality and delivery reliability using advanced Git branching, commit, and merge practices across the team",
      "Maintained clear code documentation and adhered to SDLC principles to improve project velocity",
    ],
  },
];

export interface EducationEntry {
  degree: string;
  org: string;
  period: string;
  location: string;
  note?: string;
}

export const education: EducationEntry[] = [
  {
    degree: "Master of Information Technology",
    org: "Monash University",
    period: "Feb 2024 – Dec 2025",
    location: "Melbourne, VIC",
    note: "GPA 3.0/4",
  },
  {
    degree: "Bachelor of Technology, Computer Science & Engineering (minor in Robotics & Automation)",
    org: "Kerala Technological University (KTU)",
    period: "Aug 2019 – Jun 2023",
    location: "Kochi, India",
  },
];

export const certifications = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "Feb 2026",
  },
  {
    name: "Certified Specialist in Full Stack Development",
    issuer: "ICT Academy of Kerala, in collaboration with K-DISC",
  },
  {
    name: "Deloitte Australia Technology Job Simulation",
    issuer: "Forage",
    date: "Jun 2024",
  },
];

/**
 * Six skill domains, each rendered as a power gem in the skills section.
 * Colours span the classic six-gem spectrum. Names are the actual
 * engineering domains, not borrowed franchise terminology.
 */
export interface SkillGem {
  id: string;
  name: string;
  power: string;
  color: string;
  items: string[];
}

export const skillGems: SkillGem[] = [
  {
    id: "mobile",
    name: "Mobile",
    power: "Native and cross-platform apps",
    color: "#a855f7",
    items: ["Kotlin", "Jetpack Compose", "Flutter", "Dart", "Material Design"],
  },
  {
    id: "frontend",
    name: "Frontend",
    power: "Component-driven interfaces",
    color: "#3b82f6",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "Component-Based UI",
      "Responsive Interfaces",
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    power: "Services that scale",
    color: "#ef4444",
    items: [
      "Java",
      "Python",
      "Flask",
      "REST APIs",
      "API Design",
      "BFF Architecture",
      "Server-Side Validation",
    ],
  },
  {
    id: "cloud",
    name: "Cloud",
    power: "Serverless infrastructure",
    color: "#f97316",
    items: ["AWS Lambda", "S3", "DynamoDB", "API Gateway", "CloudWatch"],
  },
  {
    id: "data",
    name: "Data & DevOps",
    power: "Storage and delivery pipelines",
    color: "#22c55e",
    items: [
      "PostgreSQL",
      "SQL",
      "NoSQL Data Modelling",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Git",
    ],
  },
  {
    id: "quality",
    name: "Quality & Craft",
    power: "Code that survives review",
    color: "#eab308",
    items: [
      "JUnit",
      "Mockito",
      "Unit Testing",
      "Code Reviews",
      "Static Analysis",
      "Agile/Scrum",
    ],
  },
];
