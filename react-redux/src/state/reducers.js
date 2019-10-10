import * as types from './actionTypes';

const initState = 'test worked';

export function testReducer(state = initState, action){
    switch(action.type){
        default: 
        return state;
    }
}