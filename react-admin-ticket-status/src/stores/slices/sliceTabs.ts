import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: {
        priority: {
            model: "priorities",
            show: true,
            index: 0,
        },
        default: {
            model: "defaults",
            show: false,
            index: 2,
        },
        status: {
            model: "status",
            show: true,
            index: 1,
        }
    }
}

const sliceTabs = createSlice({
    name: "SLICE-CONFIRM",
    initialState,
    reducers: {}
})

export default sliceTabs.reducer;