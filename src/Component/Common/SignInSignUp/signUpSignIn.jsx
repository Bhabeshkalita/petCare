import React, { useState } from 'react'
import SignIn from './signIn/signIn'
import SignUp from './signUp/signUp'
import style from './signUpSignIn.module.scss'

const SignUpSignIn = () => {
    const [showSignup , setShowSignup] = useState(false) ;
    const change = () => {
        setShowSignup(!showSignup)
    }
    return(
        <div className={style.SignUpSignIn}>
            <div className={`${showSignup ? style.SignUpSignIn_signin_hide : style.SignUpSignIn_signin }`} >
                <SignIn clicked={change} />
            </div>
            <div className={`${showSignup ? style.SignUpSignIn_signup_show : style.SignUpSignIn_signup }`}>
                <SignUp clicked={change} />
            </div>
        </div>
    )
}

export default SignUpSignIn