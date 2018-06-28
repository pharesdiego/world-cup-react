import React, { Component } from 'react';
import compose from './utils/compose';
import Layout from './components/Layout';
import Cards from './components/Cards';
import withAPI from './hoc/withAPI';


const CardsContainer = compose(
  withAPI,
)(Cards);

class App extends Component {
  render() {
    return (
      <Layout>
        <CardsContainer />
      </Layout>
    );
  }
}

export default App;
