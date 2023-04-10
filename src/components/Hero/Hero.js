import React from 'react';
import { Section, SectionText, Link, avatarImg } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection , SectionTitle, CustomAvatar} from './HeroStyles';
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          This is ZEGHMOURI Mohamed Amine. I am a computer science engineer and junior web developer, I am passionate about creating innovative, user-friendly web applications. With a strong foundation in software engineering and experience working with variety of frameworks, I am a quick learner who stays up-to-date with industry trends and best practices. I am eager to contribute my skills to a dynamic team and continue to grow as a software engineer.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          if(typeof window !== 'undefined') window.open('https://zeghmouri.vercel.app/files/Resume_Mohamed_Amine_ZEGHMOURI.pdf', "_blank");
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
