import {makeStyles} from "@material-ui/core" ;

export const useStyles = makeStyles((theme) => ({
    root:{
        padding:'0.5rem 1rem',
        display:'flex',
        justifyContent:'space-between'  ,
        alignItems:'center',
        // borderBottom:'1px solid black'      ,
        boxShadow:" 0px 3px 30px -0px rgba(86,86,86,0.5)"
    },
    root_barIcon:{

    },
    root_Title : {
        "& > h4": {
           color:"red",
           fontSize:'1.5rem'
        }
    },
    root_Details:{
        display:'flex'
    }
}))