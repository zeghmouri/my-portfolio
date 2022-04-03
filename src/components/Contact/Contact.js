import {React, useState} from 'react'
import { FormGroup } from './ContactStyles'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';


export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
        name,
        email,
        message
    }
    const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName('')
          setEmail('')
          setMessage('')
        }
      
      
  }
  return (
    <Section id="contact">
      <SectionTitle>Contact Me</SectionTitle>
    < form >
    < FormGroup>
      < label htmlFor='name'>Name</label>
      < input type='text' name='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>  
    </FormGroup>
    < FormGroup >
      < label htmlFor='email'>Email</label>
      < input type='email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </FormGroup>
    < FormGroup >
      < label htmlFor='message'>Message</label>
      < textarea type='text' name='message' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
    </FormGroup>
    < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
    </form >
    <SectionDivider />
  </Section> 
  )
}
