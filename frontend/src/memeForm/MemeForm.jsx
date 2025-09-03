import React from "react";
import styles from "./memeForm.module.css";

function MemeForm({
    templates,
    selectedTemplate,
    onTemplateSelect,
    topText,
    onTopTextChange,
    bottomText,
    onBottomTextChange,
    onSubmit,
    isLoading,
}) {
    return (
        <div className={styles.main}>
            <div className={styles.gallery}>
                {templates.map((template) => (
                    <img
                        key={template.id}
                        src={template.src}
                        alt={template.id}
                        className={`${styles.photo} ${
                            selectedTemplate === template.id
                                ? styles.selected
                                : ""
                        }`}
                        onClick={() => onTemplateSelect(template.id)}
                    />
                ))}
            </div>

            <div className={styles.inputs}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="top text"
                    value={topText}
                    onChange={(e) => onTopTextChange(e.target.value)}
                    disabled={isLoading}
                />
                <input
                    className={styles.input}
                    type="text"
                    placeholder="bottom text"
                    value={bottomText}
                    onChange={(e) => onBottomTextChange(e.target.value)}
                    disabled={isLoading}
                />
            </div>

            <div className={styles.submit}>
                <button
                    className={styles.submitButton}
                    onClick={onSubmit}
                    disabled={isLoading || !selectedTemplate}
                >
                    {isLoading ? "generating..." : "generate"}
                </button>
            </div>
        </div>
    );
}

export default MemeForm;
