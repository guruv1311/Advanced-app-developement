// import React from 'react';
import './Addevents.css'; 
import{ useState} from 'react';
import { useEffect} from 'react';
// import { Icons } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
const Addevents = () => {
    useEffect(() => {
        const bodyStyle=document.body.style;
        // bodyStyle.backgroundImage = "url('https://images.pexels.com/photos/6287054/pexels-photo-6287054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"; 
        // bodyStyle.backgroundImage = "url('https://i.pinimg.com/originals/1a/bf/79/1abf798f4b3e40227746ec9daa141af1.jpg')";
        bodyStyle.backgroundImage = "url('https://i.pinimg.com/originals/8f/19/e7/8f19e7dbb8f3ce278fbf27ca0c47cbc5.jpg')";
        bodyStyle.backgroundSize = 'cover';
        bodyStyle.backgroundRepeat = 'no-repeat';
        bodyStyle.backgroundAttachment = 'fixed';
        bodyStyle.backgroundPosition = 'center center';
        return () => {
            document.body.style.backgroundImage = ""; 
        };
    }, []);
    return (
        <div className='Body123'>
            <Navbar/>
        <div className="LoginContainer" id="container">
            <SignInForm />
            <Division2/>
        </div>
        </div>
    );
};
const SignInForm = () => {
    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit = async(event) =>
    {
        event.preventDefault();
        if(email.trim()==="" && password.trim()==="")
        {
            alert("Please enter email and password")
            return;
        }
        if(email.trim()==="")
        {
            alert("Please enter email")
            return;
        }
        if(password.trim()==="")
        {
            alert("please enter password")
            return;
        }
        
    }
    const handleSignup = () => {
        navigate('/Signup'); 
    };
    return (
        <div className='Body'>
        <div className="form-container sign-in">
                <h1 className="form222">EVENT DETAILS</h1>
            <form className="gr"onSubmit={handleSubmit}>
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Event Type" />
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Event Description" />
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Event Package" />
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Participants Count" />
                <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Charges" />
                <button className='Loginin' onClick={handleSignup}>ADD</button>
            </form>
        </div>
        </div>
    );
};

const Division2 = () => {
    return (
        <div className="Div2">
            <div className="Div2-Info">
            </div>
        </div>
    );
};

export default Addevents;