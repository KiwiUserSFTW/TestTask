export interface ListState {
    data: any[],
    actualItem:number,
    error: null | string
}

export enum ListActionTypes {
    ADD_ITEM = "ADD_ITEM",
    ADD_COMMENT = "ADD_COMMENT",
    DELETE_ITEM = "DELETE_ITEM",
    DELETE_COMMENT = "DELETE_COMMENT",
    SET_ACTUAL_ITEM = "SET_ACTUAL_ITEM",
    ERROR = "ERROR"
}

interface AddItem {
    type: ListActionTypes.ADD_ITEM;
    payload: Object;
}

interface AddComment {
    type: ListActionTypes.ADD_COMMENT;
    payload: any;
}

interface DeleteItem {
    type: ListActionTypes.DELETE_ITEM;
    payload: Object;
}

interface DeleteComment {
    type: ListActionTypes.DELETE_COMMENT;
    payload: Object;
}

interface Error {
    type: ListActionTypes.ERROR;
    payload: string
}

interface setActualNumber {
    type: ListActionTypes.SET_ACTUAL_ITEM;
    payload:number
}
export type ListAction = AddItem | AddComment | DeleteItem | DeleteComment | Error | setActualNumber;