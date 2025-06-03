// app/page.tsx

import { handleForm } from "./actions";

export const revalidate = 0; // <- add this to disable static caching

export default function Home() {
  // Server-side JS logic:
  const serverMessage = `Server time: ${new Date().toLocaleString()}`;

  const quotes = [
    "Keep it simple.",
    "Write clean code.",
    "Server components rock!",
    "No client JS needed here.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  const a = 5;
  const b = 7;
  const sum = a + b;

  return (
    <main>
      <h1>Contact Form</h1>
      <p>{serverMessage}</p>

      <p>
        <em>Random Quote: "{randomQuote}"</em>
      </p>

      <p>
        The sum of {a} + {b} is <strong>{sum}</strong>.
      </p>

      {sum > 10 ? (
        <p style={{ color: "green" }}>Sum is greater than 10!</p>
      ) : (
        <p>Sum is less than or equal to 10.</p>
      )}

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
