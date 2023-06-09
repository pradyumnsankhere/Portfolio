import { Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from "axios";

const styleh = {
    height: '675px',
    marginTop: '65px',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: 'lightblue',
    border: '1px solid black',
    backgroundImage: 'url("https://img.freepik.com/premium-photo/top-view-dark-stylish-workplace-with-smartphone-office-supplies_67155-2963.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    
    
}
export const Hero = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3030/posts')
            .then((response) => {
                setData(response.data);
                console.log(data)
            })
            .catch((error) => console.log(error))
    }, []);
   return (
        <div>
            <Box style={styleh}>
                <img style={{height:'100px',widows:'100px'}}
                 src='https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60'></img>
                <Typography style={{ color: 'white' }} variant="h4" component="h1" gutterBottom>
                  {data.map(item => (
                        <div key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.title}</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, minus.</p>
                        </div>
                    ))}

                </Typography>


            </Box>


        </div>
    )
}
