import React from 'react';

const Text = () => (
  <div className="text">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </div>
);

export default {
  'Auto': Text,
  '300px': () => <div style={{width: '300px'}}><Text /></div>,
  '50%': () => <div style={{width: '50%'}}><Text /></div>
};
