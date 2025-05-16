function Card({ title, description, image, imageAlt }) {
  return (
    <div className="flex flex-col justify-center p-3 pb-6 gap-7 bg-white shadow-sm">
      {image && (
        <img
          src={image}
          alt={imageAlt ? imageAlt : "Card image"}
          className="w-72 aspect-[1/1]"
        />
      )}
      <span className="flex flex-col gap-2">
        {title && (
          <h3 className="justify-start text-stone-950 text-2xl font-bold">
            {title}
          </h3>
        )}
        <p className="opacity-50 justify-start text-stone-950 font-medium">
          {description}
        </p>
      </span>
    </div>
  );
}

export default Card;
