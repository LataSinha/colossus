import React from 'react'
import poster from '../assets/SursangamPoster.jpeg'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router'
import { Grid } from '@material-ui/core'
import colossusLogo from '../assets/colossus_logo.png'

const CodeMania = () => {
    const navigate = useNavigate()
    const handleRegistration = () => {
        navigate('/surSangamRegistration')
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
                        <h1 style={{ color: '#fff', marginLeft: '23%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '400%' }}>Sursangam</h1>
                        <br /><br />
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}><i>Where words fail, Music speaks!!!!</i></h5>
                        <p style={{ color: '#fff', marginLeft: '8%' }}>C-DAC Noida is organizing "Sursangam" which is an inter-college singing competition for all
                            the singers to showcase their singing skills and let the world be lost in their melodies.

                        </p>
                        <p style={{ color: '#fff', marginLeft: '8%' }}>And the best 3 winners will be awarded.</p>
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}>Rules and Regulations</h5>
                        <ul style={{ color: '#fff', marginLeft: '8%' }}>
                            <li>Strictly bollywood songs allowed.</li>
                            <li>2Time limit - 3+1 including set up and sound check
                            </li>
                            <li>Maximum 2 accompanists are allowed.</li>
                            <li>Electronic tanpura allowed</li>
                            <li>Maximum 30 entries are allowed.</li>
                            <li>Participants must carry their own instruments.</li>
                            <li>Use of pre-recorded track is not allowed</li>
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
                        <img src={poster} style={{ display: 'flex', justifyContent: 'center', width: '70%', height:'45%',margin: 'auto', marginTop: '5%' }} />
                        <button onClick={handleRegistration} className='register' type='submit' style={{marginTop:'40%'}}>Register</button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default CodeMania
