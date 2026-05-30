import React, { useState, useEffect } from "react";
import { 
  Brain, Cpu, Fingerprint, Sparkles, GraduationCap, Award, Mail, Phone, MapPin, 
  Linkedin, Github, ExternalLink, FileText, CheckCircle2, Menu, X, ArrowUpRight, 
  TrendingUp, BookOpen, BrainCircuit, Star, Clock, Download, ChevronRight, Send
} from "lucide-react";
import NetworkBackground from "./components/NetworkBackground";
import MatrixFormulaEffect from "./components/MatrixFormulaEffect";
import ProjectShowcase from "./components/ProjectShowcase";
import { educationTimeline, skillCategories, aiJourneyCards, achievementsData, profileBio, languagesList } from "./data";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Active statistics counters (Auto-incrementing on visual load)
  const [fscCount, setFscCount] = useState(0);
  const [matricCount, setMatricCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);

    // Simulated increment for academic marks
    const fscInterval = setInterval(() => {
      setFscCount(prev => (prev < 927 ? Math.min(927, prev + 15) : 927));
    }, 15);

    const matricInterval = setInterval(() => {
      setMatricCount(prev => (prev < 848 ? Math.min(848, prev + 13) : 848));
    }, 15);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(fscInterval);
      clearInterval(matricInterval);
    };
  }, []);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: "", email: "", subject: "", message: "" });
    }, 4500);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(profileBio.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Helper function to print/download the resume layout of the catalog
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="relative min-h-screen text-gray-100 overflow-x-hidden font-sans bg-[#020617]">
      {/* Background Layer */}
      <NetworkBackground />
      <MatrixFormulaEffect />

      {/* Mesh gradients for Frosted representation */}
      <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[40%] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[15%] right-[-5%] w-[45%] h-[45%] bg-cyan-600/15 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[20%] w-[35%] h-[35%] bg-blue-500/10 rounded-full blur-[110px] pointer-events-none z-0" />

      {/* Modern Fixed Navbar */}
      <nav 
        id="top-navigation-bar"
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 max-w-7xl mx-auto ${
          scrolled 
            ? "bg-white/5 backdrop-blur-xl border border-white/10 py-2.5 rounded-2xl shadow-lg shadow-black/20" 
            : "bg-transparent py-4 border border-transparent"
        }`}
      >
        <div className="mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <span className="font-mono font-bold text-black text-sm">SB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-white text-base">Sidra Batool</span>
              <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">Math ∩ AI</span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors">About</a>
            <a href="#education" className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors">Education</a>
            <a href="#expertise" className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors">Core Skills</a>
            <a href="#ai-journey" className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors">AI Journey</a>
            <a href="#projects" className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors">Interactions</a>
            <a href="#achievements" className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors">Achievements</a>
            <a href="#contact" className="text-gray-300 hover:text-cyan-400 text-sm font-medium transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold tracking-wider flex items-center gap-2 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PRINT CV</span>
            </button>
            <a 
              href="#contact" 
              className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-black text-xs font-bold tracking-wide hover:opacity-90 transition-opacity flex items-center gap-1 cursor-pointer"
            >
              <span>HIRE ME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-slate-950/80 border border-white/10 p-6 space-y-4 backdrop-blur-xl rounded-2xl shadow-xl flex flex-col">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 hover:text-cyan-400 text-sm font-medium">About</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 hover:text-cyan-400 text-sm font-medium">Education</a>
            <a href="#expertise" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 hover:text-cyan-400 text-sm font-medium">Core Skills</a>
            <a href="#ai-journey" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 hover:text-cyan-400 text-sm font-medium">AI Journey</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 hover:text-cyan-400 text-sm font-medium">Interactions</a>
            <a href="#achievements" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 hover:text-cyan-400 text-sm font-medium">Achievements</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gray-200 hover:text-cyan-400 text-sm font-medium">Contact</a>
            
            <div className="flex gap-2 pt-2">
              <button 
                onClick={() => { handlePrint(); setMobileMenuOpen(false); }}
                className="flex-1 px-4 py-2 rounded-lg border border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 text-cyan-400 text-xs font-mono text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>PRINT CV</span>
              </button>
              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 px-4 py-2 rounded-lg text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-black text-xs font-bold block cursor-pointer"
              >
                HIRE ME
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section 
        id="hero" 
        className="min-h-screen pt-28 pb-16 px-6 relative flex items-center justify-center"
      >
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          {/* Cyber Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-semibold">Available for Internships & Research Collaborations</span>
          </div>

          {/* Primary Name Display */}
          <h1 className="text-5xl md:text-8xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-purple-500 tracking-tight leading-none uppercase select-none">
            {profileBio.name}
          </h1>

          {/* Core Structured Subtitle */}
          <h2 className="text-lg md:text-2xl font-mono text-cyan-300 font-semibold tracking-wide mt-6 max-w-3xl mx-auto leading-relaxed">
            {profileBio.title} <span className="text-white">|</span> {profileBio.subtitle}
          </h2>

          {/* Inspiring mathematical Tagline */}
          <p className="text-lg md:text-xl font-display text-purple-300/90 font-medium italic mt-4 tracking-normal">
            "{profileBio.tagline}"
          </p>

          {/* Descriptive Intro Paragraph */}
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-6">
            {profileBio.intro}
          </p>

          {/* CTA Action Deck */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold text-sm tracking-wide hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20 cursor-pointer"
            >
              Explore Solutions
            </a>
            <button 
              onClick={handlePrint}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.06] text-white hover:text-cyan-400 font-semibold text-sm tracking-wide hover:border-cyan-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-gray-400 hover:text-white transition-colors text-sm font-semibold cursor-pointer"
            >
              Contact Me
            </a>
          </div>

          {/* Academic Highlight Metric Deck */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-10 border-t border-white/[0.06] max-w-4xl mx-auto">
            <div className="glass-panel glass-panel-hover p-5 text-center">
              <div className="text-2xl md:text-4xl font-black text-cyan-400 font-mono">{fscCount}</div>
              <div className="text-[10px] text-gray-400 font-mono uppercase tracking-widest mt-2 font-medium">Fsc Marks (Out of 1100)</div>
            </div>
            <div className="glass-panel glass-panel-hover p-5 text-center">
              <div className="text-2xl md:text-4xl font-black text-cyan-400 font-mono">{matricCount}</div>
              <div className="text-[10px] text-gray-400 font-mono uppercase tracking-widest mt-2 font-medium">Matric Marks (Out of 1100)</div>
            </div>
            <div className="glass-panel glass-panel-hover p-5 text-center">
              <div className="text-2xl md:text-4xl font-black text-purple-400 font-mono">100%</div>
              <div className="text-[10px] text-gray-400 font-mono uppercase tracking-widest mt-2 font-medium">Math & Computing Focus</div>
            </div>
            <div className="glass-panel glass-panel-hover p-5 text-center">
              <div className="text-2xl md:text-4xl font-black text-purple-400 font-mono">5+</div>
              <div className="text-[10px] text-gray-400 font-mono uppercase tracking-widest mt-2 font-medium">Interactive Simulators</div>
            </div>
          </div>

        </div>

        {/* Scroll down trigger indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-65 animate-bounce">
          <span className="text-[9px] font-mono text-gray-500 tracking-widest uppercase">Scroll Down</span>
          <div className="w-1 h-3 rounded bg-purple-500"></div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section 
        id="about" 
        className="py-24 px-6 relative z-10 border-t border-white/[0.04] bg-black/10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-400/5 px-3.5 py-1.5 rounded-full border border-cyan-400/10">About Me</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mt-4 uppercase">Academic Origin</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Biography content */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-gray-300 text-base md:text-lg leading-relaxed font-sans">
                I am a <strong className="text-cyan-300">Final Year Mathematics Student</strong> with an intense drive to bridge raw mathematical structures with emerging AI technologies. My academic background empowers me with rigid mathematical training that underpins complex AI systems.
              </p>
              
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  Because machine learning algorithms are entirely structured on Matrix Formulations (Linear Algebra), Loss Function minimization (Multivariate Calculus), and Bayesian systems (Probability Theory), my training is a direct catalyst for training reliable machine learning architectures.
                </p>
                <p>
                  From evaluating local gradients to exploring transformer attention mechanics, I am dedicated to constructing high-performance neural solutions, preparing myself for a lifelong journey of data science innovation and deep technical research.
                </p>
              </div>

              {/* Personal attributes table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20">
                    <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400" />
                  </div>
                  <span className="text-xs text-gray-300 font-mono">Location: Khanewal, Punjab, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20">
                    <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400" />
                  </div>
                  <span className="text-xs text-gray-300 font-mono">Languages: Urdu | English | Punjabi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20">
                    <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400" />
                  </div>
                  <span className="text-xs text-gray-300 font-mono">Diploma: Information Technology (DIT)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-cyan-400/10 flex items-center justify-center border border-cyan-400/20">
                    <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400" />
                  </div>
                  <span className="text-xs text-gray-300 font-mono">Available: Remote / Location-Shift</span>
                </div>
              </div>
            </div>

            {/* Right highlight bento grid */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel glass-panel-hover p-5 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-semibold text-sm font-display mb-1.5">Mathematics Devotee</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">Applying Calculus, Algebra, and Probability matrices to AI architecture optimization.</p>
                </div>
              </div>

              <div className="glass-panel glass-panel-hover p-5 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-semibold text-sm font-display mb-1.5">AI Explorer</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">Developing classifiers, chatbot systems, and evaluating transformer prompt behaviors.</p>
                </div>
              </div>

              <div className="glass-panel glass-panel-hover p-5 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                    <Star className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-semibold text-sm font-display mb-1.5">Data Science Explorer</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">Analyzing raw coordinates, calculating variances, and plotting vector projections.</p>
                </div>
              </div>

              <div className="glass-panel glass-panel-hover p-5 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-semibold text-sm font-display mb-1.5">Continuous Learner</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">Engaging in deep independent study of arxiv papers, neural models, and statistics.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION TIMELINE */}
      <section 
        id="education" 
        className="py-24 px-6 relative z-10 border-t border-white/[0.04]"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest bg-purple-400/5 px-3.5 py-1.5 rounded-full border border-purple-400/10">Academic Journey</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mt-4 uppercase">Timeline</h2>
          </div>

          <div className="relative border-l-2 border-white/[0.06] pl-6 md:pl-10 space-y-12 ml-4">
            {educationTimeline.map((item) => (
              <div 
                key={item.id} 
                className="relative group transition-all"
              >
                {/* Timeline node */}
                <span className={`absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center ring-4 ring-[#030014] 
                  ${item.isCurrent 
                    ? "bg-gradient-to-tr from-cyan-400 to-purple-500 text-black shadow-lg shadow-cyan-400/20" 
                    : "bg-brand-navy border border-white/[0.12] text-gray-400"
                  }`}
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                </span>

                {/* Main Content card */}
                <div className="glass-panel glass-panel-hover p-6 relative">
                  
                  {/* Current Active Indicator badge */}
                  {item.isCurrent && (
                    <span className="absolute top-4 right-4 text-[9px] font-mono bg-cyan-400/15 border border-cyan-400/30 text-cyan-300 font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                      In Progress
                    </span>
                  )}

                  <span className="text-xs font-mono text-purple-400 font-bold block mb-1">
                    {item.year}
                  </span>
                  
                  <h3 className="text-xl font-bold font-display text-white mb-1.5">
                    {item.title}
                  </h3>
                  
                  <h4 className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-3">
                    {item.subTitle}
                  </h4>
                  
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE EXPERTISE (SKILLS) */}
      <section 
        id="expertise" 
        className="py-24 px-6 relative z-10 border-t border-white/[0.04] bg-black/10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-400/5 px-3.5 py-1.5 rounded-full border border-cyan-400/10">Technical Engine</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mt-4 uppercase">Core Expertise</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {skillCategories.map((category, idx) => (
              <div 
                key={idx} 
                className="glass-panel glass-panel-hover p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-white border-b border-white/[0.08] pb-3 mb-6 flex items-center justify-between">
                    <span>{category.title}</span>
                    <span className="text-[10px] font-mono text-cyan-400">0{idx + 1}</span>
                  </h3>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-xs font-mono text-gray-300 mb-1.5">
                           <span>{skill.name}</span>
                          <span className="text-cyan-400">{skill.percentage}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Languages section below */}
          <div className="mt-16 pt-10 border-t border-white/[0.06] max-w-4xl mx-auto">
            <h3 className="text-center font-display font-bold text-white uppercase text-base mb-8">Languages Proficiency</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {languagesList.map((lang) => (
                <div key={lang.name} className="glass-panel glass-panel-hover p-5 text-center">
                  <span className="text-xs font-mono text-purple-400 font-bold block uppercase">{lang.level}</span>
                  <h4 className="text-lg font-bold text-white mt-1 mb-1">{lang.name}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{lang.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* AI SPECIALIZATION (JOURNEY) */}
      <section 
        id="ai-journey" 
        className="py-24 px-6 relative z-10 border-t border-white/[0.04]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest bg-purple-400/5 px-3.5 py-1.5 rounded-full border border-purple-400/10">Specialization Space</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mt-4 uppercase">My AI Journey</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiJourneyCards.map((card, idx) => {
              return (
                <div 
                  key={idx} 
                  className="glass-panel glass-panel-hover p-6 relative overflow-hidden group flex flex-col justify-between"
                >
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-cyan-500/20 transition-transform">
                      {card.icon === "Brain" && <Brain className="w-5 h-5 text-cyan-400" />}
                      {card.icon === "Cpu" && <Cpu className="w-5 h-5 text-blue-400" />}
                      {card.icon === "Fingerprint" && <Fingerprint className="w-5 h-5 text-indigo-400" />}
                      {card.icon === "Sparkles" && <Sparkles className="w-5 h-5 text-purple-400" />}
                    </div>

                    <h3 className="text-lg font-bold font-display text-white mb-2 uppercase">{card.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">{card.description}</p>
                  </div>

                  {/* Mathematical visual formulas framed at bottom */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06] relative z-10">
                    <p className="text-[10px] font-mono text-purple-300/80 tracking-wider">Formula Core:</p>
                    <p className="text-xs font-mono text-cyan-300 mt-1">{card.formula}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION (INTERACTIVE PLAYGROUNDS) */}
      <section 
        id="projects" 
        className="py-24 px-6 relative z-10 border-t border-white/[0.04] bg-black/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-400/5 px-3.5 py-1.5 rounded-full border border-cyan-400/10">Algorithmic Sandbox</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mt-4 uppercase">Interactive Demos</h2>
          </div>

          <ProjectShowcase />
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION */}
      <section 
        id="achievements" 
        className="py-24 px-6 relative z-10 border-t border-white/[0.04]"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest bg-purple-400/5 px-3.5 py-1.5 rounded-full border border-purple-400/10">Academic Excellence Certifications</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mt-4 uppercase">Achievements</h2>
          </div>

          {/* Achievement timeline and card decks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.map((ach) => (
              <div 
                key={ach.id}
                className="glass-panel glass-panel-hover p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/5 border border-cyan-500/15 flex items-center justify-center text-cyan-300 mb-4">
                    {ach.iconName === "FileCheck" && <Award className="w-5 h-5 text-cyan-400" />}
                    {ach.iconName === "TrendingUp" && <TrendingUp className="w-5 h-5 text-purple-400" />}
                    {ach.iconName === "BookOpen" && <BookOpen className="w-5 h-5 text-cyan-400" />}
                    {ach.iconName === "BrainCircuit" && <BrainCircuit className="w-5 h-5 text-purple-400" />}
                    {ach.iconName === "Award" && <Award className="w-5 h-5 text-cyan-400" />}
                    {ach.iconName === "Cpu" && <Cpu className="w-5 h-5 text-purple-400" />}
                  </div>

                  <span className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider bg-purple-400/5 px-2 py-0.5 rounded border border-purple-500/10">
                    {ach.category}
                  </span>

                  <h3 className="text-base font-bold font-display text-white mt-3 mb-1.5 uppercase">
                    {ach.title}
                  </h3>

                  <p className="text-gray-400 text-xs leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER VISION SECTION (FULL-WIDTH ACCENT) */}
      <section 
        id="career-vision" 
        className="py-24 px-6 relative z-10 border-t border-white/[0.04] bg-gradient-to-b from-[#030014] via-brand-navy to-[#030014] text-center"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex justify-center mb-2">
            <span className="w-10 h-10 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
              <Brain className="w-5 h-5 text-cyan-400 animate-pulse" />
            </span>
          </div>

          <h2 className="text-2xl md:text-4xl font-semibold font-display text-white tracking-tight uppercase">My Career Vision</h2>
          
          <p className="text-lg md:text-2xl font-display text-purple-300 font-medium italic leading-relaxed tracking-normal">
            "My goal is to combine the power of Mathematics, Artificial Intelligence, and Data Science to create intelligent solutions that solve real-world problems and contribute to the future of technology and innovation."
          </p>

          <p className="text-gray-400 text-xs font-mono tracking-widest uppercase pt-2">
            — Sidra Batool
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section 
        id="contact" 
        className="py-24 px-6 relative z-10 border-t border-white/[0.04] bg-black/10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-400/5 px-3.5 py-1.5 rounded-full border border-cyan-400/10">Connect Coordinate</span>
            <h2 className="text-3xl md:text-5xl font-black font-display text-white mt-4 uppercase">Contact Me</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact details column */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-xl font-bold font-display text-white uppercase tracking-tight">Let's build intelligence together</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Whether you have a vacancy, are scouting for an AI/ML developer with deep logical stability, want to run mathematical models, or collaborate in generative prompt studies — let's lock a coordinate!
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest block">Email Address</span>
                    <button 
                      onClick={copyEmailToClipboard}
                      className="text-sm font-mono text-white hover:text-cyan-400 transition-colors cursor-pointer text-left focus:outline-none"
                    >
                      {profileBio.email}
                      <span className="text-[10px] ml-2 text-cyan-400/80 italic font-sans">
                        {copiedEmail ? "(Copied!)" : "(Click to copy)"}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest block">Current Location</span>
                    <span className="text-sm text-white font-mono">{profileBio.location}</span>
                  </div>
                </div>
              </div>

              {/* Quick links deck */}
              <div className="pt-6 border-t border-white/[0.08] space-y-3">
                <p className="text-xs uppercase tracking-wider text-gray-500 font-mono">My Social Footprint</p>
                <div className="flex flex-col gap-2.5">
                  <a 
                    href="https://linkedin.com/in/sidrabatoool7" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono transition-colors group"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Profile (sidrabatoool7)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                  <a 
                    href="https://github.com/SidraBatool" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 text-xs text-purple-400 hover:text-purple-300 font-mono transition-colors group"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repository (SidraBatool)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </a>
                </div>
              </div>
            </div>

            {/* Coordinate email interactive form */}
            <div className="lg:col-span-7 glass-panel p-6 md:p-8 relative">
              {formSubmitted ? (
                <div className="h-full flex flex-col justify-center items-center text-center p-8">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-4 animate-bounce">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 uppercase">Message Transmitted!</h4>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                    Thank you so much! Your query is calculated correctly. Sidra Batool will coordinate back to your address as soon as her algorithms finish calculating. We appreciate your connection!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <h4 className="text-lg font-bold font-display text-white uppercase mb-4">Transmission Box</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-gray-400 uppercase font-mono tracking-widest block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Dr. Alistair"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-400 uppercase font-mono tracking-widest block mb-1">Your Contact Email</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="recruiter@company.ai"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 uppercase font-mono tracking-widest block mb-1">Inquiry Subject</label>
                    <input
                      type="text"
                      required
                      value={contactForm.subject}
                      onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                      placeholder="Internship opportunities or Research details"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-gray-400 uppercase font-mono tracking-widest block mb-1">Message Content</label>
                    <textarea
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Write your connection query here. Include mathematical vectors if preferred!"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:opacity-90 text-black font-bold text-sm tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-opacity"
                  >
                    <Send className="w-4 h-4" />
                    <span>TRANSMIT ENCRYPTED QUERY</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/[0.06] relative z-10 bg-black/40 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h3 className="text-xl font-bold font-display tracking-tight text-white uppercase">Sidra Batool</h3>
          <p className="text-gray-400 text-xs font-mono max-w-sm mx-auto">
            Final Year Mathematics Student | AI & Machine Learning Enthusiast
          </p>
          <p className="text-cyan-400/80 text-xs italic tracking-wide">
            "Exploring the intersection of Mathematics and Artificial Intelligence."
          </p>
          <div className="pt-6 border-t border-white/[0.04] text-[10px] text-gray-500 font-mono">
            Copyright © {new Date().getFullYear()} All Rights Reserved. Built with React, TypeScript & Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
}
