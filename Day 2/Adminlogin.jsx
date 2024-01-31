import { useState,} from "react";
import './Adminlogin.css';
import { FaFacebook, FaTwitterSquare, FaGoogle } from 'react-icons/fa';
// import {useNavigate} from "react-router-dom"
import { Link } from "react-router-dom";

const Adminlogin=()=>{
  const iconSize = "36px"; // Set the desired size for the icons
  const iconColor = "white"; // Set the desired color for the icons (e.g., blue)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors,setFormErrors]=useState({});
  const [isSubmit,setIsSubmit]=useState(false);

  // const navigate=useNavigate();
    const handleName=(event)=>{
        event.preventDefault();
        setEmail(event.target.value);
    }
    const handlePwd=(event)=>{
        event.preventDefault();
        setPassword(event.target.value);
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        setFormErrors(validate({email,password}));
        if(isSubmit===true){
            try{
              console.log("Login Successful");
              window.location.href = "/Admin";
                // navigate('/Signup');
            }catch(error){
                console.error('Error: ',error);
            }
        }
    }
    const validate=(values)=>{
        const errors={};
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 

        if(!values.email){
        errors.username="Email is Required";
        setIsSubmit(false);
        }else{
            setIsSubmit(true);
        }
        if(!values.password){
        errors.password="Password is Required";
        setIsSubmit(false);
        }
        else if(!preg.test(values.password)){
        errors.password="Invalid password";
        setIsSubmit(false);
        }else{
            setIsSubmit(true);
        }
        return errors;
    }    
    return(
      <div className="backq">
      <div className="logq">
        <form onSubmit={handleSubmit}>
       <br/>
        <center><h1 className="h1n">LOGIN</h1>
       </center>
       <h1>                  </h1>
          <div className="inputbq">
            <label name="uname">Email</label>
            <input type="email" value={email} onChange={handleName} required id="uname" />
          </div>
          <p  style={{color:"white",fontSize:"17px"}}>{formErrors.username}</p>      
            <div className="inputbq">
            <label name="pass">Password</label>
            <input  type="password" required id="pass" value={password} onChange={handlePwd}/>
          </div>
          <p  style={{color:"white",fontSize:"17px"}}>{formErrors.password}</p>      
          {/* <br></br> */}
          <center>
            {/* <Link to="/Admin"> */}
            <button className="butq" type="submit" >
              Login
            </button>
            {/* </Link> */}
          </center>
          <div className="regq">
              <p>Do not have a account? <Link to="/Asign"><a href="#">Register</a></Link></p>
              <div className="social">
              <a href="#" style={{ fontSize: iconSize, color: iconColor }}><FaFacebook /></a>
              <a href="#" style={{ fontSize: iconSize, color: iconColor }}><FaTwitterSquare /></a>
              <a href="#" style={{ fontSize: iconSize, color: iconColor }}><FaGoogle /></a>
            </div>  
          </div>
        </form>
      </div>
      </div>
        
    )
}

export default Adminlogin;