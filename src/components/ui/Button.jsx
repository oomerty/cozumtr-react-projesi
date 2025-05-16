function Button({ children, type, onClick }) {
  if (type === "hyperlink") {
    return (
      <button className="text-blue-500 underline" onClick={onClick}>
        {children}
      </button>
    );
  }

  return <button></button>;
}

export default Button;
