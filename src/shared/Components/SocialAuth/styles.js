import styled from 'styled-components';
import {
  Pane, minorScale, Button,
} from 'evergreen-ui';

export const SocialWrapper = styled(Pane)
  .attrs(() => ({
    marginBottom: minorScale(4),
  }))`
display: flex;
${({ centered }) => centered && 'justify-content: center;'}
`;


export const SocialIcon = styled.img`
width:32px;
height:32px;
display:inline-block;
margin-right: ${minorScale(2)}px;
`;

export const SocialButton = styled(Button).attrs(() => ({
  padding: minorScale(2),
}))`
height:auto;
`;
