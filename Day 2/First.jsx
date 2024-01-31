// import React from 'react';
import { Link } from 'react-router-dom';
import './First.css';
// import { Link } from 'react-router-dom';
const First = () => {
  return (
    <div className="backq">
    <section>
        <div className='ha'>
          <p className='centeredText'>CELEB FETE</p>
         <p className='ba'>The “occasionally remarkable” moments should not be left to chance! </p>
         <br></br>
         <p>----------------------------------------------------------------------------------------------------------------------------------------</p>
         <br></br>
         <br></br><br></br>
        <Link to="Userlogin">
         <button className="userbut" type="submit" >
              USER
            </button></Link>
            <Link to="Alogin">
           <button className="Adminbut" type="submit" >
              ADMIN
            </button></Link></div>
      </section>
    </div>
      
  );
};

export default First;