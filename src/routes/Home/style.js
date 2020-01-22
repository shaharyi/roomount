import styled from 'styled-components';
import { Pane, minorScale } from 'evergreen-ui';

export const MainWrapper = styled.div`
display:grid;
grid-template-columns: 320px auto;
`;

export const SearchWrapper = styled.div`
padding: 15px;
`;

export const ResultsWrapper = styled.div`
padding: 15px;
`;

export const SectionContainer = styled(Pane).attrs(() => ({
  marginBottom: minorScale(2),
}))``;
