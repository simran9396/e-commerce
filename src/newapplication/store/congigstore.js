import { combineReducers,createStore } from "redux";
import {Appreducer} from "../reducer/Appreducer"

export const configstore=()=>
 createStore(
     combineReducers({
        Appreducer
     }),
     
 )