import {ActivityIndicator, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import _ from 'lodash';
import axios from 'axios';
import VideoFeed from '../../components/common/VideoFeed';
import ProductModal from '../../components/common/ProductModal';
const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [feedData, setData] = useState<any>([]);
  const [pagenumber, setPageNumber] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const mediaRef = useRef<any>([]);
  const onScrollEnd = (e: any) => {
    const contentOffset = e.nativeEvent.contentOffset;
    const viewSize = e.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.y / viewSize.height);
    setCurrentIndex(pageNum);
  };
  const getData = async (isCleanFetch: boolean) => {
    let res = await axios.get(
      `https://stg.starzly.io/api/featured-videos?page=${
        isCleanFetch ? 0 : pagenumber
      }&per_page=4&app=1&new=1`,
    );
    if (res?.data) {
      let updatedData = isCleanFetch
        ? res?.data.data
        : feedData.concat(res.data?.data);
      if (res?.data.data.length < 4) {
        setHasNextPage(false);
      } else {
        setHasNextPage(true);
        setPageNumber(isCleanFetch ? 1 : pagenumber + 1);
      }
      setData(updatedData);
    }
  };
  useEffect(() => {
    getData(true);
  }, []);
  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
        data={feedData}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        renderItem={({item, index}: any) => (
          <VideoFeed
            key={item.id}
            item={item}
            videoThumbnail={item.thumbnail}
            // ref={(el: any) => (mediaRef.current[index] = el)}
            videoLikes={item?.talent?.featured}
            isPaused={currentIndex !== index}
            videoUrl={item?.url}
            videoTitle={item?.occasion?.title_en}
            userImage={item?.talent?.avatar_url}
          />
        )}
        onEndReached={() => {
          if (hasNextPage) {
            getData(false);
          }
        }}
        ListFooterComponent={
          <React.Fragment>
            {hasNextPage ? (
              <View style={{height: 80}}>
                <ActivityIndicator />
              </View>
            ) : null}
          </React.Fragment>
        }
        pagingEnabled
      />
    </View>
  );
};

export default HomeScreen;
