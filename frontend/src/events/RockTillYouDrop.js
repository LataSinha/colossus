import React from 'react'
import poster from '../assets/SoloDancePoster.jpeg'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router'
import { Grid } from '@material-ui/core'
import colossusLogo from '../assets/colossus_logo.png'

const BeatExplosion = () => {
    const navigate = useNavigate()
    const handleRegistration = () => {
        navigate('/RockTillTheDropRegistration')
    }
    return (
        <div style={{ backgroundColor: '#046e97' }}>
            <Helmet>
                <style>{"body { background-color: #046e97; }"}</style>
            </Helmet>
            <div style={{ backgroundColor: '#046e97' }}>
                {/* <h2 style={{color:'#fff',margin:'auto',fontFamily:'Gotham',fontSize:'3.5rem',textAlign:'center',letterSpacing:'0.3rem'}}>Code-Mania</h2>
        <img src={codemaniaPoster} style={{display:'flex',justifyContent:'center',width:'20%',margin:'auto'}}/> */}
                <Grid container>
                    <Grid item xs={6}>
                        <img src={colossusLogo} style={{ display: 'flex', justifyContent: 'center', width: '90%', margin: 'auto', marginTop: '5%' }} />
                        <p style={{ color: '#fff', marginLeft: '26%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '130%' }}>The Cosmic Fun Begins</p>
                        <h1 style={{ color: '#fff', marginLeft: '5%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '400%' }}>Rock Till You Drop</h1>
                        <br /><br />
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}><i>Dancers Do Not Need Wings To Fly, Their Feet Does The Work.</i></h5>
                        <p style={{ color: '#fff', marginLeft: '8%' }}>Hello Dancers! Grab your dancing shoes and get ready, C-DAC Noida is organizing 
                        " ROCK TILL THE DROP " which is an inter-college competition for all the Dancers to showcase their grooves and moves. 
                        </p>
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}>Rules and Regulations</h5>
                        <h4 style={{ color: '#fff', marginLeft: '8%' }}>ROUND 1</h4>
                        <ul style={{ color: '#fff', marginLeft: '8%' }}>
                            <li>Winner Shortlisted from this round will be eligible for Round 2. </li>
                            <li>Maximum time allotted to each performer is 5 min. </li>
                            <li>Organizers can change the rules anytime.</li>
                        </ul>
                        
                        <h4 style={{ color: '#fff', marginLeft: '8%' }}>ROUND 2</h4>
                        <ul style={{ color: '#fff', marginLeft: '8%' }}>
                            <li>One dance Battle will be of max 7-8 mins.</li>
                            <li>1 min performance by each participant in the battle.
                            </li>
                            <li>Organizers can change the rules anytime.</li>
                        </ul>
                        <h4 style={{ color: '#fff', marginLeft: '8%' }}>Entry Fee:&nbsp;₹ 50</h4>
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}>For Enquiry</h5>
                        <ul style={{ color: '#fff', marginLeft: '8%' }}>
                            <li>Nidhi Pandey- 9958146451</li>
                            <li>Avya Gupta- 9560348411</li>
                        </ul>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={poster} style={{ display: 'flex', justifyContent: 'center', width: '70%', height:'61%',margin: 'auto', marginTop: '5%' }} />
                        <button onClick={handleRegistration} className='register' type='submit' style={{marginTop:'35%'}}>Register</button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default BeatExplosion
