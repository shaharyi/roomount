import './reducer';


const login = async (username, password) => {
  const body = JSON.stringify({ username, password });
  const response = await fetch('https://roomount.com/api/v1.0/login', {
    method: 'POST',
    mode: 'cors',
    body,
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await response.json();

  if (!response.ok) throw new Error(result.msg || response.statusText);

  return {
    ...result,
    name: `${result.first_name} ${result.last_name ? result.last_name : ''}`.trim(),
  };
};


export const emailSignIn = (email, password, history) => async (dispatch) => {
  dispatch({ type: 'LOG_IN' });
  try {
    const user = await login(email, password);
    console.log(user);
    // dispatch({ type: 'SET_USER', user });
    // history.push('/');
  } catch (e) {
    console.error(e);
    dispatch({ type: 'LOG_IN_ERROR', data: e.message });
  }
};

export const facebookSignIn = (fbUser, history) => async (dispatch) => {
  dispatch({ type: 'LOG_IN' });
  const {
    name, picture,
    // email, id,
  } = fbUser;
  console.log('/auth/facebookSignIn', fbUser);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return;
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

export const emailSignUp = (email, password, history) => async (dispatch) => {
  dispatch({ type: 'LOG_IN' });
  console.log('/auth/emailSignUp');
  console.log('Getting user from', email, password);
  const user = { name: 'Some Name', avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' };
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: 'SET_USER', user });
  history.push('/');
};

export const facebookSignUp = (fbUser, history) => async (dispatch) => {
  dispatch({ type: 'LOG_IN' });
  const {
    name, picture,
    // email, id,
  } = fbUser;
  console.log('/auth/facebookSignUp', fbUser);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: 'SET_USER', user: { name, avatar: picture.data.url } });
  history.push('/');
};

export const googleSignUp = (googleUser, history) => async (dispatch) => {
  dispatch({ type: 'LOG_IN' });
  const {
    name, imageUrl,
    // email, googleId,
  } = googleUser;
  console.log('/auth/googleSignUp', googleUser);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: 'SET_USER', user: { name, avatar: imageUrl } });
  history.push('/');
};

export const logOut = (history) => async (dispatch) => {
  dispatch({ type: 'LOG_OUT' });
  history.push('/');
};
