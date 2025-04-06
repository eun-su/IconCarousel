import React, { useEffect, useRef } from 'react';
import './IconCarousel.css';

const icons = [
  'icon1.svg',
  'icon2.svg',
  'icon3.svg',
  'icon4.svg',
  'icon5.svg'
];

export default function IconCarousel() {
  const trackRef = useRef(null);
  const cloneRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const clone = cloneRef.current;
    let x = 0;
    const speed = 1;

    const animate = () => {
      x -= speed;
      if (Math.abs(x) >= track.scrollWidth) {
        x = 0;
      }

      track.style.transform = `translateX(${x}px)`;
      clone.style.transform = `translateX(${x + track.scrollWidth}px)`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track" ref={trackRef}>
        {icons.map((icon, i) => (
          <img src={`/icons/${icon}`} alt={`icon-${i}`} key={`a${i}`} />
        ))}
      </div>
      <div className="carousel-track" ref={cloneRef}>
        {icons.map((icon, i) => (
          <img src={`/icons/${icon}`} alt={`icon-clone-${i}`} key={`b${i}`} />
        ))}
      </div>
    </div>
  );
}
