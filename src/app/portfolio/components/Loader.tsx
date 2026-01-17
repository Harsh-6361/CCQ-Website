import styles from './loader.module.css';

export default function Loader() {
    return (
        <div className="flex items-center justify-center min-h-[50vh] w-full">
            <div className={styles.loader}></div>
        </div>
    );
}
