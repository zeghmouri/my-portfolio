import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import {RxHamburgerMenu} from 'react-icons/rx'
import {TfiClose} from 'react-icons/tfi'
import { Container, Div1, Div2, Div3, Menu, NavLink, SocialIcons } from './HeaderStyles';


export default function Header() {
  const [menuOpen, setMenuOpen]= useState(false)
  const [headerStyles, setHeaderStyles]= useState({height:'80px'})

  useEffect(()=>{
    if(menuOpen){
      setHeaderStyles({height:'fit-content'})
    }
    else{
      setHeaderStyles({height:'80px'})
    }

  },[menuOpen])
  return (
    <Container style={headerStyles}>
    <Div1>
      <Link legacyBehavior href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <img src="/logo.svg" height={40} width={40} /> <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >ZEGHMOURI</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link legacyBehavior href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#skills">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
          <NavLink href="#contact">Contact Me</NavLink>
      </li>
      <li>
          <NavLink href="/blog">Blog</NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/zeghmouri" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ma-zeghmouri/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/ZeghmouriZaki/" target="_blank">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <Menu>
        <RxHamburgerMenu onClick={() => setMenuOpen(true)} size="3rem" style={menuOpen? {display:'none'}:{}}/>
        <TfiClose onClick={() => setMenuOpen(false)} size="3rem" style={menuOpen? {}:{display:'none'}}/>
      </Menu>
    </Div3>
  </Container>
  )
}

