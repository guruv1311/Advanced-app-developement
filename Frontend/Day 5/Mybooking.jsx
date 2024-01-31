// import Navbar from '../Components/Navbar';
import Navbar from '../Components/Navbar';
import './Mybooking.css';
// import React, { useState, useEffect } from 'react';
// import survey from './cheffinder-logo.png';
// import {Link} from "react-router-dom"


function Mybooking() {
  return (
    <div className="backq1">
        <Navbar/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Submission Date</th>
            <th>Description</th>
            <th>Event Type</th>
            <th>Event Date</th>
            <th>Booking Status</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>Guru</td>
              <td>6-10-2024</td>
              <td>Birthday Party</td>
              <td>Birthday</td>
              <td>9-12-2024</td>
              <td><button className="con">Conform</button><button className="re">Reject</button></td>
            </tr>
            <tr>
              <td>Siva</td>
              <td>23-12-2023</td>
              <td>Bachelor party</td>
              <td>Normal</td>
              <td>4-02-2024</td>
              <td><button className="con">Conform</button><button className="re">Reject</button></td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Mybooking;