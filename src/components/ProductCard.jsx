import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { addItem } = useCart()

  return (
    <div className="group flex flex-col">
      <Link
        to={`/boutique#${product.id}`}
        className="aspect-square rounded-2xl overflow-hidden mb-4 relative block"
        style={{ backgroundColor: product.color }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 transition group-hover:scale-105 duration-500" />
        <span className="absolute bottom-3 left-3 text-cream/90 text-xs uppercase tracking-wide font-medium">
          {product.category}
        </span>
      </Link>
      <h3 className="font-display text-lg text-ink">{product.name}</h3>
      <p className="text-sm text-ink/60 mt-1 line-clamp-2">{product.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-semibold">{product.price} €</span>
        <button
          onClick={() => addItem(product)}
          className="text-sm font-medium rounded-full px-4 py-2 border border-ink/20 hover:bg-ink hover:text-cream transition"
        >
          Ajouter
        </button>
      </div>
    </div>
  )
}
