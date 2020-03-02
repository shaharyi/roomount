import styled from 'styled-components';
import { Pane, minorScale } from 'evergreen-ui';
import { Link } from 'react-router-dom';

export const Outer = styled(Pane).attrs(({ theme }) => ({
  background: theme.palette.blue.dark,
  color: 'white',
}))`
width:100%;
position: sticky;
top: 0;
/* background: white; */
z-index: 10;
`;

export const FooterLink = styled(Link)`
margin-left:${minorScale(2)}px;
`;

export const Wrapper = styled(Pane)`
max-width:1024px;
margin:auto;
display: flex;
height:60px;
align-items:center;
a,span  {
color:white;
}
`;
