type Education = {
  major: string;
  date: string;
  school: string;
  schoolUrl: string;
  description: string;
  coursework: string[];
};

type TechnicalSkill = {
  skill: string;
  percentage: number;
  tools: string[];
};

const skills: TechnicalSkill[] = [
  {
    skill: "Data Engineering",
    percentage: 70,
    tools: [
      "Azure Data Factory",
      "Databricks",
      "Apache Spark",
      "Microsoft Fabric",
    ],
  },
  {
    skill: "Databases and Data Modelling",
    percentage: 70,
    tools: ["T-SQL", "PostgreSQL", "SparkSQL", "Firebase"],
  },
  {
    skill: "Data Analytics & Visualization",
    percentage: 65,
    tools: [
      "Databricks",
      "Microsoft Power Platform",
      "Power BI",
      "Fabric",
      "Python",
      "SAP",
    ],
  },
  {
    skill: "Software Development",
    percentage: 65,
    tools: ["TypeScript", "Node.js", "React", "Python", "RESTful APIs"],
  },
  {
    skill: "Cloud",
    percentage: 50,
    tools: ["Azure", "AWS", "Firebase"],
  },
  {
    skill: "Version Control & CI/CD",
    percentage: 40,
    tools: ["Azure DevOps", "Git", "GitHub"],
  },
];

const education: Education[] = [
  {
    major: "B.S. Computer Science",
    date: "2019 - 2022",
    description: `I graduated with a Bachelor of Science in Computer Science from Louisiana State University in 2022.`,
    school: "Louisiana State University",
    schoolUrl: "https://www.lsu.edu",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Computer Architecture",
      "Software Engineering",
      "Discrete Mathematics",
      "Linear Algebra",
      "Calculus",
      "Statistics",
    ],
  },
];
type Experience = {
  title: string;
  date: string;
  employer: string;
  employerUrl: string;
  description: string;
  skills: string[];
};

const experience: Experience[] = [
  {
    title: "Analytics Analyst/Engineer",
    date: "2023 — Present",
    description: `Collaborate with Data Engineering, Analytics, and Data Science departments to
gather, model, and data. Developed and managed semantic models and ETL
processes utilized by over 3,000 weekly active users.
`,
    employer: "Phillips 66",
    employerUrl: "https://www.phillips66.com",
    skills: [
      "SQL",
      "Microsoft Fabric",
      "Power BI",
      "Apache Spark",
      "DAX",
      "Python",
      "SAP",
      "Azure Data Factory",
      "Databricks",
    ],
  },
  {
    title: "Software Engineer Intern",
    date: "2021 — 2022",
    description: `Work with design teams and Senior Software Engineers to build <a href="centerline.co" class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">Centerline.co</a>, a
management platform for architects, and construction professionals.`,
    employer: "Crimer/Vigilus",
    employerUrl: "https://www.vigilus.com",
    skills: [
      "TypeScript",
      "React",
      "Node.js",
      "RESTful APIs",
      "Firebase",
      "Git",
      "AWS",
      "Jira",
    ],
  },
  {
    title: "Data Engineer Intern",
    date: "May — Aug 2022",
    description: `Lighthouse implementation of a proof-of-concept digital twin of refinery assets
using Azure services like IoT Hub. This effort was to test the feasibility of real-
time monitoring of refining assets.`,
    employer: "Phillips 66",
    employerUrl: "https://www.phillips66.com",
    skills: ["Kusto QL", "Azure", "Power BI", "SAP"],
  },
];

export type ProfileData = {
  name: string;
  title: string;
  description: string;
  summary: string;
  bio: string;
  email: string;
  githubUrl: string;
  linkedInUrl: string;
  education: Education[];
  skills: TechnicalSkill[];
  experience: Experience[];
};

const profileData: ProfileData = {
  name: "Aubrey Oyoolo",
  description: "Aubrey Oyoolo's Portfolio",
  title: "Analytics Engineer/Analyst",
  summary:
    "Result-oriented analytics engineer with a passion for data and software.",
  bio: `Detail-oriented team player with wide array of technical skills. Ranging from data
and analytics to backend software engineering. Created 20+ reports used by over
3000 users.`,
  education,
  skills,
  experience,
  email: "ochiaubrey@gmail.com",
  githubUrl: "https://github.com/au6rey",
  linkedInUrl: "https://www.linkedin.com/in/aubrey-o-073614199/",
};

export { profileData };
