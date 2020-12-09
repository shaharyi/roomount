import styled from 'styled-components';
import amexSrc from 'payment-icons/min/mono/amex.svg';
import defaultSrc from 'payment-icons/min/mono/default.svg';
import dinersSrc from 'payment-icons/min/mono/diners.svg';
import discoverSrc from 'payment-icons/min/mono/discover.svg';
import eloSrc from 'payment-icons/min/mono/elo.svg';
import hipercardSrc from 'payment-icons/min/mono/hipercard.svg';
import jcbSrc from 'payment-icons/min/mono/jcb.svg';
import maestroSrc from 'payment-icons/min/mono/maestro.svg';
import mastercardSrc from 'payment-icons/min/mono/mastercard.svg';
import paypalSrc from 'payment-icons/min/mono/paypal.svg';
import securityCodeSrc from 'payment-icons/min/mono/security-code.svg';
import unionpaySrc from 'payment-icons/min/mono/unionpay.svg';
import verveSrc from 'payment-icons/min/mono/verve.svg';
import visaSrc from 'payment-icons/min/mono/visa.svg';

const cardSrc = {
  amex: amexSrc,
  default: defaultSrc,
  diners: dinersSrc,
  discover: discoverSrc,
  elo: eloSrc,
  hipercard: hipercardSrc,
  jcb: jcbSrc,
  maestro: maestroSrc,
  mastercard: mastercardSrc,
  paypal: paypalSrc,
  securityCode: securityCodeSrc,
  unionpay: unionpaySrc,
  verve: verveSrc,
  visa: visaSrc,
};


export const CardIcon = styled.img.attrs(({ type }) => ({
  src: cardSrc[type],
}))`
width: 25px;
position: relative;
/* top: 4px; */
margin-right: 5px;
`;
