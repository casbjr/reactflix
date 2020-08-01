import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--grayLight);
  text-align: center;
  font-size: 12px;
  & img{
    width: 35px;
    margin-left: 5px;
    margin-bottom: -10px;
    opacity: 40%;
  }
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
