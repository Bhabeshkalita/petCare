import React from 'react'
import { Link } from 'react-router-dom'
import style from './signUp.module.scss'
import signUpImage from '../../../../assets/image/Images/Register.png'
import google from '../../../../assets/image/Social_Media_icons/google.png'
import facebook from '../../../../assets/image/Social_Media_icons/facebook.png'
import { connect } from 'react-redux'
import {show, hide} from '../../../../Redux/popup/Popup.action'

const SignUp = (props) => {
    return(
        <div className={style.signup}>
            <div className={style.signup_image}>
                <img src={signUpImage} alt='signinImage' />
            </div>
            <div className={style.signup_form}>
                <div className={style.signup_form_close}>
                    <p onClick={()=>{props.hide()}}>close</p>
                </div>
                <div className={style.signup_form_input}>                    
                    <h4>SignUp</h4>
                    <div className={style.signup_form_input_flex}>
                        <div className={style.signup_form_input_item +' , '+ style.signup_form_input_flex_width  }>
                            <input className={style.signup_form_input_item_input} name='name' />
                            <label className={style.signup_form_input_item_label}>Name</label>
                        </div>
                        <div className={style.signup_form_input_item +' , '+ style.signup_form_input_flex_width }>
                            <input className={style.signup_form_input_item_input} name='gender' />
                            <label className={style.signup_form_input_item_label}>Gender</label>
                        </div>
                    </div>
                    <div className={style.signup_form_input_item}>
                        <input className={style.signup_form_input_item_input} name='email' />
                        <label className={style.signup_form_input_item_label}>Email id</label>
                    </div>
                    <div className={style.signup_form_input_item}>
                        <input className={style.signup_form_input_item_input} name='password' />
                        <label className={style.signup_form_input_item_label}>Password</label>
                    </div>
                    <div className={style.signup_form_input_flex}>
                        <div className={style.signup_form_input_item +' , '+ style.signup_form_input_flex_width}>
                            <input className={style.signup_form_input_item_input} name='city' />
                            <label className={style.signup_form_input_item_label}>City</label>
                        </div>
                        <div className={style.signup_form_input_item +' , '+ style.signup_form_input_flex_width}>
                            <input className={style.signup_form_input_item_input} name='Phone number' />
                            <label className={style.signup_form_input_item_label}>Phone No.</label>
                        </div>
                    </div>
                    <div className={style.signup_form_input_or}>
                        <p>or</p>
                    </div>
                    <div className={style.signup_form_input_social}>
                        <Link to='/'><img src={google}  alt='socialIcon'/></Link>
                        <Link to='/'><img src={facebook}  alt='socialIcon'/></Link>
                    </div>
                    <div className={style.signup_form_input_loginButton}>
                        <button >Register</button>
                    </div>
                    <div className={style.signup_form_input_createAccount}>
                        <p>Have an Account? <span><Link to='/' onClick={()=>{props.clicked()}}>SignIn Now</Link></span></p>
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
export default connect(null , mapDispatchToProps)(SignUp) ;