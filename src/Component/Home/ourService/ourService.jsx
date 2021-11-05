import React from 'react'
import Card from './card/card';
import style from './ourService.module.scss'

import veterinary from '../../../assets/image/Home_page_icons/veterinary.png'
import cone from '../../../assets/image/Home_page_icons/cone-of-shame.png'
import food from '../../../assets/image/Home_page_icons/food.png'

const OurService = () => {
    return(
        <div className={style.ourservice}>
            <div className={style.ourservice_title}>
                <p>Our Services</p>
                <h3>Products and Services loved by <span>people and pets</span></h3>
            </div>
            <div className={style.ourservice_card}>
                <Card 
                    image={veterinary} 
                    title='Medical Administration' 
                    details='our team of experienced professionals can help with everything from pills to injections to make your pet stay healthy as always.'
                />
               <Card 
                    image={food} 
                    title='Food Order' 
                    details='our team of experienced professionals can help with everything from pills to injections.'
                />
                <Card 
                    image={cone} 
                    title='Accessories order' 
                    details='our team of experienced professionals can help with everything.'
                />
            </div>
        </div>
    )
}

export default OurService ;