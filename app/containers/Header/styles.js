import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 15px 30px;
  color: white;
  font-size: 18px;
  font-weight: lighter;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
`;

export const LogoContainer = styled.div``;
export const LinksContainer = styled.div``;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 15px;
`;
