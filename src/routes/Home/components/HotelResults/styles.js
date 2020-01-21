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
text-transform: none;
display: inline-flex;
cursor: pointer;
align-items: center;
background:${({ isSelected }) => (isSelected ? '#47B881' : 'transparent')};
span {
  ${({ isSelected }) => (isSelected && 'color:white')};
}
svg {
  ${({ isSelected }) => (isSelected ? 'opacity:1' : '')}
}
`;

export const FilterItemText = styled(Text)`
user-select: none;
`;


export const SortIcon = styled(Icon)`
transition:.2s opacity;
cursor:pointer;
opacity:0;
fill:white !important;
`;
