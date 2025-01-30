import {
  
  
  designer,
  uiux,
  AI,
  VR,
  thegrearindiankitchen,
  lab,
  gbin_home,
  ai_llm,
  kiosk,  
  event,
  helakuru
  

} from "../assets";


export const navLinks = [
  {
    id: "About",
    title: "About",
  },
  {
    id: "experience",
    title: "experiences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer & Software Engineer",
    icon: designer,
  },
  {
    title: "UI/UX Designer ",
    icon: uiux,
  },
  {
    title: "ML | LLM | AI Enthusiast ",
    icon: AI,
  },
  {
    title: "Learning for life with immersive AR/VR ",
    icon: VR,
  },
];


const experiences = [
  {
    title: "Human Computer Interaction - GBin E-waste management",
    company_name: "Figma | CSS | React",
    
    iconBg: "#383E56",
    date: "Dec 2024 - jan 2025",
    points: [
      "Focused on creating a user-friendly app for e-waste management.",
      "Optimized interface using HCI and UI/UX principles for a seamless experience.",
      "Ensured the app was responsive and functional on various devices.",
      "Collaborated closely with teams to implement efficient, high-quality features."
    ],
    image: gbin_home,
    link: "https://github.com/SarithaKili/GBin-HCI-project"
  },
  {
    title: "Food Delivery Website - The Great indian Kitchen",
    company_name: "React JS | CSS | MongoDB | Express | Node JS | Stripe",
   
    iconBg: "#E6DEDD",
    date: "oct 2024 - jan 2025",
    points: [
      "Built a full-stack food delivery app with React.js and Node.js.",
      "Integrated Stripe for secure online payments and shopping cart functionalities.",
      "Designed an intuitive admin panel for managing users, orders, and products.",
      "Implemented real-time order tracking and ensured cross-browser compatibility."
    ],
    image: thegrearindiankitchen,
    link:"https://github.com/SarithaKili/FullstackDev",
  },
  {
    title: "Gen-AI Prompt From URL with LLM",
    company_name: "Python | LangChain | OpenAI API | FAISS (VB)",
    
    iconBg: "#383E56",
    date: "Jan 2025 ",
    points: [
      "Processed documents and URLs for AI-driven insights.",
      "Leveraged FAISS for vector-based similarity search and context retrieval.",
      "Created embeddings and chunked data for efficient AI handling.",
      "Utilized OpenAI API and LangChain for advanced natural language querying."
    ],
    image: ai_llm,
    link:"https://github.com/SarithaKili/Gen-AI_PromptFromURL_LLM",
  },
  {
    title: "Computer Lab 02 Booking App - Associated with UOJ",
    company_name: "React JS | Java Spring Boot (microservices architecture) | MySQL | Microsoft Entra ID | Azure Cloud | JIRA",
  
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Nov 2024",
    points: [
      "Developed and maintained a lab booking system with React.js and Spring Boot.",
      "Integrated Microsoft Entra ID for secure user authentication and Azure Cloud for deployment.",
      "Ensured responsive design and cross-browser compatibility.",
      "Collaborated with cross-functional teams and participated in code reviews."
    ],
    image: lab,
    link:"https://github.com/SarithaKili/CO2-lab-booking-app-backend",
  },
  {
    title: "Music-Event Management Dashboard",
    company_name: "Figma",
  
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Music-Event Management Dashboard, likely focusing on features such as event scheduling, ticket management, and user engagement to streamline event planning and execution"
    ],
    image: event,
    link:"https://www.figma.com/proto/miOgNzhB7gVlAA3bnpqGuB/Event-management-dashboard?page-id=0%3A1&node-id=4-139&viewport=224%2C192%2C0.29&t=lhinITTJX2ZWZXLN-1&scaling=min-zoom&content-scaling=fixed",
  },
  {
    title: "Helakuru-Like Mobile App",
    company_name: "Figma",
  
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "identifying issues in the original Helakuru app, making improvements, and analyzing user pain points to enhance the overall user experience."
    ],
    image: helakuru,
    link:"https://www.figma.com/proto/s1owoMFKQ17uKUk475eC7I/User-Login-Dashboard?page-id=0%3A1&node-id=103-132&viewport=734%2C1009%2C0.3&t=DZpRN67S2w2e6Cr1-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=46%3A119&show-proto-sidebar=1",
  },
  {
    title: "Restaurant-kiosk",
    company_name: "Figma",
  
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Nov 2024",
    points: [
      "kiosk interface for a fast-food restaurant, focusing on user-friendly navigation, efficient order placement, and a visually appealing UI to enhance the customer experience"
    ],
    image:  kiosk,
    link:"https://www.figma.com/proto/I8bLaoKmFUxYpLw25vHhJ6/Restaurant-kiosk?page-id=0%3A1&node-id=4-4&viewport=-232%2C258%2C0.18&t=ScsELLHZDffJlFsD-1&scaling=min-zoom&content-scaling=fixed",
  },
];


export { services, experiences };