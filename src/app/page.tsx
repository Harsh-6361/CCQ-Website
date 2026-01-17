import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WebDevTeaser from '@/components/WebDevTeaser';
import About from '@/components/About';
import Mission from '@/components/Mission';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | CodeQuest',
  description: 'Welcome to CodeQuest. We cultivate curiosity, resilience, and creativity in students through world-class tech education and hackathons.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <WebDevTeaser />
      <About />
      <Mission />
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </main>
  );
}
