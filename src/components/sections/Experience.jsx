import { motion } from 'framer-motion'
import { CalendarDays, Medal, Sparkles, Users } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

const experiencePoints = [
  { title: 'Hackathons', description: 'Built polished prototypes under tight deadlines and shipped with confidence.' },
  { title: 'Tech Events', description: 'Spoke at meetups and workshops around interface craft and modern frontend workflows.' },
  { title: 'Volunteer Work', description: 'Supported local developer circles with mentorship and hands-on feedback sessions.' },
  { title: 'Certificates', description: 'Continual self-study in UI systems, accessibility, and product-led development.' },
]

const Experience = () => {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Experience & Events"
          title="A steady rhythm of learning, building, and sharing."
          description="The work is shaped by real collaborations, community moments, and a habit of continuous refinement."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
            <GlassCard className="space-y-4">
              <div className="flex items-center gap-2 text-electric">
                <CalendarDays size={18} />
                <span className="text-sm font-semibold uppercase tracking-[0.25em]">Current focus</span>
              </div>
              <p className="text-sm leading-7 text-slate-400 sm:text-base">
                Designing experiential websites, sharpening interface systems, and deepening Python fluency to build more complete product ideas.
              </p>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-slate-300">
                <div className="mb-2 flex items-center gap-2 text-white">
                  <Medal size={16} />
                  Recent milestone
                </div>
                <div>Delivered a portfolio system with motion-led storytelling and future-ready UI architecture.</div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {experiencePoints.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <GlassCard className="h-full space-y-3">
                  <div className="flex items-center gap-2 text-electric">
                    {index === 0 && <Sparkles size={18} />}
                    {index === 1 && <CalendarDays size={18} />}
                    {index === 2 && <Users size={18} />}
                    {index === 3 && <Medal size={18} />}
                    <span className="text-sm font-semibold uppercase tracking-[0.25em]">{item.title}</span>
                  </div>
                  <p className="text-sm leading-7 text-slate-400">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
