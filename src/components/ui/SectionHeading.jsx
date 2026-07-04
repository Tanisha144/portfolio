const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] uppercase tracking-[0.35em] text-slate-300">
        {eyebrow}
      </span>
      <h2 className="font-['Space_Grotesk'] text-3xl font-semibold text-white sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base text-slate-400 sm:text-lg">{description}</p>
    </div>
  )
}

export default SectionHeading
