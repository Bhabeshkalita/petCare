import {makeStyles} from "@material-ui/core" ;

export const useStyles = makeStyles((theme) => ({
    filter:{
        padding:'0.5rem 1rem',        
        // borderBottom:'1px solid black'      ,
        // boxShadow:" 0px 3px 30px -0px rgba(86,86,86,0.5)"
    },
    filter_heading:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    },
    filter_categories:{
        width:'100%'
    },
    filter_categories_price:{
        marginBottom:'0.5rem',
        "& > h4" : {
            marginBottom:'0.8rem'
        }
    },
    filter_categories_price_range:{
        display:'flex',
        justifyContent:'space-evently',
        // marg
    },
    filter_categories_type:{
        "& > h4" : {
            marginBottom:'0.8rem'
        }
    },
    filter_categories_type_card:{
        marginBottom:'1rem'
    },
}))