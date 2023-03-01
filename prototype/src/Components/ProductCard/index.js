import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    card: {
        maxWidth: 300,
        height: 390,
        borderRadius: 30,
        textAlign: 'center',
    },
    title: {
        height: 95,
        margin:'10px'
    },
    media: {
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        height: 140,
        width: 100,
        margin: '0 auto',
        marginBottom: '15px'
    },
    content: {
        margin: '0',
        borderRadius: 30,
        textAlign: 'center',
    },
    price: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    description: {
        margin: 0,
        marginTop: 20,
        borderRadius: 30,
    },
}));
//reusable component for display cloths
export default function ProductCard(props) {
    const classes = useStyles();

    const { title, price, description, image, category } = props;

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <Typography gutterBottom variant="h6" className={classes.title}>
                    {title}
                </Typography>
                <CardMedia component="img" className={classes.media} image={image} alt={title} />
                <CardContent className={classes.content} style={{backgroundColor: category=="women's clothing"?"#FF5E84":"#2BD9AF"}}>
                    <Typography variant="h6" className={classes.price}>
                        {price}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        className={classes.description}
                    >
                        {description.length > 60 ? `${description.slice(0, 60)}...` : description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
