# Luxe Noir — Shopping Cart

A luxury dark-theme fashion storefront built with Next.js, TypeScript, and Tailwind CSS.

🔗 [Live Preview](https://shopping-cart-zeta-henna.vercel.app/)

## Features

- Browse curated fashion collections fetched from the FakeStore API
- Add products to cart with custom quantity controls
- Real-time cart count displayed in the navbar
- Cart drawer with slide-in animation
- Update or remove items from cart
- Total price calculation
- Category-based product grouping on the shop page
- Responsive design with hamburger menu on mobile
- Luxury dark theme with gold accents

## Built With

- Next.js 15
- TypeScript
- Tailwind CSS
- React Context API (CartContext + UIContext)
- Axios
- React Icons

## Project Structure
```
app/          # Pages and layouts (Next.js App Router)
components/   # Reusable UI components
context/      # CartContext and UIContext
lib/          # API fetching logic
types/        # TypeScript interfaces
```

## 🚀 Getting Started

```bash
git clone https://github.com/MustafaManhall/shopping-cart.git
cd shopping-cart
npm install
npm run dev
```

## Concepts Practiced

- React Context API with custom hooks (`useCart`, `useUI`)
- Cart state management (add, update, remove)
- Data fetching with Axios and FakeStore API
- TypeScript interfaces and type safety
- Next.js App Router, layouts, and file-based routing
- Responsive design with Tailwind breakpoints
- Z-index and fixed positioning for overlays and drawers
- Conditional rendering

## 👤 Author

**Mustafa Manhal** — built as part of [The Odin Project](https://www.theodinproject.com/) React curriculum.