function Section({ children, className, title, titleStyle }) {
  return (
    <div
      className={`${className} flex flex-col gap-16 pl-[10%] md:pl-[15%] pr-[10%] md:pr-[15%] pt-16 md:pt-24 pb-16 md:pb-24`}
    >
      {title && (
        <h2 className={`text-stone-950 text-3xl font-bold ${titleStyle}`}>
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}

export default Section;
