import React from "react";
interface InformationItem {
  heading: string;
  info: string;
}

const information: InformationItem[] = [
  {
    heading: "Be the Voice",
    info: "Let your circle know about the exceptional services at Atlas Vacation Rentals. When you find a potential new client, just use our easy-to-fill referral form here on our site to let us know.",
  },
  {
    heading: "Successful Referral Bonus",
    info: "Each eligible referral that turns into a signed contract with us means a $500 bonus for you. The sky's the limit – refer as many as you like!",
  },
  {
    heading: "Rewarding Your Efforts",
    info: "Once your referral joins the Atlas family, a $250 reward is immediately yours, with the remaining $250 following 30 days later. We keep a detailed record of your referrals. If you're one of our clients, we'll add it to your next invoice. If not, a check is on its way to you.",
  },
];
const HowItsWork = () => {
  return (
    <div className="flex gap-6 :w-full  md:max-w-[30rem] md:px-4  max-md:mt-6 flex-col max-md:gap-10 max-md:items-center ">
      <h1 className="text-4xl font-bold md:text-start  text-black">
        How it Works
      </h1>

      <div className="flex flex-col gap-10">
        {information.map((item, index) => (
          <div  key={index} className="space-y-2 border-2 max-w-[23rem] px-6 py-3 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-black">
              {index + 1}.{item.heading}
            </h3>
            <p className="text-[1.1rem] leading-snug">{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItsWork;
