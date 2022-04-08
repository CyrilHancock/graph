import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import AppBody from "../components/Header"
const Home: NextPage = () => {
  
  return (
    <div className='place-items-center bg-gray-200 h-full w-screen flex flex-col'>
      <Head>
        <title>Food Graph</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    <div className='bg-purple-500 p-5 flex place-items-center w-full'>
      {/* {left} */}
      <img className='h-12 object-contain rounded-full'  src='https://www.clipartmax.com/png/middle/296-2964584_animated-food-transparent.png'/>
        <p className='font-bold text-2xl text-white ml-3'>Food Graph</p>
    </div>
    <div >
   <AppBody/>

    </div>
    </div>
  )
}

export default Home
