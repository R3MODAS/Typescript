"use client";

type ButtonProps = {
  handleClick: () => void;
};

const Button = ({ handleClick }: ButtonProps) => {
  return <button className="bg-white text-black py-3 px-5 font-bold" onClick={handleClick}>Button</button>;
};

export default Button;
