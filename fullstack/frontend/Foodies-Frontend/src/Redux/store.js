import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as productReducer } from "./Products/reducer";
import authReducer from "./Authentication/authReducer";
import thunk from "redux-thunk";


import {reducer as admin} from "./Admin/reducer"

import { deletereducer } from './Admin/reducer';

import { update } from './Admin/reducer';



const rootReducer = combineReducers({ authReducer, productReducer
    ,admin ,deletereducer,update
});



export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
