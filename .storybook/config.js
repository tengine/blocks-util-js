import { configure } from '@storybook/react';

import '../lib/index.css';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../stories", true, /.stories.js$/));
}

configure(loadStories, module);
