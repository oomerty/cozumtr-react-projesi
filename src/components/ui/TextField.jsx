function TextField({ type, required, placeholder, name }) {
  if (type === "textarea") {
    return (
      <textarea
        className="flex justify-center items-center w-full pt-6 pb-6 pl-8 pr-8 border-2 opacity-60 bg-white border-stone-950"
        placeholder={`${placeholder}${required && "*"}`}
        required={required}
        rows={3}
        name={name}
        id={name}
      />
    );
  }

  return (
    <input
      className="flex justify-center items-center w-full pt-6 pb-6 pl-8 pr-8 border-2 opacity-60 bg-white border-stone-950"
      type={type ? type : "text"}
      placeholder={`${placeholder}${required && "*"}`}
      required={required}
      name={name}
      id={name}
    />
  );
}

export default TextField;
