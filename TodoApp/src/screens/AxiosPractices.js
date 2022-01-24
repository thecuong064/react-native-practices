import React, {useState} from 'react';
import SampleItem from '../components/SampleItem';
import {useSelector} from 'react-redux';
import store from '../redux/configureStore';
import {addItem} from '../redux/TypicalList/actions';

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
  ActivityIndicator,
} from 'react-native';
import userApis from '../api/usersApi';
import postApi from '../api/postApi';
import FlatListLoadMore from '../components/FlatListLoadMore';

const AxiosPractices = ({navigation}) => {
  const [userId, setUserId] = useState('');
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  // const users = useSelector(state => state.images.data);

  const delay = ms => new Promise(res => setTimeout(res, ms));

  const getUsers = async () => {
    try {
      let users = await userApis.getAllUsers();
      setUsers(users);
    } catch (error) {
      console.log(error);
    }
  };

  const getPosts = async () => {
    setIsLoading(true);
    try {
      let params = {
        _page: pageCount + 1,
        _limit: 10,
      };
      console.log(params._page);
      let newPosts = await postApi.getAllPosts(params);
      setPageCount(pageCount + 1);
      await delay(500);
      setPosts(posts.concat(newPosts));
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const getUser = async id => {
    try {
      let user = await userApis.getUser(id);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const renderUserItem = ({item}) => {
    let user = {
      id: item.id,
      name: item.name,
      email: item.email,
    };
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{user.name}</Text>
        <Text style={styles.title}>{user.email}</Text>
      </View>
    );
  };

  const renderPostItem = ({item}) => {
    let post = {
      id: item.id,
      title: item.title,
    };
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{post.id}</Text>
        <Text style={styles.title}>{post.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{pageCount}</Text>
      <Button onPress={getUsers} title="Get all users" />
      <TextInput
        placeholder={'Input user id'}
        value={userId}
        onChangeText={text => setUserId(text)}
      />
      <Button onPress={() => getUser(userId)} title="Get user" />
      <Button onPress={getPosts} title="Get all posts" />
      <FlatListLoadMore
        style={styles.itemsList}
        data={posts}
        renderItem={renderPostItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={true}
        onLoadMore={getPosts}
      />
      {isLoading && <ActivityIndicator />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#E8EAED',
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#fff000',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemsList: {
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 18,
  },
});

export default AxiosPractices;
