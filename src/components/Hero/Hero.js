import React from 'react';
import { Section, SectionText, Link, avatarImg } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection , SectionTitle, CustomAvatar} from './HeroStyles';
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <CustomAvatar alt="my-avatar" src="/images/mypic.jpeg" sx={{ width: 100, height: 100 }}/>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          This is ZEGHMOURI Mohamed Amine. I am a Full Stack Web developer ...
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
