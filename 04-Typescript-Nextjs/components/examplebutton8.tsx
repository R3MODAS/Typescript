import { useEffect } from "react";

const Button = () => {
  //   const buttonTextOptions = [
  //     "Click me!",
  //     "Click me again!",
  //     "Click me one more time!",
  //   ] as const;

  //   type User = {
  //     name: string;
  //     id: number;
  //   }
  //   type Guest = Omit<User,"id">

  type ButtonColor = "red" | "blue" | "green";

  useEffect(() => {
    const prevButtonColor = localStorage.getItem("buttonColor") as ButtonColor;
  });

  return (
    <button className="bg-white text-black py-3 px-5 font-bold">
      Click me!
    </button>
  );
};

export default Button;
