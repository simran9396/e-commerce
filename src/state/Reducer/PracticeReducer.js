 const PracticeReducer=(state={product:["shoes"]},action)=>{
    if (action.type===ADD_PRODUCT){
        return{
            ...state,product:[action.data,...state.product],
        }
    }

}