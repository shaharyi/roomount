import styled from 'styled-components';
import { Pane, Heading } from 'evergreen-ui';

export const Container = styled(Pane)`
max-width:1024px;
margin:auto;
`;


export const SummeryItem = styled(Heading)`
display: grid;
grid-template-columns: 140px auto;
`;

export const RoomContainer = styled(Pane)`
max-width:400px;
&:nth-of-type(2n) {
	background:${({ theme }) => theme.palette.blue.light};
}
`;

export const PaymentForm = styled.form`
display: grid;
width: 400px;
grid-template-columns: 200px 200px;
column-gap: 15px;
`;
