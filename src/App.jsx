import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import MainInfo from './components/MainInfo.jsx'
import Facts from './components/Facts.jsx'
import Photos from './components/Photos.jsx'
import MyButton from './components/MyButton.jsx'
//import './App.css'

function App() {
  return (
    <>
      <MainInfo name="Odesa" country="Ukraine" established="1794" />
      <Facts fact1="Even though it officially appeared in 1794, people lived here since ancient times" fact2="There is a Darth Vader statue in the city" fact3="It is also called the 'Pearl of the Black Sea'" />
      <Photos photo1="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D1%86%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BC%D0%B0%D1%8F%D0%BA_17.jpg/960px-%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D1%86%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BC%D0%B0%D1%8FKD0%BA_17.jpg" photo2="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Odessa_Treppe.JPG/330px-Odessa_Treppe.JPG" />
    </>
  )
}

export default App
