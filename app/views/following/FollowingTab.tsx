import * as React from 'react';
import {Text, View} from 'react-native';
import {Colors} from 'react-native-paper';

interface FollowingTabProps {}

export const FollowingTab: React.FC<FollowingTabProps> = (props) => {
  return (
    <View style={{ backgroundColor: Colors.grey900, flex: 1, alignContent: 'center', alignItems: 'center' }}>
      <Text
        style={{
          color: '#ffffff',
          textAlignVertical: 'center',
          alignContent: 'center',
          flex: 1
        }}>
        "Following" screen (coming soon...)
      </Text>
    </View>
  );
};
