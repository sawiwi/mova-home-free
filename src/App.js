import { Fragment } from 'react';
import Layout from './Layout/Layout';
import Hero from './Pages/Hero/index'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Fragment>
      <Layout>
        <Hero/>
      </Layout>
    </Fragment>

  );
}

export default App;
