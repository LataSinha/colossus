import React from 'react'
import { Grid } from '@material-ui/core'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router';
import webForces from '../assets/webdPoster.png'
import colossusLogo from '../assets/colossus_logo.png'

const WebForces = () => {
    const navigate = useNavigate()
    const handleRegister = () => {
        navigate('/webforcesRegistration')
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
                            <h1 style={{ color: '#fff', marginLeft: '22%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '400%' }}>Web Forces</h1>
                            <br /><br />
                            <p style={{ color: '#fff', marginLeft: '8%' }}>Competitors will receive a professional brief and must build a user-friendly, contemporary website in a live competition. The competition includes a range of competencies for web designers and developers.
                                We welcome you all to grace us with your lovely presence and enjoy this wonderful event.
                                You can join us individually or in a team of 2 members.</p>
                            <p style={{ color: '#fff', marginLeft: '8%' }}>There is also a short session on website deployment on azure in which you will
                                learn how to deploy your website using Microsoft Azure Static Web App Services.
                            </p>
                            <h5 style={{ color: '#fff', marginLeft: '8%' }}>Rules and Regulations</h5>
                            <h4 style={{ color: '#fff', marginLeft: '8%' }}>ROUND 1</h4>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>30 mins MCQ round based on HTML, CSS, JS, PHP, Bootstrap, jQuery, React, Node.</li>
                                <li>It is an elimination round</li>
                            </ul>
                            <h4 style={{ color: '#fff', marginLeft: '8%' }}>ROUND 2</h4>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>Participants have to make a basic 1-2 page website on a particular topic in 2 hours.</li>
                                <li>Topic will be given on spot.</li>
                                <li>Participants can use HTML, CSS, JS, Bootstrap, Node, React, Express to make the website.</li>
                            </ul>
                            <h4 style={{ color: '#fff', marginLeft: '8%' }}>Entree Fee:&nbsp;₹ 100</h4>
                            <h5 style={{ color: '#fff', marginLeft: '8%' }}>For Enquiry</h5>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>Muskan Rani- +91 93544 04363</li>
                                <li>Shubham garg- +91 70423 81866</li>
                            </ul>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={webForces} style={{ display: 'flex', justifyContent: 'center', width: '71%', height: '45%', margin: 'auto', marginTop: '5%' }} />
                            <button onClick={handleRegister} className='register' type='submit' style={{ marginTop: '60%' }}>Register</button>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    )
}

export default WebForces
