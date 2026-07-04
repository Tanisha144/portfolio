import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Globe2, Mail, Send, Sparkles } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import SectionHeading from '../ui/SectionHeading'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s make something memorable."
          description="Open for thoughtful collaborations, polished launches, and ambitious ideas."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
            <GlassCard className="space-y-6">
              <div className="space-y-3">
                <div className="inline-flex rounded-full border border-electric/20 bg-electric/10 px-3 py-1 text-sm text-electric">Let’s talk</div>
                <h3 className="font-['Space_Grotesk'] text-2xl text-white">A thoughtful, fast-moving partner for your next launch.</h3>
              </div>
              <div className="space-y-3 text-sm text-slate-400">
                <a href="mailto:grishadivakaran99@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-electric">
                  <Mail size={16} /> grishadivakaran99@gmail.com
                </a>
                <div className="flex gap-3 pt-2">
                  <a href="https://instagram.com/grisha.0_0" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:text-electric">
                    <Globe2 size={16} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:text-electric">
                    <Sparkles size={16} />
                  </a>
                </div>
              </div>
              <a href="/resume.txt" className="inline-flex items-center gap-2 text-sm font-medium text-electric">
                Download resume <ArrowRight size={16} />
              </a>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.08 }}>
            <GlassCard>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Name</span>
                    <input className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500" placeholder="Your name" />
                  </label>
                  <label className="space-y-2 text-sm text-slate-300">
                    <span>Email</span>
                    <input className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500" placeholder="you@example.com" />
                  </label>
                </div>
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Project brief</span>
                  <textarea className="min-h-32 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500" placeholder="Tell me about your idea..." />
                </label>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-electric/[0.15] px-4 py-3 text-sm font-medium text-electric transition hover:bg-electric/20">
                    <Send size={16} /> Send message
                  </button>
                  {submitted && <span className="text-sm text-slate-400">Thanks — your message is ready to be sent.</span>}
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
