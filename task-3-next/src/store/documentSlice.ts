import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Document {
    id: string;
    title: string;
    status: "in-progress" | "under-review" | "completed";
}

interface DocumentState {
    documents: Document[];
}

const initialState: DocumentState = {
    documents: [
        { id: "1", title: "Документ 1", status: "in-progress" },
        { id: "2", title: "Документ 2", status: "in-progress" },
        { id: "3", title: "Документ 3", status: "under-review" },
    ],
};

const documentSlice = createSlice({
    name: "documents",
    initialState,
    reducers: {
        addDocument: (state, action: PayloadAction<{ title: string }>) => {
            const newDocument: Document = {
                id: (state.documents.length + 1).toString(),
                title: action.payload.title,
                status: "in-progress",
            };
            state.documents.push(newDocument);
        },
        updateDocumentStatus: (
            state,
            action: PayloadAction<{ id: string; status: "in-progress" | "under-review" | "completed" }>
        ) => {
            const document = state.documents.find((doc) => doc.id === action.payload.id);
            if (document) {
                document.status = action.payload.status;
            }
        },
    },
});

export const { addDocument, updateDocumentStatus } = documentSlice.actions;
export default documentSlice.reducer;
