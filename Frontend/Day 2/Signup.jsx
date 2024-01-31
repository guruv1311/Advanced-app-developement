import { useState,} from "react";
import './Signup.css';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"

const Signup=()=>{
    const [user, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [conpassword, setconPassword] = useState("");
    const [number, setPhoneno] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);
  
    const navigate=useNavigate();
      const handleName=(event)=>{
          event.preventDefault();
          setUsername(event.target.value);
      }
      const handleEmail=(event)=>{
        event.preventDefault();
        setEmail(event.target.value);
    }
      const handlePwd=(event)=>{
          event.preventDefault();
          setPassword(event.target.value);
      }
      const handleConpass=(event)=>{
        event.preventDefault();
        setconPassword(event.target.value);
    }
    const handleNumber=(event)=>{
        event.preventDefault();
        setPhoneno(event.target.value);
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
      setFormErrors(validate({ email, password, conpassword, number }));
  
      if (isSubmit=== true) {
          try {
              navigate('/');
          } catch (error) {
              console.error('Error: ', error);
          }
      }
  }
  const validate = (values) => {
    const errors = {};
    const preg = new RegExp("[A-Z][A-Za-z0-9$_]+");
    const phoneRegex = /^[0-9]{10}$/

    if (!values.email) {
        errors.email = "Email is Required";
        setIsSubmit(false);
    } else {
        setIsSubmit(true);
    }

   if (!preg.test(values.password)) {
        errors.password = "Invalid password";
        setIsSubmit(false);
        console.log(isSubmit);
    } else {
        setIsSubmit(true);
    }

    if (values.password !== values.conpassword) {
        errors.conpassword = "Passwords do not match";
        setIsSubmit(false);
    } else {
        setIsSubmit(true);
    }
   if (!phoneRegex.test(values.number)) {
        errors.number = "Invalid phone number";
        setIsSubmit(false);
    } else {
        setIsSubmit(true);
    }

    return errors;
}
      // const handleSubmit=async(event)=>{
      //     event.preventDefault();
      //     setFormErrors(validate({email,password}));
      //     if(isSubmit===true){
      //         try{
      //             navigate('/Signup');
      //         }catch(error){
      //             console.error('Error: ',error);
      //         }
      //     }
      // }
  
      
  
      // const validate=(values)=>{
      //     const errors={};
      //     const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 
  
      //     if(!values.email){
      //     errors.username="Email is Required";
      //     setIsSubmit(false);
      //     }else{
      //         setIsSubmit(true);
      //     }
      //     if(!values.password){
      //     errors.password="Password is Required";
      //     setIsSubmit(false);
      //     }
      //     else if(!preg.test(values.password)){
      //     errors.password="Invalid password";
      //     setIsSubmit(false);
      //     }else{
      //         setIsSubmit(true);
      //     }
      //     return errors;
      // }    
    return(
      <div className="back">
      <div className="log">
        <form onSubmit={handleSubmit}>
       <br/>
        <center><h1 className="h1n1">SIGN UP</h1>
       </center>
       <h1>                  </h1>
       <div className="input">
            <label name="uname1">Username</label>
            <input type="text" value={user} onChange={handleName} required id="uname"/>
          </div>
          <div className="input">
            <label name="uname1">Email</label>
            <input type="email" value={email} onChange={handleEmail} required id="uname" />
          </div>
            <div className="input">
            <label name="pass">Password</label>
            <input  type="password" required id="pass" value={password} onChange={handlePwd}/>
          </div>
          <p  style={{color:"white",fontSize:"17px"}}>{formErrors.password}</p>      
          <div className="input">
            <label name="pass1">Confirm Password</label>
            <input  type="password" required id="pass1" value={conpassword} onChange={handleConpass}/>
          </div>
          <p  style={{color:"white",fontSize:"17px"}}>{formErrors.conpassword}</p>  
          <div className="input">
            <label name="num">Phone Number</label>
            <input  type="text" required id="num" value={number} onChange={handleNumber}/>
          </div>
          <p  style={{color:"white",fontSize:"17px"}}>{formErrors.number}</p>     
          <center>
            <Link to="/Userhome">
            <button className="but" type="submit" >
              Sign Up
            </button></Link>
          </center>
        </form>
      </div>
      </div>
        
    )
}

export default Signup;