import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export const BottomSheetScreen = () => {
  // ref
  const bottomSheetRef = useRef(null);

  // variabless
  const snapPoints = useMemo(() => ['25%', '50%', '80%'], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const expandSheet = () => {
    //bottomSheetRef.current.expand();
    bottomSheetRef.current.snapToIndex(2);
  };

  // renders
  return (
    <View style={styles.container}>
      <Button title="Show bottom sheet" onPress={expandSheet} />
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}>
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});
