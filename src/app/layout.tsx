import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import HackathonRegisterButton from '@/components/HackathonRegisterButton';
import { SpeedInsights } from '@vercel/speed-insights/next';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://codequest.in'), // Replace with actual domain
  title: {
    default: 'CodeQuest | Empowering Young Innovators',
    template: '%s | CodeQuest',
  },
  description: 'CodeQuest empowers students with tech education, hackathons, and innovation workshops. Join the movement to Solve, Create, and Conquer.',
  keywords: ['CodeQuest', 'Hackathon', 'Coding for Kids', 'STEM Education', 'Innovation', 'Tech Workshops', 'Robotics'],
  authors: [{ name: 'CodeQuest Team' }],
  creator: 'CodeQuest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codequest.in',
    title: 'CodeQuest | Empowering Young Innovators',
    description: 'Join the brightest minds to tackle real-world challenges and build the future, one line of code at a time.',
    siteName: 'CodeQuest',
    images: [
      {
        url: '/logo.png', // Ideally a larger OG image
        width: 1200,
        height: 630,
        alt: 'CodeQuest - Solve. Create. Conquer.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeQuest | Empowering Young Innovators',
    description: 'Join the movement to Solve, Create, and Conquer.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} dark`}> 
      <body className="bg-gray-900 text-white font-poppins overflow-x-hidden">
        {children}
        <HackathonRegisterButton />
        <SpeedInsights />
      </body>
    </html>
  );
}