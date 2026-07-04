import { motion } from 'framer-motion'
import { BookOpen, GraduationCap, Sparkles, Trophy } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

const timeline = [
  { year: '2024', title: 'Freelance Frontend Studio', description: 'Building polished landing pages and product interfaces for founders.' },
  { year: '2023', title: 'Community Tech Mentor', description: 'Helping students turn ideas into small, meaningful products.' },
  { year: '2022', title: 'Product Design Foundations', description: 'Deepened my visual system thinking and UI craft.' },
]

const facts = ['I love turning complex flows into calm experiences.', 'Coffee fuels late-night debugging sessions.', 'I prototype ideas in Figma before I touch code.']

const About = () => {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="About"
          title="A builder with taste, pace, and precision."
          description="My work sits at the intersection of interface design, modern frontend engineering, and product thinking."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="space-y-6">
              <div className="space-y-3">
                <h3 className="font-['Space_Grotesk'] text-2xl text-white">My story</h3>
                <p className="text-sm leading-7 text-slate-400 sm:text-base">
                  I’m a frontend developer who believes digital experiences should feel as refined as they look. I blend code, motion, and clarity to create portfolios, product sites, and launch-ready interfaces that feel premium from the first scroll.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="mb-3 flex items-center gap-2 text-electric">
                    <GraduationCap size={18} />
                    <span className="text-sm font-semibold uppercase tracking-[0.25em]">Education</span>
                  </div>
                  <p className="text-sm text-slate-400">Computer Science foundations, UX design principles, and hands-on frontend practice.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="mb-3 flex items-center gap-2 text-electric">
                    <BookOpen size={18} />
                    <span className="text-sm font-semibold uppercase tracking-[0.25em]">Learning</span>
                  </div>
                  <p className="text-sm text-slate-400">Deepening Python workflows, APIs, and backend fluency to build stronger full-stack ideas.</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <GlassCard className="space-y-4">
              <div className="flex items-center gap-2 text-electric">
                <Trophy size={18} />
                <span className="text-sm font-semibold uppercase tracking-[0.25em]">Timeline</span>
              </div>
              <div className="space-y-4">
                {timeline.map((item) => (
                  <div key={item.year} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                      <span className="font-['Space_Grotesk'] text-white">{item.title}</span>
                      <span className="text-electric">{item.year}</span>
                    </div>
                    <p className="text-sm leading-6 text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="space-y-3">
              <div className="flex items-center gap-2 text-electric">
                <Sparkles size={18} />
                <span className="text-sm font-semibold uppercase tracking-[0.25em]">Fun facts</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-400">
                {facts.map((fact) => (
                  <li key={fact} className="flex gap-2">
                    <span className="text-electric">•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
