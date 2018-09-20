import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {

  const activeStyle = {
    color: 'green',
    fontSize: '2rem'
  }

  return (
    <div>
      <ul>
        {/* <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/about/react">리액트 소개</Link></li> */}
        <li><NavLink exact to="/" activeStyle={activeStyle}>홈</NavLink></li>
        <li><NavLink exact to="/about" activeStyle={activeStyle}>소개</NavLink></li>
        <li><NavLink to="/about/react" activeStyle={activeStyle}>리액트 소개</NavLink></li>
      </ul>
    </div>
  )
}

export default Menu; 