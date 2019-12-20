import styled from 'styled-components';

export const Wrapper = styled.div`
display:grid;
grid-template-columns: 100px auto;
margin-bottom:15px;
max-width:640px;
`;

export const Img = styled.img`
border-radius:5px;
width:100px;
height: 100px;
object-fit: cover;
background:lightgrey;
`;

export const InfoContainer = styled.div`
padding:0 15px;
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
display: flex;
flex-direction: column;
`;
export const Address = styled.div`

`;
