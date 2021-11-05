import React from 'react' ;
import style from './footer.module.scss'

import facebook from '../../../assets/image/Social_Media_icons/facebook.png' ;
import insta from '../../../assets/image/Social_Media_icons/instagram.png'
import twitter from '../../../assets/image/Social_Media_icons/twitter.png'
import whatsapp from '../../../assets/image/Social_Media_icons/whatsapp.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className={style.footer}>
            <div className={style.footer_social}>
                <div className={style.footer_social_heading}>
                    <h3>Logo</h3>
                    <p>Start up details</p>
                </div>
                <div className={style.footer_social_icon}>
                    <div className={style.footer_social_icon_container}><Link to='/'><img src={facebook} alt='Footer_logo' /></Link></div>
                    <div className={style.footer_social_icon_container}><Link to='/'><img src={insta} alt='Footer_logo' /></Link></div>
                    <div className={style.footer_social_icon_container}><Link to='/'><img src={twitter} alt='Footer_logo' /></Link></div>
                    <div className={style.footer_social_icon_container}><Link to='/'><img src={whatsapp} alt='Footer_logo' /></Link></div>
                </div>
            </div>
            <div className={style.footer_newsletter}>
                <h3>Join a Newsletter</h3>
                <p>Your Email</p>
                <input type='text' placeholder='Enter Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
} 

export default Footer ;