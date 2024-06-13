// const convertToArray = <T,>(value: T): T[] => {
//   return [value];
// };

// function convertToArray<T>(value: T): T[] {
//   return [value];
// }

// console.log(convertToArray(5));
// console.log(convertToArray("Hello"));

type ButtonProps<T> = {
  countValue: T;
  countHistory: T[];
};

// const Button = <T,>({ countValue, countHistory }: ButtonProps<T>) => {
//   return (
//     <button className="bg-white text-black py-3 px-5 font-bold">
//       Click me!
//     </button>
//   );
// };
// export default Button;

import { Color } from "@/utils/types";

export default function Button<T>({
  countValue,
  countHistory,
}: ButtonProps<T>) {
  return (
    <button className="bg-white text-black py-3 px-5 font-bold">
      Click me!
    </button>
  );
}
