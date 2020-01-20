import styled from 'styled-components';

export const Wrapper = styled.div`
display:grid;
grid-template-columns: 150px auto;
margin-bottom:15px;
/* max-width:640px; */
border: solid 1px lightgray;
position:relative;
transition:box-shadow .2s;
box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
&:hover {
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.25);
}
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
export const Title = styled.h4`
margin:0;
display:flex;
align-items:center;
grid-column:span 2;
span {margin-right:20px;}
`;

export const TripAdvisor = styled.div`
grid-row:span 2;
display: flex;
flex-direction: column;
font-size:12px;
padding: 5px 5px 0 0;
grid-row:span 1;
text-align:right;
background:rgba(0,0,0,0.1);
`;
export const Address = styled.address`
font-size:12px;
grid-column:span 3;
`;
export const LowestCost = styled.div`
display:block;
font-size:12px;
text-align:center;
grid-column:span 2;
`;


export const AllRoomsLink = styled.a`
text-align:right;
`;
