import type { Preview } from '@storybook/react'

import breakpoints from '@theme/breakpoints.module.css'
import '@app/globals.css'

const customViewports = {
  xs: {
    name: 'XSmall',
    styles: {
      width: breakpoints.breakpointXS,
      height: '600px'
    }
  },
  s: {
    name: 'Small',
    styles: {
      width: breakpoints.breakpointSM,
      height: '801px'
    }
  },
  m: {
    name: 'Medium',
    styles: {
      width: breakpoints.breakpointMD,
      height: '700px'
    }
  },
  l: {
    name: 'Large',
    styles: {
      width: breakpoints.breakpointLG,
      height: '800px'
    }
  },
  xl: {
    name: 'XLarge',
    styles: {
      width: breakpoints.breakpointXL,
      height: '100%'
    }
  }
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Getting Started',
          'Common Components',
          'Layout Components',
          '*',
        ]
      }
    },
    viewport: {
      viewports: {
        ...customViewports
      }
    }
  }
}

export default preview
