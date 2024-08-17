import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Home/Navbar/Navbar'
import Footer from './Home/Footer/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App