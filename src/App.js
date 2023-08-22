import { useState } from "react";
import ImageContainer from "./ImageContainer";
import FormArea from "./FormArea";
import ThankYouCard from "./ThankYouCard";
export default function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberModified, setCardNumberModified] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const [cardHolderName, setCardHolderName] = useState("");
  const [cardHolderNameModified, setCardHolderNameModified] = useState(false);
  const [nameError, setNameError] = useState(false);

  const [month, setMonth] = useState("");
  const [monthModified, setMonthModified] = useState(false);
  const [monthAndYearError, setMonthAndYearError] = useState(false);

  const [year, setYear] = useState("");
  const [yearModified, setYearModified] = useState(false);

  const [cvcInput, setCvcInput] = useState("");
  const [cvcInputModified, setCvcInputModified] = useState(false);
  const [cvcError, setCvcError] = useState(false);

  const [submitted, setSubmitted] = useState(true);

  const [redMonthError, setRedMonthError] = useState(false);
  const [redYearError, setRedYearError] = useState(false);

  function handleCardNumber(e) {
    const enteredCardNum = e.target.value;
    setCardNumber(enteredCardNum);
    setCardNumberModified(true);

    const numericRegex = /[A-Za-z]/;

    if (enteredCardNum.match(numericRegex)) {
      setNumberError(true);
    } else {
      setNumberError(false);
    }

    if (enteredCardNum === "") {
      setCardNumberModified(false);
      setNumberError(false);
    }
  }

  function handleCardHolderName(e) {
    const enteredCardHolderName = e.target.value;
    setCardHolderName(enteredCardHolderName);
    setCardHolderNameModified(true);

    if (enteredCardHolderName === "") {
      setCardHolderNameModified(false);
    }
    setNameError(false);
  }

  function handleMonthInput(e) {
    const enteredMonthInput = e.target.value;
    setMonth(enteredMonthInput);
    setMonthModified(true);
    if (enteredMonthInput === "") {
      setMonthModified(false);
    }
    setMonthAndYearError(false);
    setRedMonthError(false);
  }
  function handleYearInput(e) {
    const enteredYearInput = e.target.value;
    setYear(enteredYearInput);
    setYearModified(true);
    if (enteredYearInput === "") {
      setYearModified(false);
    }
    setMonthAndYearError(false);
    setRedYearError(false);
  }
  function handleCvcInput(e) {
    const enteredCvc = e.target.value;
    setCvcInput(enteredCvc);
    setCvcInputModified(true);
    if (enteredCvc === "") {
      setCvcInputModified(false);
    }
    setCvcError(false);
  }
  function handleReset() {
    setCardNumberModified(false);
    setCardHolderNameModified(false);

    setCvcInputModified(false);

    setMonthModified(false);
    setYearModified(false);
    setCardNumber("");
    setCardHolderName("");
    setMonth("");
    setYear("");
    setCvcInput("");
    setSubmitted(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!cardNumber) {
      setNumberError(true);
      setCardNumberModified(false);
    }

    if (!cardHolderName) {
      setNameError(true);
      setCardHolderNameModified(false);
    }
    if (!cvcInput) {
      setCvcError(true);
      setCvcInputModified(false);
    }
    if (!month) {
      setMonthAndYearError(true);
      setMonthModified(false);
      setRedMonthError(true);
    }
    if (!year) {
      setMonthAndYearError(true);
      setYearModified(false);
      setRedYearError(true);
    }

    if (
      cardNumber &&
      cardHolderName &&
      cvcInput &&
      month &&
      year &&
      !numberError
    ) {
      setSubmitted(false);
    }
  }
  return (
    <div
      className="flex items-center justify-center flex-col md:flex-row md:min-h-screen overflow-hidden"
      onSubmit={handleSubmit}
    >
      <ImageContainer
        cardHolderName={cardHolderName}
        cardNumber={cardNumber}
        month={month}
        year={year}
        cvcInput={cvcInput}
        cardNumberModified={cardNumberModified}
        cardHolderNameModified={cardHolderNameModified}
        cvcInputModified={cvcInputModified}
        monthModified={monthModified}
        yearModified={yearModified}
      />
      {submitted ? (
        <FormArea
          cardHolderName={cardHolderName}
          onCardHolderNameChange={handleCardHolderName}
          nameError={nameError}
          onCardNumberChange={handleCardNumber}
          cardNumber={cardNumber}
          numberError={numberError}
          onMonthInputChange={handleMonthInput}
          onYearInputChange={handleYearInput}
          month={month}
          redMonthError={redMonthError}
          redYearError={redYearError}
          monthAndYearError={monthAndYearError}
          cvcInput={cvcInput}
          onCvcChange={handleCvcInput}
          cvcError={cvcError}
        />
      ) : (
        <ThankYouCard onReset={handleReset} />
      )}
    </div>
  );
}
