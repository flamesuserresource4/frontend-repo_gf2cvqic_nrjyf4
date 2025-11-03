import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1400&auto=format&fit=crop"
            alt="Portrait"
            className="relative rounded-3xl border border-white/10 shadow-2xl shadow-violet-500/10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <p className="text-sm uppercase tracking-widest text-cyan-300/90 mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold">Designer-Developer blending aesthetics with performance</h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            I specialize in crafting interfaces that feel alive. My toolkit spans React, Next.js, Tailwind, and motion
            libraries. I obsess over polish, micro-interactions, and accessibility so every product feels premium and inclusive.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              'React + Vite',
              'TypeScript',
              'Tailwind CSS',
              'Framer Motion',
              'FastAPI',
              'MongoDB',
            ].map((skill) => (
              <div key={skill} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                {skill}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
