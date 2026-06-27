import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/boutique', label: 'Boutique' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `transition hover:text-teal ${isActive ? 'text-teal font-semibold' : 'text-ink/80'}`

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-display text-2xl tracking-tight text-ink">
          Lumio
        </NavLink>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NavLink
            to="/panier"
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink/15 hover:border-ink transition"
            aria-label="Voir le panier"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 6h15l-1.5 9h-12z" />
              <path d="M6 6 5 3H2" />
              <circle cx="9" cy="20" r="1.3" fill="currentColor" stroke="none" />
              <circle cx="18" cy="20" r="1.3" fill="currentColor" stroke="none" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-amber text-ink text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {count}
              </span>
            )}
          </NavLink>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink/15"
            onClick={() => setOpen((o) => !o)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ink/10 bg-cream px-5 py-4 flex flex-col gap-4 font-medium">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={linkClass}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
