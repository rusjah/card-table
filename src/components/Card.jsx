import React from 'react'

function Card({song}) {
  return (
    <div className="card w-96 h-[30vh] bg-base-100 shadow-xl opacity-80 border-4 border-orange-950">
    <div className="card-body w-full">
        <h2 className="card-title text-orange-950">{song.name} by {song.artist}</h2>
        <p className='text-orange-800 text-lg'> Release was on {song.day}.{song.month}.{song.year} </p>
        <p className='text-orange-400 text-lg'> Duration: {song.duration} </p>
        <div className="card-actions justify-end">
        <button className="btn bg-orange-950 text-white font-bold">Listen...</button>
        </div>
    </div>
    </div>
  )
}

export default Card