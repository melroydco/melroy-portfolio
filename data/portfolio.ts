export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  
];

export const projects = [
  {
    title: "Octofit Fitness Tracker",
    description:
      "A multi-tier fitness application developed using GitHub Copilot Agent Mode. The application includes backend routes for users, teams, activities, workouts and leaderboards, supported by a MongoDB data layer.",
    tech: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "GitHub Copilot",
    ],
    label: "FULL-STACK APPLICATION",
    image: "/projects/octofit.jpg",
    github:
      "https://github.com/melroydco/skills-build-applications-w-copilot-agent-mode",
  },

  {
    title: "E-Commerce Analytics Dashboard",
    description:
      "An end-to-end analytics project that transforms retail transaction data into validated analytics, customer segments, reusable data marts and an interactive business dashboard.",
    tech: [
      "Python",
      "Pandas",
      "SQL",
      "SQLite",
      "Streamlit",
      "Plotly",
    ],
    label: "DATA ANALYTICS",
    image: "/projects/ecommerce-dashboard.jpg",
    github:
      "https://github.com/melroydco/E_com_analytic_dashboard",
  },

  {
    title: "AI Coloring Book Generator",
    description:
      "An AI pipeline that transforms portraits of famous personalities into clean, printable coloring-book line art while preserving recognizable facial features.",
    tech: [
      "Python",
      "PyTorch",
      "OpenCV",
      "Diffusers",
      "Computer Vision",
      "Generative AI",
    ],
    label: "GENERATIVE AI",
    image: "/projects/coloring-book.jpg",
    github: "",
  },

  {
    title: "Restaurant Success Prediction",
    description:
      "Developed machine-learning models for restaurant success prediction using exploratory analysis, feature engineering, XGBoost and SHAP-based model explainability.",
    tech: [
      "Python",
      "XGBoost",
      "Random Forest",
      "SHAP",
      "Pandas",
      "Scikit-learn",
    ],
    label: "MACHINE LEARNING",
    image: "/projects/restaurant-ai.jpg",
    github: "",
  },

  {
    title: "GAN-Based Image Steganography",
    description:
      "Developed a GAN-based image steganography system for hiding information within images while maintaining visual quality and improving resistance to detection.",
    tech: [
      "Python",
      "GANs",
      "Deep Learning",
      "TensorFlow",
      "Computer Vision",
    ],
    label: "DEEP LEARNING",
    image: "/projects/steganography.jpg",
    github: "",
  },

  {
    title: "RAG PDF Chatbot",
    description:
      "A document-question answering application that retrieves relevant information from PDF files and generates grounded responses using a retrieval-augmented generation pipeline.",
    tech: [
      "Python",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "FAISS",
      "ChromaDB",
      "Sentence Transformers",
    ],
    label: "LLM & RAG",
    image: "/projects/rag-chatbot.jpg",
    github: "",
  },

  {
    title: "Gym Management System",
    description:
      "A database-backed management system for organizing gym members, memberships, subscription information and administrative workflows.",
    tech: [
      "Java",
      "SQL",
      "Database Design",
      "Software Engineering",
    ],
    label: "SOFTWARE DEVELOPMENT",
    image: "/projects/gym-management.jpg",
    github: "",
  },
];

export const experience = [
  {
    role: "M.Sc. Data Science",
    company: "Philipps-Universität Marburg",
    period: "Present",
    logo: "/logos/uni marburg.jpeg",
    description:
      "Pursuing a Master's degree in Data Science with a focus on machine learning, data analysis, computer vision, signal processing and modern AI systems."
  },

  {
    role: "Data Analysis Intern",
    company: "Indian Institute of Technology (IIT)",
    period: "Apr 2024 — Aug 2024",
    logo: "/logos/iit.jpeg",
    description:
      "Worked on data analysis and preprocessing, transforming raw datasets into structured insights through exploratory data analysis, visualization and statistical techniques."
  },

  {
    role: "AI / ML Intern",
    company: "Zephyr Technologies",
    period: "Jul 2023 — Oct 2023",
    logo: "/logos/zephyr.jpeg",
    description:
      "Worked with datasets containing 50,000+ records, performed data preprocessing and hyperparameter tuning, improved model accuracy by approximately 20%, and developed a Flask inference API for production integration."
  },

  {
    role: "Bachelor's in Artificial Intelligence & Machine Learning",
    company: "St. Joseph Engineering College",
    period: "Oct 2020 — May 2024",
    logo: "/logos/sjec.jpeg",
    description:
      "Completed undergraduate studies in Artificial Intelligence and Machine Learning, covering machine learning, deep learning, computer vision, natural language processing, data science and software development."
  }
];

export const skillGroups = [
  {
    category: "Programming Languages",
    skills: [
      "Python",
      "Java",
      "C++",
      "JavaScript",
      "TypeScript",
      "SQL",
      "R",
    ],
  },

  {
    category: "Data Science & Analytics",
    skills: [
      "Pandas",
      "NumPy",
      "Power BI",
      "Matplotlib",
      "SHAP",
      "XGBoost",
      "EDA",
      "Statistical Analysis",
      "Feature Engineering",
      "Predictive Analytics",
      "Data Visualization",
      "Customer Segmentation",
    ],
  },

  {
    category: "Machine Learning & AI",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Deep Learning",
      "Computer Vision",
      "Neural Networks",
      "Model Evaluation",
      "Model Optimization",
    ],
  },

  {
    category: "Generative AI & LLMs",
    skills: [
      "LangChain",
      "LangGraph",
      "OpenAI API",
      "Groq API",
      "LLMs",
      "RAG",
      "Prompt Engineering",
      "Sentence Transformers",
      "Embeddings",
      "FAISS",
      "ChromaDB",
      "Typesense",
    ],
  },

  {
    category: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Flask",
      "REST APIs",
      "Authentication",
      "CRUD Applications",
    ],
  },

  {
    category: "Web Development",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Responsive Design",
      "UI/UX Design",
    ],
  },

  {
    category: "Cloud & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "Vercel",
      "GitHub Copilot",
    ],
  },

  {
    category: "Development Tools",
    skills: [
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "Postman",
      "npm",
    ],
  },
];
