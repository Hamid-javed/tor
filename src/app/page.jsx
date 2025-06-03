// app/page.tsx
import { handleForm } from "./actions";

export default function Home() {
  return (
    <main>
      <h1>Contact Form</h1>
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
