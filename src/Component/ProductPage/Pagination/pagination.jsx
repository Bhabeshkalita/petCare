import React, { useState } from 'react' ;
import {Pagination} from '@material-ui/lab';
import style from './pagination.module.scss'
const CardPagination = () => {
    const [page, setPage] = useState(1)
    return(
        <div className={style.pagination}>
            <div className={style.pagination_page}>
                page {page} of 100
                
            </div>
            <div className={style.pagination_pageNumber}>
                <Pagination count={100} onChange={(e , val)=>{setPage(val)}} />
            </div>
        </div>
    )
}
export default CardPagination ;