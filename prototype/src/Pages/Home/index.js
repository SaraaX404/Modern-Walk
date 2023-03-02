import React,{useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getClothes} from "../../Redux/Slices/clothesSlice";
import {Grid, Typography,  Box, LinearProgress} from '@mui/material'
import CategoryCard from '../../Components/CategoryButton'
import Product from '../../Components/ProductCard'
import {Link} from "react-router-dom";
export default ()=>{
    const dispatch = useDispatch()
    const products = useSelector(state=> state.clothes.clothes)
    const isLoading = useSelector(state=> state.clothes.loading)
    useEffect(()=>{
        dispatch(getClothes({category:"common", limit:4}))
    },[])

    return(
        <div>
            <Typography variant={'h5'} style={{padding:'20px'}}>Flash Sale</Typography>
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
            <Typography variant={'h5'} style={{padding:'20px'}}>Categories</Typography>
            <Grid container spacing={3} style={{padding:'20px'}}>
                <Grid item xs={12} md={6}>
                    <Link to={"/men's-clothing"} style={{textDecoration:'none'}}>
                        <CategoryCard mens={true}/>
                    </Link>

                </Grid>
                <Grid item xs={12} md={6}>
                    <Link to={"/women's-clothing"} style={{textDecoration:'none'}}>
                        <CategoryCard mens={false}/>
                    </Link>

                </Grid>
            </Grid>

        </div>
    )
}
