import React from "react";
import styles from "./resultDisplay.module.css";
import LoadingSpinner from "./LoadingSpinner";

function ResultDisplay({ isLoading, result }) {
    return (
        <div className={styles.main}>
            {isLoading && <LoadingSpinner />}

            {!isLoading && !result && (
                <div className={styles.placeholder}>
                    here yo meme is gonna appear
                </div>
            )}

            {!isLoading && result && (
                <>
                    <div className={styles.imageCard}>
                        <img
                            src={result.imageUrl}
                            alt="Generated Meme"
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.explanation}>
                        {result.explanation}
                    </div>
                </>
            )}
        </div>
    );
}

export default ResultDisplay;
