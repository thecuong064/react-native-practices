import React from 'react';
import PhonePad from '../components/PhonePad';
import store from '../redux/configureStore';
import {openDialer} from '../utils/DeviceUtils';
import {useSelector} from 'react-redux';
import {
  addCharToPhoneNumber,
  delCharFromPhoneNumber,
  clearPhoneNumber,
  clearPhoneNumber1,
} from '../redux/Phone/actions';

import {
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  Button,
  Image,
} from 'react-native';

const NUMPAD_ONE = '1';
const NUMPAD_TWO = '2';
const NUMPAD_THREE = '3';
const NUMPAD_FOUR = '4';
const NUMPAD_FIVE = '5';
const NUMPAD_SIX = '6';
const NUMPAD_SEVEN = '7';
const NUMPAD_EIGHT = '8';
const NUMPAD_NINE = '9';
const NUMPAD_ZERO = '0';
const NUMPAD_PLUS = '+';
const NUMPAD_STAR = '*';
const NUMPAD_HASH = '#';
const NUMPAD_CLEAR = 'Clr';
const NUMPAD_DELETE = 'Del';

function DeleteButtonWithTitle(props) {
  return (
    <TouchableOpacity
      style={styles.deleteButtonWrapper}
      onPress={props.onPress}
      onLongPress={props.onLongPress}>
      <Text style={styles.deleteButtonTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
}

function DeleteButtonWithImage(props) {
  return (
    <TouchableOpacity
      style={styles.deleteButtonWrapper}
      onPress={props.onPress}
      onLongPress={props.onLongPress}>
      <Image source={props.imageSrc} style={styles.deleteButtonImage} />
    </TouchableOpacity>
  );
}

function DeleteButton(props) {
  let content = null;

  if (!props.isHidden) {
    if (props.imageSrc) {
      content = (
        <Image source={props.imageSrc} style={styles.deleteButtonImage} />
      );
    } else {
      content = <Text style={styles.deleteButtonTitle}>{props.title}</Text>;
    }
  }

  return (
    <TouchableOpacity
      style={styles.deleteButtonWrapper}
      onPress={props.onPress}
      onLongPress={props.onLongPress}>
      {content}
    </TouchableOpacity>
  );

  // if (props.imageSrc) {
  //   return DeleteButtonWithImage(props);
  // } else {
  //   return DeleteButtonWithTitle(props);
  // }
}

function Phone({navigation}) {
  const [input, setInput] = React.useState('');
  const phoneNumber = useSelector(state => state.phoneNumber);

  React.useEffect(() => {
    return () => {
      unsubscribe();
    };
  });

  const unsubscribe = store.subscribe(() => {
    console.log('Phone number: ', store.getState().phoneNumber);
  });

  function addCharacter(char) {
    // setInput(input + char);
    store.dispatch(addCharToPhoneNumber(char));
  }

  function del() {
    // if (input.length < 1) {
    //   return;
    // }
    // setInput(input.slice(0, -1));
    store.dispatch(delCharFromPhoneNumber());
  }

  function clear() {
    // setInput('');
    //store.dispatch(clearPhoneNumber());
    store.dispatch(clearPhoneNumber1);
  }

  function dial() {
    openDialer(phoneNumber);
    // Alert.alert('Alert Title', 'My Alert Msg', [
    //   {
    //     text: 'Cancel',
    //     onPress: () => console.log('Cancel Pressed'),
    //     style: 'cancel',
    //   },
    //   {text: 'OK', onPress: () => console.log('OK Pressed')},
    // ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputWrapper}>
        <Text style={styles.input}>{phoneNumber}</Text>
        <DeleteButton
          title={NUMPAD_DELETE}
          imageSrc={require('../assets/backspace_white.png')}
          onPress={() => {
            del();
          }}
          onLongPress={() => {
            clear();
          }}
          isHidden={phoneNumber.length < 1}
        />
      </View>

      <View style={styles.column}>
        <View style={styles.row}>
          <PhonePad
            title={NUMPAD_ONE}
            onPress={() => {
              addCharacter(NUMPAD_ONE);
            }}
          />
          <PhonePad
            title={NUMPAD_TWO}
            onPress={() => {
              addCharacter(NUMPAD_TWO);
            }}
          />
          <PhonePad
            title={NUMPAD_THREE}
            onPress={() => {
              addCharacter(NUMPAD_THREE);
            }}
          />
        </View>
        <View style={styles.row}>
          <PhonePad
            title={NUMPAD_FOUR}
            onPress={() => {
              addCharacter(NUMPAD_FOUR);
            }}
          />
          <PhonePad
            title={NUMPAD_FIVE}
            onPress={() => {
              addCharacter(NUMPAD_FIVE);
            }}
          />
          <PhonePad
            title={NUMPAD_SIX}
            onPress={() => {
              addCharacter(NUMPAD_SIX);
            }}
          />
        </View>
        <View style={styles.row}>
          <PhonePad
            title={NUMPAD_SEVEN}
            onPress={() => {
              addCharacter(NUMPAD_SEVEN);
            }}
          />
          <PhonePad
            title={NUMPAD_EIGHT}
            onPress={() => {
              addCharacter(NUMPAD_EIGHT);
            }}
          />
          <PhonePad
            title={NUMPAD_NINE}
            onPress={() => {
              addCharacter(NUMPAD_NINE);
            }}
          />
        </View>
        <View style={styles.row}>
          <PhonePad
            title={NUMPAD_STAR}
            onPress={() => {
              addCharacter(NUMPAD_STAR);
            }}
          />
          <PhonePad
            title={NUMPAD_ZERO}
            onPress={() => {
              addCharacter(NUMPAD_ZERO);
            }}
            onLongPress={() => {
              addCharacter(NUMPAD_PLUS);
            }}
          />
          <PhonePad
            title={NUMPAD_HASH}
            onPress={() => {
              addCharacter(NUMPAD_HASH);
            }}
          />
        </View>
        <View style={[styles.row, {display: 'none'}]}>
          <PhonePad
            title={NUMPAD_CLEAR}
            onPress={() => {
              clear();
            }}
          />
          {/* <PhonePad
            title={NUMPAD_ZERO}
            onPress={() => {
              addCharacter(NUMPAD_ZERO);
            }}
            onLongPress={() => {
              addCharacter(NUMPAD_PLUS);
            }}
          /> */}
          <PhonePad
            title={NUMPAD_DELETE}
            onPress={() => {
              del();
            }}
          />
        </View>
        <View style={styles.row}>
          <PhonePad
            wrapperStyle={styles.dialButtonWrapper}
            titleStyle={styles.dialButtonTitle}
            title="Dial"
            onPress={() => {
              dial();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#354242',
  },
  column: {
    margin: 20,
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  dialButtonWrapper: {
    backgroundColor: '#97ca2d',
  },
  dialButtonTitle: {
    color: '#000',
  },
  inputWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 40,
    alignItems: 'center',
  },
  input: {
    fontSize: 24,
    color: '#ffffff',
    flex: 1,
    textAlign: 'center',
  },
  deleteButtonWrapper: {
    width: 30,
    height: 30,
    alignItems: 'center',
  },
  deleteButtonTitle: {
    flex: 1,
    color: '#ffffff',
    textAlignVertical: 'center',
  },
  deleteButtonImage: {
    flex: 1,
    width: 30,
    height: 30,
  },
});

export default Phone;
