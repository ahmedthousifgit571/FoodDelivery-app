import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import '../src/index.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { Outlet} from 'react-router-dom'


function App() {


  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
      
    </>
  )
}



export default App
