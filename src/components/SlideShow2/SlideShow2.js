import React, { useState, useEffect } from 'react';
import "./slideshow2.css";

const SlideShow2 = () => {
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([]);
    let url = `https://api.rawg.io/api/games?key=0c19f259a8b84747bac453b4bd1bca6b&page=${page}`;
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.results);
                setImages(data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [page]);
    
    return (
        <div className='slide-container-rtl'>
            {images.map((img, index) => (
                <div key={img.id} className={`gamePoster-rtl img-rtl${index}`}>
                    <img src={img.background_image} alt="games" />
                </div>
            ))}
        </div>
    );
};

export default SlideShow2;
