import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface props {
  width?: string | number;
  title?: string;
  name?: string;
  bgColor?: string;
}

const Button = (props: props) => {
  const {width, title, name, bgColor} = props;
  return (
    <TouchableOpacity
      style={{
        height: 54,
        width: width ? width : '100%',
        backgroundColor: bgColor ? bgColor : 'rgb(242,0,101)',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 6,
      }}>
      <Feather
        color={'white'}
        name={name ? name : 'shopping-cart'}
        size={24}
        style={{marginRight: 8}}
      />
      <Text
        style={{
          color: '#fff',
          fontWeight: '700',
          fontSize: 12,
          width: '50%',
        }}>
        {title ? title : 'ADD TO CART'}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
