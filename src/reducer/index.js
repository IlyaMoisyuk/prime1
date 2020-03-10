import basket from "./basket";
import items from "./items";

import {combineReducers} from "redux";
const reduces = combineReducers({
    basket,items
})

export default reduces;