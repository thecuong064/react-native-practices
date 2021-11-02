import {Linking} from 'react-native';

export const openDialer = phoneNumber => {
  // replace all current "#" symbol to "%23"
  // to be able to display on Dialer
  let convetedPhoneNumber = phoneNumber.replace(/#/g, '%23');
  console.log(convetedPhoneNumber);
  Linking.openURL(`tel:${convetedPhoneNumber}`);
};

// export function openDialer(phoneNumber) {
//   Linking.openURL(`tel:${phoneNumber}`);
// }
