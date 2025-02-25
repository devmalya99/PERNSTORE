
import './App.css'
import Navbar from './components/Navbar'
import {Route, Router, Routes} from "react-router"
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'


function App() {
  

  return (
    <>
       <div className='min-h-screen bg-base-200  transition-colors duration-300'>
              <Navbar/>
             <Routes>

              <Route path="/" element={<HomePage/>} />
              
              {/* //Product page */}
              <Route  path='/product/:id' element={<ProductPage/>}/>

             </Routes>
       </div>
    </>
  )
}

export default App
