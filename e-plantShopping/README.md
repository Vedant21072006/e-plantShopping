# e-plantShopping — Paradise Nursery

A React + Redux Toolkit houseplant shopping application created for the Paradise Nursery final project.

## Features
- Landing page with “Welcome to Paradise Nursery”, background image, and Get Started button.
- About Us section describing the company.
- Three plant categories with six unique plants per category.
- Plant thumbnails, names, descriptions, prices, and Add to Cart buttons.
- Add buttons disable after a plant is added; removing the plant re-enables the button.
- Shared navigation with Home, Plants, and Cart links and a live cart item count.
- Redux Toolkit cart slice with `addItem`, `removeItem`, and `updateQuantity` reducers.
- Cart line totals, grand total, increment/decrement controls, Delete, Checkout (Coming Soon), and Continue Shopping.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL shown by Vite.

## Build for production
```bash
npm run build
```

## GitHub submission files
- `README.md`
- `src/components/AboutUs.jsx`
- `src/App.css`
- `src/App.jsx`
- `src/redux/CartSlice.jsx`
- `src/components/ProductList.jsx`
- `src/components/CartItem.jsx`

## Publish to GitHub
Create a public repository named **e-plantShopping**, then upload/push the contents of this project folder. Do not upload `node_modules`. After pushing, open each file on GitHub and copy its URL for the Coursera submission.
