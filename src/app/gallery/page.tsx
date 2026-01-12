import { Metadata } from 'next';
import GalleryContent from '@/components/GalleryContent';

export const metadata: Metadata = {
    title: 'Gallery | CodeQuest',
    description: 'Explore the moments of innovation, learning, and fun at CodeQuest. See our hackathons and workshops in action.',
};

export default function GalleryPage() {
    return <GalleryContent />;
}
