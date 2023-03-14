import React from 'react'
import { Footer, Hero, Service } from './components'
import styles from './style'

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
      <Hero />
      <Service />
      <Footer />
    </div>
  )
}

export default App