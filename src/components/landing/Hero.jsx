function Hero() {
  return (
    <div className="flex flex-col justify-center items-center bg-yellow-400 bg-[url(./img/hero-shape.webp)] w-full h-screen overflow-hidden">
      <span className="w-4/5 lg:w-3/5 h-full justify-center items-center flex flex-col">
        <h1 className="text-center text-stone-950 font-bold leading-tight text-5xl lg:text-7xl md:text-6xl">
          Let's create someting great together.
        </h1>
      </span>
      <span className="flex flex-row justify-center">
        <img src="./img/hero-hands-2.webp" alt="Animated figure hands" />
        <img src="./img/hero-hands-1.webp" alt="Animated figure hands" />
      </span>
    </div>
  );
}

export default Hero;
