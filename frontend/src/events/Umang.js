import React from 'react'
import { Grid } from '@material-ui/core'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router';
import colossusLogo from '../assets/colossus_logo.png'
import umang from '../assets/umangPoster.jpeg'

const Umang = () => {
    const navigate = useNavigate()
    const handleRegister = () => {
        navigate('/umangRegistration')
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
                            <h1 style={{ color: '#fff', marginLeft: '32%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '400%' }}>Umang</h1>
                            <br /><br />
                            <h5 style={{ color: '#fff', marginLeft: '8%' }}>Let's meet on the street to sing the geets!</h5>
                            <p style={{ color: '#fff', marginLeft: '8%', textAlign: 'justify' }}>Street theatre is a form of theatrical performance and presentation in outdoor public spaces
                                without a specific paying audience. It is a team event of 10-15 members. Each team from
                                various colleges and universities will come to showcase their performance to get the attention of
                                the audience and deliver a social message.
                            </p>
                            <h5 style={{ color: '#fff', marginLeft: '8%' }}>Rules and Regulations</h5>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>Registration fees for the event is Rs.300.</li>
                                <li>The competition is open to all undergraduate and postgraduate students.</li>
                                <li>Any sort of racism, homophobia, sexism, or another offensive language will be immediately
                                    disqualified.
                                </li>
                                <li>Use of inflammable is prohibited.</li>
                                <li>Each team can have a maximum of 15 members.</li>
                                <li>Teams are asked to bring their props and costumes.</li>
                                <li>There will be no practice facility at the venue.</li>
                                <li>The teams will be immediately disqualified for exceeding the time limit.</li>
                                <li>After the performance, the performing area should not be damaged or left messy.</li>
                                <li>Each team will be assigned time slots on a first-come, first-served basis or as needed.</li>
                                <li>The decision of the judges will be final.</li>
                                <li>Organizers can change the rules anytime.</li>
                                <li>The competetion has <b>2 rounds:</b>
                                    <ul>
                                        <ul><b>Prelims</b>
                                            <li>Each team will get (7+3) minutes including set up & performance.</li>
                                        </ul>
                                        <ul><b>Finals</b>
                                            <li>8 Teams will be selected.</li>
                                            <li>Each team will get 25 minutes including set up & performance.</li>
                                        </ul>
                                    </ul>
                                </li>
                            </ul>
                            <h5 style={{ color: '#fff', marginLeft: '8%' }}>For Enquiry</h5>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>Tarun Chawla- 8860391578</li>
                                <li>Ritik Singh- 9868084050</li>
                            </ul>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={umang} style={{ display: 'flex', justifyContent: 'center', width: '80%', margin: 'auto', marginTop: '5%' }} />
                            <button className='register' type='submit' style={{marginTop:'75%'}}>Register</button>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    )
}

export default Umang
