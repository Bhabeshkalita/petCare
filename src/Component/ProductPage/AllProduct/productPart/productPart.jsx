import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import style from './Productpart.module.scss'
const ProductPart = () =>{
    return(
        <div className={style.ProductPart}>
            <div className={style.ProductPart_card}><ProductCard /></div>
            <div className={style.ProductPart_card}><ProductCard /></div>
            <div className={style.ProductPart_card}><ProductCard /></div>
            <div className={style.ProductPart_card}><ProductCard /></div>
            <div className={style.ProductPart_card}><ProductCard /></div>
            <div className={style.ProductPart_card}><ProductCard /></div>
        </div>
    )
}

export default ProductPart ;