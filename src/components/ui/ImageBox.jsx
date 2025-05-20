import React, { useRef, useState } from "react";

function throttle(fn, wait) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

function ImageBox({ src, imageAlt, imageStyle, imageClass }) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const throttledMouseMove = useRef(
    throttle((e) => {
      const container = containerRef.current;
      const img = imgRef.current;
      if (!container || !img) return;

      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      const bgPosX = (mouseX / rect.width) * 100;
      const bgPosY = (mouseY / rect.height) * 100;

      img.style.transform = `scale(1.2) translate(-${bgPosX / 7}px, -${
        bgPosY / 7
      }px)`;
    }, 30) // 30ms throttle interval
  ).current;

  const handleMouseDown = (e) => {
    const img = imgRef.current;
    img.style.transform = `scale(1)`;
  };

  return (
    <div
      className={`photo-container ${imageClass}`}
      ref={containerRef}
      onMouseMove={throttledMouseMove}
      onMouseLeave={handleMouseDown}
    >
      <img src={src} alt={imageAlt || "Photo"} ref={imgRef} />
    </div>
  );
}

export default ImageBox;
