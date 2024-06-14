import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  codeforces,
  leetcode,
  SIH,
  eth,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Journey",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: "https://drive.google.com/file/d/1TVsiWMXgD2rscWCKFkA5AnmnyfFzSceq/view?usp=sharing",
    title: "Resume",
  }
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web3 Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Data Structures & Algorithms",
    company_name: "500+ Problems",
    icon: leetcode,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jun 2022",
    points: [
      "Solved over 500+ problems covering key topics such as binary search, backtracking, dynamic programming, and graph algorithms.",
      "Learned to identify different types of patterns and approaches in problem-solving, utilizing them to design efficient algorithms.",
      "Embarked on a challenging journey to master data structures and algorithms, overcoming initial difficulties and steadily improving problem-solving skills.",
      "Enhanced analytical thinking and logical reasoning by practicing a wide range of problems and exploring different strategies to solve them.",
    ],
  },
  {
    title: "Competitive Coding",
    company_name: "27+ Contests",
    icon: codeforces,
    iconBg: "#383E56",
    date: "Jul 2022 - Dec 2022",
    points: [
      "Solved contests on various competitive programming platforms such as CodeChef, HackerRank, and HackerEarth.",
      "Achieved 3-star coder status on CodeChef, demonstrating strong problem-solving skills and proficiency in algorithms and data structures.",
      "Consistently ranked in the top 10% of participants in coding competitions, showcasing exceptional analytical and coding abilities.",
      "Enhanced problem-solving speed and accuracy by practicing diverse algorithmic challenges and participating in timed contests.",
    ],
  },
  {
    title: "Full stack Developement",
    company_name: "10+ Projects",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Mar 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web3 Developement",
    company_name: "5+ Projects",
    icon: eth,
    iconBg: "#383E56",
    date: "Apr 2023 - Jul 2023",
    points: [
      "Gained expertise in blockchain development, mastering Solidity and smart contract creation.",
      "Utilized frameworks like Truffle, Hardhat, Ganache, and Ethers.js for efficient blockchain project development.",
      "Built and trained neural networks, regression models, and classification models using Scikit-Learn and TensorFlow.",
      "Explored augmented reality technologies, integrating them into various projects to enhance user experiences.",
    ],
  },
  {
    title: "Smart India Hackathon",
    company_name: "Winner - 2023",
    icon: SIH,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Dec 2023",
    points: [
      "Developed a personalized job recommendation system and location-based augmented reality job searching feature, providing users with tailored job recommendations and an immersive job search experience.",
      "Created a user-friendly React Native app for mobile users with an interactive UI and a Next.js app for the website, ensuring a seamless and engaging user experience.",
      "Built a robust backend using Node.js, MongoDB, Express, Redis, JWT authentication, Passport.js for OAuth, and schema validation, ensuring security and reliability.",
      "Collaborated efficiently with team members, integrating various technologies and features cohesively to produce a well-rounded and polished final product.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Surviellance Bureau",
    description:
      "Decentralized criminal recognition system which harnesses the power of blockchain technology and machine learning to identify and track criminals across the globe.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ai/ml",
        color: "green-text-gradient",
      },
      {
        name: "blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sdmrf/Surveillance_Bureau.git",
  },
  {
    name: "PGRKAM",
    description: "SIH-winning project tackles unemployment by leveraging machine learning for job recommendations and augmented reality for job search experiences.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "green-text-gradient",
      },
      {
        name: "AR",
        color: "pink-text-gradient",
      },

      {
        name: "ai/ml",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/sdmrf/PGRKAM-SIH2023.git",
  },
  {
    name: "Elysian",
    description:
      "E-commerce platform that offers a wide range of furnitures, home decor, and lifestyle products, providing users with a seamless shopping experience.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "ai/ml",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/sdmrf/Elysian.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
