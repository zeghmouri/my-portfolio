import {React, useState,useRef} from 'react'
import Button from '../../styles/GlobalComponents/Button';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import Box from '@mui/material/Box';
import CustomTextField from './ContactStyles';


export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [btnText, setBtnText] = useState('Send message')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Sending')
    setDisabled(true)
    let data = {
        name,
        email,
        message
    }
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
          setName('')
          setEmail('')
          setMessage('')
        }
        setDisabled(false)
      
  }
  return (
    <Section id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <CustomTextField
          required
          id="name"
          label="Name"
          helperText="Please enter your name"
          value={name} 
          type="text"
          onChange={(e)=>{setName(e.target.value)}}
        />
      <CustomTextField
          required
          id="email"
          label="Email"
          helperText="Please enter your email"
          value={email} 
          type="email"
          onChange={(e)=>{setEmail(e.target.value)}}
        /><br/>
      <CustomTextField
          required
          message
          id="message"
          label="Message"
          helperText="Please write your message"
          multiline
          maxRows={4}
          value={message}
          onChange={(e)=>{setMessage(e.target.value)}}
       />
    <Button 
      disabled={disabled}
      type='submit' 
      onClick={(e)=>{handleSubmit(e)}}> {btnText}
    </Button>
    </Box>
    <SectionDivider />
  </Section> 
  )
}
