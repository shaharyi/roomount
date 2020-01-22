import './reducer';

export const emailLogin = (email, password, history) => async (dispatch) => {
  dispatch({ type: 'LOG_IN' });
  console.log('/auth/emailLogin');
  console.log('Getting user from', email, password);
  const user = { name: 'Some Name', avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' };
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: 'SET_USER', user });
  history.push('/');
};

export const facebookLogin = (fbUser, history) => async (dispatch) => {
  dispatch({ type: 'LOG_IN' });
  const {
    name, picture,
    // email, id,
  } = fbUser;
  console.log('/auth/facebookLogin', fbUser);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: 'SET_USER', user: { name, avatar: picture.data.url } });
  history.push('/');
};

export const googleLogin = (googleUser, history) => async (dispatch) => {
  dispatch({ type: 'LOG_IN' });
  const {
    name, imageUrl,
    // email, googleId,
  } = googleUser;
  console.log('/auth/googleLogin', googleUser);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: 'SET_USER', user: { name, avatar: imageUrl } });
  history.push('/');
};

export const logOut = (history) => async (dispatch) => {
  dispatch({ type: 'LOG_OUT' });
  history.push('/');
};
