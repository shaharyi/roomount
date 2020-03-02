import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import {
  Pane, Button,
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

export const Link = styled(RouterLink)`
text-decoration:none;
`;

export const Wrapper = styled(Pane)`
max-width:1024px;
margin:auto;
display: flex;
height:60px;
align-items:center;
`;

export const FloatRight = styled.div`
margin-left:auto;
`;
export const LogoWrapper = styled(Pane)`
display:flex;
text-decoration:none;
flex-direction:column;
span, h2 {
color:${({ theme }) => theme.palette.blue.lightest};
}
h2{
  font-size:28px
}
span {
  font-size:11px;
}
`;

export const SignInButton = styled(Button).attrs(() => ({
  appearance: 'minimal',
}))`
span {
color:${({ theme }) => theme.palette.blue.lightest};
}
`;

export const AvatarContainer = styled(Pane)`
align-items: center;
display: flex;
cursor: pointer;
span{
  color:${({ theme }) => theme.palette.blue.lightest} !important;
}
`;

export const UserInfo = styled(Pane)`

`;
