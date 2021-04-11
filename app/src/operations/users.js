import { createAction, RSAA } from 'redux-api-middleware';
import {
    USERS_GET_FAILURE, USERS_GET_REQUEST, USERS_GET_SUCCESS,
    USERS_POST_FAILURE, USERS_POST_REQUEST, USERS_POST_SUCCESS,
    USERS_PUT_FAILURE, USERS_PUT_REQUEST, USERS_PUT_SUCCESS
} from "../types/users";

// GET Z ZADANIA 1

// export const getUsers = () => (dispatch) => dispatch(createAction({
//     endpoint: 'https://jsonplaceholder.typicode.com/users',
//     method: 'GET',
//     headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//     },
//     types: [
//         USERS_GET_REQUEST,
//         {
//             type: USERS_GET_SUCCESS,
//             payload: async (action, state, res) => {
//                 return res.json().then(json => json.map(user => ({
//                     id: user.id,
//                     name: user.name,
//                     username: user.username,
//                     email: user.email
//                 })))
//             }
//         },
//         USERS_GET_FAILURE]
// }
// ));


// GET Z ZADANIA 3
export const getUsers = () => ({
    [RSAA]: {
        endpoint: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        types: [
            USERS_GET_REQUEST,
            {
                type: USERS_GET_SUCCESS,
                payload: async (action, state, res) => {
                    return res.json().then(json => json.map(user => ({
                        id: user.id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    })))
                }
            },
            USERS_GET_FAILURE]
    }
})

export const postUser = (payload) => createAction({
    endpoint: 'https://jsonplaceholder.typicode.com/users',
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    types: [
        USERS_POST_REQUEST,
        USERS_POST_SUCCESS,
        USERS_POST_FAILURE]
}
);

export const putUser = (payload, id) => createAction({
    endpoint: `https://jsonplaceholder.typicode.com/users/${id}`,
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    types: [
        USERS_PUT_REQUEST,
        USERS_PUT_SUCCESS,
        USERS_PUT_FAILURE]
}
);