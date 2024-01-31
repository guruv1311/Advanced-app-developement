import './Addbook.css';
import { useState } from 'react';
// import Select from 'react-select';

function Addbook() {
    const [isActive, setIsActive] = useState(false);

    const handleButtonClick = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <div>
            <div className="modal-container">
                <div className="modal-content">
                    <div className="evnt-create-box">
                        <div className=''>
                            <a href="/Bookev"><img className="eb-img" src="https://openclipart.org/image/2400px/svg_to_png/183568/close-button.png"></img></a>
                            <h1 className='eb-h1'>Book your Event:</h1><br></br>
                            <form className='event-details'>
                                <div className="evet">
                                <div className='event-items'>
                                    <label className='eb-label'>Name</label>
                                    <input className="eb-input" type="text" placeholder="User Name"/>
                                    <label className='eb-label'>Submission Date</label>
                                    <input className="eb-input" type="date" placeholder="Enter Applicant Name"  required/>
                                    <label className='eb-label'>Event Date</label>
                                    <input className="eb-input" type="date" placeholder="Enter the Age"  required/>
                                </div>
                                <div  className='event-items'>
                                <label className='eb-label'>Description</label>
                                    <input className="eb-input" type="text" placeholder="Enter Description" required />
                                    <label className='eb-label'>Event Type</label>
                                    <input className="eb-input" type="text" placeholder="Enter Event Type"  required/>
                                </div>
                                </div>
                                <div  className='event-items'>
                                    <div className={`eb-box1 ${isActive ? 'active' : ''}`}>
                                        <input className='eb-box2' type="checkbox"required/>
                                        <p className="eb-box3">Confirm the Entered Details!!!</p>
                                    </div>
                                    <div className={`wrapper ${isActive ? 'active' : ''}`}>
                                        <button className={`custom-button ${isActive ? 'is_active' : ''}`} onClick={handleButtonClick}>
                                            <span>Book Event</span>
                                            <div className="success">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.756 29.756" >
                                                    <path d="M29.049,5.009L28.19,4.151c-0.943-0.945-2.488-0.945-3.434,0L10.172,18.737l-5.175-5.173   c-0.943-0.944-2.489-0.944-3.432,0.001l-0.858,0.857c-0.943,0.944-0.943,2.489,0,3.433l7.744,7.752   c0.944,0.943,2.489,0.943,3.433,0L29.049,8.442C29.991,7.498,29.991,5.953,29.049,5.009z" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addbook;
