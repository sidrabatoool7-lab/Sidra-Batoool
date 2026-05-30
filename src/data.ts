import { Project, TimelineItem, SkillCategory, AchievementItem } from "./types";

export const profileBio = {
  name: "Sidra Batool",
  title: "Final Year Mathematics Student",
  subtitle: "Aspiring AI & Machine Learning Engineer",
  tagline: "Transforming Mathematical Intelligence into Innovative AI Solutions.",
  intro: "A passionate Mathematics student with strong analytical, logical, and problem-solving abilities. Dedicated to exploring Artificial Intelligence, Machine Learning, Deep Learning, and Generative AI to build intelligent systems that solve real-world challenges.",
  location: "Khanewal, Punjab, Pakistan",
  email: "sidrabatoool7@gmail.com",
};

export const educationTimeline: TimelineItem[] = [
  {
    id: "edu-current",
    title: "BS Mathematics (Final Year Student)",
    subTitle: "Rigorous focus on core mathematics and advanced computational techniques",
    year: "2022 - 2026",
    details: "Studying advanced courses in Linear Algebra, Vector Calculus, Probability Theory, Numerical Analysis, and Mathematical Modeling, providing the algebraic and statistical backbone for AI algorithms.",
    isCurrent: true,
  },
  {
    id: "edu-fsc",
    title: "FSc (Pre-Engineering)",
    subTitle: "Punjab Board of Intermediate and Secondary Education",
    year: "2021",
    details: "Graduated with 927 / 1100 marks. Strong foundation in pre-calculus, algebra, and classical physics.",
  },
  {
    id: "edu-matric",
    title: "Matriculation (Science)",
    subTitle: "Secondary School Certificate",
    year: "2019",
    details: "Graduated with 848 / 1100 marks, focusing on Mathematics, Physics, Chemistry, and Computer Science.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Mathematics & Statistics",
    skills: [
      { name: "Linear Algebra & Matrices", percentage: 95 },
      { name: "Calculus & Vector Analysis", percentage: 92 },
      { name: "Probability & Stochastic Processes", percentage: 88 },
      { name: "Statistical Theory & Hypothesis Testing", percentage: 90 },
      { name: "Mathematical Modeling", percentage: 85 },
      { name: "Analytical Problem Solving", percentage: 98 },
    ],
  },
  {
    title: "Artificial Intelligence & ML",
    skills: [
      { name: "Machine Learning Fundamentals", percentage: 88 },
      { name: "Deep Learning & Neural Networks", percentage: 80 },
      { name: "Generative AI & Prompt Engineering", percentage: 92 },
      { name: "Natural Language Processing (NLP)", percentage: 75 },
      { name: "Computer Vision Concepts", percentage: 78 },
      { name: "AI Model Evaluation Metrics", percentage: 85 },
    ],
  },
  {
    title: "Data Science & Analytics",
    skills: [
      { name: "Exploratory Data Analysis (EDA)", percentage: 90 },
      { name: "Data Visualization (D3, Charts)", percentage: 85 },
      { name: "Predictive Analytics", percentage: 82 },
      { name: "Data Interpretation & Modeling", percentage: 88 },
    ],
  },
  {
    title: "Technical & Digital Productivity",
    skills: [
      { name: "Diploma in Information Technology (DIT)", percentage: 100 },
      { name: "Advanced Internet Research", percentage: 95 },
      { name: "MS Office Suite & LaTeX", percentage: 90 },
      { name: "Digital Productivity Tools", percentage: 92 },
      { name: "Computer Fundamentals & Operating Systems", percentage: 95 },
    ],
  },
];

export const aiJourneyCards = [
  {
    title: "Artificial Intelligence",
    description: "Building intelligent systems capable of learning, reasoning, and solving complex real-world logical problems using mathematics.",
    icon: "Brain",
    color: "from-cyan-500 to-blue-600",
    formula: "f(x) = \\sigma(W^T x + b)"
  },
  {
    title: "Machine Learning",
    description: "Developing predictive statistical models that identify core patterns, optimize cost functions, and generate insights from raw data.",
    icon: "Cpu",
    color: "from-blue-500 to-indigo-600",
    formula: "L(w) = \\frac{1}{N}\\sum_{i=1}^N (y_i - w^T x_i)^2"
  },
  {
    title: "Deep Learning",
    description: "Exploring multilayer neural networks, backpropagation, gradient descent, and deep architectures that power current state-of-the-art vision/NLP.",
    icon: "Fingerprint",
    color: "from-indigo-500 to-purple-600",
    formula: "w_{t+1} = w_t - \\eta \\nabla L(w_t)"
  },
  {
    title: "Generative AI",
    description: "Crafting innovative prompt spaces and leveraging modern large-scale neural network models to generate high-quality original outputs, code, and text.",
    icon: "Sparkles",
    color: "from-purple-500 to-pink-600",
    formula: "P(x_t \\mid x_{1:t-1}) = \\text{softmax}(QK^T / \\sqrt{d_k}) V"
  }
];

export const projectsData: Project[] = [
  {
    id: "chatbot",
    title: "Interactive AI-Powered Portfolio bot",
    description: "A highly personalized, knowledge-grounded interactive chatbot acting as Sidra's personal portfolio representative.",
    longDescription: "An intelligent chatbot capable of answering complex inquiries about Sidra Batool's mathematical expertise, academic timeline, career outlook, and technical stack. Built with modern, responsive UI elements.",
    technologies: ["React", "Tailwind CSS", "Regular Expressions", "Dynamic Persona Model"],
    liveDemoSupported: true,
    githubUrl: "https://github.com/SidraBatool",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "predictor",
    title: "Student Performance Prediction Engine",
    description: "An interactive, mathematical ML visualization allowing live manipulation of learning indices to predict results.",
    longDescription: "This interactive application simulates a Least-Squares Linear Regression model, computing a student's predicted test performance based on live input factors like Study Hours, Sleep Quality, and Practice Exercises.",
    technologies: ["Linear Algebra", "Statistical Models", "Numerical Solvers", "SVG Graphing"],
    liveDemoSupported: true,
    githubUrl: "https://github.com/SidraBatool",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "data-analyzer",
    title: "Mathematical Data Analysis Dashboard",
    description: "Real-time statistical visualizer computing Central Tendency, Standard Deviation, and plotting interactive eigenvalue coordinate planes.",
    longDescription: "A comprehensive analytical sandboxed dashboard allowing users to input raw data vectors and dynamically compute mean, median, absolute variance, standard deviation, and visually interact with linear 2D projections.",
    technologies: ["Probabilistic Stats", "Matrix Formulations", "Interactive Canvas", "D3-inspired SVG"],
    liveDemoSupported: true,
    githubUrl: "https://github.com/SidraBatool",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "clustering",
    title: "Machine Learning Classifier Visualizer",
    description: "Interactive visual decision-boundary playground utilizing Euclidean distance mechanics to cluster points in real time.",
    longDescription: "Allows users to plot coordinate points onto an interactive grid. Runs a real-time K-Nearest Neighbors (KNN) classification boundary, grouping data vectors continuously and demonstrating AI's dependency on Cartesian distance metrics.",
    technologies: ["Distance Metric Math", "Euclidean Space", "Vector Optimization", "Canvas Rendering"],
    liveDemoSupported: true,
    githubUrl: "https://github.com/SidraBatool",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "generative",
    title: "Generative AI Research & Prompt Playground",
    description: "An advanced visualization demonstrating token generation probabilities, prompt formatting, and attention score heatmaps.",
    longDescription: "Simulates the mechanics behind large transformer models, showing how mathematical attention matrices and temperature parameters affect predicted output choices when prompting Generative AI.",
    technologies: ["Attention Mechanisms", "Transformer Mathematics", "Probability Space", "Softmax Modifiers"],
    liveDemoSupported: true,
    githubUrl: "https://github.com/SidraBatool",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80",
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Diploma in Information Tech (DIT)",
    description: "Completed comprehensive computer hardware, operating system configurations, and digital execution certifications with top marks.",
    iconName: "FileCheck",
    category: "Technical Credentials",
  },
  {
    id: "ach-2",
    title: "Strong Academic Performance",
    description: "Maintaining stellar standing during final BS Mathematics semester with extreme excellence in Linear Algebra & Statistics.",
    iconName: "TrendingUp",
    category: "Academic",
  },
  {
    id: "ach-3",
    title: "Mathematics Research Focus",
    description: "Drafting independent insights for mathematical modeling of algorithmic decision boundaries in modern neural network training cycles.",
    iconName: "BookOpen",
    category: "Research",
  },
  {
    id: "ach-4",
    title: "AI Learning Journey Mastery",
    description: "Engaged in comprehensive self-guided certifications spanning Prompt Engineering, Deep Neural Architecture, and Machine Learning.",
    iconName: "BrainCircuit",
    category: "AI Specialty",
  },
  {
    id: "ach-5",
    title: "Continuous Professional Growth",
    description: "Committed to active exploration of current arxiv research papers, open-source AI models, and real-world implementation datasets.",
    iconName: "Award",
    category: "Career",
  },
  {
    id: "ach-6",
    title: "Technology Enthusiast",
    description: "Pioneering the alignment of abstract pure formulas with visual data interfaces, establishing a bridge between math and AI systems.",
    iconName: "Cpu",
    category: "Personal Focus",
  },
];

export const languagesList = [
  { name: "Urdu", description: "Native speaker", level: "Native" },
  { name: "English", description: "Professional work proficiency", level: "Professional" },
  { name: "Punjabi", description: "Regional language expertise", level: "Fluent" }
];
