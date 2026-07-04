import { useState } from 'react'

const MagneticButton = ({ children, className = '', href, onClick }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    setOffset({
      x: (x / rect.width - 0.5) * 8,
      y: (y / rect.height - 0.5) * 8,
    })
  }

  const handleLeave = () => setOffset({ x: 0, y: 0 })

  const sharedProps = {
    className: `relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:bg-white/[0.15] ${className}`,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    style: {
      transform: `translate(${offset.x}px, ${offset.y}px)`,
    },
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...sharedProps}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} {...sharedProps}>
      {children}
    </button>
  )
}

export default MagneticButton
