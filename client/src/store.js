
import {combineReducers} from "redux"
import reduser from './redusers'
import adminpanel from './redusers/visibl'
export default combineReducers( {
    reduser,
    adminpanel,
})