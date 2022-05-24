import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import TextLoop from "@johnsdevelop/react-text-loop";

import Typewriter from 'typewriter-effect';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
  function MouseOver(event) {
    event.target.style.color = 'white';
  }
  function MouseOut(event){
    event.target.style.color="lightgray";
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Hi, My name is Karan Patel and I am 
              <Typewriter
               options={{
                autoStart: true,
                loop: true,
              }}
  onInit={(typewriter) => {
    typewriter.typeString('<span className="text-color-secondary">an App Developer</span>')
      .pauseFor(2500)
      .deleteAll()
      .typeString('<span className="text-color-primary">a Python Developer</span>')
      .pauseFor(2500)
      .deleteAll()
      .typeString('<span className="text-color-primary">a Problem Solver</span>')
      .pauseFor(2500)
      .deleteAll()
      .typeString('<span className="text-color-primary">a JavaScript Programmer</span>')
      .pauseFor(2500)
      .deleteAll()
      .typeString('<span className="text-color-primary">a Machine Learning Engineer</span>')
      .pauseFor(2500)
      .deleteAll()
      .start();
  }}
/>
              {/* <TextLoop ><span className="text-color-primary">a React Native Developer</span>
              <span className="text-color-primary">an App Developer</span>
              <span className="text-color-primary">a Machine Learning Engineer</span>
              <span className="text-color-primary">a Python Developer</span>
              <span className="text-color-primary">a JavaScript Programmer</span>
              <span className="text-color-primary">a Problem Solver</span>
              </TextLoop> */}
            </h1>
            <div className="container-xs">
              {/* <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Let me guide you through my tech career.
                </p> */}
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button  tag="a" color="primary" wideMobile href="mailto:karanpatel2199@gmail.com">
                    Contact
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/karanpokar/">
                    View on Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div>
          
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            {/* <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a> */}
            {/* <IPhoneX height={500} orientation='landscape' color='black' buttonProps={ {
                onClick: () => alert('Home Button Clicked!')
            } }>
                <iframe title='showcase' src={require('./../../assets/images/Login.png')} style={ {
                    width: '100%',
                    height: '100%',
                    margin: 0
                } }/>
            </IPhoneX> */}
          </div>
          
          {/* <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;