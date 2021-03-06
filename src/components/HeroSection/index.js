import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
import SignupModal from '../ui/signupmodal';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const handleSignInNavBar = (e) => {
        setIsOpenModal(!isOpenModal)
    }

    const onHover= () => {
        setHover(!hover)
    }

  return (
    <HeroContainer id='home'>
        <HeroBg>
            {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
        </HeroBg>
        <HeroContent>
            <HeroH1>RELAX AND UNWIND</HeroH1>
            <HeroP>
            Genesis Farm is just 15 minutes away from tagaytay city so
            there are endless things to do after checking out or even before
            checking in with us!!!
            </HeroP>
            <HeroBtnWrapper>
                <Button to='/home' onMouseEnter={onHover} onMouseLeave={onHover}
                primary='true'
                dark='true'
                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                onClick={handleSignInNavBar}
                >
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>

        <SignupModal isOpen={isOpenModal} changeIsOpen={setIsOpenModal}/>
    </HeroContainer>
  );
};

export default HeroSection