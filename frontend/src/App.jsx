import { useState } from 'react'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import './App.css'
import Serviceitems from './components/Serviceitems'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import BlogState from './context/blogs/BlogState'
import Formm from './components/Reduce'
import CartItems from './components/cartItems'
import Login from './components/Login'
import Signup from './components/Signup'
import Addproduct from './components/Addproduct'
import Services from './components/Services'

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log('API KEY:', apiKey);

  const [theme, setTheme] = useState('light')
  const [text, setText] = useState('Dark mode')
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (theme === 'light') {
      setTheme('dark')
      setText('light mode')
      showAlert('success', 'your dark mode is enabled')
    }
    else {
      setTheme('light')
      setText('Dark mode')
      showAlert('success', 'your light mode is enabled')
    }
  }

  return (
    <div style={{ backgroundColor: "black" }}>
      <BlogState apiKey={apiKey}>
        <Router>
          <Navbar theme={theme} text={text} toggleMode={toggleMode} />
          <Alert alert={alert} showAlert={showAlert} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blogs' element={<Serviceitems apiKey={apiKey} />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/reduce' element={<Formm />} />
            <Route path='/cartitems' element={<CartItems />} />
            <Route path='/login' element={<Login alert={alert} showAlert={showAlert} />} />
            <Route path='/signup' element={<Signup alert={alert} showAlert={showAlert} />} />
            <Route path='/addproduct' element={<Addproduct alert={alert} showAlert={showAlert} />} />
          </Routes>
        </Router>
      </BlogState>
    </div>
  )
}

export default App
