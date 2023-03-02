import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getClothes} from "../../Redux/Slices/clothesSlice";
import {Box,  Grid, LinearProgress, Typography} from '@mui/material'
import Product from '../../Components/ProductCard'
export default ({mens})=>{
    const dispatch = useDispatch()
    const products = useSelector(state=> state.clothes.clothes)
    const isLoading = useSelector(state=> state.clothes.loading)
    useEffect(()=>{
        dispatch(getClothes({category:mens? "men's clothing": "women's clothing"}))
    },[])

    return(
        <div>
            <Typography variant={'h5'} style={{padding:'20px'}}>{mens?"Men's Clothing":"Women's Clothing"}</Typography>
            <Grid container spacing={2} style={{padding:'20px'}}>
                {isLoading?(
                    <Box sx={{ width: '100%', padding:'20px' }}>
                        <LinearProgress />
                    </Box>
                ): products?.map((x)=>(
                    <Grid xs={12} sm={6} md={4} lg={3} item>
                        <Product {...x} key={x.id}/>
                    </Grid>

                ))}
            </Grid>
        </div>
    )
}
