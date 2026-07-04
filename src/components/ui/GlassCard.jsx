const GlassCard = ({ children, className = '' }) => {
  return (
    <div className={`rounded-[1.8rem] border border-white/10 bg-white/[0.08] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl ${className}`}>
      {children}
    </div>
  )
}

export default GlassCard
