function Button({ children, type, onClick }) {
  if (type === "hyperlink") {
    return (
      <button className="text-blue-500 underline" onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <button
      className="flex justify-center items-center w-full pt-6 pb-6 bg-stone-950 hover:bg-stone-900 transition-colors duration-300"
      onClick={onClick}
    >
      <p className="fy-start text-white text-xl font-medium">{children}</p>
    </button>
  );
}

export default Button;
