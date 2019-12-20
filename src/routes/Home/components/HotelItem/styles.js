import styled from 'styled-components';

export const Wrapper = styled.div`
display:grid;
grid-template-columns: 150px auto;
margin-bottom:15px;
max-width:640px;
border: solid 1px lightgray;
border-radius: 5px;
`;

export const Img = styled.img`
border-radius:5px 0 0 5px ;
width:150px;
height: 150px;
object-fit: cover;
background:lightgrey;
`;

export const InfoContainer = styled.div`
padding-left: 15px;
`;
export const Title = styled.h4`
margin:0;
display:flex;
align-items:center;
span {margin-right:20px;}
`;


export const TopContainer = styled.div`
display:grid;
grid-template-columns:auto 80px;
`;

export const TripAdvisor = styled.div`
grid-row:span 2;
border-radius: 0 5px 0 0;
display: flex;
flex-direction: column;
font-size:10;
text-align:right;
background:rgba(0,0,0,0.1);
`;
export const Address = styled.address`
font-size:12px;
`;
