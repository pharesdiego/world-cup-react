import React from 'react';
import styled from 'styled-components';

const Body = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  max-width: 1280px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Layout = props => (
  <Body>
    <Container>
      { props.children }
    </Container>
  </Body>
);

export default Layout;