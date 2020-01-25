import React from 'react';

import '../../css/coverStyle.css';

import profile from '../../img/profile.jpg';
import facebook from '../../img/facebook.png';
import ig from '../../img/ig.png';
import line from '../../img/line.png';

class Cover extends React.Component {

  render () {
    return (
      <div className='cover-container'>

        <div className='profile-box'>
          <img className='profile-img' src={profile} alt='profile-img' />
        </div>

        <div className='name-box'>
          <h1 className='name-text'>Werawit Sirakunwat</h1>
        </div>

        <div className='contact-box'>
          <a href='https://www.facebook.com/werawit.boat' target='_blank' rel="noopener noreferrer">
            <img className='icon' src={facebook} alt='facebook-icon' />
          </a>

          <a href='https://www.instagram.com/nawes_boat/' target='_blank' rel="noopener noreferrer">
            <img className='icon' src={ig} alt='ig-icon' />
          </a>

          <a href='https://www.youtube.com/channel/UCTFZQ6zKCZKi_8CZW1TXFkg' target='_blank' rel="noopener noreferrer">
            <img className='icon' src={line} alt='line-icon' />
          </a>
        </div>

      </div>
    );
  }

}

export default Cover;
