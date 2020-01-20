import styled from 'styled-components';
import {
  Pane, Badge, minorScale, Icon, Text,
} from 'evergreen-ui';

export const LoaderWrapper = styled(Pane)`
width: 100%;
display: flex;
justify-content: center;
`;

export const FilterContainer = styled(Pane).attrs(() => ({
  marginBottom: minorScale(4),
}))`
width:100%;
`;

export const FilterItem = styled(Badge)
  .attrs(() => ({
    padding: minorScale(1),
  }))`
display: inline-flex;
cursor: pointer;
align-items: center;
background:${({ isSelected }) => (isSelected ? '#47B881' : 'transparent')};
`;

export const FilterItemText = styled(Text)`
${({ isSelected }) => (isSelected && 'color:white')};
`;


export const SortIcon = styled(Icon).attrs((props) => ({
  icon: props.asc ? 'caret-down' : 'caret-up',
}))`
transition:.2s opacity;
cursor:pointer;
opacity:0;
fill:white !important;
${({ show }) => show && 'opacity:1'}
`;
