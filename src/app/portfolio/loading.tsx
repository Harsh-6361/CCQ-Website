import Loader from './components/Loader';

export default function Loading() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center z-[100] relative">
            <Loader />
        </div>
    );
}
