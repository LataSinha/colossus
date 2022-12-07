import React from 'react'
import { Grid } from '@material-ui/core'
import { Helmet } from "react-helmet";
import colossusLogo from '../assets/colossus_logo.png'
import artyCrafty from '../assets/FineArts.jpg'

const ArtyCrafty = () => {
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
                   <h1 style={{ color: '#fff', marginLeft: '20%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '400%' }}>Code-Mania</h1>
                   <br /><br />
                   <p style={{ color: '#fff', marginLeft: '8%' }}>We are organizing a coding competition in our college fest for all the coding
                       geeks.
                   </p>
                   <p style={{ color: '#fff', marginLeft: '8%' }}>The competition consists of two rounds and each round is an eliminatory
                       round. The fastest and most accurate participant will be the winner of the contest.

                   </p>
                   <h5 style={{ color: '#fff', marginLeft: '8%' }}>Platform:&nbsp;HACKERRANK</h5>
                   <h4 style={{ color: '#fff', marginLeft: '8%' }}>ROUND 1</h4>
                   <ul style={{ color: '#fff', marginLeft: '8%' }}>
                       <li>60 minutes</li>
                       <li>3 questions (EASY-MEDIUM LEVEL)</li>
                   </ul>
                   <h4 style={{ color: '#fff', marginLeft: '8%' }}>ROUND 2</h4>
                   <ul style={{ color: '#fff', marginLeft: '8%' }}>
                       <li>60 minutes</li>
                       <li>3 questions (MEDIUM-HARD LEVEL)</li>
                       <li>Our team will provide hints but some points will be deducted.</li>
                   </ul>
                   <h5 style={{ color: '#fff', marginLeft: '8%' }}>Rules and Regulations</h5>
                   <ul style={{ color: '#fff', marginLeft: '8%' }}>
                       <li>Students can register as individuals (Entry Fee Rs. 50 ).</li>
                       <li>The candidate with a faster and maximum score will be a winner</li>
                       <li>Judgment will be based on the total number of questions completed and the number of
                           test cases passed.
                       </li>
                       <li>Each Question carries some marks which are displayed on the question window.</li>
                       <li>Participation Certificates will be given to all the participants.</li>
                       <li>Maximum 30 entries are allowed.</li>
                       <li>Admin leaderboard will be used for result analysis.</li>
                       <li>In case of a tie, one will be judged on test submission timing criteria.</li>
                       <li>Decisions of the organizers will be final and binding.</li>
                       <li>Participants must not open any other tab in the allotted computer.</li>
                       <li>For any assistance inform the members on duty.</li>
                       <li>Mobile Phones will be submitted before starting the event.</li>
                       <li>All Participants should have their college IDs with them.</li>
                       <li>Organizers can change the rules anytime.</li>
                   </ul>
                   <h5 style={{ color: '#fff', marginLeft: '8%' }}>For Enquiry</h5>
                   <ul style={{ color: '#fff', marginLeft: '8%' }}>
                       <li>Aman- 9560922385</li>
                       <li>Akshat- 8860315039</li>
                   </ul>
               </Grid>
               <Grid item xs={6}>
                   <img src={artyCrafty} style={{ display: 'flex', justifyContent: 'center', width: '80%',height:'40%', margin: 'auto', marginTop: '5%' }} />
                   <button className='register' type='submit'>Register</button>
               </Grid>
           </Grid>
       </div>
   </div>
 
</>
  )
}

export default ArtyCrafty
