const initialState = {
    cart: [],
    counter: 0,
    previousOrders: [],
    address: ""
};

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                counter: state.cart.push(action.payload)
            }

        case "CHECKOUT":
            return {
                ...state,
                previousOrders: state.previousOrders.concat(action.payload),
                cart: state.cart.slice(0, 0)
            }
        case "SAVE_ADDRESS":
            return {
                ...state,
                address: action.payload
            }
        default: return state;
    }
}

export default Reducer;