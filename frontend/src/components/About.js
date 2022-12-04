import React from 'react'
import { Grid } from '@mui/material';
import video1 from "../assets/colossus'22.mp4"

const About = () => {
  return (
    <div className='about'>
      <h4 style={{ fontFamily: 'Gotham', color: '#fff', display:'flex', fontSize: '3em',justifyContent:'center',fontWeight:'bold' }}>About</h4>
      <Grid container>
        <Grid item xs={6}>
         <p style={{ marginLeft: '10%', color: '#fff', textAlign: 'justify' }}>From a tech nerd to a cultural pundit, we have events for all! Get on your glasses or the costumes you want and participate in the universe of madness! 
            Colossus’22  is back with exciting event and amusing prizes to take your breath away. This annual Techno-cultural fest will bring out your technical skills as well hook you up into the cultural events!  
            We are technically and culturally waiting to see you here! </p>
        </Grid>
        <Grid item xs={6}><video src={video1} width='auto' height='10%' controls="controls" autoplay="true"  style={{marginLeft:'10%',height:'100%',width:'80%'}}/></Grid>
      </Grid>
    </div>
  )
}

export default About
