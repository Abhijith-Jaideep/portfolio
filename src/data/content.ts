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
  { value: "Monash", label: "Master of Information Technology" },
  { value: "20+", label: "structured PRs shipped in an Agile team" },
  { value: "Full Stack", label: "Certified Specialist, ICT Academy of Kerala" },
  { value: "0", label: "sponsorship required" },
];

export type PlatformTag =
  | "Mobile"
  | "Full-Stack"
  | "Cloud"
  | "Backend"
  | "ML";

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
    /** Product shot, rendered above the diagram where both exist. */
    screenshot?: string;
    screenshotCaption?: string;
    /** Static screen for the collapsed card, so thumbnails do not autoplay. */
    thumbnail?: string;
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
      thumbnail: "/images/sustainapet-home.webp",
    },
  },
  {
    slug: "parkingbae",
    name: "ParkingBae",
    tagline: "Live kerbside parking availability for Melbourne CBD",
    period: "Aug 2025",
    location: "Melbourne, VIC",
    platformTags: ["Full-Stack", "Backend"],
    summary:
      "A React and Flask product that merges the City of Melbourne's real-time kerbside sensor feed with static parking-sign rules, so drivers can see where they can actually park right now. Live on its own domain.",
    problem:
      "Roughly 30% of Melbourne CBD traffic is drivers circling for a space, and on-street occupancy hits 90% at peak. Knowing a bay is free is only half the answer; you also need to know whether you are allowed to park in it at that hour.",
    role:
      "Built the whole stack: the React front end, the Flask API, the database schema, and the ingestion and merge logic between the two data sources.",
    architecture: [
      "React front end styled with Tailwind, served from parkingbae.me",
      "Flask API on gunicorn with SQLAlchemy, CORS locked to the production origins",
      "PostgreSQL over enforced SSL holding the parking-sign and VIC car-ownership datasets",
      "Paginated ingestion of the council sensor API, which caps queries at 100 rows, walking all 3,309 records with a throttle so the endpoint does not block the client",
      "Merge step builds an in-memory index of parking-sign rows, then joins live sensor readings against it by kerbside ID rather than re-scanning per record",
    ],
    highlights: [
      "Handles the upstream 100-row query limit by discovering the total count first, then paging with a delay instead of assuming a fixed size",
      "Pairs live occupancy with the sign rules that govern each bay, which is the part that makes the answer actionable",
      "Insights view backs the problem with cited data on congestion, cost, and space scarcity",
      "Connection pooling with pre-ping so idle database connections do not fail the first request",
    ],
    outcome: [
      "Shipped to a custom domain at parkingbae.me with the API hosted separately on Render",
      "Built against a live council data feed rather than fixtures, including the pagination and rate limiting that requires",
    ],
    stack: [
      "React",
      "Tailwind",
      "Flask",
      "SQLAlchemy",
      "PostgreSQL",
      "gunicorn",
      "pytest",
    ],
    links: {
      demoVideo: null,
      repo: "https://github.com/Abhijith-Jaideep/Parkingbae",
      live: "https://www.parkingbae.me/",
    },
    media: {
      kind: "diagram",
      src: "/images/parkingbae-architecture.svg",
      caption: "Request path and merge step",
      screenshot: "/images/parkingbae-screenshot.webp",
      screenshotCaption: "parkingbae.me, insights view",
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
    media: {
      kind: "diagram",
      src: "/images/bird-pipeline-architecture.svg",
      caption: "Upload to classification pipeline",
    },
  },
  {
    slug: "sales-call-prioritisation",
    name: "Sales Call Prioritisation",
    tagline: "Ranking insurance leads by likelihood to convert",
    period: "2022",
    location: "Kochi, India",
    platformTags: ["Full-Stack", "ML"],
    summary:
      "A Flask application built at Suyati Technologies that scores incoming insurance leads with a decision tree, so the sales team calls the people most likely to buy first. Commercial work, not coursework.",
    problem:
      "The sales team worked a long, undifferentiated list of leads. Every prospect looked the same on paper, so time went into calls that were never going to convert.",
    role:
      "Built the application end to end: the authenticated Flask front end, the PostgreSQL schema, the feature pipeline, and the model that produces the ranking.",
    architecture: [
      "Flask with Jinja templates, account signup and login backed by werkzeug password hashing",
      "PostgreSQL holding user accounts and lead records, exported to a flat table for training",
      "Feature pipeline over seven fields: product category, date of birth, marital status, education, occupation, language, and annual income",
      "Categorical fields label-encoded and features standard-scaled before training, on an 80/20 train and test split",
      "scikit-learn DecisionTreeClassifier predicting lead quality, scored against a table of 5,667 records",
    ],
    highlights: [
      "A newly submitted lead is scored on the spot and returned to the operator, rather than batched overnight",
      "Ranking uses attributes the business already collected, so it needed no new data capture to adopt",
      "Authentication and server-side validation built in from the start, since it handled real customer records",
    ],
    outcome: [
      "Cut the effort and time to reach probable buyers by 30%",
      "Delivered into a commercial engagement as a working internal tool",
    ],
    stack: [
      "Python",
      "Flask",
      "scikit-learn",
      "pandas",
      "PostgreSQL",
      "Jinja",
    ],
    links: {
      demoVideo: null,
      repo: "https://github.com/Abhijith-Jaideep/Sales_Call_Prioritization",
      live: null,
    },
    media: {
      kind: "diagram",
      src: "/images/salescall-architecture.svg",
      caption: "Lead entry to scored ranking",
    },
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
  /** Public repos that back up the claims above. */
  links?: { label: string; url: string }[];
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
    links: [
      {
        label: "Sales call prioritisation model",
        url: "https://github.com/Abhijith-Jaideep/Sales_Call_Prioritization",
      },
      {
        label: "Comment sanitiser",
        url: "https://github.com/Abhijith-Jaideep/Comment-Sanitizer",
      },
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
