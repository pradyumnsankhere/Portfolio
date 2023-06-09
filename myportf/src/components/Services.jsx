import React,{useState,useEffect} from 'react'
import { Grid, Container, Typography } from '@mui/material'
import axios from 'axios';
// const boxstyle = {
//     marginTop: '2rem',
//     textAlign: 'center',
//     paddingLeft:'100px',

// }

// const serviceBox={
//     border:'1px solid black',
//     margin:'30px',
//     height:'100px',
//     width:'300px',
//     backgroundColor: 'lightblue',
// }

const boxStyle = {
    border: '1px solid black',
    marginTop: '50px',
    // backgroundColor: '#f5f5f5',
    backgroundColor:'skyblue',
    padding: '20px',
    width:'600px'
    
};

const serviceBox = {
    // border: '1px solid black',
    backgroundColor: 'aliceblue',
    padding: '30px',
    marginBottom: '30px',
    // boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    border:'1px solid #BFBFBF',
    boxShadow:'10px 10px 5px #aaaaaa'
};
const container={
    border:'1px solid #BFBFBF',
    boxShadow:'10px 10px 5px #aaaaaa'
}
export const Services = () => {
    const [data,setData]=useState([]);

    useEffect(() => {
        axios
          .get('http://localhost:3030/services')
          .then((response) => {
            setData(response.data);
            console.log(data);
          })
          .catch((error) => console.log(error));
      }, []);
    return (
       
        <div >
            
      <Typography variant="h4" align="center"  style={{marginTop:'100px'}}gutterBottom>
        Service
      </Typography>
      <Container style={boxStyle} sx={container}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            {data.slice(0, 3).map((service) => (
              <Typography variant="body1" component="div" style={serviceBox} key={service.id}>
                <p>{service.service}</p>
              </Typography>
            ))}
          </Grid>
          <Grid item xs={12} sm={6}>
            {data.slice(3).map((service) => (
              <Typography variant="body1" component="div" style={serviceBox} key={service.id}>
                <p>{service.service}</p>
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
    )
}
