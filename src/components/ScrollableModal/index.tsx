import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface props {
  onSwipeComplete: () => void;
  onPress: () => void;
  isVisible: boolean;
  onHandlerStateChange: any;
  children: any;
  height?: string | number;
}

const ScrollableModal = (props: props) => {
  const {
    children,
    isVisible,
    onHandlerStateChange,
    height,
    onSwipeComplete,
    onPress,
  } = props;

  return (
    <Modal
      onSwipeComplete={onSwipeComplete}
      testID={'modal'}
      isVisible={isVisible}
      swipeDirection={['down']}
      style={styles.modal}
      backdropOpacity={0.5}
      propagateSwipe={true}>
      <TapGestureHandler
        maxDurationMs={100}
        onHandlerStateChange={onHandlerStateChange}>
        <View style={{flex: 1}} />
      </TapGestureHandler>
      <View style={[styles.container, {height: height ? height : '85%'}]}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={onPress}
          style={{alignSelf: 'flex-end', paddingVertical: 10}}>
          <AntDesign name="close" size={22} />
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 20}}
          nestedScrollEnabled={true}>
          <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    backgroundColor: '#ffffff',
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});

export default ScrollableModal;
