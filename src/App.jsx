import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/Title'
import HeaderComponent from './components/HeaderComponent'
import BodyComponent from './components/BodyComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
      
    </>
  )
}

export default App
