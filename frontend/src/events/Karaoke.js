import React from 'react'
import poster from '../assets/KaraokePoster.jpeg'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router'
import { Grid } from '@material-ui/core'
import colossusLogo from '../assets/colossus_logo.png'

const CodeMania = () => {
    const navigate = useNavigate()
    const handleRegistration = () => {
        navigate('/karaokeRegistration')
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
                        <h1 style={{ color: '#fff', marginLeft: '6%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '400%' }}>Karaoke Marathon</h1>
                        <br /><br />
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}><i>Where words fail, Music speaks!!!!</i></h5>
                        <p style={{ color: '#fff', marginLeft: '8%' }}>C-DAC Noida is organizing its one-of-a-kind competition called Karaoke Marathon. 
                        </p>
                        <p style={{ color: '#fff', marginLeft: '8%' }}>And the best 3 winners will be awarded.</p>
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}>Rules and Regulations</h5>
                        <ul style={{ color: '#fff', marginLeft: '8%' }}>
                            <li>In this event there is a backtrack of a song and lyrics on the screen but here is where it gets tricky. While you are singing and you are in sync with the lyrics on the screen they disappear and you are on your own.
                                 If you can still go on and slay the song you go on to the next round. Whoever sticks to the last wins.</li>
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
                        <img src={poster} style={{ display: 'flex', justifyContent: 'center', width: '70%', height:'53%',margin: 'auto', marginTop: '5%' }} />
                        <button onClick={handleRegistration} className='register' type='submit' style={{marginTop:'30%'}}>Register</button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default CodeMania
