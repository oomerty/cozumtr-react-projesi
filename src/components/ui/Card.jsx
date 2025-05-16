function Card({ title, description, image, imageAlt }) {
  return (
    <div className="flex flex-col justify-center p-3 gap-8 bg-white shadow-sm">
      {image && (
        <img
          src={image}
          alt={imageAlt ? imageAlt : "Card image"}
          className="w-72 h-72"
        />
      )}
      <span className="flex flex-col gap-2">
        {title && <h3 className="font-semibold">{title}</h3>}
        <p>{description}</p>
      </span>
    </div>
  );
}

export default Card;
