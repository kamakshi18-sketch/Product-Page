import React, { useState } from 'react'

const Form = () => {
  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmpass,setConfirmpass]=useState("")
  const [age,setAge]=useState("")
  const [moblieno,setMoblieno]=useState("")
  const [gender,setGender]=useState("")
  const [course,setCourse]=useState("")
  const [skills,setSkills]=useState([])
  const [address,setAddress]=useState("")
  const [terms,setTerms]=useState(false)
  const [register,setRegister]=useState("")

  function handlesubmit(e){
    e.preventDefault()

    if(firstname.length<3){
        alert("first name should have atleast 3 characters")
        return
    } 
    if(firstname.trim===""){
        alert("first name should not be empty")
        return
    }


    if(lastname.length>2){
        alert("last name should have atleast 2 characters")
        return
    } 
    if(lastname.trim===""){
        alert("last name should not be empty")
        return
    }
   

    if(email === ""){
      alert("email required")
      return
    }
    if(!email.includes("@")){
    alert("email should contain @")
    return
     }
    if(!email.endsWith(".com") && !email.endsWith(".in")){
    alert("email should end with .com or .in")
    return
    }


    if(password.trim() === ""){
      alert("password required")
      return
    }
    if(password.length < 8){
    alert("password should have atleast 8 characters")
    return
    }
    if(!/[A-Z]/.test(password)){
      alert("password should have atleast 1 uppercase letter")
      return
    }
    if(!/[a-z]/.test(password)){
      alert("password should have atleast 1 lowercase letter")
      return
    }
    if(!/[0-9]/.test(password)){
      alert("password should have atleast 1 number")
      return
    }
    if(!/[!@#$%^&*]/.test(password)){
      alert("password should have atleast 1 special character")
      return
    }


    if(confirmpass.trim() === ""){
    alert("confirm password should not be empty")
    return
    }
    if(confirmpass.includes(" ")){
      alert("confirm password should not contain spaces")
      return
    }
    if(confirmpass !== password){
      alert("confirm password should match password")
      return
    }


    if(age === ""){
    alert("age should not be empty")
    return
    }
    if(age < 18){
      alert("age should be greater than 18")
      return
    }
    if(age > 60){
      alert("age should be less than 60")
      return
    }


    if(moblieno === ""){
      alert("mobile number should not be empty")
      return
    }
    if(moblieno.length !== 10){
      alert("mobile number should have exactly 10 digits")
      return
    }
    if(!/^[6-9]/.test(moblieno)){
      alert("mobile number should start with 6, 7, 8 or 9")
      return
    }
    if(!/^[0-9]+$/.test(moblieno)){
      alert("mobile number should contain only numbers")
      return
    }


    if(gender === ""){
      alert("please select a gender")
      return
    }

    
    if(course === "" || course === "Select Course"){
      alert("please select a course")
      return
    }


    if(skills.length < 2){
      alert("please select atleast 2 skills")
      return
    }
    if(skills.length > 4){
      alert("you can select maximum 4 skills")
      return
    }


    if(address.trim() === ""){
      alert("address should not be empty")
      return
    }
    if(address.length < 20){
      alert("address should have atleast 20 characters")
      return
    }
    if(address.length > 150){
      alert("address should not exceed 150 characters")
      return
    }


    if(terms === false || terms === ""){
      alert("please accept terms and conditions")
      return
    }

    alert("Registration Successful")
  }
  

  return (
    <>
      <h1>form validation</h1>
      <form>
        <input type='text' placeholder='enter your First Name' value={firstname}
          onChange={(e)=>setFirstname(e.target.value)}
        />
        <br/>
        <br/>

        <input type='text' placeholder='enter your last Name' value={lastname}
          onChange={(e)=>setLastname(e.target.value)}
        />
        <br/>
        <br/>

        <input type='text' placeholder='enter your email' value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <br/>
        <br/>

        <input type='password' placeholder='enter your password' value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <br/>
        <br/>

        <input type='password' placeholder='confirm your password' value={confirmpass}
          onChange={(e)=>setConfirmpass(e.target.value)}
        />
        <br/>
        <br/>

        <input type='number' placeholder='enter your age' value={age}
          onChange={(e)=>setAge(e.target.value)}
        />
        <br/>
        <br/>

        <input type='number' placeholder='enter your phone number' value={moblieno}
          onChange={(e)=>setMoblieno(e.target.value)}
        />
        <br/>
        <br/>


        <h4>gender</h4>
        <label>Male</label>
        <input type='radio' name='gender' value='male'
          onChange={(e)=>setGender(e.target.value)}
        />
        <label>Female</label>
        <input type='radio' name='gender' value='female'
          onChange={(e)=>setGender(e.target.value)}
        />
        <label>Other</label>
        <input type='radio' name='gender' value='other'
          onChange={(e)=>setGender(e.target.value)}
        /> 
        <br/>
        <br/>


        <h4>courses</h4>
        <select
        value={course}
        onChange={(e) => setCourse(e.target.value)}>
        <option value="">Select Course</option>
        <option value="React">React</option>
        <option value="Node">Node</option>
        <option value="Mern">Mern</option>
        <option value="Java">Java</option>
        </select>
        <br/>
        <br/>


        <h4>skills</h4>
        <label>html</label>
        <input type='checkbox' value='html'
          onChange={(e)=>{
            if(e.target.checked){
            setSkills([...skills, e.target.value])
          } else {
            setSkills(skills.filter(s => s !== e.target.value))
          }
          }
          }
        />
        <label>css</label>
        <input type='checkbox' value='css'
          onChange={(e)=>{
            if(e.target.checked){
            setSkills([...skills, e.target.value])
          } else {
            setSkills(skills.filter(s => s !== e.target.value))
          }
          }
          }
        />
        <label>js</label>
        <input type='checkbox' value='js'
          onChange={(e)=>{
            if(e.target.checked){
            setSkills([...skills, e.target.value])
          } else {
            setSkills(skills.filter(s => s !== e.target.value))
          }
          }
          }
        />
        <label>react</label>
        <input type='checkbox' value='react'
          onChange={(e)=>{
            if(e.target.checked){
            setSkills([...skills, e.target.value])
          } else {
            setSkills(skills.filter(s => s !== e.target.value))
          }
          }
          }
        />
        <br/>
        <br/>
    
        <input type='text' placeholder='enter your address' value={address}
          onChange={(e)=>setAddress(e.target.value)}
        />
        <br/>
        <br/>

        <label>
        <input 
        type='checkbox' value={terms} onChange={(e) => setTerms(e.target.checked)}
        />
        I agree to the Terms & Conditions
        </label>
        <br/>     
        <br/>  


        <button onClick={handlesubmit}>Submit</button>
      </form>
    </>
  )
}

export default Form