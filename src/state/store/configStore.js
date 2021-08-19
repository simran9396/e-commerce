import {combineReducers, createStore} from "redux"

import { productReducer } from "../Reducer/productReducer"

export const configStore=()=>
   createStore(
        combineReducers({
            productReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
   )
