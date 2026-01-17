import type { Metadata } from 'next';
import PortfolioNavbar from './components/PortfolioNavbar';
import PortfolioFooter from './components/PortfolioFooter';
import '@/app/globals.css';
import styles from './portfolio-pattern.module.css';

export const metadata: Metadata = {
    title: 'Portfolio | C/CodeQuest',
    description: 'Showcasing our web development projects and capabilities.',
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-black min-h-screen text-gray-200 selection:bg-blue-500 selection:text-white relative">
            <div className={styles.portfolioBackground}></div>
            <div className="relative z-10">
                <PortfolioNavbar />
                {children}
                <PortfolioFooter />
            </div>
        </div>
    );
}
