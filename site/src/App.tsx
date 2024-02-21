import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes} from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./components/Body/Home/Home";
import Contact from "./components/Body/Contact/Contact";
import About from "./components/Body/About/About";


function App() {
  const [count, setCount] = useState(0)

  return (

      <div className='app-wrapper'>
          <Header>

          </Header>

              <Routes>
                  <Route path="/home"  element={<Home home-data={} /> } />
                  <Route path="/about" element={<About/>} />
                  <Route path="/contact" element={<Contact/>} />
              </Routes>


      </div>

  )
}

export default App

