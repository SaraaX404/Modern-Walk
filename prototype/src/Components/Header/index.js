import * as React from 'react';
import {AppBar,Toolbar,Typography,Container} from '@mui/material'
import {Link} from "react-router-dom";




function Index() {

    return (
        <AppBar position="static" style={{backgroundColor:'white'}} elevation={1} >
            <Container>
                <Toolbar>


                    <Link to={'/'}>
                        <Typography variant="h5" noWrap component="a" className="mx-auto" sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                            position:'absolute',
                            left:'40%',
                        }}>
                            Modern Walk
                        </Typography>
                    </Link>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Index;
