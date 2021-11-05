// import React from 'react'
// import style from './card.module.scss'

// import image from '../../../../assets/image/Home_page_icons/veterinary.png'

// const Card = () => {
//     return(
//         <div className={style.card}>
//             <div className={style.card_image}>
//                 <img src={image} alt='logo' />
//             </div>
//             <div className={style.card_content}>
//                 <h4>Medical Administration</h4>
//                 <p>our team of experienced professionals can help with everything from pills to injections to make your pet stay healthy as always.</p>
//             </div>
//         </div>
//     )
// }

// export default Card ;
import React from 'react'
import style from './card.module.scss'


const Card = (props) => {
    return(
        <div className={style.card}>
            <div className={style.card_image}>
                <img src={props.image} alt='logo' />
            </div>
            <div className={style.card_content}>
                <h4>{props.title}</h4>
                <p>{props.details}</p>
            </div>
        </div>
    )
}

export default Card ;