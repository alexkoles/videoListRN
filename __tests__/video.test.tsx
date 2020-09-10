import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Video} from 'app/views/video/components/Video';

jest.mock('react-native-video', () => 'Video');

describe('Video Component', () => {
  const url =
    'https://res.cloudinary.com/dl66ay16a/video/upload/v1599461415/videos/dogs_a24lmq.mp4';
  const preview =
    'https://res.cloudinary.com/dl66ay16a/image/upload/v1599229049/videos/dogs_qpukey.png';
  it('renders video correctly', () => {
    const component = renderer
      .create(<Video uri={url} preview={preview} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
