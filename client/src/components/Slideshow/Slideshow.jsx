import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Import your CSS file

const Slideshow = ({images}) => {
  const [slideIndex, setSlideIndex] = useState(1);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');
    if (n > slides.length)return setSlideIndex(1);
    if (n < 1) return setSlideIndex(slides.length);
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    setSlideIndex(n);
  };
  const bolControle = () => {
    const dots = [];
  
    for (let i = 0; i < images.length; i++) {
      dots.push(
        <span key={i} className="dot" onClick={() => currentSlide(i + 1)}></span>
      );
    }
  
    return dots;
  };
  
  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  return (
    <div className="slideshow-container">
        {
            images?.map((el,id)=>(
               <div className="mySlides fade">
        <div className="numbertext">{id+1} / {images?.length}</div>
        <img src={el.url} alt="Snow" style={{ width: '100%' }} />
        <div className="text">Caption Two</div>
      </div>  
            ))
        }
      <a className="prev" onClick={() => plusSlides(-1)}>
        ❮
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        ❯
      </a>

      <div style={{ textAlign: 'center' }}>
        {bolControle()}
      </div>
    </div>
  );
};

export default Slideshow;
