import React from 'react';
import Video from '../../videos/video1.mp4';
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP
} from './HeroElements';

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video1/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>HI, I'M SUSANA.</HeroH1>
        <HeroP>UX Designer based in Los Angeles.</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
