import React from 'react'

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