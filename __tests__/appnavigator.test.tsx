import React from 'react';
import {render} from '@testing-library/react-native';

import App from '../App';

jest.mock('react-native-video', () => 'Video');

describe('Testing react navigation', () => {
  test('page contains the 2 comments with 5 items', async () => {
    const component = <App />;

    const {findAllByText} = render(component);

    const items = await findAllByText(/5/);
    expect(items).toBeTruthy();
    expect(items.length).toBe(2);
  });

  test('page contains the TabBar', async () => {
    const component = <App />;

    const {findByText} = render(component);

    const itemMain = await findByText(/Main/);
    expect(itemMain).toBeTruthy();

    const itemFollowers = await findByText(/Followers/);
    expect(itemFollowers).toBeTruthy();

    const itemFollowing = await findByText(/Following/);
    expect(itemFollowing).toBeTruthy();

    const itemProfile = await findByText(/Profile/);
    expect(itemProfile).toBeTruthy();
  });
});
