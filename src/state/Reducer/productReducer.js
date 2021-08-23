export const productReducer = (state = {
    product: ["shoes"]
}, action) => {
    console.log("state====>", state)
    if (action.type === "ADD_PRODUCT") {
        return {

            ...state,
            product: [...action.data],

        }
    }
    if (action.type === "REMOVE_PRODUCT") {
        const newData = state.product.filter((item) => item !== action.data)
        // state.product.pop();
        return {
            ...state,
            product: newData
            // product:state.product,
        }
    }
    return state;
}