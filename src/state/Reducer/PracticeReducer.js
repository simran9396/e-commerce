const PracticeREducer = (state = {
    product: ["shoes"]
}, action) => {
    if (action.type = "ADD_PRODUCT") {
        return {
            ...state,
            product: [...action.data]
        }

    }
    if (action.type = "REMOVE_PRODUCT") {
        const newdata = state.product.filter((item) => item !== action.data)
        return {
            ...state,
            product: newdata
        }
    }
    return state
}