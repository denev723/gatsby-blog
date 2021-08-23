import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 15px;
  text-align: center;
  line-height: 1.5;
`;

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Thank You for visiting My Blog, Have a Good Day!
      <br /> &copy; 2021 Developer Byeongjoo Kim, Powered By Gatsby.
    </FooterWrapper>
  );
};

export default Footer;
