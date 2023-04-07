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
          This is ZEGHMOURI Mohamed Amine. I am a Full Stack Web developer, passionate about software development and the optimization of IT solutions, looking for new opportunities to enhance my skills. Highly motivated person with great autonomy and very passionate about new technologies.
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
