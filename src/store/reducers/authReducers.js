const initialState = {
    login:false
}

const authReducers = (state = initialState, action) => {
    switch(action.type) {
        case "UPDATE_USER": {
            return {...state, login:action.login}
        }
        case "REMOVE_USER": {
            return {...state, login: false}
        }
        default: {
            return state;
        }
    }
}

export default authReducers;