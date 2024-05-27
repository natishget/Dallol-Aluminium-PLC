import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Service from './components/pages/Service'
import Contact from './components/pages/Contact'
import Contact2 from './components/pages/Contact2'



function App() {

  return (
    <>
      <Header />
      
        <Routes>
         <Route index  element={<Home />}/>
         <Route path='about'  element={<About />}/>
         <Route path='service'  element={<Service />}/>
         <Route path='contact'  element={<Contact2 />}/>
         </Routes>
       
      <Footer />
    </>
  )
}

export default App
