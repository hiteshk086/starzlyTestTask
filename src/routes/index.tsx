import React from 'react';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyTabBar} from '../components/common/MyTabBar';
import Discover from '../screens/Discover';
import Stars from '../screens/Stars';
import Cart from '../screens/Cart';
const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: 'compass',
        }}
      />
      <Tab.Screen
        name="Stars"
        component={Stars}
        options={{
          tabBarIcon: 'search',
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: 'plus-square',
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: 'shopping-cart',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: 'user',
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
