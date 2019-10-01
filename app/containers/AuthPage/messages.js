/*
 * AuthPage Messages
 *
 * This contains all the text for the AuthPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.AuthPage';

export default defineMessages({
  loginTitle: {
    id: `${scope}.loginTitle`,
    defaultMessage: 'Sign In',
  },
  registerTitle: {
    id: `${scope}.registerTitle`,
    defaultMessage: 'Register',
  },
});
