"use client";

import Button1 from "@/components/examplebutton1";
import Button2 from "@/components/examplebutton2";
import Button3 from "@/components/examplebutton3";
import Button4 from "@/components/examplebutton4";
import Button5 from "@/components/examplebutton5";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-8 text-center">
      {/* =============== Props in Typescript =============== */}
      <div className="text-center">
        <h2>01 - Props in typescript</h2>
        {/* <Button backgroundColor="red" color="white" fontSize={20} padding="15px 30px" text="Custom Button" users={["Remo", "Ram", "Shyam"]} /> */}
        <Button1
          style={{
            backgroundColor: "red",
            color: "white",
            fontSize: "20px",
            padding: "15px 30px",
          }}
        />
      </div>

      {/* =============== Props (functions) in Typescript =============== */}
      <div>
        <h2>Function as props in typescript</h2>
        <Button2 handleClick={() => alert("Works")} />
      </div>

      {/* ============== Children in Typescript ============== */}
      <div>
        <h2>Children as props in typescript</h2>
        <Button3>Click me!</Button3>
      </div>

      {/* ============== Passing states in Typescript ============== */}
      <div>
        <h2>states as props in typescript</h2>
        <Button4 count={count} setCount={setCount} />
        <div>{count}</div>
      </div>

      {/* ============== Passing states in Typescript ============== */}
      <div>
        <h2>How to button component without defining types of props</h2>
        <Button5 />
      </div>
    </main>
  );
}
