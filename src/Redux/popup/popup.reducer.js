import { ActionTypes } from "./popup.actionTypes";

const INITIAL_STATE  = {
    display : false 
}

const popupReducer = ( state = INITIAL_STATE , action) => {
    switch (action.type){
        case ActionTypes.SHOW :
            return {
                ...state,
                display : true
            }
        case ActionTypes.HIDE :
            return {
                ...state,
                display : false
            }
        default :
            return state ;
    }
}

export default popupReducer ;