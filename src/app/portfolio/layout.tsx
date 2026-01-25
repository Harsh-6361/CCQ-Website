import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio | CodeQuest Agency',
    description: 'We build revenue-driven web apps and scalable mobile solutions for growing businesses.',
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
