import React from 'react';
import './skills.css';
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

export const Skills = () => {
  return (
    <section id="skills">
      <span className='skillTitle'>What i do</span>
      <span className='skillDesc'>I am a Skilled and passionate webapp developer with experience in creating virtual appealing and user-friendly webapplications. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, JS and PYTHON as well as designing software such as Adobe Photoshop and Illustrator.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>This is a demo text, You can write your own content here.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={WebDesign} alt=' WebDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Web Design</h2>
            <p>This demo text can be changed while making production ready website.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>App Design</h2>
            <p>You can write text related to mobile app development.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;