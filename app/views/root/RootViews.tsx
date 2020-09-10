import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTab} from '../video/MainTab';
import {FollowersTab} from '../followers/FollowersTab';
import {NewPostTab} from '../newPost/NewPostTab';
import {ProfileTab} from '../profile/ProfileTab';
import {FollowingTab} from '../following/FollowingTab';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors, IconButton} from 'react-native-paper';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

export const RootViews = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#000000',
            elevation: 0,
            shadowOpacity: 0,
            borderTopWidth: 0,
          },
          labelStyle: {fontSize: 16, bottom: 12},
          activeTintColor: Colors.white,
        }}>
        <Tab.Screen name="Main" component={MainTab} />
        <Tab.Screen name="Followers" component={FollowersTab} />
        <Tab.Screen
          name="+"
          component={NewPostTab}
          options={{
            tabBarButton: () => (
              <IconButton
                icon={(props) => (
                  <Icon
                    name="plus-square"
                    solid
                    size={props.size}
                    color={Colors.white}
                  />
                )}
                size={32}
                onPress={() => console.log('Pressed here')}
              />
            ),
          }}
        />
        <Tab.Screen name="Following" component={FollowingTab} />
        <Tab.Screen name="Profile" component={ProfileTab} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};
