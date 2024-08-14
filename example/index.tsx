import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug',
  // img: './coffee-mug.png'
}

const App = () => {
  return (
    <>
      <ProductCard
          product={product}
          className="bg-dark"
          initialValues={{
            count: 4,
            maxCount: 10
          }}
        >
          {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
        </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
