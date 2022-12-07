import React from 'react'
import poster from '../assets/ConcentricaPoster.jpeg'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router'
import { Grid } from '@material-ui/core'
import colossusLogo from '../assets/colossus_logo.png'

const Concentrica = () => {
    const navigate = useNavigate()
    const handleRegistration = () => {
        navigate('/concentricaRegistration')
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
                        <h1 style={{ color: '#fff', marginLeft: '20%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '400%' }}>Concentrica</h1>
                        <br /><br />
                        <p style={{ color: '#fff', marginLeft: '8%' }}>We are organizing a photography competition in our college fest 'COLOSSUS'.
                        </p>
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}>Rules and Regulations</h5>
                        <ul style={{ color: '#fff', marginLeft: '8%' }}>
                            <li>Any medium for painting is welcomed.</li>
                            <li>A3 Sheets will be provided at the venue.
                            </li>
                            <li>You need to take care of your sheet as no extra sheets will be provided from our side.</li>
                            <li>The art should be an original work. Plagiarism of any kind will lead to immediate disqualification.</li>
                            <li>No more than 2 colors are allowed and time is 30minutes.</li>
                            <li>The total duration for completion of the painting is 1 hour.</li>
                            <li>Make payment for your entry and post the screenshot of your payment in the form provided below.</li>
                            <li>The backside of the paintings should carry the participant's details clearly.</li>
                            <li>Results will be announced on the basis of relevance to the topic, color mixing and usage, and how beautiful the painting is.</li>
                            <li>The Judges' decisions will be final</li>
                            <li>Organizers can change the rule anytime.</li>
                        </ul>
                        <h4 style={{ color: '#fff', marginLeft: '8%' }}>Entry Fee:&nbsp;₹ 50</h4>
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}>For Enquiry</h5>
                        <ul style={{ color: '#fff', marginLeft: '8%' }}>
                            <li>Shivam Tiwari- +91-8604563049</li>
                            <li>Ayush Verma- +91- 8287824607</li>
                            <li>Somiya Bharadwaj- +91-8979175671</li>
                        </ul>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={poster} style={{ display: 'flex', justifyContent: 'center', width: '73%', height:'58%',margin: 'auto', marginTop: '5%' }} />
                        <button onClick={handleRegistration} className='register' type='submit' style={{marginTop:'44%'}}>Register</button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Concentrica
