import React from "react";
import cardImage from '../../../../assets/image/Images/cardImage.png'
import style from './productCard.module.scss'
const ProductCard = () => {
    return(
        <div className={style.card}>
            <div className={style.card_image}>
                <img src={cardImage} alt='card Image' />
            </div>
            <div className={style.card_content}>
                <h4 className={style.card_content_h4}>PEDIGREE Puppy Milk, Chicken 3 kg Dry New Born Dog Food</h4>
                <p className={style.card_content_p1}>
                    <span className={style.card_content_p1_span1}>4.4</span> 
                    <span className={style.card_content_p1_span2}>(20,952) Ratings</span> 
                </p>
                <p className={style.card_content_p2}>₹ 600</p>
                <p className={style.card_content_p3}>Quantity: 3KG </p>
            </div>
        </div>
    )
}
export default ProductCard ;