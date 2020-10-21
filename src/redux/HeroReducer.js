import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    hero: [],
    heroLoading: false,
    heroError: "",
};

const HeroReducer = createSlice({
    name: "Hero",
    initialState: initialState,
    reducers: {
        getPending: (state) => {
            state.loading = true;
        },
        getFullfilled: (state, { payload }) => {
            state.hero = payload;
            state.heroLoading = false;
            state.heroError = "";
        },
        getRejected: (state, { payload }) => {
            state.heroLoading = false;
            state.heroError = payload;
        },
    },
});

const { getPending, getFullfilled, getRejected } = HeroReducer.actions;

export default HeroReducer.reducer;

export const fetchHero = (url) => {
    return async (dispatch) => {
        dispatch(getPending());
        try {
            const request = await axios.get(url);
            const randNum = Math.round(
                Math.random() * request.data.results.length + 1
            );
            dispatch(getFullfilled(request.data.results[randNum]));
        } catch (error) {
            dispatch(getRejected(error));
        }
    };
};
