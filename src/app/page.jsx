// app/page.tsx

import { handleForm } from "./actions";

export default function Home() {
  // Simple server-side JS code for testing:
  const serverMessage = `Server time: ${new Date().toLocaleString()}`;

  return (
    <main>
      <h1>Contact Form</h1>
      <p>{serverMessage}</p>
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
