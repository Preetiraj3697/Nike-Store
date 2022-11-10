import React from 'react'
import { Hero } from './Components'
import { heroapi } from './Data/data'

const App = () => {
  return (
    <main>
      <Hero heroapi={heroapi}/>
    </main>
  )
}

export default App
