import React, { useState,useEffect } from 'react'
import "./slide-show.css"
const SlideShow = () => {
    const [page,setPage]=useState(2);
    const [images,setImages]=useState([])
    let url =`https://api.rawg.io/api/games?key=0c19f259a8b84747bac453b4bd1bca6b&page=${page}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.results)
                setImages(data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    },[])
  return (
    <div className='slide-container'>
        {images.map((img,index)=>(
            <div key={img.id} className={`gamePoster img${index}`}><img src={img.background_image} alt="games" /> </div>
        ))}
    </div>
  )
}

export default SlideShow;