import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import Homepage4 from '../HomePage4'
import BlogPage from '../blogpage'
import BlogDetailsPage from '../BlogDetailsPage'
import Rsvp from '../../components/rsvp';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/rsvp' element={<Rsvp />} />
          {/* <Route path='/Blog' element={<BlogPage />} /> */}
          {/* <Route path='/Blog-details' element={<BlogDetailsPage />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
