import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80 mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-cream">Lumio</p>
          <p className="mt-3 text-sm leading-relaxed">
            Des objets simples, fabriqués pour durer. Conçus pour le quotidien,
            pas pour la vitrine.
          </p>
        </div>
        <div>
          <p className="font-semibold text-cream mb-3 text-sm uppercase tracking-wide">
            Boutique
          </p>
          <ul className="space-y-2 text-sm">
            <li>Cuisine</li>
            <li>Salon</li>
            <li>Chambre</li>
            <li>Bain</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-cream mb-3 text-sm uppercase tracking-wide">
            Contact
          </p>
          <ul className="space-y-2 text-sm">
            <li>bonjour@lumio-shop.fr</li>
            <li>+33 1 23 45 67 89</li>
            <li>Paris, France</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-5 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Lumio. Tous droits réservés.
      </div>
    </footer>
  )
}
