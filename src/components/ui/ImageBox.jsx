import React, { useRef, useState } from "react";

function ImageBox({ src, imageAlt, imageStyle, imageClass }) {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const img = imgRef.current;

    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const bgPosX = (mouseX / rect.width) * 100;
    const bgPosY = (mouseY / rect.height) * 100;

    // img.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    img.style.transform = `scale(1.2) translate(-${bgPosX / 7}px, -${
      bgPosY / 7
    }px)`;
  };

  const handleMouseDown = (e) => {
    const img = imgRef.current;
    img.style.transform = `scale(1)`;
  };

  return (
    <div
      className={`photo-container ${imageClass}`}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseDown}
    >
      <img src={src} alt={imageAlt || "Photo"} ref={imgRef} />
    </div>
  );
}

export default ImageBox;
