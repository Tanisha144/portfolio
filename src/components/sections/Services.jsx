import { motion } from 'framer-motion'
import { Blocks, BrushCleaning, Monitor, Smartphone } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

const services = [
  {
    title: 'Web Development',
    description: 'Thoughtful frontend builds that feel premium, polished, and performant from day one.',
    icon: Monitor,
  },
  {
    title: 'UI Design',
    description: 'Carefully crafted visual systems and transitions that make interfaces feel alive.',
    icon: BrushCleaning,
  },
  {
    title: 'Landing Pages',
    description: 'High-conversion launch pages designed to communicate value immediately.',
    icon: Blocks,
  },
  {
    title: 'Responsive Websites',
    description: 'Fluid experiences that feel excellent across desktop, tablet, and mobile.',
    icon: Smartphone,
  },
]

const Services = () => {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Services"
          title="A focused set of offerings for bold ideas."
          description="Whether you need a launch page or an immersive digital presence, the process stays refined and intentional."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <GlassCard className="h-full space-y-4">
                  <div className="rounded-2xl border border-electric/20 bg-electric/10 p-3 text-electric">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-xl text-white">{service.title}</h3>
                  <p className="text-sm leading-7 text-slate-400">{service.description}</p>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
