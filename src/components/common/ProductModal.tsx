import axios from 'axios';
import React, {useState} from 'react';
import {
  View,
  Button as RNButton,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import {
  State,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../Button';
import ScrollableModal from '../ScrollableModal';

interface ProductModalProps {
  openModal: boolean;
  setOpenModal: (e: boolean) => void;
}
const ProductModal = (props: ProductModalProps) => {
  const {openModal, setOpenModal} = props;
  //   const [openModal, setOpenModal] = useState(false);
  const [textShown, setTextShown] = useState(false);

  const onSingleTap = (event: TapGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      setOpenModal(false);
    }
  };

  const toggleNumberOfLines = () => {
    //To toggle the show text or hide it
    setTextShown(!textShown);
  };

  const DATA = [
    {
      uri: 'https://t-mobile.scene7.com/is/image/Tmusprod/OnePlus-Nord-N20-5G-Blue-frontimage',
    },
    {
      uri: 'https://t-mobile.scene7.com/is/image/Tmusprod/OnePlus-Nord-N20-5G-Blue-frontimage',
    },
    {
      uri: 'https://t-mobile.scene7.com/is/image/Tmusprod/OnePlus-Nord-N20-5G-Blue-frontimage',
    },
    {
      uri: 'https://t-mobile.scene7.com/is/image/Tmusprod/OnePlus-Nord-N20-5G-Blue-frontimage',
    },
  ];
  return (
    <>
      <ScrollableModal
        isVisible={openModal}
        onSwipeComplete={() => setOpenModal(false)}
        onHandlerStateChange={onSingleTap}
        onPress={() => setOpenModal(false)}>
        <View style={[styles.container]}>
          <Swiper style={{height: 300}} scrollEnabled>
            {DATA.map((item, index) => (
              <TouchableOpacity key={index} activeOpacity={1} style={{flex: 1}}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.uri,
                  }}
                />
              </TouchableOpacity>
            ))}
          </Swiper>
          <View style={[styles.direction, {marginTop: '5%'}]}>
            <Text style={styles.text1}>
              Top Notes: Bergamot, grape Fruit, Apple
            </Text>
            <View style={styles.labelView}>
              <Text style={styles.text2}>EXCLUSIVE</Text>
            </View>
          </View>
          <View style={[styles.direction, {marginTop: 8}]}>
            <Text style={styles.itemName}>Royalty Eau de perfume - 100ml</Text>
            <View style={styles.direction}>
              <Text style={styles.regularPrice}>$48</Text>
              <Text style={styles.discountedPrice}>$100</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={[styles.direction, {alignItems: 'center'}]}>
            <View style={styles.direction}>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginRight: 10,
                }}
                source={{
                  uri: 'https://t-mobile.scene7.com/is/image/Tmusprod/OnePlus-Nord-N20-5G-Blue-frontimage',
                }}
              />
              <View>
                <Text style={styles.personDescription}>
                  By{' '}
                  <Text style={[styles.itemName, {fontWeight: '700'}]}>
                    Maged el Masry
                  </Text>
                </Text>
                <Text style={[styles.personDescription, {marginTop: '2%'}]}>
                  Actors {<Entypo name="triangle-right" />} Egypt
                </Text>
              </View>
            </View>
            <View>
              <View
                style={[
                  {
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                  },
                ]}>
                <AntDesign size={16} color={'rgb(243,84,23)'} name="star" />
                <Text style={styles.rating}>4.9</Text>
              </View>
              <Text style={styles.review}>33 Reviews</Text>
            </View>
          </View>
          <Text
            style={[
              styles.rating,
              {
                fontSize: 15,
                marginTop: 15,
                marginBottom: 12,
                marginLeft: 0,
              },
            ]}>
            Description
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <Text
              style={styles.description}
              numberOfLines={textShown ? undefined : 4}>
              A product description is the marketing copy that explains what a
              product is and why it's worth purchasing.The purpose of a product
              description is to supply customers with important information
              about the features and benefits of the product so they're
              compelled A product description is the marketing copy that
              explains what a product is and why it's worth purchasing.The
              purpose of a product description is to supply customers with
              important information about the features and benefits of the
              product so they're compelled
            </Text>
            <Text
              onPress={() => console.log('asdasssssss')}
              style={[
                styles.rating,
                {
                  fontSize: 14,
                  marginLeft: 0,
                  textDecorationLine: 'underline',
                  opacity: 0.45,
                  fontWeight: 'bold',
                },
              ]}>
              {textShown ? 'See Less' : 'See More'}
            </Text>
          </View>
          <View style={styles.footer}>
            <Button
              name="video"
              title="ADD VIDEO REVIEW"
              width={'39%'}
              bgColor={'#000000'}
            />
            <Button width={'58%'} />
          </View>
        </View>
      </ScrollableModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 20,
    height: '85%',
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1: {
    fontSize: 12,
    color: 'rgb(109,107,107)',
    fontWeight: '600',
  },
  labelView: {
    backgroundColor: 'rgb(242,0,101)',
    borderRadius: 4,
    height: 16,
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  text2: {
    fontSize: 10,
    color: '#ffffff',
    fontWeight: '800',
  },
  itemName: {
    fontSize: 15,
    color: '#000000',
    fontWeight: '600',
    width: '52%',
  },
  regularPrice: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '700',
    marginRight: 10,
    textDecorationLine: 'line-through',
  },
  discountedPrice: {
    fontSize: 16,
    color: 'rgb(242,0,101)',
    fontWeight: '700',
    marginRight: 10,
  },
  divider: {
    borderTopWidth: 0.8,
    opacity: 0.4,
    marginVertical: 20,
  },
  personDescription: {
    fontSize: 15,
    color: '#000000',
  },
  rating: {
    fontSize: 13,
    color: '#000',
    fontWeight: '600',
    marginLeft: 6,
  },
  review: {
    fontSize: 12,
    marginTop: 5,
    letterSpacing: -0.1,
    fontWeight: '400',
    color: '#000000',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
    opacity: 0.5,
    width: '60%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '9%',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
  },
});

export default ProductModal;
