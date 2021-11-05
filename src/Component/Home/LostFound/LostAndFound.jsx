import React from 'react' ;
import style from './lostfound.module.scss'

import lostImage from '../../../assets/image/Images/Home_page2.jpg'

const LostFound = () => {
    return(
        <div className={style.lostFound}>
            <div className={style.lostFound_content}>
                <h3>Lost and Found</h3>
                <p className={style.lostFound_content_p1}>If your pet has recently gone messign, or you've found and animal that may belong to someone, it's critical that you alert your neighbors as quickely as possible and take proper steps that may lead to a happy reunion. </p>
                <p className={style.lostFound_content_p2}>Below, you have to report on actions to take if you've lost a pet, or advice on what you can di if you've found an animal in your community.</p>
                <button>Report</button>
            </div>
            <div className={style.lostFound_image}>
                <img src={lostImage} alt='lostImage' />
            </div>
        </div>
    )
}

export default LostFound ;