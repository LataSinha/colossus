import React from 'react'
import { Grid } from '@material-ui/core'
import { useNavigate } from 'react-router';
import { Helmet } from "react-helmet";
import colossusLogo from '../assets/colossus_logo.png'
import betfairPoster from '../assets/betfairPoster.png'

const BetFair = () => {
    const navigate = useNavigate();
    const handleBetFairReg = () => {
        navigate('/biddersDateRegistration')
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
                   <h1 style={{ color: '#fff', marginLeft: '19%', fontFamily: 'Gotham', letterSpacing: '.2rem', fontSize: '400%' }}>Bidder's Date</h1>
                   <br /><br />
                   <p style={{ color: '#fff', marginLeft: '8%' }}>We are organizing a Bet Fair in our college fest for all the cricket
                       lovers.
                   </p>
                   <h4 style={{ color: '#fff', marginLeft: '8%' }}>ROUND 1: The Quiz</h4>
                   <ul style={{ color: '#fff', marginLeft: '8%' }}>
                       <li>The questions will be regarding International Cricket and IPL.</li>
                       <li>Top 5 highest scoring teams will make it to the next level.</li>
                   </ul>
                   <h4 style={{ color: '#fff', marginLeft: '8%' }}>ROUND 2: The Bidding</h4>
                   <ul style={{ color: '#fff', marginLeft: '8%' }}>
                       <li>Participation can be individual or in a  team of 2 members.</li>
                       <li>Teams will be provided an equal amount of Virtual cash before the bidding.</li>
                       <li>Teams will be required to form a Cricket Team.</li>
                       <li>Each player that will be auctioned will have a rating and base price attached to them.</li>
                       <li>Team with the maximum total ratings will be the winner.</li>
                       <li>Each team must buy at least one wicketkeeper,5 batsmen,5 bowlers. </li>
                       <li>Each team has at most 5 overseas players.</li>
                   </ul>
                   <h5 style={{ color: '#fff', marginLeft: '8%' }}>Rules and Regulations</h5>
                   <ul style={{ color: '#fff', marginLeft: '8%' }}>
                       <li>This competition is open to all undergraduates and postgraduate student students 
                        (identity cards will be required at the time of registration).</li>
                       <li>	In case of any contention, the decision of the management team will be non-objectionable.</li>
                       <li>The organizers can change the rules at any time.</li>
                   </ul>
                   <h4  style={{ color: '#fff', marginLeft: '8%' }}>Entry Fee: :&nbsp;₹ 100 for each team</h4>
                   <h5 style={{ color: '#fff', marginLeft: '8%' }}>For Enquiry</h5>
                   <ul style={{ color: '#fff', marginLeft: '8%' }}>
                       <li>Pratham- 76784 00616</li>
                       <li>Himanshi- 9315216782</li>
                   </ul>
               </Grid>
               <Grid item xs={6}>
                   <img src={betfairPoster} style={{ display: 'flex', justifyContent: 'center', width: '80%',height:'45%', margin: 'auto', marginTop: '5%' }} />
                   <button onclick={handleBetFairReg} className='register' type='submit' style={{margin:'60%'}} onClick={handleBetFairReg}>Register</button>
               </Grid>
           </Grid>
       </div>
   </div>
 
</>
  )
}

export default BetFair
