import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Thing } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    // ReactDOM.render(<Thing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

// import * as React from 'react';
// import { createRoot } from 'react-dom/client';

// describe('it', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     const root = createRoot(div);
//     // root.render(<Thing />);
//     root.unmount();
//   });
// });