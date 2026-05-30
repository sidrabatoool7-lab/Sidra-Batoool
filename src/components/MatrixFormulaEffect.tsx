import { motion } from "motion/react";

export default function MatrixFormulaEffect() {
  const formulas = [
    { text: "∇L(w) = 0", size: "text-xs md:text-sm", top: "12%", left: "8%", duration: 25 },
    { text: "[A - λI]x = 0", size: "text-sm", top: "28%", left: "82%", duration: 32 },
    { text: "f(x) = σ(Wᵀx + b)", size: "text-xs md:text-sm", top: "72%", left: "15%", duration: 28 },
    { text: "E = mc²", size: "text-xs", top: "85%", left: "75%", duration: 20 },
    { text: "P(A|B) = P(B|A)P(A)/P(B)", size: "text-xs md:text-sm", top: "45%", left: "87%", duration: 35 },
    { text: "y = wx + b", size: "text-xs", top: "3%", left: "45%", duration: 18 },
    { text: "∫ e^(-x²) dx = √π", size: "text-xs md:text-sm", top: "54%", left: "5%", duration: 30 },
    { text: "softmax(Q Kᵀ / √d_k) V", size: "text-xs md:text-sm", top: "62%", left: "68%", duration: 27 },
    { text: "∂L/∂W = δ · xᵀ", size: "text-xs", top: "38%", left: "22%", duration: 24 },
    { text: "E[X] = ∑ x P(x)", size: "text-xs", top: "20%", left: "62%", duration: 22 },
  ];

  return (
    <div id="mathematical-formulas-container" className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 opacity-[0.14]">
      {formulas.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute font-mono text-cyan-400 font-semibold ${item.size} bg-transparent tracking-widest whitespace-nowrap`}
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [0, -35, 0],
            opacity: [0.3, 0.8, 0.3],
            rotate: [0, 3, -3, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.text}
        </motion.div>
      ))}
    </div>
  );
}
