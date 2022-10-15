import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='sidebar'>
      <div className='id'>
        <div className='id-content'>
          <img src='./media/billGates.jpg' alt='profil-pic' />
          <h3>Julien Guyon</h3>
        </div>
      </div>
      <div className='navigation'>
        <ul>
          <li>
            <NavLink exact to='/' activeClassName='nav-active'>
              <i className='fas fa-home'></i>
              <span>Acceuil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/competence' activeClassName='nav-active'>
              <i className='fas fa-mountain'></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/portfolio' activeClassName='nav-active'>
              <i className='fas fa-images'></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/contact' activeClassName='nav-active'>
              <i className='fas fa-address-book'></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='social-network'>
        <ul>
          <li>
            <a
              href='https://www.google.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.google.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.google.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.google.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-codepen'></i>
            </a>
          </li>
        </ul>
        <div className='signature'>
          <p>Julien guyon - 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
