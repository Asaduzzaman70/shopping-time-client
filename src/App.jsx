import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Home/Navbar/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default App