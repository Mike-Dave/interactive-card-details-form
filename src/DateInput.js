export default function DateInput({
  onMonthInputChange,
  onYearInputChange,
  month,
  year,
  monthAndYearError,
  redMonthError,
  redYearError,
}) {
  return (
    <div className="space-y-2">
      <p className="text-veryDarkViolet font-medium font-spaceGrotesk tracking-wider">
        Exp. Date (MM/YY)
      </p>
      <div className="flex gap-x-5">
        <input
          type="number"
          className={`outline outline-slate-200 focus:outline-veryDarkViolet placeholder:text-red-900 placeholder:p-2 placeholder:font-spaceGrotesk rounded-lg w-[70px] p-2 cursor-pointer ${
            redMonthError ? "outline-red" : ""
          }`}
          placeholder="MM"
          value={month}
          onChange={onMonthInputChange}
        />
        <input
          type="number"
          className={`outline outline-slate-200 focus:outline-veryDarkViolet placeholder:text-red-900 placeholder:p-2 placeholder:font-spaceGrotesk rounded-lg w-[70px] p-2 cursor-pointer ${
            redYearError ? "outline-red" : ""
          }`}
          placeholder="YY"
          value={year}
          onChange={onYearInputChange}
        />
      </div>
      <p className="text-red font-spaceGrotesk">
        {monthAndYearError && "Can't be blank"}
      </p>
    </div>
  );
}
