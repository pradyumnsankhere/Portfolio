import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Services } from './components/Services';
  
 
 import {   Route, Routes } from 'react-router-dom';
import { Contact } from './components/Contact';
import { Timeline } from './components/Timeline';
 

function App() {
  
  return (
  //    <div  >
  //  <div> 
  //     <Navbar/>
  //     <Hero/>

  //     <Skills/>
  // <About/> 
  // <Services/>
  //    </div>
  //    </div>

 
    
      <div>
        <Navbar />
     
        <Routes>
          <Route exact path="/" element={<Hero/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* <Route path="/timeline" element={<Timeline/>} /> */}

        </Routes>
      </div>
    
  
  );
}

export default App;
