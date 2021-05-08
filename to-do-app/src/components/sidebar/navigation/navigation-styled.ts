import styled from 'styled-components';

export const NavigationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 90%;

  a {
    color: black;
    margin-top: 10px;
    margin-botton: 10px;
    display: flex;
    justefy-content: center;
    align-items: center;
    width: 100%;
    font-size: 20px;
    text-transform: uppercase;
    text-decoration: none;

    svg {
      margin-right: 5px;
    }
  }

  a.active {
    color: pink;
  }

  a:hover {
    background-color: lightgray;
  }
`;