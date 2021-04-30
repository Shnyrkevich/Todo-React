import styled from 'styled-components';


export const StyledSidebar = styled.section`
  width: 20%;
  height: 100vh;
  background-color: #99CCFF;
  display: flex;
  flex-direction: column;
  justefy-content: center;
  align-items: center;
`;

export const SidebarHeader = styled.div`
  width: 100%;
  display: flex;
  justefy-content: center;
  align-items: center;

  h1 {
    font-size: 20px;
    line-height: 20px;
    color: black;
  }

  button {
    background-color: inherit;
    font-size: 30px;
    border: none;
    outline: none;
    padding: 0;
    width: 30px;
    height: 30px;
    margin: auto 10px auto 10px;
  }
`;