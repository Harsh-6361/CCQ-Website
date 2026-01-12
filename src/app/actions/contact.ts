'use server';

export async function submitContact(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  console.log('Contact form submission:', { name, email, message });

  return {
    success: true,
    message: 'Thank you for reaching out! We will get back to you soon.',
  };
}
