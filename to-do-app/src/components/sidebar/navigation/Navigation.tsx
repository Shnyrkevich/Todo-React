import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationContainer } from './navigation-styled';
import { AiOutlineHome, AiFillStar, AiFillSchedule } from 'react-icons/ai';

export default function Navigation() {

  return (
    <NavigationContainer>
      <NavLink exact to='/' key={'tasks'}>
        <AiOutlineHome />
        tasks
      </NavLink>
      <NavLink to='/important' key={'important'}>
        <AiFillStar />
        important
      </NavLink>
      <NavLink to='/plained' key={'plained'}>
        <AiFillSchedule />
        plained
      </NavLink>
    </NavigationContainer>
  );
}
