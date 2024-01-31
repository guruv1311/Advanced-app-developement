// import { useState } from 'react';
// import './Bookevent.css';
// import Unav from '../Components/Unav';
// import Eventdetails from '../Components/Eventdetails';
// import Addbook from './Addbook';

// function Bookevent() {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   // Dummy data representing events. Replace it with your actual data.
//   const events = [
//     { id: 1, title: 'Event 1' },
//     { id: 2, title: 'Event 2' },
//     { id: 3, title: 'Event 3' },
//     { id: 4, title: 'Event 4' },
//     { id: 5, title: 'Event 5' },
//     { id: 6, title: 'Event 6' },
//     { id: 7, title: 'Event 7' },
//     // Add more events as needed
//   ];

//   // Filter events based on the search query
//   const filteredEvents = events.filter((event) =>
//     event.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const[open1,setOpen] = useState('');
//   const handleOpen = () => {
//       setOpen(true);
//   }
//   return (
//     <div className="bodyf111b">
//       <Unav/>
//       <div className="bodyfb">
//         <input className="intb" type="text" value={searchQuery} onChange={handleSearchInputChange} placeholder="Search events"/>
//         <div className="categoriesb" onClick={handleOpen}>
//           {filteredEvents.map((event) => (
//             <Eventdetails key={event.id} title={event.title} />
//           ))}
//         </div>{open1 && (<Addbook/>)}
//       </div>
//     </div>
//   );
// }

// export default Bookevent;

import './Bookevent.css'; 
import { useState} from 'react';
// import Update from './Update';
// import Navbar from '../Components/Navbar';
import Addbook from './Addbook';
import Unav from '../Components/Unav';
function All() {

  const[open1,setOpen] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [Eventtype, setEventName] = useState('');
  
  const handleOpen = (Eventtype) => {
      setOpen(true);
      setEventName(Eventtype);
  }

  const [events, setEvents] = useState([
    // Sample event data
    { id: 1, Type: 'Bithday', Description: 'Brithday party', Package: 'Family', Count: '1000',Charges:'$2000' },
    { id: 1, Type: 'Bachelor', Description: 'Bachelor party', Package: 'Boyss', Count: '400',Charges:'$2000' },
    { id: 1, Type: 'Weekend', Description: 'Weekend party', Package: 'Colleague', Count: '1000',Charges:'$2000' },
    { id: 1, Type: 'Anniversary', Description: 'Anniversary party', Package: 'Family', Count: '2000',Charges:'$2000' },
    { id: 1, Type: 'Bithday', Description: 'Brithday party', Package: 'Friends', Count: '500',Charges:'$5000' },

  ]);

  const filteredEvents = events.filter(event =>
    event.Type.toLowerCase().includes(searchTerm.toLowerCase())
  );


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search submission (e.g., send search query to the server)
    console.log('Search term submitted:', searchTerm);
  };

    return (
        <div className="bodyf111u">
        <Unav/>
        <div className="bodyfu">
        <div className='be-h1u'>
            <h2>Select the Theme:</h2>
        </div>
        <form className="search-formu" onSubmit={handleSearchSubmit}>
        <input
          className="search-inputu"
          type="text"
          placeholder="Type here to Search...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {/* <button className="search-buttonu" type="submit">
          <b>Search</b>
        </button> */}
      </form>

      {filteredEvents.length === 0 && (
      <div className="be-noneu">
        <img className="be-noeventsu" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
        <h3>Oops! No Upcoming Events for Now...</h3>
        <p>Watch this space for upcoming events!</p>
      </div>
        )}
      
        <br></br><br></br>
        

        <div className='be-gridu'>
        {filteredEvents.map(event => (
          <div key={event.id}>
            <div className="grid-itemu">
                <img className="img-fluidu w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://birthdaywisheszone.com/wp-content/uploads/2020/01/fc98a72dd575583ebc02c666ff75a58e.jpeg" alt="" />
                <p className="font-italicu"><b>Event Type: </b>{event.Type}</p>
                <p className="font-italicu"><b>Event Description:</b>{event.Description}</p>
                <p className="font-italicu"><b>Event Package:</b>{event.Package}</p>
                <p className="font-italicu"><b>Participants Count:</b>{event.Count}</p>
                <p className="font-italicu"><b>Charges:</b>{event.Charges}</p>
                <div className="buttu">
                <button className='button-1u' onClick={() => handleOpen()}>Book</button>
                </div>
                </div>
       </div>
       ))}{open1 && (<Addbook Eventtype={Eventtype} />)} 
        
            

        
        </div>
          
        </div>
      </div>
      

        
  )
}

export default All;