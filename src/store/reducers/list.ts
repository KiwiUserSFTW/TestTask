import { ListAction, ListActionTypes, ListState } from "../../types/list";

const savedData = localStorage.getItem('data');
const savedActualItem = localStorage.getItem('actualItem');

const getInitialState = () => {
    if (!savedData || !savedActualItem) {
        return {
            data: [{ id: 1, name: "Test", comments: [] }],
            actualItem: 1,
            error: null
        }
    }
    return {
        data: JSON.parse(savedData),
        actualItem: JSON.parse(savedActualItem),
        error: null
    }

}
const initialState: ListState = getInitialState();

export const listReducer = (state: ListState = initialState, action: ListAction): ListState => {
    localStorage.setItem('data', JSON.stringify(state.data));
    localStorage.setItem('actualItem', JSON.stringify(state.actualItem));

    switch (action.type) {
        case ListActionTypes.ADD_ITEM:
            return { ...state, data: [...state.data, action.payload] }
        case ListActionTypes.ADD_COMMENT:
            const updatedDataComments = state.data.reduce((arr, e) => {
                if (e.id == action.payload.id) {
                    e.comments.push({
                        id: action.payload.id + "-" + e.comments.length,
                        value: action.payload.value,
                        color: action.payload.color
                    });
                    arr.push(e)
                    return arr
                }
                arr.push(e);
                return arr
            }, []);
            return { ...state, data: updatedDataComments }
        case ListActionTypes.DELETE_ITEM:
            const updatedData = state.data.reduce((arr, e) => {
                if (e.id != action.payload) {
                    arr.push(e)
                }
                return arr
            }, []);

            return { ...state, data: updatedData }
        case ListActionTypes.SET_ACTUAL_ITEM:
            return { ...state, actualItem: action.payload }

        default:
            return state;
    }
}