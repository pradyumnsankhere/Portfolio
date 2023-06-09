import React, { useState } from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';
import axios from 'axios';

  const styleh={
    padding:'150px',
    backgroundColor: 'aliceblue',
 
  }
   
export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      const data = {
        name: name,
        email: email,
        message: message
      };
  
      axios.post('http://json-server-api-url', data)
        .then(response => {
          console.log('Data sent successfully:', response.data);
           
        })
        .catch(error => {
          console.error('Error sending data:', error);
           
        });
        setName('');
        setEmail('');
        setMessage('');
        console.log(name,email,message);

    };
  return (
    <div style={{backgroundColor:'aliceblue'}}>
   <Container maxWidth="sm" style={styleh}>
      <Typography variant="h4" align="center">
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="message"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  
    </div>
);
};
  
