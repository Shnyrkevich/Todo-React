import React from 'react';
import { StyledSidebar, SidebarHeader, NavigationDivider } from './sidebar-styled';
import { NavigationList } from './navigation-list-styled';
import { 
  AiOutlineLeftCircle,
  AiOutlineUnorderedList,
  AiOutlineHome,
  AiFillStar,
  AiFillSchedule
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons/lib';

type PropsType = {
  lists: any[];
};

type ListItemProps = {
  id: number,
  to: string,
  icon: IconType,
  exact?: boolean,
  title: string,
}

function NavigationListItem(props: ListItemProps) {
  return (
    <NavLink to={props.to} exact={props.exact}>
      <props.icon />
      {props.title}
    </NavLink>
  );
}

export default function Sidebar(props: PropsType) {
  const navLinks = [
    { id: 1, to: '/', title: 'tasks', exact: true, icon: AiOutlineHome },
    { id: 2, to: '/important', title: 'important', exact: true, icon: AiFillStar },
    { id: 3, to: '/plained', title: 'plained', exact: true, icon: AiFillSchedule },
  ];

  return (
    <StyledSidebar>
      <SidebarHeader>
        <button>
          <AiOutlineLeftCircle />
        </button>
        <h1>React Todo</h1>
      </SidebarHeader>
      <NavigationList>
        {navLinks.map((item: ListItemProps) => <NavigationListItem {...item} key={item.id}/>)}
      </NavigationList>
      <NavigationDivider />
      <NavigationList>
        {
          props.lists.map((item: any) => <NavigationListItem key={item.id} {...item} to={item.id} icon={AiOutlineUnorderedList}/>)
        }
      </NavigationList>
    </StyledSidebar>
  );
}