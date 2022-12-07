import React from 'react'
import poster from '../assets/GroupDancePoster.jpeg'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router'
import { Grid } from '@material-ui/core'
import colossusLogo from '../assets/colossus_logo.png'

const BeatExplosion = () => {
    const navigate = useNavigate()
    const handleRegistration = () => {
        navigate('/beatExplosionRegistration')
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
                        <h1 style={{ color: '#fff', marginLeft: '14%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '400%' }}>Beat Explosion</h1>
                        <br /><br />
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}><i>Dancers Do Not Need Wings To Fly, Their Feet Does The Work.</i></h5>
                        <p style={{ color: '#fff', marginLeft: '8%' }}>Hello Dancers! Let the beat control your bodies and set the stage on fire with your passion for dancing, C-DAC Noida is organizing " Beat Explosion " 
                        which is an inter-college competition for all the Dancers to showcase their grooves and moves. 

                        </p>
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}>Rules and Regulations</h5>
                        <ul style={{ color: '#fff', marginLeft: '8%' }}>
                            <li>Maximum time allotted for each performance is 10 mins.</li>
                            <li>Team has to bring their backing track on their own.
                            </li>
                            <li>No props will be provided.</li>
                            <li>5-6 members per team is allowed.</li>
                            <li>Organizers can change the rules anytime.</li>
                        </ul>
                        <h4 style={{ color: '#fff', marginLeft: '8%' }}>Entry Fee:&nbsp;₹ 150</h4>
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}>For Enquiry</h5>
                        <ul style={{ color: '#fff', marginLeft: '8%' }}>
                            <li>Nidhi Pandey- 9958146451</li>
                            <li>Avya Gupta- 9560348411</li>
                        </ul>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={poster} style={{ display: 'flex', justifyContent: 'center', width: '70%', height:'52%',margin: 'auto', marginTop: '5%' }} />
                        <button onClick={handleRegistration} className='register' type='submit' style={{marginTop:'32%'}}>Register</button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default BeatExplosion
