import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  // declare array to hold all team member data
  const teamMembers = [];
  // build out component for one team member section
  
  return (
    <section id="contact">
      <Container>
        <Title title="Meet The Team" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {/* {cta || 'Would you like to work with me? Awesome!'} */}
              <div className="team-container">
                <div className="team-member">
                  {/* <img src="../../images/yael_ofer.png" alt="yael ofer"/> */}
                  <h4>Yael Ofer</h4>
                  <a href="https://github.com/YaelWOfer" className="link">Github</a> | <a href="http://www.linkedin.com/in/yaelofer">LinkedIn</a>
                </div>

                <div className="team-member">
                  {/* <img src="../../images/yael_ofer.png" alt="yael ofer"/> */}
                  <h4>Aya Ordonez</h4>
                  <a href="https://github.com/allanao" className="link">Github</a> | <a href="https://www.linkedin.com/in/allana-ordonez/">LinkedIn</a>
                </div>

                <div className="team-member">
                  {/* <img src="../../images/yael_ofer.png" alt="yael ofer"/> */}
                  <h4>Peter Van</h4>
                  <a href="https://github.com/peterrvan" className="link">Github</a> | <a href="https://www.linkedin.com/in/peter-van/">LinkedIn</a>
                </div>

                <div className="team-member">
                  {/* <img src="../../images/yael_ofer.png" alt="yael ofer"/> */}
                  {/* <div id="sushanth" className="team-member-image"></div> */}
                  <h4>Sushanth Kambham</h4>
                  <a href="https://github.com/sushanth913" className="link">Github</a> | <a href="https://www.linkedin.com/in/sushanth-kambham"> LinkedIn</a>
                </div>
              </div>
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={email ? `${email}`: 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
