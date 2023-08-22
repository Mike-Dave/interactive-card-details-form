import frontCard from "./images/bg-card-front.png";
import backCard from "./images/bg-card-back.png";
import mobileBackground from "./images/bg-main-mobile.png";
import desktopBackground from "./images/bg-main-desktop.png";
import cardLogo from "./images/card-logo.svg";

export default function ImageContainer({
  cardHolderName,
  cardHolderNameModified,
  cardNumber,
  cardNumberModified,
  month,
  monthModified,
  year,
  yearModified,
  cvcInput,
  cvcInputModified,
}) {
  return (
    <div className="relative">
      <img
        className="w-full md:hidden"
        src={mobileBackground}
        alt="purple and reddish-purple color blending together"
      />
      <img
        className="hidden md:block"
        src={desktopBackground}
        alt="purple and reddish-purple color blending together"
      />
      <img
        className="absolute top-9 right-3.5 w-[300px] md:top-[30rem] md:-right-40 "
        src={backCard}
        alt="back of a bank credit or debit card"
      />
      <p className="absolute top-[6.5rem] right-14 text-white  md:top-[34.3rem] md:-right-28">
        {cvcInputModified ? cvcInput : "000"}
      </p>
      <img
        className="absolute top-32 left-5 w-[300px] md:top-[16rem] md:left-72 "
        src={frontCard}
        alt="front of a bank credit or debit card"
      />
      <img
        className="absolute top-36 left-10 w-[60px] md:top-[17.5rem] md:left-[19rem]"
        src={cardLogo}
        alt="white logo of the bank card"
      />

      <div className="absolute text-white left-10 -bottom-9 font-spaceGrotesk space-y-3 md:left-[19rem] md:top-[21rem] w-[80%]">
        <p className="text-[1.4rem] left-10 md:top-[22rem] md:left-[20rem]">
          {cardNumberModified ? cardNumber : "0000 0000 0000 0000"}
        </p>
        <div className="flex gap-x-20">
          <p className="text-sm ">
            {cardHolderNameModified ? cardHolderName : "JANE APPLESEED"}
          </p>
          <p>
            {monthModified ? month : "00"}/{yearModified ? year : "00"}
          </p>
        </div>
      </div>
    </div>
  );
}
