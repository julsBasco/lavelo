import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import Rsvp from '../../components/rsvp';
import { DBProvider } from '../../components/FirebaseContexts/DBContext';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <DBProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/home' element={<Homepage />} />
            <Route path='/rsvp/:id' element={<Rsvp />} />
          </Routes>
        </DBProvider>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
