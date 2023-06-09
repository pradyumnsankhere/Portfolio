import React from 'react'
import {AppBar,Toolbar,Typography,Tab} from  '@mui/material'
import { Link ,useLocation} from 'react-router-dom';
 
const styleh={
 
 color:'white',
 marginLeft:'auto',
 float:'right',
  
}
 
const activeTabStyle = {
  textDecoration: 'underline',
   
};
 
export const Navbar = () => {
  const location = useLocation();

  return (
    <div>
        <AppBar position="fixed"   >
            <Toolbar>
                <Typography style={styleh}  variant="title" color="white"> 
                     
               {/* <Tab label='Home' ></Tab>
               <Tab label='Skills'></Tab>
               <Tab label='Education'></Tab>
               <Tab label='Service'></Tab>
               <Tab label='Contact'></Tab> */}

       <Tab label='Home' component={Link} to={'/'}  style={location.pathname === '/' ? activeTabStyle : null}></Tab>
       <Tab label='Skills'    component={Link} to={'/Skills'}style={location.pathname === '/Skills' ? activeTabStyle : null}></Tab>             
       <Tab label='Services' component={Link} to={'/Services'} style={location.pathname === '/Services' ? activeTabStyle : null}></Tab>   
       <Tab label='About' component={Link} to={'/About'} style={location.pathname === '/About' ? activeTabStyle : null} ></Tab>  
       <Tab label='Timeline' component={Link} to={'/Timeline'} style={location.pathname === '/Timeline' ? activeTabStyle : null}></Tab> 
       <Tab label='Contact' component={Link} to={'/Contact'} style={location.pathname === '/Contact' ? activeTabStyle : null}></Tab> 
             
             
            

        
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  )
}

