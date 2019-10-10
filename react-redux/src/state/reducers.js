import * as types from './actionTypes';

const initState = {
    quote: '',
    loading: true,
    error: ''
}


export function quoteReducer(state = initState, action){
    switch(action.type){
        case types.GET_QUOTE:
            return {...state, quote: action.payload.quote }
        default: 
        return state;
    }
}