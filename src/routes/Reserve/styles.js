import styled from 'styled-components';
import {
  Pane, Heading, Label, minorScale,
} from 'evergreen-ui';

export const Container = styled(Pane)`
max-width:1024px;
margin:auto;
`;


export const CreditLabel = styled(Label)`
display:block;
`;

export const SummeryItem = styled(Heading)`
display: grid;
grid-template-columns: 140px auto;
`;

export const RoomContainer = styled(Pane)`
max-width:600px;
min-width:400px;
padding:15px;
&:nth-of-type(2n) {
	background:${({ theme }) => theme.palette.blue.light};
}
`;

export const Splitter = styled(Pane)`
display:flex;
flex-direction:row;
`;

export const PaymentForm = styled.form`
margin-top:${minorScale(4)}px;
    display: grid;
    width: 350px;
    grid-template-columns: 190px auto;
    column-gap: 15px;
}
`;
