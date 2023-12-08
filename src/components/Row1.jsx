import React, { useState,useEffect } from 'react'
import tmdbAxiosinstance from '../tmdvAxiosinstance'
import './Row1.css'

function Row1({title,fetchUrl}) {
  const [Allmovies,setAllmovies]=useState([])
  const base_url_img='https://image.tmdb.org/t/p/original'

    const fetchData=async()=>{
        const response=await tmdbAxiosinstance.get(fetchUrl)
        // console.log(response.data.results)
        setAllmovies(response.data.results)
    }
    // console.log(fetchUrl)
  //  fetchData()
  useEffect(()=>{
    fetchData()
  },[])
   console.log(Allmovies)

  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='movies-row'>
    {
      Allmovies?.map((item)=>(
        <img  className='movie' src={`${base_url_img}${item.backdrop_path}`} alt="no image" />
      ))
    }
        </div>
    </div>
  )
}

export default Row1