import React, { useState,useEffect } from 'react'
import tmdbAxiosinstance from '../tmdvAxiosinstance'
import './Banner.css'

function Banner({fetchUrl}) {

    const [Allmovies,setAllmovies]=useState([])
    const base_url_img='https://image.tmdb.org/t/p/original'
  
      const fetchData=async()=>{
          const response=await tmdbAxiosinstance.get(fetchUrl)
          // console.log(response.data.results)
          setAllmovies(response.data.results[Math.floor(Math.random()*response.data.results.length)])
          console.log(Math.floor(Math.random()*response.data.results.length))
      }
      // console.log(fetchUrl)
    //  fetchData()
    useEffect(()=>{
      fetchData()
    },[])
     console.log(Allmovies)
  

  return (
    <div style={{height:'600px',width:'100%',backgroundImage:`url(${base_url_img}${Allmovies.backdrop_path})`,backgroundAttachment:'fixed',backgroundSize:'cover'}}>
        <div className='banner-content'>
            <h1>{Allmovies?.name}</h1>
            <h2>{Allmovies?.overview}...</h2>

        </div>
         
         
         
    </div>
  )
}

export default Banner