import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import {
  Text, Avatar, Popover, Menu, Position, minorScale, Heading,
} from 'evergreen-ui';
import { logOut } from '../../services/auth';
import {
  Outer, Wrapper, UserInfo, LogoWrapper, AvatarContainer, SignInButton,
} from './styles';

export const Header = () => {
  const { auth: { user } } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const goToLogin = () => {
    history.push('/signin');
  };
  const handleLogout = () => {
    dispatch(logOut(history));
  };
  const { formatMessage } = useIntl();

  return (
    <Outer elevation={2}>
      <Wrapper>
        <LogoWrapper>
          <Heading>Roomount</Heading>
          <Text size={300}>Same room, better price.</Text>
        </LogoWrapper>
        <UserInfo>
          {user
            ? (
              <Popover
                position={Position.BOTTOM_LEFT}
                content={(
                  <Menu>
                    <Menu.Item onSelect={handleLogout}>
                      {formatMessage({ id: 'auth.signOut' })}
                    </Menu.Item>
                  </Menu>
)}
              >
                <AvatarContainer>
                  <Avatar
                    marginRight={minorScale(2)}
                    src={user.avatar}
                    name={user.name}
                    size={30}
                  />
                  <Text>{user.name}</Text>
                </AvatarContainer>
              </Popover>

            )
            : (
              <SignInButton onClick={goToLogin}>
                <Text>{formatMessage({ id: 'auth.signIn' })}</Text>
              </SignInButton>
            )}
        </UserInfo>
      </Wrapper>
    </Outer>
  );
};
