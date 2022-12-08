import React from 'react'
import { Grid } from '@material-ui/core'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router';
import colossusLogo from '../assets/colossus_logo.png'
import poetery from '../assets/poeteryPoster.png'

const Pixofy = () => {
    const navigate = useNavigate()
    const handleRegister = () => {
        navigate('/kavyanjaliRegister')
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
                            <h1 style={{ color: '#fff', marginLeft: '22%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '400%' }}>Kavyanjali</h1>
                            <br /><br />
                            <h6 style={{ color: '#fff', marginLeft: '8%' }}><i>All the fellow Ghalibs out there! get your seat-belts tightened up!</i></h6>
                            <p style={{ color: '#fff', marginLeft: '8%' }}>We welcome you all to grace us with your lovely presence and enjoy this
                                wonderful event hosting many budding poets!
                            </p>
                            <p style={{ color: '#fff', marginLeft: '8%' }}>Poets can share their thoughts in both English and Hindi. Individual with
                                the best poetry according to judges will be the winner.
                            </p>
                            <h5 style={{ color: '#fff', marginLeft: '8%' }}>Rules and Regulations</h5>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>Single-round event.</li>
                                <li>Individual participation is invited.</li>
                                <li>This competition is open to all undergraduate and postgraduate students.
                                </li>
                                <li>Poems can be in Hindi or English.</li>
                                <li>Each participant will be given 3 minutes for their performance.</li>
                                <li>A warning bell will ring on completion of 2:50 and the second bell will ring on completion of 3:00 
                                    after that you have to stop your performance else it will lead to disqualification.</li>
                                <li>Poems should be original in its composition. Any sort of plagiarism is strictly prohibited.</li>
                                <li>Any sort of racism, homophobia, sexism or another offensive language will be immediately disqualified.</li>
                                <li>Decisions of the judges and management team will be final and non-objectionable.</li>
                                <li>The Organizing team can make changes to the rules at any time. </li>
                            </ul>
                            <h5 style={{ color: '#fff', marginLeft: '8%' }}>For Enquiry</h5>
                            <ul style={{ color: '#fff', marginLeft: '8%' }}>
                                <li>Pratham- 76784 00616</li>
                                <li>Himanshi- 9315216782</li>
                            </ul>
                        </Grid>
                        <Grid item xs={6}>
                            <img src={poetery} style={{ display: 'flex', justifyContent: 'center', width: '85%', height: '55%', margin: 'auto', marginTop: '5%' }} />
                            <button onClick={handleRegister} className='register' type='submit' style={{ marginTop: '50%',marginLeft:'50%' }}>Register</button>
                        </Grid>
                    </Grid>
                </div>
            </div>

        </>
    )
}

export default Pixofy
