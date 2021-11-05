import React from "react";
import style from './searchBar.module.scss'
const SearchBar = () => {
    return(
        // <div>
            <div className={style.navbar_content_search}>
                <div className={style.navbar_content_search_container}>
                    <input type='text' placeholder='Search' />
                    <button><i class="fa fa-search" aria-hidden="true"></i></button>
                </div>
            </div>
        // </div>
    )
}
export default SearchBar ;