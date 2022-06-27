export const addToCart = (book) => {
    return {
        type: "ADD",
        payload: book
    }
}

export const checkOutOrder = (cart) => {
    return {
        type: "CHECKOUT",
        payload: cart
    }
}

export const saveMyAddress = (address) => {
    return{
        type: "SAVE_ADDRESS",
        payload: address
    }
}