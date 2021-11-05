import React from 'react'
import { Link } from 'react-router-dom'
import style from './signin.module.scss'
import signInImage from '../../../assets/image/Images/Logjn.jpg'
import google from '../../../assets/image/Social_Media_icons/google.png'
import facebook from '../../../assets/image/Social_Media_icons/facebook.png'
import { connect } from 'react-redux'
import {show, hide} from '../../../Redux/popup/Popup.action'

const SignIn = (props) => {
    return(
        <div className={style.signin}>
            <div className={style.signin_image}>
                <img src={signInImage} alt='signinImage' />
            </div>
            <div className={style.signin_form}>
                <div className={style.signin_form_close}>
                    <p onClick={()=>{props.hide()}}>close</p>
                </div>
                <div className={style.signin_form_input}>                    
                    <h4>Login</h4>
                    <div className={style.signin_form_input_item}>
                        <input className={style.signin_form_input_item_input} name='email' />
                        <label className={style.signin_form_input_item_label}>Phone no./ Email id</label>
                    </div>
                    <div className={style.signin_form_input_item}>
                        <input className={style.signin_form_input_item_input} name='password' />
                        <label className={style.signin_form_input_item_label}>Password</label>
                    </div>
                    <div className={style.signin_form_input_forgotLink}>
                        <Link>Forgot Password</Link>
                    </div>
                    <div className={style.signin_form_input_or}>
                        <p>or</p>
                    </div>
                    <div className={style.signin_form_input_social}>
                        <Link to='/'><img src={google}  alt='socialIcon'/></Link>
                        <Link to='/'><img src={facebook}  alt='socialIcon'/></Link>
                    </div>
                    <div className={style.signin_form_input_loginButton}>
                        <button>Login</button>
                    </div>
                    <div className={style.signin_form_input_createAccount}>
                        <p>New to petcare? <span><Link to='/'>Create Account</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    )
} 
const mapDispatchToProps = dispatch =>({
        show : () => dispatch(show()),
        hide : () => dispatch(hide())
    })
export default connect(null , mapDispatchToProps)(SignIn) ;