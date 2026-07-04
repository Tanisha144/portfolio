import { motion } from 'framer-motion'
import { Code2, PlayCircle } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

const projects = [
  {
    title: 'Aurora Dashboard',
    description: 'A premium data dashboard for an AI product team, balancing editorial clarity with fast interactions.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    image: '/projects/aurora-dashboard.svg',
    live: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Northstar Finance',
    description: 'A conversion-focused landing experience for a fintech product launch, combining strong storytelling and motion.',
    stack: ['Vite', 'React', 'CSS'],
    image: '/projects/fintech-landing.svg',
    live: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Studio Drift',
    description: 'A modern studio website with immersive transitions, tactile cards, and a crisp editorial rhythm.',
    stack: ['React', 'GSAP', 'Tailwind'],
    image: '/projects/creative-studio.svg',
    live: 'https://example.com',
    github: 'https://github.com',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work that balances polish with performance."
          description="Each project is designed to feel elevated while staying fast, accessible, and practical."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group"
            >
              <GlassCard className="flex h-full flex-col gap-4 overflow-hidden p-0">
                <img src={project.image} alt={project.title} className="h-56 w-full object-cover" loading="lazy" />
                <div className="space-y-4 px-6 pb-6 pt-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-['Space_Grotesk'] text-xl text-white">{project.title}</h3>
                    <span className="rounded-full border border-electric/20 bg-electric/10 px-2 py-1 text-[0.7rem] uppercase tracking-[0.25em] text-electric">
                      Featured
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-slate-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white hover:text-electric">
                      <PlayCircle size={16} /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white hover:text-electric">
                      <Code2 size={16} /> GitHub
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
