import React from 'react';
import { Section, SectionText, Link, avatarImg } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection , SectionTitle, CustomAvatar} from './HeroStyles';
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <CustomAvatar alt="my-avatar" src="/images/mypic.webp" sx={{ width: 100, height: 100 }}/>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          This is ZEGHMOURI Mohamed Amine. I am a Full Stack Web developer, passionate about software development and the optimization of IT solutions, looking for new opportunities to enhance my skills. Highly motivated person with great autonomy and very passionate about new technologies.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.open('https://zeghmouri.vercel.app/files/Resume Mohamed Amine ZEGHMOURI.pdf', "_blank");
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
