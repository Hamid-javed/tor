// app/page.tsx
"use client";

import { useState } from "react";
import { handleForm } from "./actions";

export default function Home() {
  const [hello, sethello] = useState("second");
  console.log(hello);
  return (
    <main>
      <h1 onClick={() => sethello("third")}>Contact Form {hello}</h1>
      <form action={handleForm} method="POST">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" required />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
