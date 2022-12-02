import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Cards from '../../Card/Cards';

function MainBox({ favs, setFavs }) {

    const [cards, setCards] = useState([]);
    const [searchName, setsearchName] = useState('');
    const [dropdowns, setDropdowns] = useState([]);
    const [loc, setLoc] = useState({
        locName: '',
        date: '',
        price: "",
        house: ""
    })

    useEffect(() => {
        axios
            .get("https://frozen-harbor-02472.herokuapp.com/datas")
            .then((res) => {
                // console.log(res.data)
                setCards(res.data)
                setDropdowns(res.data)
            })

    }, [])

    const handleSearchBar = () => {
        const searching = cards.filter((val) => {
            return val.name.toLowerCase().includes(searchName.toLowerCase())
        })
        setCards(searching);
    };

    const handleDropdownSearch = () => {
        let priceRange = loc.price.split("-")

        // eslint-disable-next-line array-callback-return
        const dropDownsSearch = dropdowns.filter((value) => {

            let dateOne = new Date(loc.date).getTime();
            let dateTwo = new Date(value.date).getTime();
            if (value.location.toLowerCase().includes(loc.locName.toLowerCase()) && (value.type === loc.house || loc.house === "") && ((parseInt(priceRange[0]) <= value.price &&
                parseInt(priceRange[1]) >= value.price) || loc.price === "") && (dateOne >= dateTwo || loc.date === "")
            ) {

                return value

            }

            

        })

        setCards(dropDownsSearch)
        console.log(dropdowns, "dropdown")
    }

    return (

        <div className="body">

            <div className='main'>
                <div className='searchLeft'>
                    <h1 className='h1Title'>Search properties to rent</h1>
                </div>
                <div className='searchrigt'>
                    <input type="text" className='saerchInput' value={searchName} placeholder="Search by Name" onChange={(e) => {
                        setsearchName(e.target.value)
                    }} />
                    <Button    className='btnpurple' onClick={handleSearchBar}>Search</Button>

                </div>
            </div>

            <div className='searchBox'>
                <div className="loc" >
                    <Box sx={{ minWidth: 120 }}>
                        <div className="elBorder">
                            <p className='titles dropdownNames '>Location</p>
                            <select id="dropdown" name="locname" vale={loc.locName} onChange={(e) => { setLoc({ ...loc, locName: e.target.value }) }}>
                                <option value="N/A">Location</option>
                                <option value="Georgia" name="locname">
                                    Georgia
                                </option>
                                <option value="Newyork" name="locname">
                                    Newyork
                                </option>
                                <option value="Maryland" name="locname">
                                    Maryland
                                </option>
                            </select>
                        </div>
                    </Box>
                </div>
                <div className='date'>
                    <Box sx={{ minWidth: 180 }}>
                        <div className='elBorder'>

                            <h6 className='dropdownNames'>Date</h6>

                            <input type="date" id="dateinput" name="date" onChange={(e) => { setLoc({ ...loc, date: e.target.value }) }} />
                        </div>

                    </Box>
                </div>
                <div className='price'>
                    <Box sx={{ minWidth: 120 }}>
                        <div className="elBorder">
                            <h6 className='dropdownNames'>Price</h6>
                            <select id="dropdown" name="price" onChange={(e) => { setLoc({ ...loc, price: e.target.value }) }}>
                                <option value="N/A">Price</option>
                                <option value="1000-10000" name="price">
                                    1000-3000
                                </option>
                                <option value="10001-20000" name="price">
                                    3000-6000
                                </option>
                                <option value="20001- 40000" name="price">
                                    6000- 9000
                                </option>
                            </select>
                        </div>
                    </Box>
                </div>
                <div className='house'>
                    <Box sx={{ minWidth: 120 }}>
                        <div className="elBorder">
                            <h6 className='dropdownNames'>Property Type</h6>
                            <select id="dropdown" name="type" onChange={(e) => { setLoc({ ...loc, house: e.target.value }) }}>
                                <option value="House" name="type">
                                    House
                                </option>
                                <option value="Cottage" name="type">
                                    Cottage
                                </option>
                                <option value="Bangalow" name="type">
                                    Bangalow
                                </option>
                                <option value="Building" name="type">
                                    Building
                                </option>
                            </select>

                        </div>
                    </Box>
                </div>

                <Button sx={{ ml: '1rem' }}  className='btnpurple' onClick={handleDropdownSearch}>Filter</Button>
            </div>

            <div className='cardFlex'>
                {
                    cards.map(({ img, name, location, price, size, beds, bathrooms }) => {
                        return (

                            <Cards name={name} location={location} beds={beds} img={img}
                                bathrooms={bathrooms} price={price} size={size} isClicked={true} favs={favs}
                                setFavs={setFavs}
                            />
                        )
                    }

                    )
                }

            </div>
        </div>


    )
}

export default MainBox