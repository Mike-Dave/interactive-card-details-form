import DateInput from "./DateInput";
import CardInput from "./CardInput";

export default function FormArea({
  cardHolderName,
  onCardHolderNameChange,
  nameError,
  onCardNumberChange,
  cardNumber,
  numberError,
  onMonthInputChange,
  onYearInputChange,
  month,
  redMonthError,
  redYearError,
  monthAndYearError,
  cvcInput,
  onCvcChange,
  cvcError,
}) {
  return (
    <form className="pt-24 mx-auto space-y-5">
      <CardInput
        label={"CARDHOLDER NAME"}
        placeholder={"e.g. Jane Appleseed"}
        onChange={onCardHolderNameChange}
        value={cardHolderName}
        type="text"
        nameError={nameError}
      >
        <p className="text-red font-spaceGrotesk">
          {nameError && "Can't be blank"}
        </p>
      </CardInput>
      <CardInput
        label={"CARD NUMBER"}
        placeholder={"e.g. 1234 5678 9123 0000"}
        onChange={onCardNumberChange}
        value={cardNumber}
        type="text"
        numberError={numberError}
      >
        <p className="text-red font-spaceGrotesk">
          {numberError && "Wrong format, numbers only"}
        </p>
      </CardInput>
      <div className="flex mx-6">
        <DateInput
          onMonthInputChange={onMonthInputChange}
          onYearInputChange={onYearInputChange}
          month={month}
          monthAndYearError={monthAndYearError}
          redMonthError={redMonthError}
          redYearError={redYearError}
        />
        <div className="space-y-2">
          <CardInput
            type="number"
            label={"CVC"}
            placeholder={"e.g. 123"}
            value={cvcInput}
            onChange={onCvcChange}
            cvcError={cvcError}
          >
            <p className="text-red font-spaceGrotesk">
              {cvcError && "Can't be blank"}
            </p>
          </CardInput>
        </div>
      </div>
      <div className="pt-1 mx-6 pb-6">
        <button className="p-3 text-center font-spaceGrotesk bg-veryDarkViolet text-white rounded-md w-[98%]">
          Confirm
        </button>
      </div>
    </form>
  );
}
