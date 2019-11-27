import { configure } from '@storybook/react';
import '../dist/main.css';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../stories", true, /.stories.js$/));
}

configure(loadStories, module);
