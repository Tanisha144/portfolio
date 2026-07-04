import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

const testimonials = [
  {
    quote: 'Every detail feels intentional, and the pacing of the experience is exceptional.',
    name: 'Mina Chen',
    role: 'Founder, Northstar Studio',
  },
  {
    quote: 'The interface feels premium without being heavy, and the site still loads beautifully.',
    name: 'Jordan Vale',
    role: 'Product Designer, Arc Labs',
  },
  {
    quote: 'It has the kind of polish that makes people stop and stay longer.',
    name: 'Riley Hart',
    role: 'Marketing Lead, Field AI',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="What collaborators notice first."
          description="The goal is always the same: create a product that feels effortless, memorable, and thoughtfully built."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <GlassCard className="h-full space-y-4">
                <div className="rounded-full border border-electric/20 bg-electric/10 p-2 text-electric">
                  <Quote size={16} />
                </div>
                <p className="text-sm leading-7 text-slate-400">“{item.quote}”</p>
                <div>
                  <div className="font-['Space_Grotesk'] text-white">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
