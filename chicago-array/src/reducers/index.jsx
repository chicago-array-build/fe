import LOGIN_START from '../actions';

const initialState = {
    unknownfornow: [],
    username: '',
    password: '',
    loggingIn: false,
}


export default function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN_START:
        return {
            ...state,
            loggingIn: true,
        }
    default: return state
    }
}