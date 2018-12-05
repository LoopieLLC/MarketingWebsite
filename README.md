# MarketingWebsite
Loopie, LLC marketing website.

# Development

1. Clone the repository.
2. `npm install` inside the repository.
3. To run the development server, run `npm run dev`.
4. Open a browser to port `8080`.

# Hot Reloading

This application uses `react-hot-reloader` alongside webpack. Visit https://github.com/gaearon/react-hot-loader for more information. Hot reloading allows webpack to watch for changes in the `src/` directly to reload the application on save.

# Project structure

This project follows a very simple, React-suggested structure:
`src/`
  `client/`
    `components/`: All of the main React components.
    `styles/`: SCSS files.
    `App.js`: The main entry point in which all other top-level components are loaded. 
    `index.js`: Where we bind React to the DOM.
`public/`:
  `index.html`: The main entry-point for React.

# Resources
https://reactjs.org/docs/thinking-in-react.html