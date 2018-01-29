import { SHOW_USERS, ERROR_USERS } from './../actions'

const initialState = {
    list: []
}

export function showUsers (state = initialState, action) {
    switch (action.type) {
        case SHOW_USERS: 
            return {...state, list: action.value}
        case ERROR_USERS:
            return {...state, list: null}
        default:
            return state
    }
}