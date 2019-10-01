import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  width: 350px;
  background: ${({ theme }) => theme.background};
  z-index: 1;
  padding: 30px;
  border-radius: 5px;
  padding-bottom: 50px;
`;

export const Title = styled.h1`
  font-weight: lighter;
  text-align: center;
  color: ${({ theme }) => theme.dark};
`;

export const Form = styled.form``;

export const SubmitButton = styled.input`
  width: 100%;
  height: 30px;
  background: ${({ theme }) => theme.dark};
  border-radius: 25px;
  border: none;
  outline: none;
  font-size: 18px;
  color: white;
  font-weight: lighter;
  font-family: inherit;
  cursor: pointer;
`;
