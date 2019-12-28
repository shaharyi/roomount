import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Wrapper, UserInfo, Logo } from './styles';

export const Header = () => {
  const { auth: { user } } = useSelector((state) => state);
  // const dispatch = useDispatch();
  const history = useHistory();
  console.log('AUTHDATA', user);
  const goToLogin = () => {
    history.push('/auth');
  };
  return (
    <Wrapper>
      <Logo>Roomount</Logo>
      <UserInfo>
        {user
          ? (
            <div>
              <img src={user.avatar} alt="avatar" />
              {user.name}
            </div>
          )
          : <div><button type="button" onClick={goToLogin}>login</button></div>}
      </UserInfo>
    </Wrapper>
  );
};
