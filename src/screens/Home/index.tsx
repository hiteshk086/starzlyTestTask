import {View, Dimensions, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import Video from 'react-native-video';
import _ from 'lodash';
import axios from 'axios';
import VideoFeed from '../../components/common/VideoFeed';
import LinearGradient from 'react-native-linear-gradient';
const url = `https://stg.starzly.io/api/featured-videos?page=1&per_page=2&app=1&new=1`;
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [data, setData] = useState([]);
  const mediaRef = useRef<any>([]);
  const onScrollEnd = (e: any) => {
    const contentOffset = e.nativeEvent.contentOffset;
    const viewSize = e.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.y / viewSize.height);
    setCurrentIndex(pageNum);
  };
  useEffect(() => {
    axios.get(url).then(res => {
      console.log('Res : ', JSON.stringify(res.data.data));
      setData(res.data.data);
    });
  }, []);
  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        data={data}
        // keyExtractor={({item, index}: any) => `${index}`}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        renderItem={({item, index}: any) => (
          // <LinearGradient
          //   colors={['#000000', 'transparent']}
          //   start={{x: 1, y: 0}}
          //   end={{x: 1, y: 0.3}}>
          <VideoFeed
            key={index}
            // ref={(el: any) => (mediaRef.current[index] = el)}
            videoLikes={item.talent.featured}
            isPaused={currentIndex !== index}
            videoUrl={item.url}
            videoTitle={item.occasion.title_en}
            userImage={item.talent.avatar_url}
          />
          // </LinearGradient>
        )}
        pagingEnabled
      />
    </View>
  );
};

export default HomeScreen;
