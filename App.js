import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header';
import React, { Fragment } from 'react';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header></Header>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
