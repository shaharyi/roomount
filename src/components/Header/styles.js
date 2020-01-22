import styled from 'styled-components';
import {
  Pane, Heading,
} from 'evergreen-ui';

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

export const Wrapper = styled(Pane)`
max-width:1024px;
margin:auto;
display: flex;
height:60px;
align-items:center;
`;


export const Logo = styled(Heading)
  .attrs(({ theme }) => ({
    size: 600,
    color: theme.palette.blue.lightest,
  }))``;

export const AvatarContainer = styled(Pane)`
align-items: center;
display: flex;
cursor: pointer;
span{
  color:${({ theme }) => theme.palette.blue.lightest} !important;
}
`;

export const UserInfo = styled(Pane)`
margin-left:auto;
`;
