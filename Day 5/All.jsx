import './All.css'; 
import { useState} from 'react';
import Update from './Update';
import Navbar from '../Components/Navbar';
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

  const handlesearchSubmit = (e) => {
    e.preventDefault();
    // Handle the search submission (e.g., send search query to the server)
    console.log('Search term submitted:', searchTerm);
  };

    return (
        <div className="bodyf111">
        <Navbar/>
        <div className="bodyf">
        <div className='be-h1'>
            <h2>Select the Theme:</h2>
        </div>
        <form className="search-form" onSubmit={handlesearchSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Type here to Search...."
          value={searchTerm}
          onChange={handleSearchChange}
        />
          {/* <button className="search-button" type="submit">
            <b>Search</b>
          </button> */}
      </form>

      {filteredEvents.length === 0 && (
      <div className="be-none">
        <img className="be-noevents" src="https://img.freepik.com/free-vector/illustrated-appointment-booking-with-calendar-concept_52683-38825.jpg?w=900&t=st=1706329469~exp=1706330069~hmac=d600cf38880c18cf106c110391f4466bdc9a93adbfcaed0132d4c89e9516c6d0"></img>
        <h3>Oops! No Upcoming Events for Now...</h3>
        <p>Watch this space for upcoming events!</p>
      </div>
        )}
      
        <br></br><br></br>
        

        <div className='be-grid'>
        {filteredEvents.map(event => (
          <div key={event.id}>
            <div className="grid-item">
                <img className="img-fluid w-100 mb-3 img-thumbnail shadow-sm rounded-0" src="https://birthdaywisheszone.com/wp-content/uploads/2020/01/fc98a72dd575583ebc02c666ff75a58e.jpeg" alt="" />
                <p className="font-italic"><b>Event Type: </b>{event.Type}</p>
                <p className="font-italic"><b>Event Description:</b>{event.Description}</p>
                <p className="font-italic"><b>Event Package:</b>{event.Package}</p>
                <p className="font-italic"><b>Participants Count:</b>{event.Count}</p>
                <p className="font-italic"><b>Charges:</b>{event.Charges}</p>
                <div className="butt">
                <button className='button-1' onClick={() => handleOpen()}>UPDATE</button>
                <button className='button-2'>DELETE</button>
                </div>
                </div>
       </div>
       ))}{open1 && (<Update Eventtype={Eventtype} />)} 
        
            

        
        </div>
          
        </div>
      </div>
      

        
  )
}

export default All;