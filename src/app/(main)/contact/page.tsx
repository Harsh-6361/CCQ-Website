'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { submitContact } from '@/app/actions/contact';
import { Button, TextInput, Textarea } from 'flowbite-react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);

    setMessage(result.message);
    setLoading(false);
    e.currentTarget.reset();

    setTimeout(() => setMessage(''), 5000);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-900 py-12 px-4">
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h1 className="text-3xl font-bold text-white mb-6">Contact Us</h1>

          {message && (
            <div className="mb-4 p-4 bg-green-900 border border-green-700 rounded text-green-200">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <TextInput
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <TextInput
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <Textarea
                name="message"
                placeholder="Your message here..."
                rows={5}
                required
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
