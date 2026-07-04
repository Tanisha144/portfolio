import { motion } from 'framer-motion'
import {
  BrainCircuit,
  Code2,
  GitBranch,
  Layers3,
  MonitorSmartphone,
  Palette,
  Radio,
  Sparkles,
} from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

const skills = [
  { title: 'HTML', icon: Layers3, description: 'Semantic structure with a strong foundation.' },
  { title: 'CSS', icon: Palette, description: 'Visual systems, responsive layouts, and motion-driven polish.' },
  { title: 'JavaScript', icon: Radio, description: 'Interactive logic and nuanced user interactions.' },
  { title: 'React', icon: Code2, description: 'Modern component-based interfaces with reusable patterns.' },
  { title: 'Tailwind', icon: Sparkles, description: 'Fast, scalable styling without losing elegance.' },
  { title: 'Python', icon: BrainCircuit, description: 'Automation, scripting, and the next learning frontier.' },
  { title: 'Git', icon: GitBranch, description: 'Version control with a calm, dependable workflow.' },
  { title: 'Responsive Design', icon: MonitorSmartphone, description: 'Fluid layouts and accessible experiences across devices.' },
]

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Skills"
          title="Focused on the stack that shapes modern products."
          description="Every skill is used to make interfaces feel fast, expressive, and thoughtfully crafted."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <GlassCard className="group h-full cursor-pointer space-y-3 transition-colors hover:border-electric/40">
                  <div className="flex items-center justify-between">
                    <div className="rounded-2xl border border-electric/20 bg-electric/10 p-3 text-electric">
                      <Icon size={20} />
                    </div>
                    <span className="text-sm text-slate-500">0{index + 1}</span>
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-xl text-white">{skill.title}</h3>
                  <p className="text-sm leading-6 text-slate-400">{skill.description}</p>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
