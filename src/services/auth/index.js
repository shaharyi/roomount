import './reducer';

export const logIn = (dispatch) => async (email, password) => {
  dispatch({ type: 'GET_USER' });
  console.log('Logging in with', password, email);
  setTimeout(() => {
    dispatch({ type: 'SET_USER', user: { name: 'AAA', avatar: 'A' } });
  }, 1000);
};
