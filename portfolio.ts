import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Sushma Shivani Nukala",
  title: "Hi all, I'm Sushma",
  description:
    "I’m a driven Full Stack web developer with hands-on experience in building dynamic web applications using React ,Java, ASP.NET C# using REST APIs etc . I thrive on exploring and integrating new technologies into my projects, always aiming to push boundaries. A self-starter and lifelong learner, I’m passionate about tackling challenges and working within collaborative teams to bring innovative ideas to life",
  resumeLink: "https://sushmanukala9.github.io/github-portfolio/",
};

export const openSource = {
  githubUserName: "sushmanukala9",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:hanzla.tauqeer123@gmail.com",
  linkedin: "https://www.linkedin.com/in/sushma-nukala-867a82137/",
  github: "https://github.com/sushmanukala9/",
  instagram: "https://www.instagram.com/su_shi_nu",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development Intern",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ software development in c++, java  design, implement , debug , test, deploy code"),
        emoji("⚡ Building RESTful APIs in JEE AND C#"),
      ],
      softwareSkills: [
        {
          skillName: "Java",
          iconifyTag: "logos:Java",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "data structures and programming", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Software Development full stack",
    progressPercentage: "90",
  },
  {
    Stack: "software engineering and deploying",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Virginia Tech",
    subHeader: "Masters of Engineering in Computer Science",
    duration: "August 2023 - May 2025",
    desc: "Web-App Development, Mobile Dev , Data Structure & Algos , Operating Systems, Cloud",
    grade: "3.95",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full Stack Web development Intern",
    company: "Kaiser Permanente",
    companyLogo: "/img/icons/common/kp.jpeg",
    date: "June 2024 - Present",
    desc: "At Kaiser Permanente, as a full-stack web development intern, I independently developed a robust voting tool for employees to elect board members. This tool allows employees to securely cast their votes, and admins can access detailed reports in real-time, including tables and graphs that show the number of votes cast, winning candidates, and voter participation. Admins also have the ability to configure the ballot with specific start and end times, and lock/unlock it during the voting period.For authentication, I integrated Microsoft Active Directory via LDAP, enabling employees to log in using their existing desktop credentials. The application’s frontend is built with React TypeScript, while the backend is powered by ASP.NET Core C#, providing RESTful APIs. Data is stored and managed using MySQL, and the app is deployed through Microsoft IIS for seamless scalability and reliability",
  },
  {
    role: "Software Engineer",
    company: "Ivy Software Development Services",
    companyLogo: "/img/icons/common/ivy.jpeg",
    date: "March 2022 - June 2023",
    desc: "At Ivy Software Development Services, I developed key features for the BETMGM gaming platform (acquired by Entain) using JEE Spring/Spring Boot. One of the critical features I implemented was the Auto Cashout functionality. This feature was designed to automatically cash out winnings for players who became inactive for over a year. If players did not log in after winning, the system would transfer their funds to their accounts and then close their accounts due to inactivity.I was responsible for designing and developing the feature according to the business requirements provided by the analysts. After implementation, I conducted thorough testing to ensure accuracy and functionality before deploying it to both staging and production environments. This project was vital for maintaining regulatory compliance and ensuring proper user management on the platform.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Software Engineer",
    company: "Oracle Cerner",
    companyLogo: "/img/icons/common/cerner.png",
    date: "Jan 2020 - Sept 2021",
    desc: "I enhanced the PowerChart healthcare application by implementing an order priority feature that streamlined the workflow for phlebotomists. This involved designing and implementing complex logic within a C++ MFC-based architecture to optimize task prioritization, ensuring that urgent orders were handled efficiently. I followed the full Software Development Lifecycle (SDLC), from initial code design and analysis through implementation, unit testing, and peer reviews, ultimately deploying the solution to production",
  },
  {
    role: "Software Intern",
    company: "Cloud-IO",
    companyLogo: "/img/icons/common/cloudio.jpeg",
    date: "April 2019 - June 2021",
    desc: "I collaborated with Cloudio, a startup, to develop a web-based application designed for the company’s sales data analysis. My role involved implementing a linear regression model to predict future sales trends, and I integrated this model into a user-friendly interface that allowed users to easily upload and analyze datasets. This solution provided actionable insights for the company's sales strategy, making data-driven decision-making more accessible to users through a streamlined, intuitive platform.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Bookstore eCommerce Shopping Website",
    desc: "A full-stack bookstore website built using React and J2EE with MySQL. Features include browsing books, adding to cart, and completing purchases through a robust REST API and DAO pattern.",
    github: "https://github.com/sushmanukala9/SushmaBookstoreFinal",
    link: "https://www.youtube.com/watch?v=ZdEzDdZkWtk", // Replace with actual video link
  },
  {
    name: "Social Media Analysis and Product Recommendation System",
    desc: "Cloud-based system leveraging Amazon EMR, Hadoop, Spark, and AWS SageMaker to analyze Twitter data, perform sentiment analysis, and recommend products using machine learning.",
    link: "", // If no external link, this can be left empty
  },
  {
    name: "EventEase",
    desc: "An event management website developed using React and Spring Boot. Features include event registration, scheduling, and email notifications via Java mailing service. Hosted using AWS RDS, EC2, and S3.",
    github: "https://github.com/sushmanukala9/SEProject",
    link: "https://www.youtube.com/watch?v=6KnC0JF73d8",
  },
  {
    name: "Completely Fair Scheduler",
    desc: "Developed a dynamic load balancer using Pintos OS, implementing multi-threading and a fair scheduler to optimize CPU utilization and eliminate busy-waiting through synchronization techniques.",
    link: "", // If no external link, this can be left empty
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Sushma Nukala",
  description: greetings.description,
  author: "Sushma Nukala",
  image: "/img/icons/common/cloudio.jpeg",
  url: "https://sushmanukala.netlify.app/",
  keywords: [
    "Sushma",
    "Sushma Nukala",
    "@sushmanukala9",
    "sushmanukala9",
    "Portfolio",
    "Sushma Portfolio ",
    "Sushma Nukala Portfolio",
  ],
};
