import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, FormControlLabel, FormGroup, Slider, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DehazeIcon from "@material-ui/icons/Dehaze";
import React, { useEffect, useState } from "react";
import { useStyles } from "./filter.style";
import StarIcon from '@material-ui/icons/Star';
const Filter = () => {
    const classes = useStyles() ;

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth) ;
        window.addEventListener("resize" , handleWindowResize) ;
        return () => window.removeEventListener('resize' , handleWindowResize) ;
    }, [])

    return(
        <div className={classes.filter}>
            {
                width>600
                ?<div className={classes.filter_heading}>
                    <div>Filters</div>
                    <div>
                        <Button color="error"> Clear All </Button>
                    </div>
                </div>
                :null
            }
            {
                width>600
                ?<div className={classes.filter_categories}>
                    <div className={classes.filter_categories_price}>
                        <h4>PRICE</h4>
                        <Box className={classes.filter_categories_price_range}>                     
                            <span>100</span>
                            <Slider size="small" min={100} max={1000} defaultValue={300} aria-label="Small" valueLabelDisplay="on" onChange={(e , val)=>{console.log( val)}} />
                            <span>1000</span>
                        </Box>
                    </div>
                    <div className={classes.filter_categories_type}>
                        <h4>CATEGORIES</h4>
                        <div>
                            <Accordion className={classes.filter_categories_type_card}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header" >
                                    <Typography>Pet Supplies</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox  />} label="Dogs" />
                                        <FormControlLabel control={<Checkbox  />} label="Cats" />
                                        <FormControlLabel control={<Checkbox  />} label="Birds" />
                                        <FormControlLabel control={<Checkbox  />} label="Fish and Aquatic" />
                                        <FormControlLabel control={<Checkbox  />} label="Horse" />
                                        <FormControlLabel control={<Checkbox  />} label="Large Animals" />
                                        <FormControlLabel control={<Checkbox  />} label="Small Animals" />
                                    </FormGroup>                                
                                </AccordionDetails>
                            </Accordion>

                            <Accordion className={classes.filter_categories_type_card}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header" >
                                    <Typography>Customer Ratings</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox  />} label='4 ⭐ & above' />
                                        <FormControlLabel control={<Checkbox  />} label='3 ⭐ & above' />
                                        <FormControlLabel control={<Checkbox  />} label='2 ⭐ & above' />
                                        <FormControlLabel control={<Checkbox  />} label='1 ⭐ & above' />
                                        {/* <FormControlLabel control={<Checkbox  />} label={`⭐ & above`} />
                                        <FormControlLabel control={<Checkbox  />} label={`${<StarIcon/>} & above`} />
                                        <FormControlLabel control={<Checkbox  />} label={`${<StarIcon/>} & above`} /> */}
                                    </FormGroup>                                
                                </AccordionDetails>
                            </Accordion>

                            <Accordion className={classes.filter_categories_type_card}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header" >
                                    <Typography>Weight</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox  />} label="50 KG" />
                                        <FormControlLabel control={<Checkbox  />} label="20 Kg" />
                                        <FormControlLabel control={<Checkbox  />} label="10 KG" />
                                        <FormControlLabel control={<Checkbox  />} label="5 KG" />
                                        <FormControlLabel control={<Checkbox  />} label="2 KG" />
                                        <FormControlLabel control={<Checkbox  />} label="1 KG" />
                                        <FormControlLabel control={<Checkbox  />} label="500 g" />
                                    </FormGroup>                                
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
                
                :<Accordion>
                    <AccordionSummary
                        expandIcon={<DehazeIcon />}
                        aria-controls="panel1a-content" >
                        <Typography>Filters</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className={classes.filter_categories}>
                            <div className={classes.filter_categories_price}>
                                <h4>PRICE</h4>
                                <Box className={classes.filter_categories_price_range}>                     
                                    <span>100</span>
                                    <Slider size="small" min={100} max={1000} defaultValue={300} aria-label="Small" valueLabelDisplay="on" onChange={(e , val)=>{console.log( val)}} />
                                    <span>1000</span>
                                </Box>
                            </div>
                            <div className={classes.filter_categories_type}>
                                <h4>CATEGORIES</h4>
                                <div>
                                    <Accordion className={classes.filter_categories_type_card}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header" >
                                            <Typography>Pet Supplies</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <FormGroup>
                                                <FormControlLabel control={<Checkbox  />} label="Dogs" />
                                                <FormControlLabel control={<Checkbox  />} label="Cats" />
                                                <FormControlLabel control={<Checkbox  />} label="Birds" />
                                                <FormControlLabel control={<Checkbox  />} label="Fish and Aquatic" />
                                                <FormControlLabel control={<Checkbox  />} label="Horse" />
                                                <FormControlLabel control={<Checkbox  />} label="Large Animals" />
                                                <FormControlLabel control={<Checkbox  />} label="Small Animals" />
                                            </FormGroup>                                
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion className={classes.filter_categories_type_card}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header" >
                                            <Typography>Customer Ratings</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <FormGroup>
                                                <FormControlLabel control={<Checkbox  />} label='4 ⭐ & above' />
                                                <FormControlLabel control={<Checkbox  />} label='3 ⭐ & above' />
                                                <FormControlLabel control={<Checkbox  />} label='2 ⭐ & above' />
                                                <FormControlLabel control={<Checkbox  />} label='1 ⭐ & above' />
                                                {/* <FormControlLabel control={<Checkbox  />} label={`⭐ & above`} />
                                                <FormControlLabel control={<Checkbox  />} label={`${<StarIcon/>} & above`} />
                                                <FormControlLabel control={<Checkbox  />} label={`${<StarIcon/>} & above`} /> */}
                                            </FormGroup>                                
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion className={classes.filter_categories_type_card}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header" >
                                            <Typography>Weight</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <FormGroup>
                                                <FormControlLabel control={<Checkbox  />} label="50 KG" />
                                                <FormControlLabel control={<Checkbox  />} label="20 Kg" />
                                                <FormControlLabel control={<Checkbox  />} label="10 KG" />
                                                <FormControlLabel control={<Checkbox  />} label="5 KG" />
                                                <FormControlLabel control={<Checkbox  />} label="2 KG" />
                                                <FormControlLabel control={<Checkbox  />} label="1 KG" />
                                                <FormControlLabel control={<Checkbox  />} label="500 g" />
                                            </FormGroup>                                
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            }
            
        </div>
    )
}
export default Filter ;