import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    desc: 'A playful, high-performance portfolio with 3D scenes, parallax and smooth motion.',
    img: 'https://images.unsplash.com/photo-1559066653-e8b135d9ce14?q=80&w=1400&auto=format&fit=crop',
    live: '#',
    repo: '#',
    tags: ['React', 'Spline', 'Framer Motion'],
  },
  {
    title: 'AI-Powered Dashboard',
    desc: 'Real-time analytics with streaming charts, dark mode, and keyboard navigation.',
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop',
    live: '#',
    repo: '#',
    tags: ['Vite', 'Tailwind', 'FastAPI'],
  },
  {
    title: 'E-commerce Micro-frontend',
    desc: 'Scalable storefront with shared design system and blazing-fast checkout.',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
    live: '#',
    repo: '#',
    tags: ['TypeScript', 'Design System', 'Testing'],
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-widest text-violet-300/90 mb-2">Featured Work</p>
        <h2 className="text-3xl md:text-4xl font-bold">Projects that ship delight</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-0 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all"
          >
            <div className="relative">
              <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-white/10 px-3 py-1 text-slate-200 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.live} className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-2 text-slate-300 hover:text-white">
                  <Github className="h-4 w-4" /> Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
