import styled from 'styled-components';


export const StyledHeader = styled.header`
  width: 100%;
  header: 60px;
  background-color: #336666;
  border-bottom: 4px solid #669999;
  display: flex;
  justefy-content: center;
  align-items: center;

  h1 {
    font-size: 20px;
    color: white;
  }
`;

export const HeaderContentContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justefy-content: space-between;
  align-items: center;
`;