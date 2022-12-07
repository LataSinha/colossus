import React from 'react'
import graphicPoster from '../assets/graphicPoster.jpeg'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router';
import { Grid } from '@material-ui/core'
import colossusLogo from '../assets/colossus_logo.png'

const CodeMania = () => {
    const navigate = useNavigate()
    const handleRegister = () =>{
        navigate('/pixelItRegistration')
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
                        <h1 style={{ color: '#fff', marginLeft: '31%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '400%' }}>Pixel It</h1>
                        <br /><br />
                        <p style={{ color: '#fff', marginLeft: '8%' }}>We are organizing a graphic designing competition in our college fest COLOSSUS.</p>
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}>Rules and Regulations</h5>
                        <ul style={{ color: '#fff', marginLeft: '8%' }}>
                            <li><b>Poster Size:</b>&nbsp;1080×1080</li>
                            <li><b>File Size:</b>&nbsp; Maximum file size is 20 mb</li>
                            <li><b>File Format:</b>&nbsp; Save your file as a PDF for quick and easy upload.
                            </li>
                            <li>Each participant should submit one entry only.</li>
                            <li>First 10-20 mins will be given for downloading elements, icons, and images that can be used in the poster.</li>
                            <li>Participants will have to turn off the internet before starting with the poster. 
                                Any participant who is found to have internet after starting with the design of the poster will be disqualified.</li>
                            <li>Each participant can download a maximum of 5 elements from the internet.</li>
                            <li>Participants can use only Adobe Photoshop or affinity to design the posters.</li>
                            <li>The poster will be judged according to the following criteria: creativity, presentation, and relevance to the theme.</li>
                            <li>Participant name or identifying mark must not appear on the Poster.</li>
                            <li>The poster should be the original work of the participant. Any participant found violating rules and regulations will be disqualified from the competition.</li>
                            <li>No posters should include an image or name of government officials or popular personalities.</li>
                            <li>Decision of the jury will be considered final.</li>
                            <li>All Participants should have their college IDs with them.</li>
                        </ul>
                        <h4 style={{ color: '#fff', marginLeft: '8%' }}>Entry Fee:&nbsp;₹ 50</h4>
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}>For Enquiry</h5>
                        <ul style={{ color: '#fff', marginLeft: '8%' }}>
                            <li>Nitish Gupta- 9260906197</li>
                            <li>Somiya Bhardwaj- 8979175671</li>
                        </ul>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={graphicPoster} style={{ display: 'flex', justifyContent: 'center', width: '70%', height:'45%',margin: 'auto', marginTop: '5%' }} />
                        <button onClick={handleRegister} className='register' type='submit' style={{marginTop:'65%'}}>Register</button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default CodeMania
