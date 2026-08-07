export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  
];

export const projects = [
  {
    title: "Smart Energy Analytics Platform",
    description:
      "Built a memory-efficient smart-meter analytics platform that processes large-scale energy data in chunks, aggregates it into compact SQL models, detects anomalies, forecasts demand and presents insights through an interactive dashboard.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "SQLite",
      "Scikit-learn",
      "Streamlit",
      "Plotly",
      "Time Series",
    ],
    label: "DATA ENGINEERING & ML",
    image: "/projects/smart-energy.jpeg",
    github:
      "https://github.com/melroydco/smart_energy_analytics",
  },

  {
    title: "E-Commerce Analytics Dashboard",
    description:
      "End-to-end analytics project processing more than 541,000 retail transactions to analyse revenue, customers, products, returns and data quality using reusable SQL analytics and interactive dashboards.",
    tech: [
      "Python",
      "Pandas",
      "SQL",
      "SQLite",
      "Streamlit",
      "Plotly",
      "RFM",
    ],
    label: "DATA ANALYTICS",
    image: "/projects/ecommerce-dashboard.png",
    github:
      "https://github.com/melroydco/E_com_analytic_dashboard",
  },

  {
    title: "RAG PDF Assistant",
    description:
      "Retrieval-Augmented Generation application that processes PDF documents, creates semantic embeddings, retrieves relevant document context and generates grounded answers using LLMs.",
    tech: [
      "Python",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "Groq",
      "FAISS",
      "ChromaDB",
      "Typesense",
      "Sentence Transformers",
    ],
    label: "GENERATIVE AI & RAG",
    image: "/projects/rag-chatbot.png",
    github:
      "https://github.com/melroydco/RAG_assistant",
  },

  {
    title: "GAN-Based Image Steganography",
    description:
      "Deep-learning steganography project using GAN-based techniques to hide information inside images while preserving visual quality and improving resistance to detection.",
    tech: [
      "Python",
      "GANs",
      "Deep Learning",
      "Computer Vision",
      "Image Processing",
    ],
    label: "DEEP LEARNING",
    image: "/projects/steganography.jpeg",
    github:
      "https://github.com/melroydco/cipher_canva",
  },

  {
    title: "Restaurant Success Prediction",
    description:
      "Machine-learning project for predicting restaurant success using exploratory data analysis, feature engineering, predictive modelling and explainability.",
    tech: [
      "Python",
      "XGBoost",
      "Random Forest",
      "SHAP",
      "Pandas",
      "Scikit-learn",
    ],
    label: "MACHINE LEARNING",
    image: "/projects/restraunt-ai.jpeg",
    github:
      "https://github.com/melroydco/restro_success_predict",
  },

  {
    title: "Octofit Fitness Tracker",
    description:
      "Multi-tier fitness application developed using GitHub Copilot Agent Mode, with backend routes for users, teams, activities, workouts and leaderboards.",
    tech: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "GitHub Copilot",
    ],
    label: "FULL-STACK APPLICATION",
    image: "/projects/octofit.png",
    github:
      "https://github.com/melroydco/skills-build-applications-w-copilot-agent-mode",
  },

  {
    title: "AI Coloring Book Generator",
    description:
      "AI pipeline that transforms portraits into clean, printable coloring-book line art while preserving important facial structure and recognizable identity.",
    tech: [
      "Python",
      "PyTorch",
      "OpenCV",
      "Diffusers",
      "Computer Vision",
      "Generative AI",
    ],
    label: "GENERATIVE AI",
    image: "/projects/coloring-book.png",
    github: "",
  },

  {
    title: "Gym Management System",
    description:
      "Database-backed application for managing gym members, memberships, subscriptions and administrative workflows.",
    tech: [
      "Java",
      "SQL",
      "Database Design",
      "Software Engineering",
    ],
    label: "SOFTWARE DEVELOPMENT",
    image: "/projects/gym-management.jpeg",
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
    description:
      "Languages used across analytics, artificial intelligence and application development.",
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
    description:
      "Tools and methods for transforming raw data into meaningful insights.",
    skills: [
      "Pandas",
      "NumPy",
      "EDA",
      "Statistical Analysis",
      "Feature Engineering",
      "Predictive Analytics",
      "Data Visualization",
      "Customer Segmentation",
      "SHAP",
    ],
  },

  {
    category: "Machine Learning & AI",
    description:
      "Frameworks and techniques for training, evaluating and explaining intelligent models.",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "Deep Learning",
      "Computer Vision",
      "Neural Networks",
      "Model Evaluation",
    ],
  },

  {
    category: "Generative AI & LLMs",
    description:
      "Technologies for retrieval, conversational and agentic artificial-intelligence applications.",
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
    category: "Analytics & BI Tools",
    description:
      "Platforms used for reporting, dashboards and exploratory analysis.",
    skills: [
      "Power BI",
      "Excel",
      "Jupyter Notebook",
      "Google Colab",
      "Matplotlib",
      "Plotly",
      "Streamlit",
      "SQLite",
    ],
  },

  {
    category: "Backend & Databases",
    description:
      "Backend technologies used to build APIs and database-backed applications.",
    skills: [
      "Node.js",
      "Express.js",
      "Flask",
      "REST APIs",
      "MongoDB",
      "MySQL",
      "SQLite",
      "Authentication",
    ],
  },

  {
    category: "Web Design & UI/UX",
    description:
      "Technologies used to build responsive and visually engaging interfaces.",
    skills: [
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
      "UI/UX Design",
    ],
  },

  {
    category: "Development & Deployment",
    description:
      "Tools used for source control, development, testing and deployment.",
    skills: [
      "Git",
      "GitHub",
      "GitHub Copilot",
      "Docker",
      "Linux",
      "Vercel",
      "VS Code",
      "Postman",
      "npm",
    ],
  },
];