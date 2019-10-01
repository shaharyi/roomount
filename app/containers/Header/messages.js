/*
 * Header Messages
 *
 * This contains all the text for the Header container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Header';

export default defineMessages({
  logo: {
    id: `${scope}.header`,
    defaultMessage: 'LOGO',
  },
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: 'Sign In',
  },
  register: {
    id: `${scope}.register`,
    defaultMessage: 'Register',
  },
  addProperty: {
    id: `${scope}.addProperty`,
    defaultMessage: 'Add your property',
  },
});
