import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import Modal from 'react-native-modal';

export const Modals = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        backdropColor={'orange'}
        animationIn="lightSpeedIn"
        animationOut="lightSpeedOut"
        animationInTiming={800}
        animationOutTiming={800}
        backdropTransitionInTiming={5000}
        backdropTransitionOutTiming={5000}>
        <View style={{backgroundColor: 'red'}}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};
