// app/page.tsx
import { useState } from "react";
import { handleForm } from "./actions";

export default function Home() {
  const [hello, sethello] = useState("second");

  return (
    <main>
      <h1>Contact Form {hello}</h1>
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
