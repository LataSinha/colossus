import React from 'react'
import { Grid } from '@material-ui/core'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router';
import colossusLogo from '../assets/colossus_logo.png'
import papyrus from '../assets/paperPresentation.jpeg'

const Papyrus = () => {
    const navigate = useNavigate()
    const handleRegister = () => {
        navigate('/papyrusRegistration')
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
                            <h1 style={{ color: '#fff', marginLeft: '29%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '400%' }}>Papyrus</h1>
                            <br /><br />
                            <p style={{ color: '#fff', marginLeft: '8%' }}>A Paper Presentation competition will be organized in our
                                Fest/Colossus'22
                            </p>
                            <h4 style={{ color: '#fff', marginLeft: '8%' }}>Topics</h4>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>Web Mining</li>
                                <li>RAID Technology</li>
                                <li>Embedded Systems and Programming
                                </li>
                                <li>Cloud Computing and Cloud Services</li>
                                <li>AI in Machines</li>
                                <li>Negative Impacts of AI</li>
                                <li>Mobile Computing and Its Applications</li>
                                <li>Intelligent Apps</li>
                                <li>Harvard Architecture vs Von Neumann Architecture</li>
                            </ul>
                            <h4 style={{ color: '#fff', marginLeft: '8%' }}>Rules and Regulations</h4>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>Participants have to choose a topic based on trending technology and
                                    they have to give a presentation(5-7 mins) on that topic.
                                </li>
                                <li>Participation can be in teams of at most 2 members.</li>
                            </ul>
                            <h3 style={{ color: '#fff', marginLeft: '8%' }}>Entry Fee:</h3>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>50(individual)</li>
                                <li>100(team)</li>
                            </ul>
                            <h5 style={{ color: '#fff', marginLeft: '8%' }}>For Enquiry</h5>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>Ajay- +91 90507 07066</li>
                                <li>Aditi- 7905955636</li>
                            </ul>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={papyrus} style={{ display: 'flex', justifyContent: 'center', width: '75%', height: '43%', margin: 'auto', marginTop: '5%' }} />
                            <button onClick={handleRegister} className='register' type='submit' style={{marginTop:'58%'}}>Register</button>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    )
}

export default Papyrus
