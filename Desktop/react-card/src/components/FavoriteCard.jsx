import React from 'react'
import {MdDelete } from "react-icons/md"


const FavoriteCard = () => {
  return (
    <main className="bg-slate-900 min-h-screen pt-36 flex flex-col items-center">
        <section className='h-[240px] w-[340px] overflow-hidden relative'>
          <img className='w-full h-full object-cover rounded-[20px] opacity-70 shadow-2xl' src="/assets/card.jpg"/>
          <h3 className='text-[30px] font-bold text-white absolute top-[185px] left-6'>TITLE MOVIE</h3>
          <div className='absolute top-4 right-4 text-white text-2xl'>
          <MdDelete/>
          </div>
        </section>
    </main>
  )
}


export default FavoriteCard

