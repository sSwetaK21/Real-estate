import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { IoBedOutline } from "react-icons/io5";
import { GiBathtub } from "react-icons/gi";
import { TbStack } from "react-icons/tb";
import Button from '@mui/material/Button';
import { AiOutlineHeart } from "react-icons/ai";
import Cards from '../Card/Cards';


function Favs({ favs }) {
    return (
        <div>Favs
            <h2>This is Favorites page</h2>
            {/* fetching cards through props */}
            {
                favs?.map(({  name, img, location, beds, bathrooms, price, size }) => (
                    
                    <div>
                        <Cards name={name} location={location} beds={beds} img={img}
                        bathrooms={bathrooms} price={price} size={size}

                        />
                    </div>
                ))
            }
        </div>
    )
}

export default Favs