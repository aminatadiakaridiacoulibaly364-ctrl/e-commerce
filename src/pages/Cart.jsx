import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function Cart() {
  const { items, removeItem, updateQty, total, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-5 sm:px-8 py-24 text-center">
        <h1 className="font-display text-3xl text-ink mb-3">Votre panier est vide</h1>
        <p className="text-ink/60 mb-8">Parcourez la boutique pour trouver votre prochain objet du quotidien.</p>
        <Link to="/boutique" className="btn-primary">
          Voir la boutique
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-5 sm:px-8 py-14">
      <h1 className="font-display text-4xl text-ink mb-8">Votre panier</h1>

      <div className="divide-y divide-ink/10 border-y border-ink/10">
        {items.map((item) => (
          <div key={item.id} className="py-5 flex items-center gap-4 sm:gap-6">
            <div
              className="w-16 h-16 rounded-xl flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-ink">{item.name}</p>
              <p className="text-sm text-ink/60">{item.price} €</p>
            </div>
            <input
              type="number"
              min="1"
              value={item.qty}
              onChange={(e) => updateQty(item.id, parseInt(e.target.value) || 1)}
              className="w-16 rounded-lg border border-ink/20 text-center py-1.5"
              aria-label={`Quantité pour ${item.name}`}
            />
            <p className="w-20 text-right font-semibold hidden sm:block">
              {(item.price * item.qty).toFixed(2)} €
            </p>
            <button
              onClick={() => removeItem(item.id)}
              className="text-ink/40 hover:text-clay transition"
              aria-label={`Retirer ${item.name}`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <button onClick={clearCart} className="text-sm text-ink/50 underline hover:text-clay text-left">
          Vider le panier
        </button>
        <div className="text-right">
          <p className="text-ink/60 text-sm">Total</p>
          <p className="font-display text-3xl text-ink">{total.toFixed(2)} €</p>
          <button className="btn-primary mt-4 w-full sm:w-auto">Passer la commande</button>
        </div>
      </div>
    </div>
  )
}
