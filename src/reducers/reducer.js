const initialState = {
    data: [],
}


export const dataReducer = function (state = { ...initialState }, action) {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, data: action.data };
        default:
            return { ...state };
    }
}