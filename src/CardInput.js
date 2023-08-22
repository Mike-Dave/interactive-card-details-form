export default function CardInput({
  label,
  placeholder,
  onChange,
  value,
  type,
  nameError,
  numberError,
  cvcError,
  children,
}) {
  const inputWidth = {
    width: "95%",
  };
  return (
    <div
      className={`space-y-2 mx-6 ${
        label === "CVC" ? "mx-0 w-[78%] md:w-[85%]" : ""
      }`}
    >
      <p className="text-veryDarkViolet font-medium font-spaceGrotesk tracking-wider">
        {label}
      </p>
      <input
        style={inputWidth}
        className={`outline outline-slate-200 focus:outline-veryDarkViolet placeholder:text-red-900 placeholder:p-2 placeholder:font-spaceGrotesk rounded-lg w-full p-2 cursor-pointer ${
          nameError || numberError || cvcError ? "outline-red" : ""
        }`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type}
      />
      {children}
    </div>
  );
}
