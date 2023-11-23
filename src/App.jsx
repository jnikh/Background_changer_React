import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
 const [changer,setChanger]=useState("purple")

  return (
    <>
   <div className='w-full h-screen' style={{backgroundColor:changer}} >
    <div className='text-white font-serif flex justify-center pt-10 text-3xl '>Background Changer Using React</div>
   <div className='fixed flex flex-wrap  justify-center bottom-12 inset-x-0  px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
          <button onClick={()=>{setChanger('red')}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold' style={{backgroundColor:'red'}}>red</button>
          <button onClick={()=>setChanger('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold' style={{backgroundColor:'green'}}>green</button>
          <button onClick={()=>setChanger('purple')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold' style={{backgroundColor:'purple'}}>purple</button>
          <button onClick={()=>setChanger('blue')}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold' style={{backgroundColor:'blue'}}>blue</button>
          <button onClick={()=>setChanger('orange')}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold ' style={{backgroundColor:'orange'}}>orange</button>
          <button onClick={()=>setChanger('pink')}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold' style={{backgroundColor:'pink'}}>pink</button>
          <button onClick={()=>setChanger('black')}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg font-semibold' style={{backgroundColor:'black', Color:'white'}}>black</button>

        </div>
       </div>
   </div>
    </>
  )
}

export default App
