import React from 'react' ;
import style from './Header.module.scss'

import headerImage from '../../../assets/image/Images/Home_page1.jpg'

const Header = () => {
    return(
        <div className={style.Header}>
            <div className={style.Header_content}>
                <h3>Nutrition has the power to transform pets' lives</h3>
                <p>The lives of animals and humans are interconnected in deep and complex ways. We know that when animals are healthy, humans are healther, too.</p>
                <button>Get Started</button>
            </div>
            <div className={style.Header_image}>
                <img src={headerImage} alt='headerImage' />
            </div>
        </div>
    )
}

export default Header ;