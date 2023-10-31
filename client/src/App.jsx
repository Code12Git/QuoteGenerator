
import Dashboard from './pages/Dashboard'
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/base/Navbar'
function App() {


  return (
    <>
      <Toaster />
      <Navbar />
    <Routes>
     
      <Route exact path='/' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
       
    </Routes>
    </>
  )
}

export default App
