 import React from 'react'
//  import { Grid, Container, Typography } from '@mui/material'
import { Typography, Container, Grid, Card, CardContent } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
 const boxstyle={
    marginTop: '9rem',
    textAlign: 'center',
  
     }
     const mission={
      height:'300px',
      boxShadow:"3px 3px black, -1em 0 .4em darkgrey",
      backgroundColor:'lightblue'
     }
     const vision={
      height:'300px',
      boxShadow:"3px 3px black, -1em 0 .4em darkgrey",
      backgroundColor:'lightblue'
     }

 export const About = () => {
   return (
<Container maxWidth="md" style={boxstyle}>
<Typography variant="h4" align="center" gutterBottom>
  About Us
</Typography>
<Grid container spacing={2}>
  <Grid item xs={12} md={6}  >
    <Card sx={mission}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1">
          <ul>
            <li>
              <EmailIcon fontSize="small" />
              <strong>Email:</strong> example@example.com
            </li>
            <li>
              <PhoneIcon fontSize="small" />
              <strong>Mobile:</strong> +1 123 456 7890
            </li>
            <li>
              <LocationOnIcon fontSize="small" />
              <strong>Address:</strong> 123 Main Street, City, Country
            </li>
          </ul>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim iaculis suscipit. Proin nec ante in felis efficitur maximus. Cras commodo ipsum nec justo tristique auctor. */}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  <Grid item xs={12} md={6}   >
    <Card sx={vision}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Our Vision
        </Typography>
        <Typography variant="body1">
        Lorem ipsum  re  consecteLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim iaculis suscipit. Proin nec ante in felis efficitur maximus. Cras commodo ipsum nec justo tristique auctor.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid>
</Container>
   )
 }
 

 

 
