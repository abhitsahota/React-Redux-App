import axios from 'axios';

export const FETCHING = 'FETCING'
export const CALL_FAILURE = 'CALL_FAILURE'
export const CALL_SUCCESS = 'CALL_SUCCESS'

export const fetchRates = data => dispatch => {
    dispatch({ type: FETCHING });
    axios
        .get('https://api.exchangeratesapi.io/latest?base=CAD')
        .then(res => {
            console.log(res)
            dispatch({ 
                type: CALL_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({ 
                type: CALL_FAILURE, 
                payload: true
            })
        })
}