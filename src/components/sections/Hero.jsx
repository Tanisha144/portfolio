import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Mouse } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'
import SectionHeading from '../ui/SectionHeading'
import heroImage from '/profile.svg'

const words = ['Frontend Developer', 'Python Learner', 'UI Systems Builder']

const Hero = ({ onNavigate }) => {
  const [displayText, setDisplayText] = useState(words[0])
  const [glow, setGlow] = useState({ x: 50, y: 50 })

  useEffect(() => {
    let index = 0
    const timer = window.setInterval(() => {
      index = (index + 1) % words.length
      setDisplayText(words[index])
    }, 2200)

    return () => window.clearInterval(timer)
  }, [])

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    setGlow({ x, y })
  }

  return (
    <section id="home" className="relative px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-8 shadow-glow backdrop-blur-2xl sm:p-10 lg:p-12"
            onMouseMove={handleMove}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-70 transition-opacity"
              style={{
                background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(79, 140, 255, 0.24), transparent 35%)`,
              }}
            />
            <div className="relative z-10 flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-electric/30 bg-electric/10 px-3 py-1 text-sm text-electric">
                <span className="h-2 w-2 rounded-full bg-electric" />
                Available for selected collaborations
              </div>

              <SectionHeading
                eyebrow="Developer Portfolio 2026"
                title="Designing luminous interfaces that feel effortless."
                description="I craft fast, polished digital experiences with a deep focus on clarity, motion, and product storytelling."
              />

              <div className="flex flex-wrap items-center gap-3 text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                <span>Hi, I’m</span>
                <span className="font-['Space_Grotesk'] text-electric">Grisha Divakaran</span>
              </div>

              <div className="flex min-h-[3rem] items-center text-lg text-slate-300 sm:text-xl">
                <span className="mr-2">I’m a</span>
                <span className="font-['Space_Grotesk'] text-white">{displayText}</span>
                <span className="ml-2 animate-pulse text-electric">|</span>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <MagneticButton onClick={() => onNavigate('projects')} className="bg-electric/90 text-white hover:bg-electric">
                  View projects <ArrowRight size={16} />
                </MagneticButton>
                <MagneticButton onClick={() => onNavigate('contact')}>
                  <Download size={16} /> Resume
                </MagneticButton>
              </div>

              <div className="flex items-center gap-3 pt-4 text-sm text-slate-400">
                <Mouse size={16} />
                <span>Scroll to explore the full story</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-electric/20 blur-[130px]" />
            <img
              src={heroImage}
              alt="Abstract portrait illustration of Alex Ridley"
              className="relative h-full w-full rounded-[2rem] border border-white/10 object-cover shadow-[0_0_80px_rgba(79,140,255,0.15)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
