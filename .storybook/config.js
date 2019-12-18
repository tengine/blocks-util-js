import { configure } from '@storybook/react';

import '../lib/style/index.css';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../stories", true, /.stories.js$/));
}

configure(loadStories, module);
