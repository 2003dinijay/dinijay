import chalk from "chalk";
import boxen from "boxen";

const data = {
  name: "Dinithi Nanayakkara",
  handle: "dinijay",
  role: "Full-Stack Developer & UX/UI Designer",
  bio: "CS undergraduate @ NSBM Green University · CGPA 3.88 · Building meaningful, user-centered solutions with modern web technologies.",
  education: "BSc (Hons) Computer Science — NSBM Green University (2024–2028)",
  skills: {
    "Frontend ": "React, Next.js, JavaScript, Tailwind CSS, Bootstrap, Flutter",
    "Backend  ": "Node.js, Express, PHP, Java, Python, C#, Spring Boot",
    "Database ": "MongoDB, MySQL, SQL Server, Firebase",
    "Design   ": "Figma, Framer",
    "Tools    ": "Git/GitHub, Postman, WordPress",
  },
  highlights: [
    "🏆  Finalist — Plymhack'26 International Hackathon (Univ. of Plymouth)",
    "🥉  2nd Runner Up — Cre8X 2.0 Inter-University National Designathon",
    "⚡  Finalist — AlgoXplore 1.0 Inter-University National Hackathon",
    "🔒  Finalist — CYBER SPRINT 2.0 & GREENXTREME (IEEEXtreme 19.0)",
  ],
  projects: [
    { name: "Adare.fun & Adare.lk", desc: "Co-Founder · Gamified social platform for human connection" },
    { name: "EcoLens: Heritage Guardian", desc: "AI conservation platform · Plymhack · Next.js + Firebase" },
    { name: "Volo", desc: "AI-driven mobile study app · Flutter + Gemini API (Ongoing)" },
    { name: "IslandWise", desc: "Sustainable tourism smart travel app · UI/UX + Research (Ongoing)" },
    { name: "HyperPOS", desc: "Web-based POS system · React + Spring Boot + Tailwind CSS" },
    { name: "Bidzy", desc: "Online auction platform · ASP.NET Core + C# + SQL Server" },
  ],
  links: {
    github: "https://github.com/2003dinijay",
    linkedin: "https://www.linkedin.com/in/dinithi-nanayakkara",
    portfolio: "https://my-portfolio-j4ps.vercel.app/",
    email: "dinijayo@gmail.com",
  },
};

const c = {
  primary: chalk.hex("#7C3AED"),       // violet
  accent: chalk.hex("#EC4899"),        // pink
  dim: chalk.hex("#94A3B8"),           // slate
  bright: chalk.hex("#F8FAFC"),        // near-white
  green: chalk.hex("#10B981"),         // emerald
  yellow: chalk.hex("#F59E0B"),        // amber
  cyan: chalk.hex("#06B6D4"),          // cyan
};

function divider(char = "─", width = 58) {
  return c.dim(char.repeat(width));
}

function printBanner() {
  const banner = [
    "",
    c.primary.bold("  ██████╗ ██╗███╗   ██╗██╗     ██╗ █████╗ ██╗   ██╗"),
    c.primary.bold("  ██╔══██╗██║████╗  ██║██║     ██║██╔══██╗╚██╗ ██╔╝"),
    c.primary("  ██║  ██║██║██╔██╗ ██║██║     ██║███████║ ╚████╔╝ "),
    c.primary("  ██║  ██║██║██║╚██╗██║██║██   ██║██╔══██║  ╚██╔╝  "),
    c.accent.bold("  ██████╔╝██║██║ ╚████║██║╚█████╔╝██║  ██║   ██║   "),
    c.accent.bold("  ╚═════╝ ╚═╝╚═╝  ╚═══╝╚═╝ ╚════╝ ╚═╝  ╚═╝   ╚═╝   "),
    "",
  ].join("\n");
  console.log(banner);
}

function printCard() {
  const card = [
    c.bright.bold(`  ${data.name}`),
    c.accent(`  ${data.role}`),
    "",
    c.dim(`  ${data.bio}`),
    "",
    c.dim(`  🎓  ${data.education}`),
    "",
    divider(),
    "",
    `  ${c.cyan("github")}    ${c.bright(data.links.github)}`,
    `  ${c.cyan("linkedin")}  ${c.bright(data.links.linkedin)}`,
    `  ${c.cyan("portfolio")} ${c.bright(data.links.portfolio)}`,
    `  ${c.cyan("email")}     ${c.bright(data.links.email)}`,
    "",
  ].join("\n");

  console.log(
    boxen(card, {
      padding: 0,
      margin: { top: 0, bottom: 1, left: 2, right: 2 },
      borderStyle: "round",
      borderColor: "#7C3AED",
    })
  );
}

function printSkills() {
  console.log(`  ${c.primary.bold("◆ SKILLS")}\n`);
  for (const [category, techs] of Object.entries(data.skills)) {
    console.log(`    ${c.accent(category)}  ${c.bright(techs)}`);
  }
  console.log();
}

function printHighlights() {
  console.log(`  ${c.primary.bold("◆ ACHIEVEMENTS")}\n`);
  for (const item of data.highlights) {
    console.log(`    ${c.bright(item)}`);
  }
  console.log();
}

function printProjects() {
  console.log(`  ${c.primary.bold("◆ PROJECTS")}\n`);
  for (const project of data.projects) {
    console.log(`    ${c.accent.bold(project.name)}`);
    console.log(`    ${c.dim(project.desc)}`);
    console.log();
  }
}

export function run() {
  printBanner();
  printCard();
  printSkills();
  console.log(divider("─", 60));
  console.log();
  printHighlights();
  console.log(divider("─", 60));
  console.log();
  printProjects();
  console.log(divider("─", 60));
  console.log(
    c.dim("\n  Made with ") +
    c.accent("♥") +
    c.dim(" by Dinithi · ") +
    c.primary("npx dinijay") +
    "\n"
  );
}

export { data };