import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isSave: false,
    message: '',
    title: "",
    value: false
}

const sliceConfirm = createSlice({
    name: "SLICE-CONFIRM",
    initialState,
    reducers: {
        open: (state, action) => {
            let { message, isSave, title } = action.payload;
            state.isOpen = true;
            state.message = message;
            state.isSave = isSave;
            state.title = title;
        },
        close: (state) => {
            state.isOpen = false;
            state.isSave = false;
            state.message = "";
            state.value = false;
            state.title = "";
        },
        approve: (state) => {
            state.isOpen = false;
            state.message = "";
            state.value = true;
            state.title = "";
        },
        clear: (state) => {
            state.value = false;
            state.isSave = false;
            state.message = "";
            state.value = false;
            state.title = "";
        }
    }
})

export const { open, close, approve, clear } = sliceConfirm.actions;
export default sliceConfirm.reducer;