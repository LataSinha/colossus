import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import { Contact } from './components/Contact';
import CodeMania from './events/CodeMania';
import WebForces from './events/WebForces';
import Quizzie from './events/Quizzie';
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
            </Routes>
    </Router>
  );
}

export default App;
