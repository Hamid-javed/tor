// app/actions.ts
'use server';

export async function handleForm(formData: FormData) {
  const name = formData.get('name');
  const message = formData.get('message');

  console.log('Received:', { name, message });

  // You can store it in DB or process it here
}
