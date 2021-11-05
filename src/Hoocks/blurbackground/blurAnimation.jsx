import React from 'react' ;
// import { connect } from 'react-redux';
import './blurStyle.scss'
// import {show, hide} from '../../Redux/popup/Popup.action'

const BlurAnimation = ({children, isBlur}) => {
    return(
        <div className={`${isBlur? 'blur' : ''}`} >
            {children}
        </div>
    )
}
// const mapDispatchToProps = dispatch =>({
//     show : () => dispatch(show()),
//     hide : () => dispatch(hide())
// })
export default BlurAnimation ;