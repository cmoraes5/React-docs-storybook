import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from 'msw-storybook-addon';
import '../src/global.css';

// Initialize MSW
initialize();

const preview = {
  parameters: {},
  loaders: [mswLoader],
}

export const paramaters = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  }
};

export default preview