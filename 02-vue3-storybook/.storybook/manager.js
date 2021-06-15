// .storybook/manager.js

import { addons } from '@storybook/addons';
import { create, themes } from '@storybook/theming';

addons.setConfig({
  theme: themes.light
});

export default create({
    base: 'light',
    brandTitle: 'WeboxApps storybook',
    brandUrl: 'https://weboxapps.com/',
    brandImage: 'https://place-hold.it/350x150',
  });