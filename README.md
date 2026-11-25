# Brand Page

A simple landing page for a shoe brand. 
It has a top menu bar and a big main section with a heading, a short text, two buttons and a shoe picture.

The project is made with React and Vite.
Project 1 for practising React components and its fundamentals.

## Features

- Top navigation bar with the brand logo on the left
- Menu links in the middle: Menu, Location, About, Contact
- Login button on the right side of the navigation bar
- Big main section (hero) that fills the full screen below the navigation bar
- Large heading and a short line about the brand
- Two buttons: "Shop Now" (red) and "View All" (plain with a border)
- "Also Available On" section showing Amazon and Flipkart logos
- Big shoe image on the right side of the main section
- Poppins font from Google Fonts
- Red and dark gray colors set in one place, so they are easy to change
- Page content is centered with a maximum width of 1280px

## Tech Used

- React 19
- Vite (for running and building the project)
- ESLint (for checking code mistakes)
- Plain CSS (no extra CSS library)

## Folder Structure

```
brand-page/
├── public/
│   └── images/          -> logo, shoe, amazon and flipkart images
├── src/
│   ├── components/
│   │   ├── Navigation.jsx   -> top bar (logo, menu, login)
│   │   └── Hero.jsx         -> main section (heading, buttons, shoe image)
│   ├── App.jsx          -> puts Navigation and Hero together
│   ├── App.css          -> all the styling
│   ├── index.css        -> empty for now
│   └── main.jsx         -> starts the React app
├── index.html
├── package.json
└── vite.config.js
```

Note: the actual project is inside a second `brand-page` folder in this repository.

## How to Run

1. Install Node.js on your computer.
2. Download the project:
   ```
   git clone https://github.com/india-coderr/brand-page
   ```
3. Go inside the project folder:
   ```
   cd brand-page/brand-page
   ```
4. Install the packages:
   ```
   npm install
   ```
5. Start the project:
   ```
   npm run dev
   ```
6. Open the link shown in the terminal (usually http://localhost:5173).

## Other Commands

- `npm run build` - makes the final files for hosting
- `npm run preview` - shows the built version on your computer
- `npm run lint` - checks the code for mistakes

## What Is Not Done Yet
PULL REQUESTS ARE ACCEPTED!!
- The menu items, Login button, Shop Now button and View All button do not do anything yet
- Only one page, no other pages
- Not made for mobile screens yet (no mobile styles)
- No favicon (the small icon in the browser tab)
