import React from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Home() {
  const featured = products.slice(0, 4)

  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-16 grid sm:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-widest text-xs font-semibold text-clay mb-4">
            Nouvelle collection — Édition Brume
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.05] text-ink">
            Des objets simples, pensés pour durer des années.
          </h1>
          <p className="mt-5 text-ink/70 text-lg max-w-md">
            Lumio sélectionne des pièces fabriquées à la main par des petits
            ateliers : céramique, verre, lin et bois massif pour la maison.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/boutique" className="btn-primary">
              Découvrir la boutique
            </Link>
            <Link to="/contact" className="btn-secondary">
              Nous contacter
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] rounded-2xl bg-teal" />
          <div className="aspect-[3/4] rounded-2xl bg-amber mt-8" />
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-ink/[0.03] py-14">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid sm:grid-cols-3 gap-8">
          {[
            { title: 'Fabrication artisanale', text: 'Chaque pièce est faite à la main par un atelier partenaire en Europe.' },
            { title: 'Matériaux durables', text: 'Grès, verre, lin et bois massif — pensés pour vieillir avec élégance.' },
            { title: 'Livraison soignée', text: 'Emballage minimal, recyclable, et expédié sous 48h depuis Paris.' },
          ].map((v) => (
            <div key={v.title}>
              <h3 className="font-display text-xl text-ink mb-2">{v.title}</h3>
              <p className="text-ink/70 text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Produits vedettes */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-3xl text-ink">Sélection du moment</h2>
          <Link to="/boutique" className="text-sm font-medium underline hover:text-teal">
            Voir tout
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
