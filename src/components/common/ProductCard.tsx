import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
const ProductCard = ({onPress}: any) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAuvLbp4JHVdt2NhlpD35518tdSQ-joqEQRIu39Zug&s',
            }}
            style={{
              height: 50,
              width: 50,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: '#f61c6c',
            }}
          />
        </TouchableOpacity>
        <View style={{marginLeft: 10, width: 130}}>
          <Text style={styles.priceText} numberOfLines={1}>
            $100
          </Text>
          <Text style={styles.priceText} numberOfLines={1}>
            #Eau de Perfum
          </Text>
          <Text style={styles.text1} numberOfLines={1}>
            Top Notes: Hello World
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.labelView} onPress={onPress}>
        <Text style={styles.text2}>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000030',
    padding: 15,
    borderRadius: 14,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelView: {
    backgroundColor: 'rgb(242,0,101)',
    borderRadius: 4,
    paddingHorizontal: 10,
    height: '100%',
    justifyContent: 'center',
    width: 80,
  },
  text2: {
    fontSize: 10,
    color: '#ffffff',
    fontWeight: '800',
    textAlign: 'center',
  },
  text1: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '600',
  },
  priceText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
