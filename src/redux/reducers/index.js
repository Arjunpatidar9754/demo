import {combineReducers} from 'redux'
import ThemeOptions from '../../reducers/ThemeOptions';
import auth from './authReducer'
import token from './tokenReducer'
import users from './usersReducer'



export default combineReducers({
    auth,
    token,
    users,
    ThemeOptions
})