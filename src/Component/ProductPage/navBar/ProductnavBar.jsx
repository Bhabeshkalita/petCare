import React from 'react' ;

import DehazeIcon from '@material-ui/icons/Dehaze';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'; 
import { Badge, IconButton } from '@material-ui/core';

import { useStyles } from './productNavBar.style';

const ProductNav = () => {
    const classes = useStyles() ;
    return(
        <div className={classes.root}>
            <div className={classes.root_barIcon}>
                <DehazeIcon />
            </div>
            <div className={classes.root_Title}>
                <h4>Food Order</h4>
            </div>
            <div className={classes.root_Details}>
                <div></div>
                <div>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <FavoriteBorderIcon/>
                        </Badge>
                    </IconButton>                    
                </div>
                <div>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </IconButton> 
                    
                </div>
            </div>
        </div>
    )
}

export default ProductNav ;