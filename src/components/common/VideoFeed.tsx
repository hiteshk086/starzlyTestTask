import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Entypo';
import CircularButton from '../core/CircularButton';
import ProductModal from './ProductModal';
import ProductCard from './ProductCard';
interface VideoFeedProps {
  ref?: any;
  videoUrl: string;
  isPaused: boolean;
  videoTitle: string;
  userImage?: string;
  videoLikes: number;
  videoThumbnail: string;
  item?: any;
}
const VideoFeed: React.FC<VideoFeedProps> = (props: VideoFeedProps) => {
  const {
    isPaused,
    videoUrl,
    ref,
    videoTitle,
    userImage,
    videoLikes,
    videoThumbnail,
  } = props;
  const [isMute, setVideoToMute] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(videoLikes);
  const [openModal, setOpenModal] = useState(false);
  return (
    <View>
      <View style={styles.videoTitleContainer}>
        <Text style={styles.videoTitle}>{videoTitle}</Text>
        <View style={styles.videoTitleIconContainer}>
          <Icon name="dots-three-horizontal" size={25} color={'#ffffff'} />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.singleButtonContainer}>
          <CircularButton
            iconName="heart-alt"
            iconColor={isLiked ? '#f61c6c' : '#ffffff'}
            onPress={() => {
              console.log(';asdasd');
              setIsLiked(!isLiked);
              if (isLiked) {
                setLikes(likes - 1);
              } else setLikes(likes + 1);
            }}
          />
          <Text style={styles.buttonText}>{likes}</Text>
        </View>
        <View style={styles.singleButtonContainer}>
          <CircularButton iconName="commenting" iconColor="#ffffff" />
          <Text style={styles.buttonText}>{videoLikes}</Text>
        </View>
        <View style={styles.singleButtonContainer}>
          <CircularButton iconName="heart-alt" isImage imageUrl={userImage} />
        </View>
        <View style={styles.singleButtonContainer}>
          <CircularButton
            iconName={isMute ? 'volume-off' : 'volume-down'}
            iconColor="#ffffff"
            onPress={() => setVideoToMute(!isMute)}
          />
        </View>
      </View>

      <View style={styles.productCardContainer}>
        <ProductCard onPress={() => setOpenModal(true)} />
      </View>

      <Video
        source={{
          uri: videoUrl,
        }}
        ref={ref}
        poster={videoThumbnail}
        onVideoLoad={() => console.log('Heasasasdre')}
        paused={isPaused}
        repeat={true}
        resizeMode={'stretch'}
        muted={isMute}
        style={{
          height: Dimensions.get('window').height - 80,
          width: '100%',
          zIndex: -1,
        }}
      />
      <ProductModal openModal={openModal} setOpenModal={setOpenModal} />
    </View>
  );
};

export default VideoFeed;

const styles = StyleSheet.create({
  videoTitleContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    top: 50,
  },
  videoTitleIconContainer: {
    position: 'absolute',
    right: 20,
  },
  videoTitle: {
    fontSize: 18,
    color: 'white',
  },
  buttonsContainer: {
    position: 'absolute',
    right: 20,
    bottom: '15%',
    alignItems: 'center',
  },
  singleButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  buttonText: {
    color: '#ffffff',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 15,
  },
  productCardContainer: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
});
