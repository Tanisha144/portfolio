const BackgroundEffects = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,140,255,0.14),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_25%)]" />
      <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-electric/20 blur-[120px]" />
      <div className="absolute bottom-0 right-[-8%] h-80 w-80 rounded-full bg-white/10 blur-[140px]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="absolute left-[8%] top-32 h-2 w-2 rounded-full bg-white/70 animate-float" />
      <div className="absolute right-[14%] top-40 h-3 w-3 rounded-full bg-electric/80 animate-drift" />
      <div className="absolute bottom-[20%] left-[20%] h-2.5 w-2.5 rounded-full bg-white/60 animate-float" />
      <div className="absolute bottom-[15%] right-[28%] h-4 w-4 rounded-full bg-electric/60 animate-drift" />
    </div>
  )
}

export default BackgroundEffects
