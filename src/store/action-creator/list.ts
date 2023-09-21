import { Dispatch } from "redux";
import { ListAction, ListActionTypes } from "../../types/list";
import { Error } from "../../consts/error";

export const addItem = (item: Object): any => {
    return async (dispatch: Dispatch<ListAction>) => {
        try {
            dispatch({ type: ListActionTypes.ADD_ITEM, payload: item })
        } catch (err) {
            dispatch({ type: ListActionTypes.ERROR, payload: Error.ADD_ITEM })
        }
    }
}

export const addComment = (comment: Object): any => {
    return async (dispatch: Dispatch<ListAction>) => {
        try {
            dispatch({ type: ListActionTypes.ADD_COMMENT, payload: comment })
        } catch (err) {
            dispatch({ type: ListActionTypes.ERROR, payload: Error.ADD_COMMENT })
        }
    }
}

export const deleteItem = (itemId: number): any => {
    return async (dispatch: Dispatch<ListAction>) => {
        try {
            dispatch({ type: ListActionTypes.DELETE_ITEM, payload: itemId })
        } catch (err) {
            dispatch({ type: ListActionTypes.ERROR, payload: Error.DELETE_ITEM })
        }
    }
}


export const setActualItem = (id: number): any => {
    return async (dispatch: Dispatch<ListAction>) => {
        try {
            dispatch({ type: ListActionTypes.SET_ACTUAL_ITEM, payload: id })
        } catch (err) {
            dispatch({ type: ListActionTypes.ERROR, payload: Error.ADD_ITEM })
        }
    }
}