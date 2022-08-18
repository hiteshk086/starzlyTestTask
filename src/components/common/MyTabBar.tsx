import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
export const MyTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={[styles.container]}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.itemContainer]}>
            <Icon
              name={options.tabBarIcon}
              size={25}
              color={isFocused ? '#f61c6c' : 'white'}
            />
            <Text
              style={{
                color: isFocused ? '#f61c6c' : '#ffffff',
                fontSize: 12,
                paddingTop: 5,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    // bottom: 20,
    backgroundColor: 'black',
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
