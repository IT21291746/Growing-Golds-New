import '../src/styles/main.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from './components/Main';
import Investor from './components/Investor';
import InvestorApplicationForm from './components/InvestorApplicationForm';

function App() {
  return (
    <Router>
    <div className="App">
   

    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/i" element={<Investor/>}/>
      <Route path="/investorapplicationform" element={<InvestorApplicationForm/>}/>
    </Routes>


     
      
      
    </div>
    </Router>
  );
}

export default App;
