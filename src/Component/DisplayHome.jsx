import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../../public/assets/assets.js'
import AlbumItem from './AlbumItem'
import Songitem from './Songitem'

const DisplayHome = () => {
  return (
    <>
    <Navbar/>
    <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl text-white'>Featured Charts</h1>
      <div className="flex overflow-auto ">
      {albumsData.map((items,index)=>(<AlbumItem key={index} name={items.name} id={items.id} desc={items.desc} image={items.image}/>))}
      </div>
      </div>

      <div className='mb-4'>
      <h1 className='my-5 font-bold text-2xl text-white'>Today's Biggest Hit's</h1>
      <div className="flex overflow-auto ">
      {songsData.map((items,index)=>(<Songitem key={index} name={items.name} image={items.image} id={items.id} desc={items.desc}/>))}
      </div>
      </div>
    </>
  )
}

export default DisplayHome