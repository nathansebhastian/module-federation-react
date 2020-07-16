import React from 'react';

const Header = React.lazy(() => import('app1/Header'));

export default () => (
  <div style={{margin: '20px'}}>
    <React.Suspense fallback='Loading header'>
      <Header>Hello this is App 2</Header>
    </React.Suspense>
  </div>
);
