import React from 'react'
import { Grid } from '@material-ui/core'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router';
import quizPoster from '../assets/quizPoster.jpeg'
import colossusLogo from '../assets/colossus_logo.png'
import { Navigate } from 'react-router';

const Quizzie = () => {
 const navigate = useNavigate()
 const handleQuizRegistration = () => {
    navigate('/quizzieBuzzieRegistration')
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
                        <h1 style={{ color: '#fff', marginLeft: '13%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '400%' }}>Quizzie-Buzzie</h1>
                        <br /><br />
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}>Technical Quiz</h5>
                        <h6 style={{ color: '#fff', marginLeft: '8%' }}><i>Come and show your technical prowess! </i></h6>
                        <p style={{ color: '#fff', marginLeft: '8%' }}>We are organizing a technical quiz event which consists of two rounds 
                        </p>
                        <p style={{ color: '#fff', marginLeft: '8%' }}><b>Round 1</b> will be the MCQ’s round: With a wide array of questions from numerous technical topics, 
                        this is one event that will breach the boundaries of your technical lore. </p>
                        <h4 style={{ color: '#fff', marginLeft: '8%' }}>ROUND 1 Rules</h4>
                        <ul style={{ color: '#fff', marginLeft: '8%' }}>
                            <li>No phones allowed.</li>
                            <li>Time limit 20 mins. No extra time will be provided.</li>
                            <li>Cross-Discussions will lead to disqualifications.</li>
                            <li>No negative marking in this round. </li>
                            <li>Decisions of the Quiz Masters will be the final decision.</li>
                            <li>Organizers can change the rule at any time.</li>
                        </ul>
                        <h4 style={{ color: '#fff', marginLeft: '8%' }}>ROUND 2</h4>
                        <ul style={{ color: '#fff', marginLeft: '8%' }}>
                            <li>Rules for this round will be disclosed on the beginning of the round itself.</li>
                            <li>100 Points for each question.</li>
                            <li>Penalisation of 50 points for wrong answers.</li>
                            <li>Organizers can change the rule at any time.</li>
                        </ul>
                        <h5 style={{ color: '#fff', marginLeft: '8%' }}>For Enquiry</h5>
                        <ul style={{ color: '#fff', marginLeft: '8%' }}>
                            <li>Mridani- 6395711814</li>
                            <li>Anand- 9165642584</li>
                        </ul>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={quizPoster} style={{ display: 'flex', justifyContent: 'center', width: '80%',height:'50%', margin: 'auto', marginTop: '8%' }} />
                        <button onClick={handleQuizRegistration} className='register' type='submit'>Register</button>
                    </Grid>
                </Grid>
            </div>
        </div>
      
    </>
  )
}

export default Quizzie
