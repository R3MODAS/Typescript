"use client";

import Button1 from "@/components/button1";
import Button2 from "@/components/button2";
import Button3 from "@/components/button3";
import Button4 from "@/components/button4";
import Button5 from "@/components/button5";
import Button6 from "@/components/button6";
import Button7 from "@/components/button7";
import Button8 from "@/components/button8";
import Button9 from "@/components/button9";
import Button10 from "@/components/button10";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-8 text-center my-12">
      <h1 className="text-2xl font-bold bg-white text-black px-5 py-2">
        Everything needed to learn Typescript !!!
      </h1>

      {/* =============== Props in Typescript =============== */}
      <div>
        <h2 className="mb-2">01 - Props in typescript</h2>
        {/* <Button backgroundColor="red" color="white" fontSize={20} padding="15px 30px" text="Custom Button" users={["Remo", "Ram", "Shyam"]} /> */}
        <Button1
          style={{
            backgroundColor: "red",
            color: "white",
            fontSize: "16px",
            padding: "10px 15px",
          }}
        />
      </div>

      {/* =============== Props (functions) in Typescript =============== */}
      <div>
        <h2 className="mb-2">02 - Function as props in typescript</h2>
        <Button2 handleClick={() => alert("Works")} />
      </div>

      {/* ============== Children in Typescript ============== */}
      <div>
        <h2 className="mb-2">03 - Children as props in typescript</h2>
        <Button3>Click me!</Button3>
      </div>

      {/* ============== Passing states in Typescript ============== */}
      <div>
        <h2 className="mb-2">04 - states as props in typescript</h2>
        <Button4 count={count} setCount={setCount} />
      </div>

      {/* ============== Passing props of any element (button, img) in Typescript ============== */}
      <div>
        <h2 className="mb-2">
          05 - How to button component without defining types of props
        </h2>
        <Button5
          type="button"
          autoFocus={true}
          defaultValue="test"
          className="bg-white text-black py-3 px-5 font-bold"
        />
      </div>

      {/* ============== Intersection and extends in Typescript ============== */}
      <div>
        <h2 className="mb-2">06 - Intersection and extends in interface</h2>
        <Button6 type="button" color="red" size="md" />
      </div>

      {/* ============== Handling events in Typescript ============== */}
      <div>
        <h2 className="mb-2">07 - How to handle events in typescript</h2>
        <Button7 />
      </div>

      {/* ============== Utility in Typescript ============== */}
      <div>
        <h2 className="mb-2">08 - Utilities in typescript</h2>
        <Button8 />
      </div>

      {/* ============== Generics in Typescript ============== */}
      <div>
        <h2 className="mb-2">09 - Generics in typescript</h2>
        <Button9 countValue={10} countHistory={[10, 20, 30]} />
      </div>

      {/* ============== Fetching data in Typescript ============== */}
      <div>
        <h2 className="mb-2">10 - Fetching data in typescript</h2>
        <Button10 />
      </div>
    </main>
  );
}
