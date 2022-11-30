import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { TbStack } from "react-icons/tb";

import './Cards.css'


function Cards() {
    // const classes = useStyles()
    return (
        <div className='cardbox'>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7GCLlsnJWpN214aTwvRDa--EOMZQvdMGl00jAz8Zr1g&s"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h2" component="div" style={{ color: "#5c5cd6", fontSize: 22, fontWeight: 600 }} >
                            $2,900
                            <span  className='spandiv' >/months </span>
                        </Typography>
                        <Typography gutterBottom variant="h2" component="div" style={{ fontSize: 20, fontWeight: 600 }} >
                            Palm Harbor
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{fontSize: 17}}>
                            26/8, Georgia
                        </Typography>
                        <div className='cardIcons'>
                            <div className='InnerCard'>
                                <IoBedOutline />
                                Beds
                            </div>
                            <div className='InnerCard'>
                                <GiBathtub />
                                Bathrooms
                            </div>
                            <div className='InnerCard'>
                                <TbStack />
                                2x3 m<sup>2</sup>
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>

    )
}

export default Cards