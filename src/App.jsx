import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Service from './components/pages/Service'
import Contact from './components/pages/Contact'



function App() {

  return (
    <>
      <Header />
      
        <Routes>
         <Route index  element={<Home />}/>
         <Route path='about'  element={<About />}/>
         <Route path='service'  element={<Service />}/>
         <Route path='contact'  element={<Contact />}/>
         </Routes>
       
      <Footer />
    </>
  )
}

export default App
