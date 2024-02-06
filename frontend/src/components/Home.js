import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from '../components/Footer'
import Stats from '../components/Stats'
import PopularBooks from '../components/PopularBooks'

import WelcomeBox from '../components/WelcomeBox'




function Home() {
  return (
      <div id='home'>
       <WelcomeBox/>
                  <PopularBooks/>  
          <Stats/>
          <Footer/>
      </div>
  )
}

export default Home