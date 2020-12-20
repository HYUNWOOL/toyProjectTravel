import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/inputStory');
}

configure(loadStories, module);
