import { Dispatch, SetStateAction } from "react";

interface ButtonProps {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

// type ButtonProps = {
//   count: number;
//   setCount: Dispatch<SetStateAction<number>>;
// };

const Button = ({ count, setCount }: ButtonProps) => {
  return (
    <button
      className="bg-white text-black py-3 px-5 font-bold"
      onClick={() => setCount(count + 1)}
    >
      Count: {count}
    </button>
  );
};

export default Button;
