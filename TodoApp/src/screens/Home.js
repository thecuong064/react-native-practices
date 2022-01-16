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
        <HomeItem
          title={Screens.INPUT_CONTROLS}
          onPress={() => navigation.navigate(Screens.INPUT_CONTROLS)}
        />
        <HomeItem
          title={Screens.BOTTOM_TABS}
          onPress={() => navigation.navigate(Screens.BOTTOM_TABS)}
        />
      </View>
      <View style={styles.itemRow}>
        <HomeItem
          title={Screens.BEAUTIFUL_BOTTOM_TABS}
          onPress={() => navigation.navigate(Screens.BEAUTIFUL_BOTTOM_TABS)}
        />
        <HomeItem
          title="Axios Practices"
          onPress={() => navigation.navigate(Screens.AXIOS_PRACTICES)}
        />
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
