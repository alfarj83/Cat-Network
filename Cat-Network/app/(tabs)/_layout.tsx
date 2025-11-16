import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Image } from 'react-native';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,

        // Add these lines to change the height
      tabBarStyle: {
        height: 90, // Set your desired height here
        // You might also need to adjust padding
        paddingBottom: 10,
        paddingTop: 10,
      },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => <Image
          source={require('../../assets/images/map_icon.png')} // 3. Use 'require()' for the source
          style={{
            width: '150%',  // 4. You must set width and height for local images
            height: '150%',
          }}
        />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Shuffle',
          tabBarIcon: ({ color }) => <Image
          source={require('../../assets/images/shuffle_icon.png')} // 3. Use 'require()' for the source
          style={{
            width: '150%',  // 4. You must set width and height for local images
            height: '150%',
          }}
        />,
        }}
      />
      <Tabs.Screen
      name="talk"
      options={{
        title: 'Talk',
        tabBarIcon: ({ color }) => <Image
          source={require('../../assets/images/talk_icon.png')} // 3. Use 'require()' for the source
          style={{
            width: '150%',  // 4. You must set width and height for local images
            height: '150%',
          }}
        />,
      }}
    />
    <Tabs.Screen
    name="profile"
    options={{
        title: 'Profile',
        tabBarIcon: ({ color }) => <Image
          source={require('../../assets/images/profile_icon.png')} // 3. Use 'require()' for the source
          style={{
            width: '150%',  // 4. You must set width and height for local images
            height: '150%',
          }}
        />,
      }}
    />
    </Tabs>
  );
}
