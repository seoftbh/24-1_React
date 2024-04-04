import React from 'react';
import './about.css';
import profileDefault from './src/profile_default_03.png';
import mailIcon from './src/mail.svg';
import githubIcon from './src/mark-github.svg';
import './bootstrap.min.css';

function About() {
  return (
    <div className="card shadow">
      <div className="card-body">
        <img id="profile" src={profileDefault} alt="example's Profile Image" />
        <table>
          <tbody>
            <tr id="myname">
              <th>이름</th>
              <td>SEOFTBH</td>
            </tr>
            <tr>
              <th>직업</th>
              <td>학생</td>
            </tr>
            <tr>
              <th>학과</th>
              <td>소프트웨어학과</td>
            </tr>
            <tr>
              <th>거주지</th>
              <td>부산</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div className="card-body">
        <h3>Contact</h3>
        <div id="contacts">
          <p>
            <img src={mailIcon} alt="Mail icon" />
            <a href="mailto:mo3y6im8z@mozmail.com" target="_blank" rel="noopener noreferrer"> email</a>
          </p>
          <p>
            <img src={githubIcon} alt="GitHub icon" />
            <a href="https://github.com/seoftbh" target="_blank" rel="noopener noreferrer"> GitHub</a>
          </p>
        </div>
      </div>
      <hr />
      <div className="card-body">
        <h3>Skill</h3>
        <span className="badge rounded-pill" style={{ backgroundColor: 'lightsalmon' }}>HTML</span>
        <span className="badge rounded-pill" style={{ backgroundColor: 'deepskyblue' }}>CSS</span>
        <span className="badge rounded-pill" style={{ backgroundColor: 'gold' }}>JS</span>
        <span className="badge rounded-pill" style={{ backgroundColor: 'turquoise' }}>Python</span>
        <span className="badge rounded-pill" style={{ backgroundColor: 'lightpink' }}>Java</span>
        <span className="badge rounded-pill" style={{ backgroundColor: 'cornflowerblue' }}>C</span>
      </div>
    </div>
  );
}

export default About;
