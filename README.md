# Webpack Starter

## Installation

#

1. **`npm init -y`**: Creates a package.json file for your project.
2. **`npm i -D webpack webpack-cli`**: Installs Webpack and the Webpack Command Line Interface (CLI).
3. **`npm install webpack-dev-server --save-dev`**: Installs the Webpack development server.
4. **`npm i -D sass style-loader css-loader sass-loader`**: Installs tools for processing Sass and CSS files.
5. **`npm i -D html-webpack-plugin html-loader`**: Installs tools for processing HTML files.
6. **`npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react`**: Installs Babel tools. These tools make your JavaScript code compatible with older browsers.
7. **`npm i -D react react-dom`**: Installs the React library and the ReactDOM module.
8. **`npm i -D tailwindcss`**: Installs the Tailwind CSS library.
9. **`npm i -D postcss postcss-loader postcss-preset-env`**: Installs PostCSS tools.
10. **`npm i redux`**: Installs the Redux library.
11. **`npm install @reduxjs/toolkit`**: Installs the Redux Toolkit library.
12. **`npm i -D react-redux`**: Installs the React-Redux connection.
13. **`npm i --save-dev @redux-devtools/core`**: Installs Redux DevTools.
14. **`npm i -D react-router`**: Installs the React Router library.
15. **`npm i -D react-router-dom`**: Installs the React Router DOM module.
16. **`npm i -D webpack-bundle-analyzer`**: Installs the Webpack Bundle Analyzer tools. These tools visualize the sizes and usage of files in your project.

To use these commands, navigate to your project directory and run them one by one. They will install the necessary tools and libraries for your React project.

## Files

- webpack.config.js
- .babelrc
- tailwind.config.js
- postcss.config.js
- package.json `scripts`
- netlify.toml
- index.html `<base href="/" />`
- .gitignore `node_modules`

## Usage

- Run Dev Server (Port 3000)
  - npm run dev
- Build for production
  - npm run build

### [Live Demo](https://starter-kit-webpack.netlify.app/) | [Turkish](https://www.ozantekin.dev/notes/webpack-starter-kit)
