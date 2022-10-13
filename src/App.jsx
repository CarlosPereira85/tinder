import React from 'react';
import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
 

const App = () => {
  return (
    <Router>
     
     
    <div className='app' >
    
    <Routes>
    <Route path="/chat/:person" element={<ChatScreen/>} />
    <Route path="/chat" element={<Chats/>} />
    
    <Route path='/' element={<TinderCards /> } />;
    
    

    

    </Routes>
      
    
    </div>
    </Router>
    
  );
};

export default App;
