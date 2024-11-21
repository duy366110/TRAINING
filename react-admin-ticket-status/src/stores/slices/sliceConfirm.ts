import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isSave: false,
    message: '',
    value: false
}

const sliceConfirm = createSlice({
    name: "SLICE-CONFIRM",
    initialState,
    reducers: {
        open: (state, action) => {
            let { message, isSave } = action.payload;
            state.isOpen = true;
            state.message = message;
            state.isSave = isSave;
        },
        close: (state) => {
            state.isOpen = false;
            state.isSave = false;
            state.message = "";
            state.value = false;
        },
        approve: (state) => {
            state.isOpen = false;
            state.message = "";
            state.value = true;
        },
        clear: (state) => {
            state.value = false;
            state.isSave = false;
            state.message = "";
            state.value = true;
        }
    }
})

export const { open, close, approve, clear } = sliceConfirm.actions;
export default sliceConfirm.reducer;