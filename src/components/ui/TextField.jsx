function TextField({ type, required, placeholder }) {
  return (
    <input
      className="flex justify-center items-center w-full pt-6 pb-6 pl-8 pr-8 border-2 opacity-60 bg-white border-stone-950"
      type={type ? type : "text"}
      placeholder={placeholder}
      required={required}
    />
  );
}

export default TextField;
