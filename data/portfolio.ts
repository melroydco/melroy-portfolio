export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  
];

export const projects = [
  {
    title: "AI Coloring Book Generator",
    description:
      "Developed an AI pipeline that converts Wikipedia portraits of famous personalities into clean, printable coloring-book illustrations while preserving recognizable facial features and simplifying visual details.",
    tech: [
      "Python",
      "PyTorch",
      "Diffusers",
      "OpenCV",
      "ControlNet",
      "Computer Vision"
    ],
    accent: "Generative AI"
  },

  {
    title: "Restaurant Success Prediction",
    description:
      "Developed machine-learning models for predicting restaurant success using feature engineering and exploratory data analysis, achieving approximately 85% prediction accuracy and using SHAP to explain model decisions.",
    tech: [
      "Python",
      "XGBoost",
      "Random Forest",
      "SHAP",
      "Pandas",
      "Scikit-learn"
    ],
    accent: "Machine Learning"
  },

  {
    title: "Cyphercanva — GAN-Based Image Steganography",
    description:
      "Developed a GAN-based image steganography system for hiding information within images while preserving approximately 80% image quality and reducing detection errors by around 30%.",
    tech: [
      "Python",
      "GANs",
      "Deep Learning",
      "Computer Vision",
      "TensorFlow"
    ],
    accent: "Deep Learning"
  },

  {
    title: "Voice-Based Dialog System",
    description:
      "Built a conversational AI system combining speech processing, natural language understanding and response generation to enable voice-driven human-computer interaction.",
    tech: [
      "Python",
      "NLP",
      "Speech Processing",
      "REST APIs",
      "Docker"
    ],
    accent: "Conversational AI"
  },

  {
    title: "Gym Management System",
    description:
      "Developed a full-stack gym management application for managing memberships, packages, trainers, payments and membership validity through an administrative dashboard.",
    tech: [
      "PHP",
      "MySQL",
      "MySQLi",
      "HTML",
      "CSS",
      "XAMPP"
    ],
    accent: "Full Stack"
  },

  {
    title: "Grayscale to Color Image Conversion",
    description:
      "Developed a deep-learning image colorization pipeline that transforms grayscale images into plausible color images using learned visual representations and computer-vision preprocessing.",
    tech: [
      "Python",
      "Deep Learning",
      "Computer Vision",
      "OpenCV",
      "TensorFlow"
    ],
    accent: "Computer Vision"
  }
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
    category: "Programming",
    skills: [
      "Python",
      "C++",
      "Java",
      "SQL",
      "R"
    ]
  },

  {
    category: "Data Science & Analytics",
    skills: [
      "Pandas",
      "NumPy",
      "Data Analysis",
      "EDA",
      "Statistical Analysis",
      "Feature Engineering"
    ]
  },

  {
    category: "Machine Learning & AI",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "XGBoost",
      "Deep Learning",
      "Computer Vision"
    ]
  },

  {
    category: "LLM & Generative AI",
    skills: [
      "LLMs",
      "RAG",
      "Generative AI",
      "Prompt Engineering",
      "Hugging Face",
      "Agentic AI"
    ]
  },

  {
    category: "Analysis & BI Tools",
    skills: [
      "Power BI",
      "Excel",
      "Jupyter",
      "Matplotlib",
      "SHAP"
    ]
  },

  {
    category: "Web Design & UI/UX",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Figma",
      "UI/UX Design"
    ]
  },

  {
    category: "Cloud & DevOps",
    skills: [
      "Azure",
      "AWS",
      "Docker",
      "Git",
      "GitHub",
      "Linux"
    ]
  },

  {
    category: "Backend & Development",
    skills: [
      "Flask",
      "REST APIs",
      "MySQL"
    ]
  }
];
