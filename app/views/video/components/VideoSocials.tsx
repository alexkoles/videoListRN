import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {iVideoStream, iPointStamp, iPoint} from 'app/utils/dataType';
import {Video} from './Video';
import {Comment} from './Comment';
import {HeartAnimationFullView} from './heartAnimation';
import {Colors} from 'react-native-paper';

interface VideoSocialsProps {
  data: iVideoStream;
  paused: boolean;
  onPausedChanged: (paused: boolean) => void;
}

export const VideoSocials: React.FC<VideoSocialsProps> = (props) => {
  const [points, setPoints] = React.useState<iPointStamp[]>([]);
  const {data, paused, onPausedChanged} = props;
  // console.log('HERE_DATA:' + JSON.stringify(data));

  const onVideoDoubleTap = React.useCallback((point: iPoint) => {
    setPoints((pre) =>
      pre.concat(Object.assign({timestamp: Date.now()}, point)),
    );
  }, []);

  return (
    <View style={styles.container}>
      <Video
        uri={data.uri}
        preview={data.preview}
        paused={paused}
        onPausedChanged={onPausedChanged}
        onDoubleTap={onVideoDoubleTap}
      />
      <Comment videoId={data.id} comment={data.comment} style={styles.social} />
      <HeartAnimationFullView style={styles.heart} points={points} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.yellow900,
  },
  social: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
  heart: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
