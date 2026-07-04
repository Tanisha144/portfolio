import { ArrowUpRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Grisha Divakaran. Crafted for thoughtful digital experiences.</p>
        <a href="mailto:grishadivakaran99@gmail.com" className="inline-flex items-center gap-2 text-white hover:text-electric">
          grishadivakaran99@gmail.com <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
