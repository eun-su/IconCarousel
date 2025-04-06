import React, { useEffect, useRef } from 'react';
import './VanillaCarousel.css';

export default function VanillaCarousel() {
  const trackRef = useRef(null);

  const icons = [
    'icon1.svg', 'icon2.svg', 'icon3.svg',
    'icon4.svg', 'icon5.svg'
  ];

  useEffect(() => {
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    let x = 0;
    const speed = 1;

    function animate() {
      x -= speed;

      // 좌표가 절반보다 넘으면 강제로 순환시키기 (reset 아님)
      if (Math.abs(x) >= totalWidth) {
        x += totalWidth; // 여기! reset 아니고 shift
      }

      track.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track" ref={trackRef}>
        {[...icons, ...icons].map((icon, i) => (
          <img src={`/icons/${icon}`} alt={`icon-${i}`} key={i} />
        ))}
      </div>
    </div>
  );
}
