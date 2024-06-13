"use client";

import { MouseEvent, useRef, useState } from "react";

const Button = () => {
  const [text, setText] = useState<string>("Hello");

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
    setText(text === "Hello" ? "Hi" : "Hello");
    buttonRef.current!.innerText = "This works";
  };

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className="bg-white text-black py-3 px-5 font-bold"
    >
      Events
    </button>
  );
};

export default Button;
