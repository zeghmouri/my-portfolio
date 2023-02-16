import {React, useState,useEffect} from 'react'
import Button from '../../styles/GlobalComponents/Button';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import Box from '@mui/material/Box';
import CustomTextField from './ContactStyles';


export default function Contact() {
  const [data, setData] = useState({
    name:'',
    email:'',
    message:''
  })
  const [formErrors, setFormErrors]=useState({
    name : {
      isValid:false,
      textError:"Please enter your name"
    },
    email:{
      isValid:false,
      textError:"Please enter your email"
    },
    message:{
      isValid:false,
      textError:""
    },

  })
  const [formValid, setFormValid]=useState(false)
  const [btnText, setBtnText] = useState('Send message')

  useEffect(() => {
      validateField("name");
  }, [data.name]);
  useEffect(() => {
    validateField("email");
  }, [data.email]);
  useEffect(() => {
  validateField("message");
  }, [data.message]);
  
  useEffect(()=>{
    if(formErrors.name.isValid && formErrors.email.isValid && formErrors.message.isValid) {setFormValid(true)} else setFormValid(false);
  },[formErrors])
  
  const handleChange = (e) =>{
    
    let name = e.target.id;
    let value = e.target.value;
    setData({...data,[name]: value});
    }

    function validateField(fieldName) {
    let valid
    let error
      switch(fieldName) {
        case 'email':
          valid = data.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          error= valid ? "":"Wrong email address"
          setFormErrors({...formErrors,[fieldName]:{["isValid"]:valid,["textError"]:error}})
          break;
        case 'name':
          valid = data.name.length >= 3;
          error= valid ? "":"The name is too short"
          setFormErrors({...formErrors,[fieldName]:{["isValid"]:valid,["textError"]:error}})
          break;
          case 'message':
            valid = data.message.length >= 5;
            error= valid ? "":"The message is too short"
            setFormErrors({...formErrors,[fieldName]:{["isValid"]:valid,["textError"]:error}})
          break;
        default:
          break;
      }
    }
    
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Sending')
    setFormValid(false)
        setBtnText('Sending ...')
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          
        setBtnText('Send message')
            if (res.status === 200) {
              console.log('Response succeeded!')
              alert('Your message has been delivered')
              setData({
                ["name"]:"",
                ["email"]:"",
                ["message"]:""
              })
              setFormErrors({
                ["name"]:{
                  ["isValid"]:false,
                  ["textError"]:""
                },
                ["email"]:{
                  ["isValid"]:false,
                  ["textError"]:""
                },
                ["message"]:{
                  ["isValid"]:false,
                  ["textError"]:""
                }
              })

            }
  }
  return (
    <Section id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      <form>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      
      autoComplete="off"
    >
        <CustomTextField
          required
          error={data.name===""? false :!formErrors.name.isValid}
          id="name"
          label="Name"
          helperText= {data.name===""? "Please enter you name" : formErrors.name.textError}
          value={data.name} 
          type="text"
          onChange={handleChange}
        />
      <CustomTextField
          required
          error={data.email===""? false :!formErrors.email.isValid}
          id="email"
          label="Email"
          helperText= {data.email===""? "Please enter you email" : formErrors.email.textError}
          value={data.email} 
          type="email"
          onChange={handleChange}
        /><br/>
      <CustomTextField
          required
          error={data.message===""? false :!formErrors.message.isValid}
          id="message"
          label="Message"
          helperText= {data.message===""? "Please write you message" : formErrors.message.textError}
          multiline
          maxRows={4}
          value={data.message}
          onChange={handleChange}
          message='message'
       />
    <Button 
      disabled={!formValid}
      type='submit' 
      onClick={(e)=>{handleSubmit(e)}}> {btnText}
    </Button>
    </Box>
    </form>
    <SectionDivider />
  </Section> 
  )
}
