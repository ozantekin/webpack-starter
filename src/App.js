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
