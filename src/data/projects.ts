import { loadImages } from "@/lib/loadImages";

export type Project = {
  id: string;
  title: string;
  hook?: string;
  description: string;
  techStack: string[];
  image: string;
  projectUrl: string;
  repositoryUrl: string;
  images?: string[];
};

const chronoImages = loadImages("Chrono");
const clearBudgetImages = loadImages("ClearBudget"); // escapes space automatically
const greencartImages = loadImages("Greencart");
const titipinImages = loadImages("Titipin");

export const projects: Project[] = [
  {
    id: "1",
    title: "Chronotrack",
    hook: "A tamper-proof attendance system. Attendance, leave, and sick days are automatically recorded with proof of location. The campus knows who is actually in class.",
    description:
      "Built with Vue for a responsive interface, Express for server logic control, and PostgreSQL for data consistency. This system enforces tamper-proof attendance. Each status (present, permission, sick) is recorded through a validation flow locked by geolocation. Location and time data are processed directly in the backend without room for manual changes. The PostgreSQL table structure organizes attendance history, activity logs, and audit trails so that campuses can review attendance patterns without technical gaps.",
    techStack: ["Vue.js", "Node.js", "Express.js", "PostgreSQL"],
    image: chronoImages[0],
    projectUrl: "https://example.com/inventory",
    repositoryUrl: "https://github.com/fikriap/inventory-system",
    images: chronoImages,
  },
  {
    id: "2",
    title: "Clear Budget",
    hook: "Personal finance control panel. Every transaction is mapped, every pattern is displayed. Measurable savings targets. Financial health is visible without guesswork.",
    description:
      "Designed with Vue as a fast front-end, Express as a transaction processing engine, PostgreSQL as a data foundation, and Midtrans as a payment gateway. This application provides a measurable cash flow map. All income and expenses are directed to the analytics layer, which generates daily, weekly, and monthly graphs. Savings targets are automatically calculated using actual progress data, not subjective input. Cash flow reports map waste categories, while the net worth tracker calculates financial position without loose interpretation. Midtrans is used for payment integration that requires top-up automation or digital transaction recording.",
    techStack: ["Vue.js", "Node.js", "Express.js", "PostgreSQL", "Midtrans"],
    image: clearBudgetImages[0],
    projectUrl: "https://example.com/dashboard",
    repositoryUrl: "https://github.com/fikriap/internal-dashboard",
    images: clearBudgetImages,
  },
  {
    id: "3",
    title: "Green Cart",
    hook: "A single space for hobby communities who want quick transactions. New and used items in good condition meet the right buyers without any fuss.",
    description:
      "Built using Vue for a fast UI, Express for marketplace transaction management, and PostgreSQL for storing listings, accounts, and sales history. This platform consolidates various hobby communities into a single marketplace system. Item listings are handled through a data structure that regulates item condition, price, category, and seller reputation. PostgreSQL manages search filters and stock validation so that transactions do not depend on manual claims. The result: a stable, measurable, and redundancy-free marketplace.",
    techStack: ["Vue.js", "Node.js", "Express.js", "PostgreSQL"],
    image: greencartImages[0],
    projectUrl: "https://example.com/eprocurement",
    repositoryUrl: "https://github.com/fikriap/eprocurement-platform",
    images: greencartImages,
  },
  {
    id: "4",
    title: "Titipin",
    hook: "Instant storage solution. Store items, retrieve items, or ship items without complicated procedures. Focus on mobility; the process is handled by the platform.",
    description:
      "Using Vue for the front-end, Express as the core server, MongoDB for flexible data storage, and Midtrans for payment management. This platform provides storage, pickup, and delivery services without complicated processes. The MongoDB document structure is used to map dynamic user requests such as schedules, locations, and item types without rigid schema restrictions. Midtrans handles automatic payments so that transactions are processed without manual interaction. This system minimizes friction for users who need fast and scalable storage solutions.",
    techStack: ["Vue.js", "Node.js", "Express.js", "MongoDB", "Midtrans"],
    image: titipinImages[0],
    projectUrl: "https://example.com/crm",
    repositoryUrl: "https://github.com/fikriap/crm-system",
    images: titipinImages,
  },
];
