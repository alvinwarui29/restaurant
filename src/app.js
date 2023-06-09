import React from 'react'
import {AnimatePresence} from 'framer-motion';
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import MainContainer from './components/MainContainer';
import CreateContainer from './components/CreateContainer';

const app = () => {
  return (
    <AnimatePresence>
    <div className='w-screen h-auto
     flex flex-col bg-primary'>
      <Header/>

      <main className='mt-24 p-8 w-full'>
        <Routes>
          <Route path='/*' element={<MainContainer/>}/>
          <Route path='/createItem' element={<CreateContainer/>}/>
        </Routes>
      </main>
     </div>
     </AnimatePresence>
  )
}

export default app