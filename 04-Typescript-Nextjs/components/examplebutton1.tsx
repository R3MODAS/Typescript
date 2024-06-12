// Defining props type
// type Color = "red" | "blue" | "green";

// type ButtonProps = {
//   backgroundColor: Color;
//   color: Color | "white";
//   fontSize: number;
//   padding: string;
//   text?: string;
//   users: string[];
// };

// const Button = ({
//   backgroundColor,
//   fontSize,
//   color,
//   padding,
//   text,
//   users
// }: ButtonProps) => {
//   return (
//     <button
//       style={{
//         backgroundColor,
//         fontSize,
//         color,
//         padding,
//       }}
//     >
//       {text ? text : "Default Text"}
//     </button>
//   );
// };

import { type CSSProperties } from "react";

type ButtonProps = {
  style: CSSProperties;
};

const Button = ({ style }: ButtonProps) => {
  return <button style={style}>Default Text</button>;
};

export default Button;
