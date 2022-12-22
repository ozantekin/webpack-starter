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

1. **`touch webpack.config.js`**

```jsx
// webpack.config.jsx
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
  },
  //devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    //new BundleAnalyzerPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.md'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
}
```

2. **`touch .babelrc`**

```
// .babalrc
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ]
  ]
}
```

3. **`touch tailwind.config.js`**

```js
// tailwind.config.js
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. **`touch postcss.config.js`**

```js
// postcss.config.js
const tailwindcss = require('tailwindcss')
module.exports = {
  plugins: ['postcss-preset-env', tailwindcss],
}
```

5. **`touch netlify.toml`**

```toml
// toml
[[redirects]]
  from = "/*"
  to = "/"
  status = 200
```

6. **`touch .gitignore`**

```
// .gitignore
node_modules
```

7. **`mkdir public`**
8. **`mkdir src`**
9. **`cd public/`**
10. **`touch index.html`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base href="/" />
    <title>Webpack - Starter</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

11. **`cd ..`**
12. **`cd src`**
13. **`touch index.js`**

```js
import './styles/main.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/config/store.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
```

14. **`touch App.js`**

```js
import Header from './components/Header/Header.jsx'
import Navigation from './components/Navigation/Navigation.jsx'
import { Route, Routes } from 'react-router-dom'
import About from './routes/About/About.jsx'
import Contact from './routes/Contact/Contact.jsx'

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Navigation />}>
          <Route index element={<Header />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}
```

15. **`mkdir styles`**
16. **`mkdir routes`**
17. **`mkdir redux`**
18. **`mkdir components`**
19. **`cd styles`**
20. **`touch main.scss`**

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

21. **`cd ..`**
22. **`cd routes`**
23. **`mkdir About`**
24. **`cd About`**
25. **`touch About.jsx`**

```jsx
export default function About() {
  return (
    <div>
      <p className='text-red-600 text-2xl font-bold'> ABOUT PAGE! </p>
    </div>
  )
}
```

26. **`cd ..`**
27. **`mkdir Contact`**
28. **`cd Contact`**
29. **`touch Contact.jsx`**

```jsx
import './contact.styles.scss'

export default function Contact() {
  return (
    <div className='contact'>
      <header className='contact-header'>
        <h1> Contact Page </h1>
      </header>
    </div>
  )
}
```

30. **`touch contact.styles.scss`**

```scss
.contact {
  background-color: cadetblue;

  .contact-header {
    padding: 10px;

    h1 {
      color: brown;
      font-weight: bold;
    }
  }
}
```

31. **`cd ..`**
32. **`cd ..`**
33. **`cd redux`**
34. **`mkdir actions`**
35. **`mkdir config`**
36. **`cd config`**
37. **`touch store.jsx`**

```jsx
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {},
})

export default store
```

38. **`cd ..`**
39. **`cd ..`**
40. **`cd components/`**
41. **`mkdir Navigation`**
42. **`mkdir Header`**
43. **`cd Navigation`**
44. **`touch Navigation.jsx`**

```jsx
import { NavLink, Outlet } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <ul className='flex gap-8'>
        <li>
          <NavLink to='/'> Home </NavLink>
        </li>
        <li>
          <NavLink to='/about'> About </NavLink>
        </li>
        <li>
          <NavLink to='contact'> Contact </NavLink>
        </li>
      </ul>
      <Outlet />
    </nav>
  )
}
```

46. **`cd ..`**
47. **`cd Header`**
48. **`touch Header.jsx`**

```jsx
export default function Header() {
  return (
    <header>
      <h1 className='font-bold text-3xl text-blue-600'> Webpack Starter </h1>
    </header>
  )
}
```

49. **`package.json - scripts`**

```json
  "scripts": {
    "dev": "webpack serve --mode development",
    "start": "webpack serve --mode development",
    "build": "webpack --mode development"
  },
```

50. **`index.html`**

```html
<base href="/" />
```

## Usage

- Run Dev Server (Port 3000)
  - npm run dev
- Build for production
  - npm run build

### [Live Demo](https://starter-kit-webpack.netlify.app/) | [Turkish](https://www.ozantekin.dev/notes/webpack-starter-kit)
