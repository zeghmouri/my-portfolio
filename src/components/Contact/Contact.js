import {React, useState} from 'react'
import { FormGroup } from './ContactStyles'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';


export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
        name,
        email,
        message
    }
    fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName('')
          setEmail('')
          setBody('')
        }
      })
  }
  return (
    <Section id="contact">
      <SectionTitle main>Contact Me</SectionTitle>
    < form >
    < FormGroup>
      < label htmlFor='name'>Name</label>
      < input type='text' name='name' onChange={(e)=>{setName(e.target.value)}}/>  
    </FormGroup>
    < FormGroup >
      < label htmlFor='email'>Email</label>
      < input type='email' name='email' onChange={(e)=>{setEmail(e.target.value)}}/>
    </FormGroup>
    < FormGroup >
      < label htmlFor='message'>Message</label>
      < textarea type='text' name='message' onChange={(e)=>{setMessage(e.target.value)}}/>
    </FormGroup>
    < input type='submit' onClick={(e)=>{handleSubmit(e)}}/>
    </form >
    <SectionDivider />
  </Section> 
  )
}
