import React from 'react' ;
import style from './homepage.module.scss';

import Footer from '../../Component/Common/Footer/footer';
import NavBar from '../../Component/Common/NavBar/navBar';
import Header from '../../Component/Home/Header/Header';
import LostFound from '../../Component/Home/LostFound/LostAndFound';
import OurService from '../../Component/Home/ourService/ourService';
import BlurAnimation from '../../Hoocks/blurbackground/blurAnimation';
import SignIn from '../../Component/Common/SignIn/signIn';
import { connect } from 'react-redux';
import SignUpSignIn from '../../Component/Common/SignInSignUp/signUpSignIn';

const HomePage = (props) => {
    return(
        <div className={style.homePage}>
            {
                props.display
                ? <SignUpSignIn />
                : null
            }
            <BlurAnimation isBlur={ props.display ? true : false } >
                <NavBar />
                <Header />
                <OurService />
                <LostFound />
                <Footer />
            </BlurAnimation>            
        </div>
    )
}

const mapStateToProps = ({popUp: {display}}) => ({
    display
})


export default connect( mapStateToProps )(HomePage) ;