import React from 'react';
import { StyledSidebar, SidebarHeader, NavigationDivider, ListsNavigation} from './sidebar-styled';
import { AiOutlineLeftCircle, AiOutlineUnorderedList } from 'react-icons/ai';
import Navigation from './navigation/Navigation';
import { NavLink } from 'react-router-dom';

type PropsType = {
  lists: any[];
};

export default function Sidebar(props: PropsType) {
  return (
    <StyledSidebar>
      <SidebarHeader>
        <button>
          <AiOutlineLeftCircle />
        </button>
        <h1>React Todo</h1>
      </SidebarHeader>
      <Navigation />
      <NavigationDivider />
      <ListsNavigation>
        {
          props.lists.map((list: any) => <NavLink to={list.id} key={list.key}>
            <AiOutlineUnorderedList />
            {list.title}
          </NavLink>)
        }
      </ListsNavigation>
    </StyledSidebar>
  );
}