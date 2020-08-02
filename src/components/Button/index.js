import styled from 'styled-components';

const Button = styled.button`
  color: var(--white);
  border: 1px solid #666666;
  background: #666666;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 35px;
  text-decoration: none !important;
  display: inline-block;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;
