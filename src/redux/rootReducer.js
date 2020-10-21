import { combineReducers } from "@reduxjs/toolkit";

import DataReducer from "./DataReducer";
import HeroReducer from "./HeroReducer";

const rootReducer = combineReducers({
    DataReducer: DataReducer,
    HeroReducer: HeroReducer,
});

export default rootReducer;
