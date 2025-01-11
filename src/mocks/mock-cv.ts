// mock-cv.ts

interface PersonalInfo {
    firstName: string;
    lastName: string;
    position: string;
  }
  
  interface Skills {
    languagesAndTechnologies: string[];
    tools: string[];
  }
  
  interface WorkExperience {
    project: string;
    position: string;
    duration: string;
    technologies: string[];
    tasks: string;
  }
  
  interface EducationAndCertifications {
    institution: string;
    degree: string;
    date: string;
  }
  
  interface Language {
    language: string;
    level: string;
  }
  
  interface PersonalQualities {
    qualities: string[];
  }
  
  interface Hobbies {
    hobbies: string[];
  }
  
  interface CV {
    personalInfo: PersonalInfo;
    skills: Skills;
    workExperience: WorkExperience[];
    educationAndCertifications: EducationAndCertifications[];
    languages: Language[];
    personalQualities: PersonalQualities;
    hobbies: Hobbies;
  }
  
  const mockCv: CV = {
    personalInfo: {
      firstName: "Bohotskyi",
      lastName: "Oleksandr",
      position: "Frontend Developer",
    },
    skills: {
      languagesAndTechnologies: [
        "HTML5", "ES6", "CSS3", "JavaScript", "Git", "SCSS/SASS", "React", "Axios", "Vite", "Swiper", "ESLint", "Prettier",
      ],
      tools: [
        "VS Code", "Photoshop", "Figma", "Postman", "Jira",
      ],
    },
    workExperience: [
      {
        project: "Speak Now",
        position: "Shadow of QA Engineer",
        duration: "August 2024 – September 2024",
        technologies: ["JSON", "Browser DevTools"],
        tasks: "Converting test documentation (Doc files) into JSON format based on a given template, testing the site for correct data rendering.",
      },
      {
        project: "Rick and Morty (pet project)",
        position: "Front-End Self Studying",
        duration: "September 2024 – October 2024",
        technologies: ["React", "Axios", "Module CSS", "Yarn"],
        tasks: "Front-End project development",
      },
      {
        project: "Trekr",
        position: "Front-end Developer",
        duration: "October 2024 – November 2024",
        technologies: ["Next.js", "Tailwind", "VS Code", "Git", "ESLint", "Prettier"],
        tasks: "Front-end redesign of the landing page",
      },
      {
        project: "AthleteLink",
        position: "Front-end Developer",
        duration: "November 2024 – Present",
        technologies: ["Next.js", "TypeScript", "Material UI", "VS Code", "Git", "ESLint", "Prettier"],
        tasks: "Redesign of the landing page",
      },
    ],
    educationAndCertifications: [
      {
        institution: "Kyiv Polytechnic Institute, Kyiv",
        degree: "Bachelor of Department of Information Systems and Technologies",
        date: "September 2020 – June 2024",
      },
      {
        institution: "Online Course “HTML for Developers”",
        degree: "",
        date: "May 2024 – June 2024",
      },
      {
        institution: "Online Course “JavaScript”",
        degree: "",
        date: "June 2024 – August 2024",
      },
      {
        institution: "Online Course “Complete Course on JavaScript + React”",
        degree: "",
        date: "August 2024 – December 2024",
      },
    ],
    languages: [
      { language: "Ukrainian", level: "Mother tongue" },
      { language: "English", level: "Intermediate B1" },
    ],
    personalQualities: {
      qualities: ["Hardworking", "Sociable", "Creative", "Responsible", "Works well in a team", "Soul of the company"],
    },
    hobbies: {
      hobbies: ["Computer games", "Gym", "Karate", "Traveling", "Walking"],
    },
  };
  
  export default mockCv;
  