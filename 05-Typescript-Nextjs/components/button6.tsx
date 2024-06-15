// type ButtonProps = {
//     type: "button" | "submit" | "reset";
//     color: "red" | "blue" | "green"
// }

// type SuperButtonProps = ButtonProps & {
//     size: "md" | "lg"
// }

interface ButtonProps {
  type: "button" | "submit" | "reset";
  color: "red" | "blue" | "green";
}

interface SuperButtonProps extends ButtonProps {
  size: "md" | "lg";
}

const Button = ({ type, color }: SuperButtonProps) => {
  return (
    <button className="bg-white text-black py-3 px-5 font-bold">
      Click me!
    </button>
  );
};

export default Button;
