// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to personalize your portfolio.
// Every section on the site pulls its content from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "JANANI",                 // TODO: replace with your name
  title: "Aspiring Network & Cloud Engineer",
  tagline:
    "CSE graduate (2026) building a foundation in networking, cloud infrastructure, and IT operations — comfortable troubleshooting from Layer 1 up to the application.",
  location: "Chennai, India",        // TODO: update if needed
  email: "jananyy21@gmail.com",          // TODO: replace with your email
  resumeUrl: "https://drive.google.com/file/d/1O1mRGb26PhBR0ZXhfrn0wVBjCxzPRSFx/view?usp=drivesdk",          // TODO: drop your resume PDF in /public and update this path
  socials: {
    github: "https://github.com/yourusername",     // TODO
    linkedin: "https://www.linkedin.com/in/janani-s-46852a274/", // TODO
  },
};

export const about = {
  paragraphs: [
    "I'm a Computer Science and Engineering student graduating in 2026, with a focus on networking and IT infrastructure. Most of my hands-on learning has happened in lab environments — building topologies in GNS3 and Packet Tracer, then breaking and fixing them to understand how routing, switching, and security actually behave under real conditions.",
    "I'm currently building toward a career in network security, and expanding into cloud fundamentals since modern infrastructure rarely stays on-premise alone. I learn best by working through problems hands-on rather than just reading about them, and I'm looking for a fresher role where I can keep doing that on real systems.",
  ],
};

// Each category gets its own accent color so the grid isn't one uniform block.
export const skillCategories = [
  {
    title: "Networking",
    accent: "#4fd1c5",
    skills: [
      "TCP/IP",
      "OSI Model",
      "Subnetting",
      "Routing & Switching",
      "VLAN",
      "OSPF",
      "BGP Basics",
      "NAT",
      "DHCP",
      "DNS",
      "ARP",
      "ICMP",
      "Firewall Fundamentals",
      "Network Troubleshooting",
      "IPSec VPN Basics",
    ],
  },
  {
    title: "Cloud",
    accent: "#e8a33d",
    skills: ["AWS Fundamentals", "Cloud Concepts"],
  },
  {
    title: "Programming",
    accent: "#7c9cf5",
    skills: ["Python", "Java", "JavaScript"],
  },
  {
    title: "Web Development",
    accent: "#f56d9c",
    skills: ["HTML", "Tailwind CSS", "React.js", "REST APIs"],
  },
  {
    title: "Tools",
    accent: "#8b96ac",
    skills: ["GNS3", "Cisco Packet Tracer", "Wireshark", "Git", "GitHub", "Linux", "VS Code"],
  },
];

// TODO: replace these with your real projects, or add more.
export const projects = [
  {
    title: "GNS3 Network Infrastructure & Troubleshooting Lab",
    description:
      "A multi-router, multi-VLAN topology built in GNS3 to practice enterprise-style routing and switching. Covers OSPF area design, inter-VLAN routing, DHCP relay, and a structured troubleshooting workflow for diagnosing connectivity failures.",
    tech: ["GNS3", "OSPF", "VLAN", "DHCP", "Cisco IOS"],
    github: "https://github.com/yourusername/gns3-network-lab", // TODO
    demo: null, // no live demo for infra labs — leave null to hide the button
  },
  {
    title: "IPSec VPN / Network Security Lab",
    description:
      "Site-to-site IPSec VPN tunnel configured between two simulated branch sites, with firewall rules and NAT in front. Focused on understanding the IKE handshake, encryption/authentication parameters, and verifying tunnel state.",
    tech: ["IPSec", "VPN", "Firewall", "NAT", "Cisco IOS"],
    github: "https://github.com/yourusername/ipsec-vpn-lab", // TODO
    demo: null,
  },
    {
    title: "GPT-1 – Secure Chat Application",
    description:
      "A secure real-time chat application for private user-to-user communication, with authentication and access control to restrict unauthorized access. Built around secure message exchange and client-server communication, with a simple, user-friendly chat interface.",
    tech: [], // TODO: add your actual tech stack (language, framework, libraries)
    github: null, // TODO: add your GitHub link
    demo: null,
  },
  {
    title: "Heart Disease Prediction System",
    description:
      "A machine learning application that predicts the likelihood of heart disease from user-provided medical parameters. Includes data preprocessing and a trained classification model, with a simple interface for entering inputs and viewing predictions.",
    tech: [], // TODO: add your actual tech stack (e.g. Python, pandas, scikit-learn, Flask — whatever you actually used)
    github: null, // TODO: add your GitHub link
    demo: null,
  },
  {
    title: "Music Management System",
    description:
      "A web-based system for organizing music data — songs, artists, albums, and playlists — with full CRUD functionality through a user-friendly interface, built on core database operations.",
    tech: [], // TODO: add your actual tech stack (language, framework, database)
    github: null, // TODO: add your GitHub link
    demo: null,
  },
  {
    title: "React Portfolio Website",
    description:
      "This site — a responsive personal portfolio built with React, Vite, and Tailwind CSS to present my background, skills, and lab work to recruiters.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/yourusername/portfolio", // TODO
    demo: "https://yourportfolio.example.com", // TODO — or set to null
  },
];

export const education = {
  degree: "B.E. Computer Science and Engineering",
  institution: "S.A Engineering College",   // TODO: replace
  years: "2022 – 2026",
  cgpa: "CGPA: 8.50/ 10",             // TODO: replace
  notes: "Specialization focus: Network Engineering",
};

// TODO: replace with certifications/training you've actually completed or are pursuing.
export const certifications = [
  {
    name: "Industry Training : Networking /OEM Enterprise Firewall Training",
    issuer: "Movate Technologies",
    status: "Completed", // "Completed" | "In progress" | "Planned"
  },
  {
    name: "AWS Cloud Practitioner (or equivalent AWS learning)",
    issuer: "Amazon Web Services",
    status: "In progress",
  },
  {
    name: "Palo Alto Networks Cybersecurity / Cloud Training",
    issuer: "Palo Alto Networks",
    status: "Planned",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
