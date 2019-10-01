import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  position: relative;
  padding: 12px 5px 5px;
  width: 100%;
  outline: 0;
  border: 0;
  box-shadow: 0 1px 0 0 #e5e5e5;
  font-size: 18px;
  transition: box-shadow 150ms ease-out;
  font-weight: lighter;
  &:focus + label {
    transform: translateY(-125%);
    font-size: 0.75em;
  }
`;

export const Label = styled.label`
  position: absolute;
  left: 5px;
  top: 7px;
  color: ${({ theme }) => theme.disabledText};
  z-index: 10;
  font-size: 18px;
  font-weight: lighter;
  font-family: inherit;
  pointer-events: none;
  transition: transform 150ms ease-out, font-size 150ms ease-out;
  ${({ moveUp }) =>
    moveUp &&
    `
    transform: translateY(-125%);
    font-size: .75em;
    `}
`;
