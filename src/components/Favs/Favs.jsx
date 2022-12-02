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

            {
                favs?.map(({  name, img, location, beds, bathrooms, price, size }) => (
                    // <div key={value.id}>
                    //     <div className='cardbox' >
                    //         <Card sx={{ width: 300, height: 330 }}>
                    //             <CardActionArea>
                    //                 <CardMedia
                    //                     component="img"
                    //                     height="140"
                    //                     image={value.img}
                    //                     alt="green iguana"
                    //                 />
                    //                 <CardContent>
                    //                     <Typography gutterBottom variant="h2" component="div" style={{ color: "#5c5cd6", fontSize: 22, fontWeight: 600 }} >
                    //                         $2,900
                    //                         <span className='spandiv' >/months </span>
                    //                         <span className='favourite'>
                    //                             <AiOutlineHeart />
                    //                         </span>
                    //                     </Typography>
                    //                     <Typography gutterBottom variant="h2" component="div" style={{ fontSize: 20, fontWeight: 600 }} >
                    //                         {value.name}
                    //                     </Typography>
                    //                     <Typography variant="body2" color="text.secondary" style={{ fontSize: 17 }}>
                    //                         {value.location}
                    //                     </Typography>
                    //                     <div className='cardIcons'>
                    //                         <div className='InnerCard'>
                    //                             <IoBedOutline />
                    //                             {value.beds}
                    //                         </div>
                    //                         <div className='InnerCard'>
                    //                             <GiBathtub />
                    //                             {value.bathrooms}
                    //                         </div>
                    //                         <div className='InnerCard'>
                    //                             <TbStack />
                    //                             {value.size} m<sup>2</sup>
                    //                         </div>
                    //                     </div>

                    //                 </CardContent>
                    //             </CardActionArea>
                    //         </Card>
                    //     </div>
                    // </div>

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