import './reducer';

export const emailSignIn = (email, password, history) => async (dispatch) => {
  dispatch({ type: 'LOG_IN' });
  console.log('/auth/emailSignIn');
  console.log('Getting user from', email, password);
  const user = { name: 'Some Name', avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' };
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: 'SET_USER', user });
  history.push('/');
};

export const facebookSignIn = (fbUser, history) => async (dispatch) => {
  dispatch({ type: 'LOG_IN' });
  const {
    name, picture,
    // email, id,
  } = fbUser;
  console.log('/auth/facebookSignIn', fbUser);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: 'SET_USER', user: { name, avatar: picture.data.url } });
  history.push('/');
};

export const googleSignIn = (googleUser, history) => async (dispatch) => {
  dispatch({ type: 'LOG_IN' });
  const {
    name, imageUrl,
    // email, googleId,
  } = googleUser;
  console.log('/auth/googleSignIn', googleUser);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: 'SET_USER', user: { name, avatar: imageUrl } });
  history.push('/');
};

export const logOut = (history) => async (dispatch) => {
  dispatch({ type: 'LOG_OUT' });
  history.push('/');
};
