import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { TbStack } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Button from '@mui/material/Button';


import './Cards.css'


function Cards({ id,name, size, price, beds, bathrooms, location, img,favs,setFavs,isClicked }) {

    const cardValues = {
        name,
        location,
        beds,
        bathrooms,
        price,
        size,
        img
      };
      const [active, setActive] = React.useState(false);

        return (
            // card div here
        <div className='cardbox' key={id}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div" style={{ color: "#5c5cd6", fontSize: 22, fontWeight: 600 }} >
                            $ {price}
                            <span className='spandiv' >/months </span>
                          
                            {isClicked ? (
                                <span
                                    onClick={() => {
                                        setFavs([...favs, cardValues]);  
                                        setActive(!active);
                  
                                    }}
                                    className={ active ? "bgPurple favourite" : "white favourite" }
                                    
                                >
                                    <AiOutlineHeart/>
                                </span>
                            ) : null}

                        </Typography>
                        <Typography gutterBottom variant="h2" component="div" style={{ fontSize: 20, fontWeight: 600 }} >
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{ fontSize: 17 }}>
                            {location}
                        </Typography>
                        <div className='cardIcons'>
                            <div className='InnerCard'>
                                <IoBedOutline />
                                {beds}Beds
                            </div>
                            <div className='InnerCard'>
                                <GiBathtub />
                                {bathrooms} Bathrooms
                            </div>
                            <div className='InnerCard'>
                                <TbStack />
                                {size} m<sup>2</sup>
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>

    )
}

export default Cards