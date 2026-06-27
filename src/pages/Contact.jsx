import React, { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-8 py-14 grid sm:grid-cols-2 gap-12">
      <div>
        <h1 className="font-display text-4xl text-ink mb-4">Contact</h1>
        <p className="text-ink/70 mb-8 max-w-sm">
          Une question sur une commande, un produit ou un partenariat ? Écrivez-nous,
          on répond en général sous 24h.
        </p>
        <ul className="space-y-3 text-sm text-ink/80">
          <li>bonjour@lumio-shop.fr</li>
          <li>+33 1 23 45 67 89</li>
          <li>12 rue des Ateliers, 75011 Paris</li>
        </ul>
      </div>

      <div>
        {sent ? (
          <div className="rounded-2xl bg-teal/10 border border-teal/30 p-6 text-teal-dark">
            <p className="font-display text-xl mb-1">Message envoyé</p>
            <p className="text-sm">Merci, nous reviendrons vers vous très vite.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-ink/80 mb-1.5" htmlFor="name">
                Nom
              </label>
              <input
                id="name"
                required
                type="text"
                className="w-full rounded-xl border border-ink/20 px-4 py-2.5 focus:outline-2 focus:outline-offset-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink/80 mb-1.5" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                required
                type="email"
                className="w-full rounded-xl border border-ink/20 px-4 py-2.5 focus:outline-2 focus:outline-offset-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ink/80 mb-1.5" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full rounded-xl border border-ink/20 px-4 py-2.5 focus:outline-2 focus:outline-offset-2"
              />
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Envoyer le message
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
