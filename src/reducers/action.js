import axios from "axios";

const url = '/data/data.json';
export const fetchTask = () => (dispatch) => {
    axios.get(url).then(function (resp) {
        dispatch({ type: 'FETCH_DATA', data: resp.data })
    })
}

export const filterData = (data) => (dispatch) => {
    dispatch({ type: 'FILTER_DATA', data })
}