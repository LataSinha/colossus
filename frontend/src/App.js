import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import { Contact } from './components/Contact';
import Timeline from './components/Timeline';
import CodeMania from './events/CodeMania';
import WebForces from './events/WebForces';
import Quizzie from './events/Quizzie';
import Papyrus from './events/Papyrus';
import Pixofy from './events/Pixofy';
import BetFair from './events/BetFair';
import Umang from './events/Umang';
import ArtyCrafty from './events/ArtyCrafty';
import PixelIt from './events/PixelIt';
import Kavyanjali from './events/Kavyanjali'
import NostalgicRacing from './events/NostalgicRacing'
import Rampage from './events/Rampage.js'
import KaraokeRegistration from './registrationLinks/KaraokeRegistration';
import QuizzieBuzzie from './registrationLinks/QuizzieBuzzie';
import CodeManiaRegistration from './registrationLinks/CodeManiaRegistration'
import BiddersDateRegistration from './registrationLinks/BiddersDateRegistration';
import PapyrusRegistration from './registrationLinks/PapyrusRegistration'
import WebForcesRegistration from './registrationLinks/WebForcesRegistration'
import SurSangam from './events/SurSangam'
import Karaoke from './events/Karaoke'
import BeatExplosion from './events/BeatExplosion'
import RockTillYouDrop from './events/RockTillYouDrop'
import ArtOfYours from './events/ArtOfYours';
import Concentrica from './events/Concentrica';
import ConcentricaRegistration from './registrationLinks/ConcentricsReg';
import ArtOfYoursRegistration from './registrationLinks/ArtOfYoursReg';
import PixofyReg from './registrationLinks/PixofyReg';
import UmangReg from './registrationLinks/UmangReg';
import RockTillTheDropReg from './registrationLinks/RockTillTheDropReg';
import BeatExplosionReg from './registrationLinks/BeatExplosionReg';
import SurSangamRegistration from './registrationLinks/SurSangamRegistration';
import PixelItReg from './registrationLinks/PixelItReg';
import NostalgicRacingReg from './registrationLinks/NostalgicRacingReg';
import RampageReg from './registrationLinks/RampageReg';
import KavyanjaliReg from './registrationLinks/KavyanjaliReg';
import './App.css';

function App() {
  return (
    <Router>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/events' element={<Events />} />
                <Route exact path='/contact' element={<Contact />}/>
                <Route exact path='/codeMania' element={<CodeMania />}/>
                <Route exact path='/webForces' element={<WebForces />}/>
                <Route exact path='/quizzieBuzzie' element={<Quizzie />}/>
                <Route exact path='/papyrus' element={<Papyrus />}/>
                <Route exact path='/pixofy' element={<Pixofy />}/>
                <Route exact path='/betfair' element={<BetFair />}/>
                <Route exact path='/umang' element={<Umang />}/>
                {/* <Route exact path='/artyCrafty' element={<ArtyCrafty />}/> */}
                <Route exact path='/pixelIt' element={<PixelIt />}/>
                <Route exact path='/kavyanjali' element={<Kavyanjali />}/>
                <Route exact path='/nostalgicRacing' element={<NostalgicRacing />}/>
                <Route exact path='/rampage' element={<Rampage />}/>
                <Route exact path='/timeline' element={<Timeline />}/>
                <Route exact path='/karaokeRegistration' element={<KaraokeRegistration />}/>
                <Route exact path='/quizzieBuzzieRegistration' element={<QuizzieBuzzie />}/>
                <Route exact path='/codeManiaRegistration' element={<CodeManiaRegistration />}/>
                <Route exact path='/biddersDateRegistration' element={<BiddersDateRegistration />}/>
                <Route exact path='/papyrusRegistration' element={<PapyrusRegistration/>}/>
                <Route exact path='/webforcesRegistration' element={<WebForcesRegistration/>}/>
                <Route exact path='/surSangam' element={<SurSangam/>}/>
                <Route exact path='/karaoke' element={<Karaoke/>}/>
                <Route exact path='/beatExplosion' element={<BeatExplosion/>}/>
                <Route exact path='/rockTillYouDrop' element={<RockTillYouDrop/>}/>
                <Route exact path='/artOfYours' element={<ArtOfYours/>}/>
                <Route exact path='/concentrica' element={<Concentrica/>}/>
                <Route exact path='/concentricaRegistration' element={<ConcentricaRegistration/>}/>
                <Route exact path='/artOfYoursRegistration' element={<ArtOfYoursRegistration/>}/>
                <Route exact path='/pixofyRegistration' element={<PixofyReg/>}/>
                <Route exact path='/umangRegistration' element={<UmangReg/>}/>
                <Route exact path='/rockTillTheDropRegistration' element={<RockTillTheDropReg/>}/>
                <Route exact path='/beatExplosionRegistration' element={<BeatExplosionReg/>}/>
                <Route exact path='/surSangamRegistration' element={<SurSangamRegistration/>}/>
                <Route exact path='/pixelItRegistration' element={<PixelItReg/>}/>
                <Route exact path='/nostalgicRacingRegister' element={<NostalgicRacingReg/>}/>
                <Route exact path='/codmRegister' element={<RampageReg/>}/>
                <Route exact path='/kavyanjaliRegister' element={<KavyanjaliReg/>}/>
            </Routes>
    </Router>
  );
}

export default App;
