import React from "react";
import { Document } from "@/store/documentSlice";
import styles from "./DocumentCard.module.css";

interface DocumentCardProps {
    document: Document;
    onDragStart: (document: Document) => void;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document, onDragStart }) => {
    const handleDragStart = () => {
        onDragStart(document);
    };

    return (
        <div
            className={styles.document}
            draggable
            onDragStart={handleDragStart}
        >
            {document.title}
        </div>
    );
};

export default DocumentCard;
