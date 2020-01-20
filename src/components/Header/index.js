import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  Button, Text, Avatar, Popover, Menu, Position,
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
                        Log Out
                    </Menu.Item>
                  </Menu>
)}
              >
                <AvatarContainer>
                  <Avatar src={user.avatar} name={user.name} size={30} />
                  <Text>{user.name}</Text>
                </AvatarContainer>
              </Popover>

            )
            : <Button onClick={goToLogin}>login</Button>}
        </UserInfo>
      </Wrapper>
    </Outer>
  );
};
