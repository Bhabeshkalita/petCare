import React from "react";
import Filter from "../Filters/Filters";
import ProductCard from "./ProductCard/ProductCard";
import ProductPart from "./productPart/productPart";
import style from './allProduct.module.scss'
import CardPagination from "../Pagination/pagination";
const AllProduct = () => {
    return(
        <div className={style.allProduct}>
            <div className={style.allProduct_filter}>
                <Filter />
            </div>
            <div className={style.allProduct_product}>
                <ProductPart />
                <CardPagination />
            </div>
        </div>
    )
}

export default AllProduct ;