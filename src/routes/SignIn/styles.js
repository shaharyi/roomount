import styled from 'styled-components';
import {
  Pane, minorScale,
} from 'evergreen-ui';

export const Container = styled(Pane).attrs(({ theme }) => ({
  background: theme.palette.blue.light,
}))`
display:flex;
justify-content:center;
align-items:center;
height: calc(100vh - 60px);
padding-bottom: 20vh;
`;

export const Panel = styled(Pane).attrs(({ theme }) => ({
  elevation: 4,
  padding: minorScale(5),
  background: theme.palette.blue.lightest,
}))``;
