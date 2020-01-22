import styled from 'styled-components';
import {
  minorScale, Heading, Pane, Text,
} from 'evergreen-ui';
import { Link } from 'react-router-dom';


export const Wrapper = styled(Pane)
  .attrs(() => ({
    elevation: 1,
    border: 'default',
    marginBottom: minorScale(4),
  }))`
display:grid;
grid-template-columns: 150px auto;
position:relative;
`;

export const Img = styled.img`
width:150px;
height: 150px;
object-fit: cover;
background:lightgrey;
`;

export const InfoContainer = styled.div`
padding-left: 15px;
display:grid;
grid-template-columns:auto 120px 80px;
`;
export const Title = styled(Heading)`
display:flex;
align-items:center;
grid-column:span 2;
`;

export const TripAdvisor = styled(Pane).attrs(() => ({
  background: 'tint2',
}))`
grid-row:span 2;
display: flex;
flex-direction: column;
padding: 5px 5px 0 0;
grid-row:span 1;
text-align:right;
`;

export const Address = styled(Text).attrs(() => ({
  size: 300,
}))`
grid-column:span 3;
`;

export const LowestCost = styled(Pane)`
/* display:block; */
/* font-size:12px; */
text-align:center;
grid-column:span 2;
`;


export const AllRoomsLink = styled(Link)`
cursor: pointer;
text-align:right;
`;
