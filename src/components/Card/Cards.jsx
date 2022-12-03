import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { TbStack } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";


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
      const [active, setActive] = useState(false);

        return (
            // card div here
        <div className='cardbox' key={id}>
            <Card  className='card_child'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent className="card_content">
                        <Typography gutterBottom variant="h2" component="div"  className="card_price"  >
                            $ {price}
                            <span className='spandiv' >/months </span>
                          
                            {isClicked && (
                                <span
                                    onClick={() => {
                                        setFavs([...favs, cardValues]);  
                                        setActive(!active);
                  
                                    }}
                                    className={ `${active?"bgPurple": "white"} favourite` }
                                    
                                >
                                    <AiOutlineHeart/>
                                </span>
                            ) }

                        </Typography>
                        <Typography gutterBottom variant="h2" component="div" className='cardDiv'  >
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary"  className='cardfont' >
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