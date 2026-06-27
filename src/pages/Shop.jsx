import React, { useState, useMemo } from 'react'
import products from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

const categories = ['Tous', ...new Set(products.map((p) => p.category))]

export default function Shop() {
  const [active, setActive] = useState('Tous')

  const filtered = useMemo(
    () => (active === 'Tous' ? products : products.filter((p) => p.category === active)),
    [active]
  )

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-14">
      <h1 className="font-display text-4xl text-ink mb-3">Boutique</h1>
      <p className="text-ink/70 max-w-xl mb-8">
        {products.length} pièces sélectionnées, fabriquées par des ateliers
        partenaires en Europe.
      </p>

      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              active === c
                ? 'bg-teal text-cream border-teal'
                : 'border-ink/20 text-ink/70 hover:border-ink'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
