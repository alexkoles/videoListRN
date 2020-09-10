import * as React from 'react';
import RNVideo from 'react-native-video';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native-paper';
import {
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';

interface VideoProps {
  uri: string;
  preview: string;
  onDoubleTap?: (point: { x: number; y: number }) => void;
  paused?: boolean;
  onPausedChanged?: (paused: boolean) => void;
}

export const Video = React.memo((props: VideoProps) => {
  const {
    uri = 'https://res.cloudinary.com/dl66ay16a/video/upload/v1599461416/videos/fox_qgjt9u.mp4',
    preview = 'https://res.cloudinary.com/dl66ay16a/image/upload/v1599230016/videos/Fox_je7rdx.png',
    onDoubleTap,
    onPausedChanged,
  } = props;
  const [paused, setPaused] = React.useState(props.paused);

  React.useEffect(() => {
    setPaused(props.paused);
  }, [props.paused]);
  const doubleTap = React.useRef(React.createRef<TapGestureHandler>().current);

  const onSingleTapped = (event: TapGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      const nextState = !paused;
      setPaused(nextState);
      onPausedChanged && onPausedChanged(nextState);
    }
  };

  const onDoubleTapped = (event: TapGestureHandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      onDoubleTap &&
        onDoubleTap({x: event.nativeEvent.x, y: event.nativeEvent.y});
    }
  };

  return (
    <TapGestureHandler
      waitFor={doubleTap}
      onHandlerStateChange={onSingleTapped}>
      <TapGestureHandler
        ref={doubleTap}
        onHandlerStateChange={onDoubleTapped}
        numberOfTaps={2}>
        <View style={styles.backgroundVideo}>
          <RNVideo
            repeat
            paused={paused}
            source={{uri}}
            poster={preview}
            posterResizeMode="cover"
            style={styles.video}
            resizeMode="cover"
          />
        </View>
      </TapGestureHandler>
    </TapGestureHandler>
  );
});

const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    backgroundColor: '#000000',
  },
  video: {
    flex: 1,
  },
});
