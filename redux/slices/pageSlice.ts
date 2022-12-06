import { createSlice } from "@reduxjs/toolkit";


export interface IPageState {
    page: string;
}

const initialState: IPageState = {
    page: "intro",
};

export const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload;
        }
    }
});

export const { setPage } = pageSlice.actions;

export default pageSlice.reducer;

