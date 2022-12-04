import React from 'react'
import { Grid } from '@mui/material'
import coding from '../assets/CodeMania.png'
import webd from '../assets/WebForces.png'
import dramatics from '../assets/Umang.png'
import betfair from '../assets/BiddersDate.png'
import paperPresentation from '../assets/Papyrus.png'
import poem from '../assets/Kavyanjali.png'
import quiz from '../assets/Quizz.png'
import music from '../assets/SurSangam.png'
import soloDance from '../assets/RockTillTheDrop.png'
import groupDance from '../assets/BeatExplosion.png'
import fineArts from '../assets/ArtyCrafty.png'
import photography from '../assets/PixelIt.png'
import karoke from '../assets/Karoke.png'
import lanGame from '../assets/NostalgicRacing.png'
import lanGame2 from '../assets/Codm.png'
import photography2 from '../assets/Pixofy.png'

const Events = () => {
  return (
    <div className='events'>
       <h4 style={{ fontFamily: 'Gotham', color: '#fff', display:'flex', fontSize: '3em',justifyContent:'center',fontWeight:'bold' }}>Technical Events</h4>
      <Grid container>
        <Grid items xs={4}>
          <img src={coding} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
        </Grid>
        <Grid items xs={4}>
          <img src={webd} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
        </Grid>
        <Grid items xs={4}>
          <img src={quiz} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
        </Grid>

      </Grid>
      <Grid container>
        <Grid items xs={4}>
          <img src={paperPresentation} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
        </Grid>
        <Grid items xs={4}>
        <img src={lanGame} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
        </Grid>
        <Grid items xs={4}>
        <img src={lanGame2} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
        </Grid>
      </Grid>
      <h4 style={{ fontFamily: 'Gotham', color: '#fff', display:'flex', fontSize: '3em',justifyContent:'center',fontWeight:'bold' }}>Non-Technical Events</h4>
      <Grid container>
        <Grid items xs={4}>
        <img src={photography} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
        </Grid>
        <Grid items xs={4}>
        <img src={photography2} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
        </Grid>
        <Grid items xs={4}>
        <img src={poem} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
        </Grid>
       
      </Grid>
      <Grid container>
      <Grid items xs={4}>
        <img src={soloDance} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
        </Grid>
        <Grid items xs={4}>
        <img src={groupDance} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
        </Grid>
        <Grid items xs={4}>
        <img src={betfair} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
        </Grid>
        
      </Grid>
      <Grid container>
      <Grid items xs={4}>
        <img src={music} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
        </Grid>
        <Grid items xs={4}>
        <img src={karoke} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
        </Grid>
        <Grid items xs={4}>
        <img src={fineArts} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
        </Grid>
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
          <img src={dramatics} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%' }} />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        
      </Grid>
    </div>
  )
}

export default Events
