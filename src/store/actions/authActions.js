const updateUser = (user) => {
    return {
        type: "UPDATE_USER",
        user
    }
}

const updateCart = (cart) => {
    return {
        type: "ADD_PRODUCT",
        cart
    }
}

const removeUser = () => {
    return {
        type: "REMOVE_USER"
    }
}

export {
    updateUser,
    removeUser,
    updateCart
}