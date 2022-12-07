import React from 'react'
import {useNavigate} from 'react-router'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@mui/icons-material/Star';
import { Helmet } from "react-helmet";

const Timeline = () => {
    const navigate = useNavigate();
    const handleCoding = () => {
        navigate('/codeMania')
      }
      const handleWebd = () => {
        navigate('/webForces')
      }
      const handleQuiz = () => {
        navigate('/quizzieBuzzie')
      }
      const handlePaperPresentation = () => {
        navigate('/papyrus')
      }
      const handlePixofy = () => {
        navigate('/pixofy')
      }
      const handleBetfair = () => {
        navigate('/betfair')
      }
      const handleUmang = () => {
        navigate('/umang')
      }
      const handleArtyCrafty = () => {
        navigate('/artyCrafty')
      }
      const handlePixelIt = () => {
        navigate('/pixelIt')
      }
      const handleKavyanjali = () => {
        navigate('/kavyanjali')
      }
      const handleNostalgicRacing = () => {
        navigate('/nostalgicRacing')
      }
      const handleRampage = () => {
        navigate('/rampage')
      }
      const handleKaraoke = () => {
        navigate('/karaoke')
      }
      const handleBeatExplosion = () => {
        navigate('/beatExplosion')
      }
      const handleArtOfYours = () => {
        navigate('/artOfYours')
      }
      const handleConcentrica = () => {
        navigate('/concentrica')
      }
      const handleSurSangam = () => {
        navigate('/surSangam')
      }
      const handleRockTillYouDrop = () => {
        navigate('/rockTillYouDrop')
      }
    return (
        <div>
            <Helmet>
                <style>{"body { background-color: #046e97; }"}</style>
            </Helmet>
            <h1 style={{margin:'auto',fontFamily:'Gotham',color:'#fff',textAlign:'center',fontSize:'400%',letterSpacing:'0.4rem'}}>Timeline</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fff', color: '#000',height:'20%' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    icon={<StarIcon style={{fontSize:'200%'}}/>}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    style={{width:'80%',marginLeft:'10%',fontStyle:'Gotham'}}
                >
                 <h3>21<sup>st</sup>December 2022</h3>
                 <p style={{display:'flex'}}>1.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleCoding} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Code-Mania</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;12:00 p.m to 4:00 p.m</i></p>
                 <p style={{display:'flex'}}>2.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleQuiz} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Quizzie Buzzie</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;10:30 a.m to 1:30 p.m</i></p>
                 <p style={{display:'flex'}}>3.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleWebd} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Web Forces</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;11:00 a.m to 3:00 p.m</i></p>
                 <p style={{display:'flex'}}>4.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleRampage} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Rampage</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;11:00 a.m to 5:30 p.m</i></p>
                 <p style={{display:'flex'}}>5.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleKaraoke} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Karaoke Marathon</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;10:00 a.m to 1:00 p.m</i></p>
                 <p style={{display:'flex'}}>6.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleBeatExplosion} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Beat Explosion</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;10:00 a.m to 3:00 p.m</i></p>
                 <p style={{display:'flex'}}>7.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleUmang} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Umang</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;1:30 p.m to 5:00 p.m</i></p>
                 <p style={{display:'flex'}}>8.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleBetfair} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Bidder's Date</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;12:00 p.m to 5:00 p.m</i></p>
                 <p style={{display:'flex'}}>9.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleArtOfYours} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Art of Yours</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;11:00 a.m to 1:00 p.m</i></p>
                 <p style={{display:'flex'}}>10.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleConcentrica} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Concentrica</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;2:00 p.m to 3:30 p.m</i></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    contentStyle={{ background: '#fff', color: '#000',height:'20%' }}
                    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
                    icon={<StarIcon style={{fontSize:'200%'}}/>}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    style={{width:'80%',marginLeft:'10%',fontStyle:'Gotham'}}
                >
                  <h3>22<sup>nd</sup>December 2022</h3>
                 <p style={{display:'flex'}}>1.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handlePixelIt} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Pixel It</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;11:00 a.m to 1:00 p.m</i></p>
                 <p style={{display:'flex'}}>2.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleNostalgicRacing} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Nostalgic Racing</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;11:00 a.m to 4:00 p.m</i></p>
                 <p style={{display:'flex'}}>3.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handlePaperPresentation} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Papyrus</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;11:00 a.m to 3:00 p.m</i></p>
                 <p style={{display:'flex'}}>4.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleSurSangam} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Sursangam</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;10:00 a.m to 12:30 p.m</i></p>
                 <p style={{display:'flex'}}>5.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleRockTillYouDrop} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Rock Till You Drop</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;1:00 p.m to 4:00 p.m</i></p>
                 <p style={{display:'flex'}}>6.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleUmang} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Umang</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;10:00 a.m to 3:30 p.m</i></p>
                 <p style={{display:'flex'}}>7.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handleKavyanjali} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Kavyanjali</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;2:00 p.m to 5:30 p.m</i></p>
                 <p style={{display:'flex'}}>8.&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={handlePixofy} className="vertical-timeline-element-title" style={{background:'#000',color:'#fff',height:'30%',width:'80%',padding:'5%',borderRadius:'5px',fontFamily:'Gotham',fontSize:'150%'}}>Pixofy</button></p>
                 <p className="vertical-timeline-element-subtitle" style={{marginLeft:'5%'}}><i>Time:&nbsp;2:00 p.m to 4:30 p.m</i></p>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </div>
    )
}

export default Timeline
