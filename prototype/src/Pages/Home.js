import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getClothes} from "../Redux/Slices/clothesSlice";
import {Grid, Typography} from '@mui/material'
import CategoryCard from '../Components/CategoryButton'
import Product from '../Components/ProductCard'
export default ()=>{


    const dispatch = useDispatch()
    const products = useSelector(state=> state.clothes.clothes)

    useEffect(()=>{
        dispatch(getClothes({category:"common", limit:4}))
    },[])

    return(
        <div>
            <Typography variant={'h5'} style={{padding:'20px'}}>flash sale</Typography>
            <Grid container spacing={2} style={{padding:'20px'}}>
                {products?.map((x)=>(
                    <Grid xs={12} sm={6} md={4} lg={3} item>
                        <Product {...x} key={x.id}/>
                    </Grid>

                ))}
            </Grid>
            <Typography variant={'h5'} style={{padding:'20px'}}>Categories</Typography>
            <Grid container spacing={3} style={{padding:'20px'}}>
                <Grid item xs={12} md={6}>
                    <CategoryCard mens={true}/>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CategoryCard mens={false}/>
                </Grid>
            </Grid>

        </div>
    )
}
