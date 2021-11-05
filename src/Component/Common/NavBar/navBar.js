import React, { useEffect, useState } from 'react' ;
import { Link } from 'react-router-dom';
import style from './navBar.module.scss'
import cartImage from '../../../assets/image/Home_page_icons/shopping-cart.png'
import { connect } from 'react-redux';
import {show} from '../../../Redux/popup/Popup.action'
import DehazeIcon from '@material-ui/icons/Dehaze';
import Sidedrawer from '../sideDrawerNav/sideDrawer';

const NavBar = (props) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [sideDrawer , setSideDrawer] = useState(false) ;
    const toggleDrawer = (open) => {
        setSideDrawer(open)
        console.log(open)
    }

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth) ;
        window.addEventListener("resize" , handleWindowResize) ;
        return () => window.removeEventListener('resize' , handleWindowResize) ;
    }, [])
    return(
        <div className={style.navbar}>
            {
                width < 770
                ? <div>
                    <DehazeIcon style={{marginRight:"0.5rem"}} onClick={()=>{ toggleDrawer(true) }}/>
                    <Sidedrawer onClickHandler={(e)=>{toggleDrawer(e)} } stateValue={sideDrawer} />
                </div>
                : null
            }
            
            <div className={style.navbar_logo}>
                <h3>logo</h3>
            </div>
            <div className={style.navbar_content}>
                <div className={style.navbar_content_search}>
                    <div className={style.navbar_content_search_container}>
                        <input type='text' placeholder='Search' />
                        <button><i class="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                </div>
                <div className={style.navbar_content_link}>
                    <Link to='/'><span className={style.navbar_content_link_active}>Home</span></Link>
                    <Link to='/'><span >Articles</span></Link>
                    <Link to='/product'><span >Order</span></Link>
                    <Link to='/'><span >Services</span></Link>
                    <Link to='/'><span >Contect us</span></Link>
                </div>
                <div className={style.navbar_content_loginButton}>
                    <button onClick={()=>{props.show()}}>Login</button>
                </div>
                <div className={style.navbar_content_cartImage}>
                    <img src={cartImage} alt='cart'  />
                </div>
            </div>
        </div>
    )
} 

const mapDispatchToProps = dispatch =>({
    show : () => dispatch(show())
})

export default connect( null , mapDispatchToProps )(NavBar) ;