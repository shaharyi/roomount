import styled from './node_modules/styled-components';

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items:${({ centered }) => (centered ? 'center' : 'start')};
`;
