import React, {useEffect, useState} from 'react';
import {
  Text,
  ActivityIndicator,
  FlatList,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';
import Slider from '@react-native-community/slider';
import ApiPracticesItem from '../components/ApiPracticesItem';
import API_END_POINTS from '../constants/apiUrl';
import {useDispatch, useSelector} from 'react-redux';
import {getImages} from '../redux/ApiPracties/actions';
import store from '../redux/configureStore';

const photoWidth = 60;
const photoHeight = 60;
const photoBorderRadius = 30;

const ApiPractices = () => {
  const [isLoading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [itemPerRow, setItemPerRow] = useState(1);
  const newPhotos = useSelector(state => state.images.data);
  const error = useSelector(state => state.images.error);

  const getPhotos = async () => {
    try {
      const getPhotosRequest = new Request(API_END_POINTS.GET_PHOTOS, {
        method: 'GET',
      });
      const response = await fetch(getPhotosRequest);
      const json = await response.json();
      setPhotos(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = () => {
    store.dispatch(getImages());
  };

  const renderItem = ({item}) => {
    let parsedItem = {
      title: item.id,
      description: item.title,
      imageSrc: item.thumbnailUrl,
    };

    return (
      <ApiPracticesItem
        item={parsedItem}
        // title={item.title}
        // description={item.description}
        // onPress={() => onItemPressed()}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {!error && (!newPhotos || newPhotos.length) <= 0 ? (
        <ActivityIndicator />
      ) : error != null ? (
        <View>
          <Text style={{alignSelf: 'center'}}>Error: {error.message}</Text>
          <Button onPress={loadImages} title="Try again" color="#841584" />
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <Text style={{alignSelf: 'center'}}>{itemPerRow}</Text>
          <Slider
            minimumValue={1}
            maximumValue={6}
            value={itemPerRow}
            onValueChange={value => setItemPerRow(value)}
            step={1}
          />
          <View style={styles.itemsContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{backgroundColor: 'red'}}>
              <FlatList
                style={styles.itemsList}
                data={newPhotos}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={false}
                numColumns={itemPerRow}
                windowSize={11}
                key={itemPerRow}
                showsVerticalScrollIndicator={false}
              />
            </ScrollView>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: '#E8EAED',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  itemsContainer: {
    flex: 1,
    alignItems: 'center',
  },
  itemsList: {
    backgroundColor: 'pink',
  },
  photo: {
    width: photoWidth,
    height: photoHeight,
    borderRadius: photoBorderRadius,
  },
});

export default ApiPractices;
