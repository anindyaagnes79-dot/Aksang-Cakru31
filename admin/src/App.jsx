import { useEffect, useState } from 'react'
import login from './components/login.jsx'
import sidebar from './components/sidebar.jsx'
export const backendUrl = 'http://localhost:4000'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token' || ""))
  useEffect(()=> {
    localStorage.setItem('token', token)
  }, [token])
  return (
    <div>
      {
        token === "" ? (<login />) : (
          
        )
      }
    </div>
  )
}

export default App
