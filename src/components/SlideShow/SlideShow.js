
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSlideShowImages } from '../../redux/slices/slideShowSlice';
import './slide-show.css';

const SlideShow = () => {
  const dispatch = useDispatch();
  const { images, page, status, error } = useSelector((state) => state.slideShow);

  useEffect(() => {
    dispatch(fetchSlideShowImages(page));
  }, [page, dispatch]);

  return (
    <div className='slide-container'>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {images.map((img, index) => (
        <div key={img.id} className={`gamePoster img${index}`}>
          <img src={img.background_image} alt="games" />
        </div>
      ))}
    </div>
  );
}

export default SlideShow;
