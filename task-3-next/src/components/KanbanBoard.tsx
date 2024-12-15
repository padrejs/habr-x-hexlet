import React, { useState } from "react";
import Column from "./Column";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { addDocument, updateDocumentStatus } from "@/store/documentSlice";
import styles from "./KanbanBoard.module.css";
import { Document } from "@/store/documentSlice";

const KanbanBoard: React.FC = () => {
    const documents = useSelector((state: RootState) => state.documents.documents);
    const dispatch = useDispatch();

    const [draggedDoc, setDraggedDoc] = useState<Document | null>(null);
    const [newDocTitle, setNewDocTitle] = useState("");

    const handleDragStart = (document: Document) => {
        setDraggedDoc(document);
    };

    const handleDrop = (status: "in-progress" | "under-review" | "completed") => {
        if (draggedDoc) {
            dispatch(updateDocumentStatus({ id: draggedDoc.id, status }));
            setDraggedDoc(null);
        }
    };

    const handleAddDocument = () => {
        if (newDocTitle.trim()) {
            dispatch(addDocument({ title: newDocTitle }));
            setNewDocTitle("");
        }
    };

    return (
    <div className={styles["board-container"]}>
      <div className={styles["add-document-container"]}>
                <input
                    type="text"
                    value={newDocTitle}
                    onChange={(e) => setNewDocTitle(e.target.value)}
                    placeholder="Введите название документа"
          className={styles.input}
                />
        <button onClick={handleAddDocument} className={styles.button}>
                    Добавить документ
                </button>
            </div>
      <div className={styles.columns}>
                <Column
                    title="В работе"
                    status="in-progress"
                    documents={documents.filter((doc) => doc.status === "in-progress")}
                    onDragStart={handleDragStart}
                    onDrop={handleDrop}
                />
                <Column
                    title="На проверке"
                    status="under-review"
                    documents={documents.filter((doc) => doc.status === "under-review")}
                    onDragStart={handleDragStart}
                    onDrop={handleDrop}
                />
                <Column
                    title="Завершено"
                    status="completed"
                    documents={documents.filter((doc) => doc.status === "completed")}
                    onDragStart={handleDragStart}
                    onDrop={handleDrop}
                />
            </div>
        </div>
    );
};

export default KanbanBoard;
