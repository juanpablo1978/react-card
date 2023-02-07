import React from 'react'


const FavoriteCard = () => {
  return (
    <main className="bg-slate-900 min-h-screen flex flex-col items-center pt-36">
        <div className='h-[240px] w-[340px] rounded-[20px] overflow-hidden'>
          <img className='w-full h-full object-cover' src="public/assets/card.jpg" alt="card"/>
          <h2 className='text-[30px] font-bold text-white'>TITLE MOVIE</h2>
        </div>
    </main>
  )
}


export default FavoriteCard

/* quede en 50:18 de la clase del 05/01/23*/