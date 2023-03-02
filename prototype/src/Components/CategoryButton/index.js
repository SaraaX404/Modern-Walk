import * as React from 'react';
import Card from '@mui/material/Card';
import {CardActionArea, Typography} from '@mui/material';


//reusable card component for display categories
export default ({mens})=> {
    return (
        <Card style={{borderRadius:'20px'}} >
            <CardActionArea style={{height:'300px', backgroundColor:mens?"#2BD9AF":"#FF5E84", textAlign:'center'}}>
                <Typography style={{color:'white'}} variant={'h4'}>{mens?"Men's Clothing":"Women's Clothing"}</Typography>
            </CardActionArea>
        </Card>
    );
}
