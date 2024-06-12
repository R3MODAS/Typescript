import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-white text-black px-5 py-3 text-lg font-bold">
      {children}
    </button>
  );
};

export default Button;
