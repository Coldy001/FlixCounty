import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
    loading: false,
    error: "",
};

const DataReducer = createSlice({
    name: "Data",
    initialState: initialState,
    reducers: {
        getPending: (state) => {
            state.loading = true;
        },
        getFullfilled: (state, { payload }) => {
            state.data = payload;
            state.loading = false;
            state.error = "";
        },
        getRejected: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
    },
});

const { getPending, getFullfilled, getRejected } = DataReducer.actions;

export default DataReducer.reducer;

export const fetchData = (url) => {
    return async (dispatch) => {
        dispatch(getPending());
        try {
            const request = await axios.get(url);
            dispatch(getFullfilled(request.data.results));
        } catch (error) {
            dispatch(getRejected(error));
        }
    };
};
