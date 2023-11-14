import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Card from './Card'
import songs from '../data'

function Home() {
  return (
    <>
    <Nav />
    <div className='grow p-10 flex gap-4 flex-wrap justify-around  bg-gradient-to-r from-orange-100 to-orange-600'>
          {songs.map((el,ind) => 
            {if (ind % 2 === 0) {
                return <Card song={el} bgcolor={'bg-sky-50'}/>
            } else {
                return <Card song={el} bgcolor={'bg-sky-200'}/>
            }}
            )}
    </div>
    <Footer />
    </>
  )
}

export default Home