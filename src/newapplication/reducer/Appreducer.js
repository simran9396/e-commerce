const initialState={
    groups:[
        {
          id:"1",
        email:"george.bluth@reqres.in",
        first_name:"George",
        last_name:"Bluth",
        
        },
        {
            id:"2",
        email:"janet.weaver@reqres.in",
        first_name:"Janet",
        last_name:"Weaver",
        },{
            id:"3",
        email:"emma.wong@reqres.in",
        first_name:"Emma",
        last_name:"Wong",
        }

    ]
}


export const Appreducer=(state=initialState,action)=>{
    switch (action.type){
        case "add_person":
            return{
                ...state,groups:[...state.groups]

    }
    default: return state
    }
    
}