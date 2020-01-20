import styled from 'styled-components';
import {
  Pane, Heading,
} from 'evergreen-ui';

export const Outer = styled(Pane)`
width:100%;
position: sticky;
top: 0;
background: white;
z-index: 1;
margin-bottom: 15px;
`;

export const Wrapper = styled(Pane)`
width:1024px;
margin:auto;
display: flex;
height:60px;
align-items:center;
`;


export const Logo = styled(Heading)`
size:600;
`;

export const AvatarContainer = styled(Pane)`
align-items: center;
display: flex;
cursor: pointer;
`;

export const UserInfo = styled.div`
margin-left:auto;
`;
