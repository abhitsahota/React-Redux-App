import { CALL_FAILURE, CALL_SUCCESS, FETCHING } from '../actions/fetchRates'


const initialState = {
    isFetching: false,
    error: false,
    base: '',
    date: '',
    rates: {
        "CAD": null,
        "GBP": null,
        "EUR": null,
        "USD": null,
    }
}

export const currencyReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING:
            return {
                ...state,
                error: false,     
                isFetching: true,
            }
        case CALL_SUCCESS:
            return {
                ...state, 
                isFetching: false,
                base: '',
                date: '',
                rates: {
                    ...state.rates,
                    "CAD": null,
                    "GBP": null,
                    "EUR": null,
                    "USD": null,
                }
            }
        case CALL_FAILURE:
            return {
                ...state, 
                isFetching: false,
                error: action.payload,
                base: '',
                date: '',
                rates: {
                    "CAD": null,
                    "GBP": null,
                    "EUR": null,
                    "USD": null,
                } 
            }
        default: 
            return state;
    }
}