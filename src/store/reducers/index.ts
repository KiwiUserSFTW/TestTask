import { combineReducers } from "redux";
import { listReducer } from "./list";

export const rootReducers = combineReducers({
   list: listReducer 
})

export type RootState = ReturnType<typeof rootReducers>