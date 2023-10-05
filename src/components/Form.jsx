import React, { useState } from 'react'
import './form.css'
import { useNavigate } from 'react-router-dom'

function Form() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [mobilenumber, setmobilenumber] = useState('')
    const [gamelevel, setgamelevel] = useState('')
    const navigate = useNavigate()
    const handlenamechange = (e) => {
        setname(e.target.value)
    }
    const handleEmailchange = (e) => {
        setemail(e.target.value)
    }
    const handlemobilenumberchange = (e) => {
        setmobilenumber(e.target.value)
    }
    const handlegamelevelchange = (e) => {
        setgamelevel(e.target.value)
    }
    const handlesubmit = () => {
        if (validateform()) {
            if(gamelevel==="easy"){
                navigate("/easygame")
            }if(gamelevel==="medium"){
                navigate("/mediumgame")
            }if(gamelevel==="hard"){
                navigate("/hardgame")
            }
          }
    }

    const [nameErr, setnameErr] = useState('')
    const [emailErr, setemailErr] = useState('')
    const [mobilenumberErr, setmobilenumberErr] = useState('')
    const validateform = () => {
        let isvalid = true;
        if (name === '' || name.length < 3) {
            setnameErr("Name must contain min4caharcters");
                isvalid = false;
        } else {
            setnameErr('')
        }

        if (!email.includes("@")) {
            setemailErr("please enter valid email");
            isvalid = false;

        } else {
            setemailErr("")
        }

        if (mobilenumber.length !== 10) {
            setmobilenumberErr("enter 10Digit mobilenumbers ");
            isvalid = false;

        } else {
            setmobilenumberErr('')
        }
        if (isvalid) {
            console.log('Form submitted:', { name, email, mobilenumber, gamelevel });
        }
        return isvalid
    }
    return (
        <div className='whole'>
            
            <form className='outer'>
                <h3 style={{paddingTop:"100px",marginRight:"40px",color:"maroon"}}>Registration</h3>
                <label style={{fontSize:"x-large"}} htmlFor="">Name</label><br />
                <input type="text" value={name} onChange={handlenamechange} placeholder='Enter Your Name' /><br />
                <span style={{ color: "yellow", fontSize: "large" }}>{nameErr}</span><br />

                <label style={{fontSize:"x-large"}} htmlFor="">Email</label><br />
                <input type="email" value={email} onChange={handleEmailchange} placeholder='Enter Your Email' /><br />
                <span style={{ color: "yellow", fontSize: "large" }}>{emailErr}</span><br />

                <label style={{fontSize:"x-large"}} htmlFor="">Mobile Number</label><br />
                <input type="tel" value={mobilenumber} onChange={handlemobilenumberchange} placeholder='Enter Mobile Number' /><br />
                <span style={{ color: "yellow", fontSize: "large" }}>{mobilenumberErr}</span><br />

                <label style={{fontSize:"x-large"}} htmlFor="">GameLevel</label><br />
                <select name="" id="" value={gamelevel} onChange={handlegamelevelchange} className='size' placeholder='chooselevel'>
                    <option value="" disabled selected hidden>chooselevel</option>
                    <option value="easy">easy</option>
                    <option value="medium">medium</option>
                    <option value="hard">hard</option>
                </select>
                <br />
                <br />
                <button type='button' className='btn btn-primary' onClick={handlesubmit}>Login</button>
            </form>
        </div>
    )
}

export default Form