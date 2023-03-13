import React from 'react'
import { Hero, Service } from './components'
import styles from './style'

const App = () => {
  return (
    <div className='flex flex-col'>
      <Hero />
      <Service />
    </div>
  )
}

export default App