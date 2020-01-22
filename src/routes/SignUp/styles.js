import {
  Pane, minorScale, Spinner,
} from 'evergreen-ui';
import styled from 'styled-components';

export const Container = styled(Pane).attrs(({ theme }) => ({
  background: theme.palette.blue.light,
}))`
display:flex;
justify-content:center;
align-items:center;
height: calc(100vh - 60px);
`;

export const Panel = styled(Pane).attrs(({ theme }) => ({
  elevation: 4,
  padding: minorScale(5),
  background: theme.palette.blue.lightest,
  width: 430,
}))``;

export const StyledSpinner = styled(Spinner)`
circle {    
  stroke: white;
}
`;
