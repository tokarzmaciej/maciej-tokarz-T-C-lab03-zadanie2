import { USERS_GET_SUCCESS, USERS_POST_SUCCESS, USERS_PUT_SUCCESS } from '../types/users';

const users = (state = [], action) => {
    switch (action.type) {
        case USERS_GET_SUCCESS:
            return [
                ...action.payload,
            ]
        case USERS_POST_SUCCESS:
            return [
                action.payload,
                ...state
            ]
        case USERS_PUT_SUCCESS:
            return [
                ...state.map(user => {
                    if (user.id === action.payload.id) {
                        return action.payload
                    } else {
                        return user
                    }
                })
            ]
        default:
            return state
    }
}
export default users
