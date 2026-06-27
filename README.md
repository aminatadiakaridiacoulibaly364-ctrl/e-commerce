# Lumio Shop

Site e-commerce vitrine — React + Vite + Tailwind CSS, 4 pages (Accueil, Boutique, Panier, Contact), responsive.

## Lancer en local

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
```

Le résultat est généré dans le dossier `dist/`.

## Déploiement sur Netlify

**Option A — Glisser-déposer**
1. Lancer `npm run build`
2. Aller sur https://app.netlify.com/drop
3. Glisser le dossier `dist/`

**Option B — Depuis un dépôt Git (recommandé)**
1. Pousser ce projet sur GitHub/GitLab
2. Sur Netlify : "Add new site" → "Import an existing project"
3. Build command : `npm run build`
4. Publish directory : `dist`
5. Le fichier `netlify.toml` est déjà configuré (build + redirections SPA pour React Router)

## Structure

```
src/
  components/   Header, Footer, ProductCard
  context/      CartContext (état global du panier)
  data/         products.js (catalogue produit)
  pages/        Home, Shop, Cart, Contact
```
