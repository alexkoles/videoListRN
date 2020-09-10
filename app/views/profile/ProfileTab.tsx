import * as React from 'react';
import {Text, View} from 'react-native';
import {Colors} from 'react-native-paper';

interface ProfileTabProps {}

export const ProfileTab: React.FC<ProfileTabProps> = (props) => {
  return (
    <View style={{ backgroundColor: Colors.grey900, flex: 1, alignContent: 'center', alignItems: 'center' }}>
      <Text
        style={{
          color: '#ffffff',
          textAlignVertical: 'center',
          alignContent: 'center',
          flex: 1
        }}>
        "Profle" screen (coming soon...)
      </Text>
    </View>
  );
};
