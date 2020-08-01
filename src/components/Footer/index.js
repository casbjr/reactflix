import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/casbjr">
        <img src="https://image.flaticon.com/icons/svg/1051/1051275.svg" alt="Logo Github" />
      </a>
      <br />
      <p>
        Desenvolvido durante a Imersão React da Alura por
        {' '}
        <a href="https://github.com/casbjr" rel="noopener noreferrer" target="_blank">
          Carlos Barros
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
