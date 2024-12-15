import React from "react";
import DocumentCard from "./DocumentCard";
import { Document } from "@/store/documentSlice";
import styles from "./Column.module.css";

interface ColumnProps {
    title: string;
    status: "in-progress" | "under-review" | "completed";
    documents: Document[];
    onDragStart: (document: Document) => void;
    onDrop: (status: "in-progress" | "under-review" | "completed") => void;
}

const Column: React.FC<ColumnProps> = ({ title, status, documents, onDragStart, onDrop }) => {
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = () => {
        onDrop(status);
    };

    return (
        <div
            className={styles.column}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <div className={styles["column-title"]}>{title}</div>
            <div>
                {documents.length === 0 && (
                    <div className={styles["no-documents"]}>Нет документов</div>
                )}
                {documents.map((doc) => (
                    <DocumentCard key={doc.id} document={doc} onDragStart={onDragStart} />
                ))}
            </div>
        </div>
    );
};

export default Column;
