import React from 'react'
import { Grid } from '@material-ui/core'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router';
import colossusLogo from '../assets/colossus_logo.png'
import rampage from '../assets/RampagePoster.png'

const Pixofy = () => {
    const navigate = useNavigate()
    const handleRegister = () => {
        navigate('/codmRegister')
    }
    return (
        <>
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
                            <h1 style={{ color: '#fff', marginLeft: '26%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '400%' }}>Rampage</h1>
                            <br /><br />
                            <p style={{ color: '#fff', marginLeft: '8%' }}>We welcome you all to grace us with your lovely presence and enjoy this
                                wonderful event!
                            </p>
                            <h5 style={{ color: '#fff', marginLeft: '8%' }}>Rules and Regulations</h5>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>The Administrators reserve the right to modify the rules as needed.</li>
                                <li>The number of winning rounds may differ in the first round, according to the number of participant teams.</li>
                                <li>In case of a change, the teams will be informed about the change by the admin.
                                </li>
                                <li>Use of any cheat program and Intentional disconnection leads to unfair gameplay.</li>
                                <li>Teams must understand that the rules listed are guidelines to ensure fair and competitive play and are subject to the administrators'
                                    interpretation based on the game's spirit</li>
                            </ul>
                            <h5 style={{ color: '#fff', marginLeft: '8%' }}>Guidelines</h5>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>For elimination, a single round of 10 minutes.</li>
                                <li>First round - <b>Gun Game</b></li>
                                <li>Second round - <b>Search and Destroy</b></li>
                                <li>Third round - <b>Team Death Match</b></li>
                            </ul>
                            <h4 style={{ color: '#fff', marginLeft: '8%' }}>Entry Feee:</h4>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>₹100 per team</li>
                                <li>₹30 per person</li>
                            </ul>
                            <h5 style={{ color: '#fff', marginLeft: '8%' }}>For Enquiry</h5>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>Ashish Sundriyal- 9958661136</li>
                                <li>Pratham Jain- 7678400616</li>
                                <li>Rishabh Gupta- 9718459700</li>
                            </ul>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={rampage} style={{ display: 'flex', justifyContent: 'center', width: '85%', height: '42%', margin: 'auto', marginTop: '5%' }} />
                            <button onClick= {handleRegister} className='register' type='submit' style={{ marginTop: '60%', marginLeft: '50%' }}>Register</button>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    )
}

export default Pixofy
