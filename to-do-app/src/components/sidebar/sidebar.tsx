import React from 'react';
import { StyledSidebar, SidebarHeader} from './sidebar-styled';
import { AiOutlineLeftCircle } from 'react-icons/ai';

export default function Sidebar() {

  return (
    <StyledSidebar>
      <SidebarHeader>
        <button>
          <AiOutlineLeftCircle />
        </button>
        <h1>React Todo</h1>
      </SidebarHeader>
    </StyledSidebar>
  );
}