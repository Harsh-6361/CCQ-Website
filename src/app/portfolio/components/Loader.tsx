export default function Loader() {
    return (
        <div className="flex items-center justify-center min-h-[50vh] w-full">
            <div className="relative w-24 h-24">
                <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full opacity-20"></div>
                <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
            </div>
        </div>
    );
}
