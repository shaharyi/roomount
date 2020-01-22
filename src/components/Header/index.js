import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button, Text, Avatar, Popover, Menu, Position, minorScale, Icon,
} from 'evergreen-ui';
import { logOut } from '../../services/auth';
import {
  Outer, Wrapper, UserInfo, Logo, AvatarContainer,
} from './styles';

export const Header = () => {
  const { auth: { user } } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const goToLogin = () => {
    history.push('/auth');
  };
  const handleLogout = () => {
    dispatch(logOut(history));
  };
  console.log(user && user.avatar);

  return (
    <Outer elevation={2}>
      <Wrapper>
        <Logo>Roomount</Logo>
        <UserInfo>
          {user
            ? (
              <Popover
                position={Position.BOTTOM_LEFT}
                content={(
                  <Menu>
                    <Menu.Item onSelect={handleLogout}>
                        Sign Out
                    </Menu.Item>
                  </Menu>
)}
              >
                <AvatarContainer>
                  <Avatar marginRight={minorScale(2)} src={user.avatar} name={user.name} size={30} />
                  <Text>{user.name}</Text>
                </AvatarContainer>
              </Popover>

            )
            : (
              <Button onClick={goToLogin}>
                <Text>Sign In</Text>
              </Button>
            )}
        </UserInfo>
      </Wrapper>
    </Outer>
  );
};
