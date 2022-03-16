import React from 'react';
import { Section, SectionText, SectionTitle, Link, avatarImg } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection , Image} from './HeroStyles';
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          <Image src="/images/mypic.jpeg" width={100} height={100} alt="avatar"/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hey there,
        </SectionTitle>
        <SectionText>
          Hey there, This is ZEGHMOURI Mohamed Amine. I am a Full Stack Web developer ...
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/Resume Mohamed Amine ZEGHMOURI.pdf';
        }}>My Resume</Button>

      </LeftSection>
    </Section>
  </>
);

export default Hero;
