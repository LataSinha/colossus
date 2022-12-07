import React from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router'
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
  const navigate = useNavigate()
  const handleCoding = () => {
    navigate('/codeMania')
  }
  const handleWebd = () => {
    navigate('/webForces')
  }
  const handleQuiz = () => {
    navigate('/quizzieBuzzie')
  }
  return (
    <div className='events'>
       <h4 style={{ fontFamily: 'Gotham', color: '#fff', display:'flex', fontSize: '3em',justifyContent:'center',fontWeight:'bold' }}>Technical Events</h4>
      <Grid container>
        <Grid items xs={4}>
          <img className='img' src={coding} onClick={handleCoding} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%',transition:'transform .1s',cursor:'pointer' }} />
        </Grid>
        <Grid items xs={4}>
          <img className='img' onClick={handleWebd} src={webd} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%',transition:'transform .1s',cursor:'pointer' }} />
        </Grid>
        <Grid items xs={4}>
          <img className='img'onClick={handleQuiz} src={quiz} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%',transition:'transform .1s',cursor:'pointer' }} />
        </Grid>

      </Grid>
      <Grid container>
        <Grid items xs={4}>
          <img className='img' src={paperPresentation} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%',transition:'transform .1s',cursor:'pointer' }} />
        </Grid>
        <Grid items xs={4}>
        <img className='img' src={lanGame} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%',transition:'transform .1s',cursor:'pointer' }} />
        </Grid>
        <Grid items xs={4}>
        <img className='img' src={lanGame2} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%',transition:'transform .1s',cursor:'pointer' }} />
        </Grid>
      </Grid>
      <h4 style={{ fontFamily: 'Gotham', color: '#fff', display:'flex', fontSize: '3em',justifyContent:'center',fontWeight:'bold',transition:'transform .1s',cursor:'pointer' }}>Non-Technical Events</h4>
      <Grid container>
        <Grid items xs={4}>
        <img className='img' src={photography} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%',transition:'transform .1s',cursor:'pointer' }} />
        </Grid>
        <Grid items xs={4}>
        <img className='img' src={photography2} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '100',transition:'transform .1s',cursor:'pointer' }} />
        </Grid>
        <Grid items xs={4}>
        <img className='img' src={poem} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%',transition:'transform .1s',cursor:'pointer' }} />
        </Grid>
       
      </Grid>
      <Grid container>
      <Grid items xs={4}>
        <img className='img' src={soloDance} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%',transition:'transform .1s',cursor:'pointer' }} />
        </Grid>
        <Grid items xs={4}>
        <img className='img' src={groupDance} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%',transition:'transform .1s',cursor:'pointer' }} />
        </Grid>
        <Grid items xs={4}>
        <img className='img' src={betfair} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%',transition:'transform .1s',cursor:'pointer' }} />
        </Grid>
        
      </Grid>
      <Grid container>
      <Grid items xs={4}>
        <img className='img' src={music} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%',transition:'transform .1s',cursor:'pointer' }} />
        </Grid>
        <Grid items xs={4}>
        <img className='img' src={karoke} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%',transition:'transform .1s',cursor:'pointer' }} />
        </Grid>
        <Grid items xs={4}>
        <img className='img' src={fineArts} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%',transition:'transform .1s' }} />
        </Grid>
        <Grid container>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
          <img className='img' src={dramatics} style={{ height: '80%', width: '80%', marginLeft: '10%', borderRadius: '15%',transition:'transform .1s',cursor:'pointer' }} />
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
        
      </Grid>
    </div>
  )
}

export default Events
