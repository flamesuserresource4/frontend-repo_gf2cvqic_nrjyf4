import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For this demo, just simulate a send with a small delay
    setTimeout(() => setSent(true), 500);
  };

  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-widest text-cyan-300/90 mb-2">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold">Let’s build something together</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm mb-1">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                required
                className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-semibold text-slate-950 shadow-lg hover:opacity-95 transition"
              >
                <Send className="h-4 w-4" /> Send message
              </button>
              {sent && (
                <span className="ml-4 text-cyan-300">Thanks! I will get back to you soon.</span>
              )}
            </div>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="space-y-4"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-slate-900 font-bold">PR</div>
              <div>
                <p className="font-semibold">Prithivi Raj</p>
                <p className="text-sm text-slate-400">Full-stack Developer</p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center gap-2 text-slate-300"><Mail className="h-4 w-4 text-cyan-300" /> you@example.com</p>
              <div className="flex items-center gap-3 pt-1">
                <a href="https://github.com/pmprithiviraj" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
