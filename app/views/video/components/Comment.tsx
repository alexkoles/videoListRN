import * as React from 'react';
import {StyleSheet, View, StyleProp, ViewProps} from 'react-native';
import {Colors, IconButton, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

interface CommentProps {
  videoId: number;
  comment: number;
  style?: StyleProp<ViewProps>;
}

export const Comment: React.FC<CommentProps> = (props) => {
  const navigation = useNavigation();
  const {videoId, comment, style} = props;

  return (
    <View style={[styles.container, style]}>
      <IconButton
        icon="chat"
        color={'#ffffff'}
        size={40}
        animated={true}
        onPress={() => {
          navigation.navigate('Comment', {videoId});
        }}
      />
      <Text style={styles.comment}>{comment}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  comment: {
    color: '#ffffff',
    position: 'relative',
    bottom: 24,
  },
});
