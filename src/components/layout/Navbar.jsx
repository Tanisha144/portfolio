import { useState } from 'react'
import { motion } from 'framer-motion'
import { Command, Menu, Sparkles, X } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

const Navbar = ({ activeSection, onNavigate, onOpenCommandPalette }) => {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 border-b border-white/10 bg-[#090909]/75 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
          onClick={() => onNavigate('home')}
        >
          <span className="rounded-full bg-electric/20 p-2 text-electric">
            <Sparkles size={16} />
          </span>
          <span className="font-['Space_Grotesk'] tracking-[0.2em]">GRISHA</span>
        </button>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`rounded-full px-3 py-2 text-sm transition ${
                activeSection === item.id ? 'bg-electric/[0.15] text-electric' : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 sm:flex"
          >
            <Command size={16} />
            Ctrl K
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#090909]/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onNavigate(item.id)
                  setOpen(false)
                }}
                className={`rounded-full px-3 py-2 text-left text-sm transition ${
                  activeSection === item.id ? 'bg-electric/[0.15] text-electric' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  )
}

export default Navbar
