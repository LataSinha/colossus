import React from 'react'
import { Grid } from '@material-ui/core'
import { useNavigate } from 'react-router';
import { Helmet } from "react-helmet";
import colossusLogo from '../assets/colossus_logo.png'
import pixofy from '../assets/PixofyPoster.jpeg'

const Pixofy = () => {
    const navigate = useNavigate()
    const handleRegister = () =>{
        navigate('/pixofyRegistration')
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
                            <h1 style={{ color: '#fff', marginLeft: '33%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '400%' }}>Pixofy</h1>
                            <br /><br />
                            <p style={{ color: '#fff', marginLeft: '8%' }}>A Photography  competition will be organized in our
                                Fest/Colossus'22.
                            </p>
                            <h4 style={{ color: '#fff', marginLeft: '8%' }}>ROUND 1</h4>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>30 minutes</li>
                                <li>Only 1 picture will be considered.</li>
                                <li>Candid photo of living being is to be captured.</li>
                            </ul>
                            <h4 style={{ color: '#fff', marginLeft: '8%' }}>ROUND 2</h4>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>5 minutes</li>
                                <li>15 minutes editing</li>
                                <li>It is an object round.</li>
                                <li>Only 1 picture will be considered.</li>
                            </ul>
                            <h5 style={{ color: '#fff', marginLeft: '8%' }}>Rules and Regulations</h5>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>The Competition is open to students of all colleges.</li>
                                <li>There will be two rounds.</li>
                                <li>Judgment will be based on the total number of questions completed and the number of
                                    test cases passed.
                                </li>
                                <li>Lastly, the decision of the judges will be final and binding.</li>
                                <li>Organizers can change the rule anytime.</li>
                            </ul>
                            <h5 style={{ color: '#fff', marginLeft: '8%' }}>For Enquiry</h5>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>Somiya Bharadwaj- +91-8979175671</li>
                                <li>Shivam Tiwari- +91-8604563049</li>
                                <li>Ayush Verma- +91- 8287824607</li>
                            </ul>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={pixofy} style={{ display: 'flex', justifyContent: 'center', width: '80%', margin: 'auto', marginTop: '5%' }} />
                            <button onClick= {handleRegister} className='register' type='submit' style={{marginTop:'45%'}}>Register</button>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    )
}

export default Pixofy
