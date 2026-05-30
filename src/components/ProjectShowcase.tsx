import React, { useState, useRef, useEffect } from "react";
import { 
  MessageSquare, Cpu, BarChart3, Grid3X3, Sparkles, 
  Github, Play, Sliders, Send, RefreshCw, HelpCircle,
  Plus, Trash2, ArrowRight
} from "lucide-react";
import { projectsData } from "../data";

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(projectsData[0]);
  const [activeTab, setActiveTab] = useState<"about" | "demo">("demo");

  return (
    <div className="w-full">
      {/* Tab select slider */}
      <div className="flex flex-wrap gap-2 justify-center mb-8 border-b border-white/[0.08] pb-6">
        {projectsData.map((project, idx) => {
          const isSelected = activeProject.id === project.id;
          return (
            <button
              key={project.id}
              onClick={() => {
                setActiveProject(project);
                setActiveTab("demo");
              }}
              className={`px-4 py-2.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 relative flex items-center gap-2 cursor-pointer border
                ${isSelected 
                  ? "bg-white/10 text-cyan-300 border-cyan-500/50 shadow-lg shadow-cyan-500/10" 
                  : "bg-white/5 text-gray-400 border-white/10 hover:text-gray-200 hover:bg-white/10"
                }`}
            >
              <div className="relative z-10 flex items-center gap-2">
                <span className="text-xs text-gray-500 font-mono">0{idx + 1}.</span>
                {project.id === "chatbot" && <MessageSquare className="w-4 h-4" />}
                {project.id === "predictor" && <Cpu className="w-4 h-4" />}
                {project.id === "data-analyzer" && <BarChart3 className="w-4 h-4" />}
                {project.id === "clustering" && <Grid3X3 className="w-4 h-4" />}
                {project.id === "generative" && <Sparkles className="w-4 h-4" />}
                <span>{project.title.split(" ").slice(-2).join(" ")}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main card panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-panel overflow-hidden shadow-2xl bg-white/[0.03]">
        
        {/* Left info column */}
        <div className="lg:col-span-4 p-6 md:p-8 flex flex-col justify-between border-r border-white/10 bg-black/10">
          <div>
            <div className="flex items-center gap-2 mb-3 text-cyan-400 font-mono text-xs uppercase tracking-widest">
              <span>Interactive Portfolio Showcase</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            </div>
            
            <h3 className="text-2xl font-semibold font-display text-white tracking-tight leading-tight mb-4">
              {activeProject.title}
            </h3>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {activeProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {activeProject.technologies.map(tech => (
                <span key={tech} className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.05] text-xs font-mono text-purple-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
            <div className="flex border-b border-white/[0.08] pb-1.5 mb-2 gap-4">
              <button 
                onClick={() => setActiveTab("demo")}
                className={`pb-2 text-xs uppercase tracking-wider font-mono cursor-pointer transition-all ${activeTab === "demo" ? "text-cyan-400 border-b-2 border-cyan-400 font-semibold" : "text-gray-400 hover:text-gray-200"}`}
              >
                Live Interactive Demo
              </button>
              <button 
                onClick={() => setActiveTab("about")}
                className={`pb-2 text-xs uppercase tracking-wider font-mono cursor-pointer transition-all ${activeTab === "about" ? "text-cyan-400 border-b-2 border-cyan-400 font-semibold" : "text-gray-400 hover:text-gray-200"}`}
              >
                Project Architecture
              </button>
            </div>

            {activeTab === "about" ? (
              <p className="text-gray-400 text-xs leading-relaxed italic">
                {activeProject.longDescription}
              </p>
            ) : (
              <p className="text-gray-400 text-xs leading-relaxed uppercase font-mono tracking-wider">
                Interact with the dynamic canvas live engine!
              </p>
            )}

            <div className="flex items-center gap-4 mt-4">
              <a 
                href={activeProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono text-xs">Source Code</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Right demo area */}
        <div className="lg:col-span-8 p-4 md:p-8 bg-brand-depth/90 min-h-[440px] flex flex-col justify-between relative overflow-hidden">
          
          {activeTab === "about" ? (
            <div className="h-full flex flex-col justify-center items-center text-center p-8">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4">
                <HelpCircle className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Mathematical Core Architecture</h4>
              <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-6">
                This project represents are strong alignment with computer engineering fundamentals, modeling formulas onto visual canvases. Built with client-first optimization.
              </p>
              <div className="p-4 rounded-xl bg-whites/[0.02] border border-white/[0.05] w-full max-w-lg text-left">
                <p className="text-xs font-mono text-purple-300 uppercase tracking-widest mb-1">Key Mathematics Formula</p>
                <p className="text-sm font-mono text-white italic">
                  {activeProject.id === "chatbot" && "Model(Intent) = Softmax(Wᵀ · tokenize(Query) + b)"}
                  {activeProject.id === "predictor" && "Ŷ = β₀ + β₁(Hours) + β₂(Exercises) + β₃(Sleep) - β₄(Distractions)"}
                  {activeProject.id === "data-analyzer" && "StdDev (σ) = √[ (1 / N) * ∑(x_i - μ)² ]"}
                  {activeProject.id === "clustering" && "Distance (d) = √[ (x₁ - x₂)² + (y₁ - y₂)² ]"}
                  {activeProject.id === "generative" && "Attention (Q, K, V) = Softmax( Q Kᵀ / √d_k ) V"}
                </p>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col">
              {/* Conditional Demos based on project ID */}
              {activeProject.id === "chatbot" && <ChatbotDemo />}
              {activeProject.id === "predictor" && <PredictorDemo />}
              {activeProject.id === "data-analyzer" && <DataAnalyzerDemo />}
              {activeProject.id === "clustering" && <ClusteringDemo />}
              {activeProject.id === "generative" && <GenerativeDemo />}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

/* ==========================================================================
   1. CHATBOT DEMO
   ========================================================================== */
function ChatbotDemo() {
  interface Message {
    id: string;
    sender: "user" | "bot";
    text: string;
    timestamp: Date;
  }

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "m-init-1",
      sender: "bot",
      text: "Hello! I am Sidra's portfolio assistant. I can explain how her BS Mathematics training is the ultimate asset for building high-performing Machine Learning models. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const promptSuggestions = [
    "Why is Math critical for AI?",
    "Sidra's career vision?",
    "Tell me about her education",
    "View contact details"
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal("");

    // Simple clever agent rules
    setTimeout(() => {
      let replyText = "";
      const query = text.toLowerCase();

      if (query.includes("math") || query.includes("linear") || query.includes("calculus") || query.includes("why")) {
        replyText = "Mathematics is the secret fuel of Modern AI! Dynamic gradient descent depends purely on Multivariate Calculus (partial derivatives). Neural network storage and dimensional reductions are powered by Matrix Formulations in Linear Algebra. Sidra translates these abstract matrix states directly to machine learning vectors!";
      } else if (query.includes("vision") || query.includes("future") || query.includes("career")) {
        replyText = "Sidra's career vision is to pioneer the bridge between pure mathematical algorithms and practical Deep Learning/GenAI implementations. She intends to secure research internships, study transformer attention mechanics, and innovate in the AI sphere.";
      } else if (query.includes("edu") || query.includes("marks") || query.includes("bs") || query.includes("fsc") || query.includes("matric")) {
        replyText = "Sidra is a Final Year Mathematics Student (2022-2026). She holds outstanding analytical records: SSC/Matriculation marks are 848/1100, and FSC (Pre-Engineering) intermediate marks are 927/1100. This rigorous academic line equips her with supreme analytic stamina.";
      } else if (query.includes("contact") || query.includes("email") || query.includes("phone")) {
        replyText = "You can coordinate directly with Sidra Batool via email at sidrabatoool7@gmail.com. She is based in Khanewal, Punjab, Pakistan and is available for research collaborations or physical and remote internship offerings!";
      } else {
        replyText = "That's a great question! Sidra is deeply motivated to work with deep neural networks, computer vision, data pipelines, and numerical approximations. She leverages analytical problem solving to build cleaner systems than traditional developers.";
      }

      const botMsg: Message = {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: replyText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    }, 700);
  };

  return (
    <div className="flex flex-col h-[400px] justify-between">
      {/* Scrollable messages and suggestions */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-3 max-h-[290px]">
        {messages.map(msg => (
          <div 
            key={msg.id} 
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`max-w-[85%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
              msg.sender === "user" 
                ? "bg-purple-600 text-white rounded-br-none" 
                : "bg-white/[0.04] border border-white/[0.08] text-gray-200 rounded-bl-none"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Suggested prompts chips */}
      <div className="py-2.5 flex flex-wrap gap-1.5 border-t border-white/[0.06] mt-2">
        {promptSuggestions.map(chip => (
          <button
            key={chip}
            onClick={() => handleSend(chip)}
            className="px-2.5 py-1 text-[11px] font-mono text-cyan-400 bg-cyan-400/5 hover:bg-cyan-400/10 border border-cyan-400/20 rounded-full transition-all cursor-pointer"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Chat Input form */}
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(inputVal);
        }}
        className="flex items-center gap-2 pt-2 border-t border-white/[0.08]"
      >
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Ask about Sidra's portfolio modeling..."
          className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-500/50"
        />
        <button 
          type="submit"
          className="p-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-black transition-colors cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}

/* ==========================================================================
   2. PREDICTOR DEMO
   ========================================================================== */
function PredictorDemo() {
  // Linear regression coeff
  const [studyHours, setStudyHours] = useState(7);
  const [exercisesSolved, setExercisesSolved] = useState(24);
  const [sleepHours, setSleepHours] = useState(7.5);
  const [distractionIndex, setDistractionIndex] = useState(1);

  // Computed prediction: Base score is 45 (intercept) + hours*3.2 + exercises*0.6 + sleep*1.8 - distraction*4.5
  const computeScore = () => {
    const raw = 45 + (studyHours * 3.1) + (exercisesSolved * 0.55) + (sleepHours * 1.5) - (distractionIndex * 3.5);
    return Math.min(100, Math.max(0, Math.round(raw)));
  };

  const score = computeScore();

  // Static sample data vectors for graphing (normalized to study studyHours vs scores)
  const syntheticStudents = [
    { name: "S1", hours: 2, score: 51 },
    { name: "S2", hours: 4, score: 62 },
    { name: "S3", hours: 6, score: 71 },
    { name: "S4", hours: 8, score: 83 },
    { name: "S5", hours: 10, score: 94 },
    { name: "S6", hours: 12, score: 99 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
      {/* Controls */}
      <div className="space-y-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-purple-300 font-mono flex justify-between">
            <span>Study Hours / Day</span>
            <span className="text-white font-bold">{studyHours} hr</span>
          </span>
          <input
            type="range"
            min="1"
            max="12"
            step="0.5"
            value={studyHours}
            onChange={(e) => setStudyHours(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer my-1.5 h-1 bg-white/10 rounded-lg appearance-none"
          />
        </div>

        <div>
          <span className="text-xs uppercase tracking-wider text-purple-300 font-mono flex justify-between">
            <span>Practice Exercises Done</span>
            <span className="text-white font-bold">{exercisesSolved} completed</span>
          </span>
          <input
            type="range"
            min="0"
            max="50"
            value={exercisesSolved}
            onChange={(e) => setExercisesSolved(parseInt(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer my-1.5 h-1 bg-white/10 rounded-lg appearance-none"
          />
        </div>

        <div>
          <span className="text-xs uppercase tracking-wider text-purple-300 font-mono flex justify-between">
            <span>Sleep Duration</span>
            <span className="text-white font-bold">{sleepHours} hours</span>
          </span>
          <input
            type="range"
            min="3"
            max="10"
            step="0.5"
            value={sleepHours}
            onChange={(e) => setSleepHours(parseFloat(e.target.value))}
            className="w-full accent-cyan-400 cursor-pointer my-1.5 h-1 bg-white/10 rounded-lg appearance-none"
          />
        </div>

        <div>
          <span className="text-xs uppercase tracking-wider text-purple-300 font-mono flex justify-between">
            <span>Interferences (Distraction index)</span>
            <span className="text-white font-bold">{distractionIndex} (0-5)</span>
          </span>
          <input
            type="range"
            min="0"
            max="5"
            step="0.5"
            value={distractionIndex}
            onChange={(e) => setDistractionIndex(parseFloat(e.target.value))}
            className="w-full accent-purple-400 cursor-pointer my-1.5 h-1 bg-white/10 rounded-lg appearance-none"
          />
        </div>

        <div className="bg-white/[0.03] border border-white/[0.08] p-3 rounded-lg">
          <p className="text-[10px] font-mono text-gray-400 uppercase">Least-Squares Parameter weights</p>
          <p className="text-[11px] font-mono text-purple-300 leading-relaxed mt-1">
            score = 45.0 + 3.1h + 0.55e + 1.5s - 3.5d
          </p>
        </div>
      </div>

      {/* Responsive Visual graph */}
      <div className="flex flex-col items-center justify-between h-full bg-black/30 p-4 rounded-xl border border-white/[0.06]">
        <div className="text-center w-full">
          <p className="text-xs uppercase text-gray-400 font-mono tracking-widest">Calculated Model Prediction</p>
          <div className="text-4xl font-black text-cyan-400 font-display mt-1">{score}%</div>
          <p className="text-[10px] text-purple-300 font-mono mt-1">Likelihood of Academic Distinction</p>
        </div>

        {/* Live coordinate plane */}
        <div className="w-full relative mt-4 block" style={{ height: "150px" }}>
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Grid lines */}
            <line x1="0" y1="90" x2="100" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
            <line x1="10" y1="0" x2="10" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />

            {/* Linear Regression Trend Line */}
            <line 
              x1="10" 
              y1="82" 
              x2="90" 
              y2="18" 
              stroke="rgba(139, 92, 246, 0.4)" 
              strokeWidth="0.8" 
              strokeDasharray="2"
            />

            {/* Static Dataset plot points */}
            {syntheticStudents.map((stud) => {
              const cx = 10 + (stud.hours / 12) * 80;
              const cy = 90 - (stud.score / 100) * 80;
              return (
                <circle 
                  key={stud.name} 
                  cx={cx} 
                  cy={cy} 
                  r="1.5" 
                  fill="rgba(255,255,255,0.3)" 
                />
              );
            })}

            {/* Current simulated point */}
            <circle
              cx={10 + (studyHours / 12) * 80}
              cy={90 - (score / 100) * 80}
              r="4.5"
              fill="#06b6d4"
              className="animate-pulse"
            />
          </svg>
          <div className="absolute bottom-1 left-2 font-mono text-[8px] text-gray-500">Stud. Hours (X)</div>
          <div className="absolute top-1 left-2 font-mono text-[8px] text-gray-500">Grad. Score (Y)</div>
        </div>

        <p className="text-[9px] text-gray-400 font-mono mt-3 text-center">
          *The cyan node indicates the simulated multivariate predictions based on custom parameters!
        </p>
      </div>
    </div>
  );
}

/* ==========================================================================
   3. DATA ANALYZER DEMO
   ========================================================================== */
function DataAnalyzerDemo() {
  const [rawInput, setRawInput] = useState("12, 14, 18, 22, 28, 26, 32, 40");
  const [dataPoints, setDataPoints] = useState<number[]>([12, 14, 18, 22, 28, 26, 32, 40]);

  const handleUpdate = () => {
    const parsed = rawInput
      .split(",")
      .map(v => parseFloat(v.trim()))
      .filter(v => !isNaN(v));
    if (parsed.length > 0) {
      setDataPoints(parsed);
    }
  };

  // Math stats computations
  const count = dataPoints.length;
  const sum = dataPoints.reduce((acc, curr) => acc + curr, 0);
  const mean = parseFloat((sum / count).toFixed(2));
  
  const sorted = [...dataPoints].sort((a, b) => a - b);
  const median = count % 2 !== 0 
    ? sorted[Math.floor(count / 2)] 
    : parseFloat(((sorted[count / 2 - 1] + sorted[count / 2]) / 2).toFixed(2));

  const squaredDiffs = dataPoints.map(v => Math.pow(v - mean, 2));
  const variance = parseFloat((squaredDiffs.reduce((a, b) => a + b, 0) / count).toFixed(2));
  const stdDev = parseFloat(Math.sqrt(variance).toFixed(2));

  const maxVal = Math.max(...dataPoints, 1);
  const minVal = Math.min(...dataPoints, 0);

  return (
    <div className="flex flex-col h-[400px] justify-between">
      {/* Array control */}
      <div className="flex gap-2 items-center">
        <div className="flex-1">
          <label className="text-[10px] font-mono uppercase text-gray-400">Input Data Sequence</label>
          <input
            type="text"
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
            className="w-full bg-white/[0.04] border border-white/[0.1] rounded-lg px-3 py-1.5 text-xs text-white uppercase font-mono tracking-widest focus:outline-none focus:border-cyan-500"
          />
        </div>
        <button
          onClick={handleUpdate}
          className="px-3.5 py-1.5 max-h-[35px] text-xs font-mono font-medium rounded-lg bg-cyan-500 hover:bg-cyan-600 text-black transition-colors flex items-center gap-1.5 cursor-pointer mt-4"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Solve</span>
        </button>
      </div>

      {/* Render grid of mathematical values */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
        <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.06] text-center">
          <p className="text-[10px] text-gray-400 font-mono font-semibold uppercase">Sample Size (N)</p>
          <p className="text-xl font-bold font-mono text-cyan-300 mt-1">{count}</p>
        </div>
        <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.06] text-center">
          <p className="text-[10px] text-gray-400 font-mono font-semibold uppercase">Mean (μ)</p>
          <p className="text-xl font-bold font-mono text-cyan-300 mt-1">{mean}</p>
        </div>
        <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.06] text-center">
          <p className="text-[10px] text-gray-400 font-mono font-semibold uppercase">Median</p>
          <p className="text-xl font-bold font-mono text-purple-300 mt-1">{median}</p>
        </div>
        <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.06] text-center">
          <p className="text-[10px] text-gray-400 font-mono font-semibold uppercase">Variance (σ²)</p>
          <p className="text-xl font-bold font-mono text-purple-300 mt-1">{variance}</p>
        </div>
      </div>

      {/* Visualization of data series representation */}
      <div className="flex-1 bg-black/20 rounded-xl border border-white/[0.06] p-4 flex flex-col justify-end">
        <span className="text-[9px] uppercase tracking-wider text-gray-500 font-mono mb-2">Real-Time Data Distribution Plot</span>
        <div className="flex items-end justify-center gap-2 h-20 w-full px-4">
          {dataPoints.map((pt, idx) => {
            const hPct = `${(pt / maxVal) * 100}%`;
            return (
              <div 
                key={idx} 
                className="w-6 bg-gradient-to-t from-cyan-600 to-purple-500 rounded-t relative group"
                style={{ height: hPct }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-mono text-cyan-300 bg-black/90 px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {pt}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Equation list card */}
      <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl text-left mt-3">
        <p className="text-[9px] font-mono text-gray-400 uppercase">Interactive Formula Trace</p>
        <p className="text-[11px] font-mono text-cyan-300 leading-normal mt-1">
          Standard Deviation (σ) = √[ (1 / {count}) * ∑(x_i - {mean})² ] = <span className="text-white font-bold">{stdDev}</span>
        </p>
      </div>
    </div>
  );
}

/* ==========================================================================
   4. CLUSTERING DEMO (K-NEAREST NEIGHBORS SIMULATOR)
   ========================================================================== */
function ClusteringDemo() {
  interface ClusterPoint {
    x: number;
    y: number;
    group: "A" | "B";
  }

  // Prepopulated points
  const [points, setPoints] = useState<ClusterPoint[]>([
    { x: 20, y: 30, group: "A" },
    { x: 30, y: 20, group: "A" },
    { x: 35, y: 45, group: "A" },
    { x: 15, y: 55, group: "A" },
    { x: 45, y: 25, group: "A" },
    { x: 70, y: 80, group: "B" },
    { x: 80, y: 70, group: "B" },
    { x: 65, y: 85, group: "B" },
    { x: 85, y: 60, group: "B" },
    { x: 75, y: 50, group: "B" },
  ]);

  // Simulated target pointer
  const [targetX, setTargetX] = useState(50);
  const [targetY, setTargetY] = useState(50);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Convert click location into percentage points (0 to 100)
    const pxX = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const pxY = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    // Move coordinates
    setTargetX(pxX);
    setTargetY(pxY);
  };

  const addStaticPoint = (group: "A" | "B") => {
    setPoints(prev => [...prev, { x: targetX, y: targetY, group }]);
  };

  const clearClusters = () => {
    setPoints([]);
  };

  // Run KNN algorithm (K=3)
  const computeKNN = () => {
    if (points.length === 0) return { group: "Undecided", neighbors: [] };

    // Compute Euclidean distances
    const distances = points.map((p, idx) => {
      const d = Math.hypot(p.x - targetX, p.y - targetY);
      return { index: idx, p, d };
    });

    // Sort distance ascending
    distances.sort((a, b) => a.d - b.d);

    // Grab 3 nearest neighbors
    const k = Math.min(3, distances.length);
    const nearest = distances.slice(0, k);

    // Vote tally
    let countA = 0;
    let countB = 0;
    nearest.forEach(n => {
      if (n.p.group === "A") countA++;
      else countB++;
    });

    return {
      group: countA > countB ? "A (Cyan)" : "B (Purple)",
      neighbors: nearest
    };
  };

  const knnResult = computeKNN();

  return (
    <div className="flex flex-col h-[400px] justify-between">
      <div className="flex justify-between items-center pb-2 border-b border-white/[0.04]">
        <div>
          <span className="text-xs font-mono uppercase text-gray-400">Class A: Cyan</span>
          <span className="mx-2 text-gray-600">|</span>
          <span className="text-xs font-mono uppercase text-purple-400">Class B: Purple</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => addStaticPoint("A")} 
            className="px-2 py-0.5 text-[10px] font-mono rounded bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 cursor-pointer"
          >
            + Plot Class A
          </button>
          <button 
            onClick={() => addStaticPoint("B")} 
            className="px-2 py-0.5 text-[10px] font-mono rounded bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 cursor-pointer"
          >
            + Plot Class B
          </button>
          <button 
            onClick={clearClusters} 
            className="p-1 text-[10px] font-mono text-gray-500 hover:text-white cursor-pointer"
            title="Reset Grid"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <p className="text-[11px] text-gray-400 font-mono py-1.5">
        *Click anywhere inside the dark graph below to reposition the target node.
      </p>

      {/* Grid Coordinates Visual Canvas */}
      <div 
        ref={containerRef}
        onClick={handleCanvasClick}
        className="flex-1 bg-black/40 border border-white/[0.08] rounded-xl relative overflow-hidden cursor-crosshair h-40"
      >
        {/* Draw points */}
        {points.map((p, idx) => (
          <div
            key={idx}
            className={`absolute w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg transition-all`}
            style={{ 
              left: `${p.x}%`, 
              top: `${p.y}%`, 
              backgroundColor: p.group === "A" ? "#06b6d4" : "#a855f7" 
            }}
          />
        ))}

        {/* Dynamic target cursor node */}
        <div
          className="absolute w-5 h-5 rounded-full border-2 border-white bg-transparent -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
          style={{ left: `${targetX}%`, top: `${targetY}%` }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        </div>

        {/* Draw link vectors from target to 3 nearest points */}
        {knnResult.neighbors.map((n: any, idx: number) => {
          // Calculate distance vector specs
          const x1 = targetX;
          const y1 = targetY;
          const x2 = n.p.x;
          const y2 = n.p.y;
          return (
            <svg key={idx} className="absolute inset-0 w-full h-full pointer-events-none">
              <line
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                strokeDasharray="2"
              />
            </svg>
          );
        })}
      </div>

      {/* Output Results */}
      <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-white/[0.06]">
        <div className="p-2.5 rounded bg-white/[0.02]">
          <p className="text-[10px] text-gray-400 font-mono uppercase">Coordinates Selected</p>
          <p className="text-sm font-mono mt-1 text-white">X: {targetX} , Y: {targetY}</p>
        </div>
        <div className="p-2.5 rounded bg-white/[0.02]">
          <p className="text-[10px] text-gray-400 font-mono uppercase">KNN Prediction (K=3)</p>
          <p className="text-sm font-mono font-bold mt-1 text-cyan-300">Class {knnResult.group}</p>
        </div>
      </div>
    </div>
  );
}

/* ==========================================================================
   5. GENERATIVE AI TRANSFORMER SIMULATOR
   ========================================================================== */
function GenerativeDemo() {
  const [temperature, setTemperature] = useState(0.7);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedTokens, setGeneratedTokens] = useState<string[]>([]);
  const [activeAttention, setActiveAttention] = useState<number | null>(null);

  const responseText = ["Artificial", "Intelligence", "uses", "Linear", "Algebra", "and", "Vector", "Representations", "to", "process", "Logical", "Mathematical", "Models."];

  const handleSimulate = () => {
    setIsGenerating(true);
    setGeneratedTokens([]);
    let currentIdx = 0;

    const interval = setInterval(() => {
      if (currentIdx < responseText.length) {
        setGeneratedTokens(prev => [...prev, responseText[currentIdx]]);
        currentIdx++;
      } else {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 280);
  };

  // Generate fake self-attention weights based on generated length
  const getAttentionScore = (senderIdx: number, receiverIdx: number) => {
    // Return pseudo-attention scores modeling self-attention dot product
    const score = ((senderIdx * 3 + receiverIdx * 7) % 10) / 10;
    return score;
  };

  return (
    <div className="flex flex-col h-[400px] justify-between">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-white/[0.04]">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-gray-400">Temperature:</span>
          <span className="text-xs font-mono text-white font-bold">{temperature}</span>
          <input
            type="range"
            min="0.1"
            max="1.5"
            step="0.1"
            value={temperature}
            onChange={(e) => setTemperature(parseFloat(e.target.value))}
            className="w-24 accent-purple-500 h-1 bg-white/10 rounded appearance-none cursor-pointer"
          />
        </div>
        <button
          onClick={handleSimulate}
          disabled={isGenerating}
          className="px-3.5 py-1 text-xs font-mono font-medium rounded-lg bg-purple-500 hover:bg-purple-600 disabled:opacity-50 text-white transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Generate Sequence</span>
        </button>
      </div>

      {/* Generated Field Token Field */}
      <div className="flex-1 bg-black/30 rounded-xl border border-white/[0.06] p-4 my-3 flex flex-col justify-start">
        <span className="text-[9px] uppercase tracking-wider text-purple-300 font-mono mb-2">Decoded Transformer Tokens</span>
        
        {generatedTokens.length === 0 ? (
          <div className="flex-1 flex items-center justify-center text-xs text-gray-500 font-mono italic">
            Click 'Generate' to simulate modern transformer feedforward decoding.
          </div>
        ) : (
          <div className="flex flex-wrap gap-2.5 items-center">
            {generatedTokens.map((token, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveAttention(idx)}
                onMouseLeave={() => setActiveAttention(null)}
                className={`px-2.5 py-1 text-xs font-mono rounded cursor-help border transition-all duration-200
                  ${activeAttention === idx 
                    ? "bg-cyan-500/20 text-cyan-300 border-cyan-400" 
                    : "bg-purple-500/10 text-white border-purple-500/20"
                  }`}
              >
                {token}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Dynamic Self-Attention Grid */}
      <div className="p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl text-left">
        <p className="text-[10px] font-mono text-gray-400 uppercase">Attention Mechanism Matrix (Hover token above)</p>
        {activeAttention === null ? (
          <p className="text-[11px] font-mono text-gray-500 italic mt-1.5">
            Hover over any token in the decoded output space to visualize weights vector links.
          </p>
        ) : (
          <div className="mt-1.5 flex flex-wrap gap-2 text-[11px] font-mono text-purple-300 leading-normal">
            <span>Query token: <strong className="text-cyan-400">{generatedTokens[activeAttention]}</strong></span>
            <span className="text-gray-600">|</span>
            <span>Entropy Softmax state: <strong className="text-white">{(1 - temperature * 0.2).toFixed(2)}</strong></span>
          </div>
        )}
      </div>
    </div>
  );
}
