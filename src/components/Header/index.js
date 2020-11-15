import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import ReactFlagsSelect from 'react-flags-select';
import {
  Text, Avatar, Popover, Menu, Position, minorScale, Heading,
} from 'evergreen-ui';
import { logOut } from '../../services/auth';
import {
  Outer, Wrapper, UserInfo, LogoWrapper, AvatarContainer, SignInButton, SignUpButton, FloatRight, Link,
} from './styles';
import { setLocale } from '../../intl/actions';

const countryToLang = {
  US: 'en',
  ES: 'es',
};

export const Header = () => {
  const { auth: { user }, intl: { locale } } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();
  const goToLogin = () => {
    history.push('/signin');
  };
  const goToSignUp = () => {
    history.push('/signup');
  };
  const handleLogout = () => {
    dispatch(logOut(history));
  };
  const country = Object.keys(countryToLang).find((key) => countryToLang[key] === locale);
  const { formatMessage } = useIntl();
  const changeLocale = (selectedCountry) => {
    dispatch(setLocale(countryToLang[selectedCountry]));
  };
  return (
    <Outer elevation={2}>
      <Wrapper>
        <Link to="/">
          <LogoWrapper>
            <Heading>Roomount</Heading>
            <Text size={300}>Same room, better price.</Text>
          </LogoWrapper>
        </Link>
        <FloatRight>
          <ReactFlagsSelect
            defaultCountry={country}
            onSelect={changeLocale}
            countries={Object.keys(countryToLang)}
            showSelectedLabel={false}
            showOptionLabel={false}
          />
        </FloatRight>
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
              <div>
                <SignInButton onClick={goToLogin}>
                  <Text>{formatMessage({ id: 'auth.signIn' })}</Text>
                </SignInButton>
                <SignUpButton onClick={goToSignUp}>
                  <Text>{formatMessage({ id: 'signUp.signUp' })}</Text>
                </SignUpButton>
              </div>
            )}
        </UserInfo>
      </Wrapper>
    </Outer>
  );
};
