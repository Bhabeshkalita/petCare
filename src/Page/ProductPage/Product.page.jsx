import React from 'react' ;
import { connect } from 'react-redux';
import Footer from '../../Component/Common/Footer/footer';
// import NavBar from '../../Component/Common/NavBar/navBar';
import SignUpSignIn from '../../Component/Common/SignInSignUp/signUpSignIn';
import AllProduct from '../../Component/ProductPage/AllProduct/allProduct';
import Filter from '../../Component/ProductPage/Filters/Filters';
import ProductNav from '../../Component/ProductPage/navBar/ProductnavBar';
import SearchBar from '../../Component/ProductPage/SearchBar/searchBar';
// import Header from '../../Component/Home/Header/Header';
import BlurAnimation from '../../Hoocks/blurbackground/blurAnimation';
import Pagination from '../../Component/ProductPage/Pagination/pagination'
const ProductPage = (props) => {
    return(
        <div>
            {
                props.display
                ? <SignUpSignIn />
                : null
            }
            <BlurAnimation isBlur={ props.display ? true : false } >
                <ProductNav />
                <SearchBar />
                <AllProduct />
                {/* <Pagination /> */}
                <Footer />
            </BlurAnimation>   
        </div>
    )
}

const mapStateToProps = ({popUp: {display}}) => ({
    display
})
export default connect( mapStateToProps )(ProductPage) ;