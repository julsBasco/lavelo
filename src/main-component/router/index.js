import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import Rsvp from '../../components/rsvp';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/rsvp' element={<Rsvp />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
