import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const Button = ({ type, autoFocus, ...rest }: ButtonProps) => {
  return (
    <button type={type} autoFocus={autoFocus} {...rest}>
      Click me!
    </button>
  );
};

export default Button;
