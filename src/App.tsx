/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu,
  User,
  Briefcase,
  Send
} from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack shopping experience with real-time inventory and secure payments.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    link: "#"
  },
  {
    title: "AI Image Generator",
    description: "Leveraging neural networks to create stunning visuals from text prompts.",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    link: "#"
  },
  {
    title: "Portfolio v1",
    description: "A minimalist portfolio design focusing on typography and smooth transitions.",
    tags: ["Vite", "Motion", "TypeScript"],
    link: "#"
  }
];

const skills = [
  { name: "Frontend", icon: <Palette className="w-5 h-5" />, items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
  { name: "Backend", icon: <Terminal className="w-5 h-5" />, items: ["Node.js", "Express", "PostgreSQL", "Redis"] },
  { name: "Tools", icon: <Code2 className="w-5 h-5" />, items: ["Git", "Docker", "AWS", "Vercel"] },
  { name: "Hardware", icon: <Cpu className="w-5 h-5" />, items: ["Arduino", "Raspberry Pi", "IoT Systems"] }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter text-emerald-400">EI.</span>
          <div className="flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8 relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for projects
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              EYANUR <br /> ISLAM
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
              Full-stack developer & designer crafting high-performance digital experiences with precision and purpose.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <button className="px-8 py-3 rounded-full bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-all transform hover:scale-105">
                View Projects
              </button>
              <div className="flex gap-2">
                <a href="#" className="p-3 rounded-full bg-zinc-900 border border-white/5 hover:border-white/20 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-zinc-900 border border-white/5 hover:border-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About & Skills */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-sm uppercase tracking-widest">
              <User className="w-4 h-4" /> About Me
            </div>
            <h2 className="text-4xl font-bold tracking-tight">Building the future of the web, one pixel at a time.</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              With over 5 years of experience in digital craftsmanship, I specialize in building scalable applications that combine technical excellence with intuitive design. My approach is rooted in problem-solving and a relentless pursuit of quality.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-emerald-400">50+</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-400">12+</div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider mt-1">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-3xl bg-zinc-900/30 border border-white/5 space-y-4"
              >
                <div className="p-2 w-fit rounded-xl bg-emerald-500/10 text-emerald-400">
                  {skill.icon}
                </div>
                <h3 className="font-bold">{skill.name}</h3>
                <ul className="text-sm text-zinc-500 space-y-1">
                  {skill.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-32 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-sm uppercase tracking-widest">
                <Briefcase className="w-4 h-4" /> Selected Works
              </div>
              <h2 className="text-5xl font-bold tracking-tight">Featured Projects</h2>
            </div>
            <p className="text-zinc-500 max-w-sm">
              A collection of projects that push the boundaries of what's possible on the web.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 hover:border-emerald-500/30 transition-all"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-zinc-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ExternalLink className="w-5 h-5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-32">
          <div className="rounded-[3rem] bg-emerald-500 p-12 md:p-24 text-black flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-6 max-w-xl">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">LET'S BUILD SOMETHING GREAT.</h2>
              <p className="text-black/70 text-lg font-medium">
                Have a project in mind? I'm always open to discussing new opportunities and creative collaborations.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a href="mailto:hello@eyanur.com" className="flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-black text-white font-bold hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" /> Say Hello
              </a>
              <div className="flex justify-center gap-6 pt-4">
                <a href="#" className="font-bold text-sm uppercase tracking-widest border-b-2 border-black">Twitter</a>
                <a href="#" className="font-bold text-sm uppercase tracking-widest border-b-2 border-black">Instagram</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-500 text-sm">
        <p>© 2024 Eyanur Islam. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
