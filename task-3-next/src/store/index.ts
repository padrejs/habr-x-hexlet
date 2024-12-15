import { configureStore } from "@reduxjs/toolkit";
import documentReducer from "./documentSlice";

export const store = configureStore({
    reducer: {
        documents: documentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
