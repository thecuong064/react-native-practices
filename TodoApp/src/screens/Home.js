import React from 'react';
import HomeItem from '../components/HomeItem';
import Screens from '../constants/Screens';
import store from '../redux/configureStore';

import {
  KeyboardAvoidingView,
  Keyboard,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  FlatList,
  SectionList,
} from 'react-native';

function Home({route, navigation}) {
  // const [user, setUser] = React.useState(route.params?.user);
  const user = store.getState().user;

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Hi {user.username}
        {'\n'}Password: {user.password}
      </Text>
      <View style={styles.itemRow}>
        <HomeItem
          title={Screens.TODO_LIST}
          onPress={() => navigation.navigate(Screens.TODO_LIST)}
        />
        <HomeItem
          title={Screens.DIALER}
          onPress={() => navigation.navigate(Screens.DIALER)}
        />
      </View>
      <View style={styles.itemRow}>
        <HomeItem
          title={Screens.TYPICAL_LIST}
          onPress={() => navigation.navigate(Screens.TYPICAL_LIST)}
        />
        <HomeItem
          title={Screens.API_PRACTICES}
          onPress={() => navigation.navigate(Screens.API_PRACTICES)}
        />
      </View>
      <View style={styles.itemRow}>
        <HomeItem title="New screen" />
        <HomeItem title="New screen" />
      </View>
      <View style={styles.itemRow}>
        <HomeItem title="New screen" />
        <HomeItem title="New screen" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#E8EAED',
    flex: 1,
    flexDirection: 'column',
  },
  itemRow: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Home;
