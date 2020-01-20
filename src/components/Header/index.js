import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button, Text, Avatar, Pane,
} from 'evergreen-ui';
import {
  Outer, Wrapper, UserInfo, Logo, AvatarContainer,
} from './styles';

export const Header = () => {
  const { auth: { user } } = useSelector((state) => state);
  // const dispatch = useDispatch();
  const history = useHistory();
  const goToLogin = () => {
    history.push('/auth');
  };
  return (
    <Outer elevation={2}>
      <Wrapper>
        <Logo>Roomount</Logo>
        <UserInfo>
          {user
            ? (
              <AvatarContainer>
                <Avatar src={user.avatar} name={user.name} size={30} />
                <Text>{user.name}</Text>
              </AvatarContainer>
            )
            : <Button onClick={goToLogin}>login</Button>}
        </UserInfo>
      </Wrapper>
    </Outer>
  );
};
