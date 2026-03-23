import React from 'react';

export const decorators = [
  (Story) => (
    <div style={{ padding: '1rem' }}>
      <Story />
    </div>
  ),
];

export const parameters = {
  backgrounds: {
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#1e1e1e' },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
};
