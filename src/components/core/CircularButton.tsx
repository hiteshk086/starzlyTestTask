import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';

interface CircularButtonProps {
  iconName: string;
  iconColor?: string;
  isImage?: boolean;
  imageUrl?: string;
  onPress?: () => void;
}

const CircularButton: React.FC<CircularButtonProps> = (
  props: CircularButtonProps,
) => {
  const {iconName, iconColor, isImage, imageUrl, onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {!isImage ? (
        <Icon name={iconName} size={20} color={iconColor} />
      ) : (
        <Image
          source={{uri: imageUrl}}
          resizeMode={'stretch'}
          style={{
            height: 45,
            width: 45,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: '#ffffff',
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default CircularButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    backgroundColor: '#00000050',
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
