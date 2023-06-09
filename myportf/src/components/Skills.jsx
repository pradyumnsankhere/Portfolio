import React,{useState,useEffect} from 'react'
import { Card, CardContent, Typography, Grid } from '@mui/material';
import axios from "axios";

 
   const root= {
     
    //   margin: '20px',
    //   padding:'10px',
    //   backgroundColor: '#f5f5f5',
    //   width:'200px',
    //   height:'200px',
    //   display: 'grid',
    //   gridTemplateRows: 'auto auto auto auto',

    width:'150px',
      height:'150px',
    // margin: '1rem',
    // backgroundColor: '#f5f5f5',
    border:'1px solid black',
     dislay:'flex',
   justifyContent:'center',
   alignItem:'center',  
   paddingRight:'20px',
   paddingLeft:'100px',
   backgroundColor:'skyblue',
   
  //  marginLeft:'100px',
  margin:'50px',
   
      
    }
    const container={
      marginTop:'10px',
       
    // border:'1px solid black',
        gridGap:'0rem',
      backgroundColor:  'aliceblue',
              
    }
     
    
  
  

export const Skills = () => {
    const [data,setData]=useState([]);

    useEffect(()=>{
       axios.get('http://localhost:3030/skills')
       .then((response) => {
           setData(response.data);
           console.log(data)
         })
       .catch((error)=>console.log(error))
       }, []);
   
  return (
    
    <div >
      <h1 style={{ paddingLeft: '500px' ,marginTop:'100px'}}>Skills</h1>
      <Grid container spacing={2} style={container}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card style={root}>
              <CardContent>
                <Typography variant="h5" component="h1" gutterBottom>
                  {item.skill}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
 
  )
}


 