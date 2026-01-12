import { Metadata } from 'next';
import MissionContent from '@/components/MissionContent';

export const metadata: Metadata = {
    title: 'Our Mission | CodeQuest',
    description: 'CodeQuest is dedicated to empowering the next generation of innovators. Read about our story, philosophy, and core values.',
};

export default function MissionPage() {
    return <MissionContent />;
}
