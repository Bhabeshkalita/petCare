import { combineReducers } from 'redux' ;

import popupReducer from './popup/popup.reducer'

const rootReducer = combineReducers({
    popUp : popupReducer
})

export default rootReducer ;