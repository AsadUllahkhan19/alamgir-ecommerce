const initialState = {
    items: []
} 

const reducerCart = (state =initialState, action) => {
    switch(action.type) {
        case "ADD_PRODUCT": {
            return {
                items:state.items.concat(action.item)
            }
        }
        case "REMOVE_PRODUCT": {
            const updatedArray = state.items.filter(result=>result._id !== action.resultID)
            return{
                ...state,
                items:updatedArray
            }
        }
        case "CHECK_OUT": {
            return {
                items:[]
            }
        }
        default: {
            return state;
        }
    }
}

export default reducerCart;