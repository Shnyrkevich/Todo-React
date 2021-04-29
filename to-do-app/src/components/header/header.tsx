import React from 'react';
import { StyledHeader, HeaderContentContainer} from './header-styled';

export default function Header() {

  return (
    <StyledHeader>
      <HeaderContentContainer>
        <h1>React</h1>
      </HeaderContentContainer>
    </StyledHeader>
  );
}