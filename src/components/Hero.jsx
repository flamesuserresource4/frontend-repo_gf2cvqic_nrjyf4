import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Nav = () => {
  const linkClass =
    'text-slate-200/90 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5';
  return (
    <div className="pointer-events-auto">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-5">
        <a href="#home" className="font-semibold tracking-tight text-white text-lg">
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">PRITHIVI</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          <a href="#about" className={linkClass}>About</a>
          <a href="#projects" className={linkClass}>Projects</a>
          <a href="#contact" className={linkClass}>Contact</a>
          <a
            href="https://github.com/pmprithiviraj"
            target="_blank"
            rel="noreferrer"
            className={linkClass}
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className={linkClass}
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default function Hero() {
  return (
    <div className="relative h-full w-full">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that won't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col">
        <Nav />
        <div className="pointer-events-none flex-1">
          <div className="mx-auto max-w-6xl px-6 h-full flex items-center">
            <div className="max-w-2xl">
              <motion.h1
                className="text-4xl md:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Building delightful, animated web experiences
              </motion.h1>
              <motion.p
                className="mt-5 text-slate-300 text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                I craft modern, performant websites with a focus on motion, interactivity, and clean code.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <a
                  href="#projects"
                  className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 font-medium shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all"
                >
                  View my work <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition"
                >
                  Get in touch
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
