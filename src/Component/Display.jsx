import React, { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../../public/assets/assets.js'

const Display = () => {

  const displayRef = useRef();
  const location = useLocation();
  const isalbum = location.pathname.includes("album")
  const albumId = isalbum ? location.pathname.slice(-1) : "";
  const bgcolor = albumsData[Number(albumId)].bgColor;


  useEffect(()=>{
    if (isalbum) {
      displayRef.current.style.background = `linear-gradient(${bgcolor},#121212)`;  
    }
    else{
      displayRef.current.style.background = `#121212`;  
    }
  })  
  


  return (
    <div ref={displayRef}  className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] overflow-auto lg:w-[75%] lg:ml-0 '>
        <Routes>
            <Route path='/' element={<DisplayHome/>}/>
            <Route path='/album/:id' element={<DisplayAlbum/>}/>
        </Routes>
    </div>
  )
}

export default Display