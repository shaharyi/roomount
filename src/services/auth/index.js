import './reducer';

export const logIn = (email, password, history) => async (dispatch) => {
  dispatch({ type: 'GET_USER' });
  console.log('Getting user from', email, password);
  const user = { name: 'Some Name', avatar: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' };
  await new Promise((resolve) => setTimeout(resolve, 2000));
  dispatch({ type: 'SET_USER', user });
  history.push('/');
};

export const logOut = (history) => async (dispatch) => {
  dispatch({ type: 'LOG_OUT' });
  history.push('/');
};
