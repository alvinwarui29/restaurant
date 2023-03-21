import React from 'react'
import Header from './components/Header'

const app = () => {
  return (
    <div className='w-screen h-auto
     flex flex-col bg-primary'>
      <Header/>

      <main className='mt-24 p-8 w-full'>Main Container</main>
     </div>
  )
}

export default app