import iconComplete from "./images/icon-complete.svg";

export default function ThankYouCard({ onReset }) {
  return (
    <div className="pt-24  mx-auto  space-y-8 md:pt-0">
      <img
        className="mx-auto w-[70px]"
        src={iconComplete}
        alt="mobile background"
      />
      <div className="space-y-2">
        <h1 className="text-center font-spaceGrotesk text-veryDarkViolet text-2xl tracking-wider mb-">
          THANK YOU!
        </h1>
        <p className="text-center font-spaceGrotesk text-darkGrayishViolet pt-">
          We've added your card details
        </p>
      </div>
      <button
        className="mx- p-3 px-20 text-center font-spaceGrotesk bg-veryDarkViolet text-white rounded-md px- w-[350px]"
        onClick={onReset}
      >
        Continue
      </button>
    </div>
  );
}
