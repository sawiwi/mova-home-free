import { Fragment } from 'react';
import Layout from './Layout/Layout';
import Hero from './Pages/Hero/index';
import About from './Pages/About/index';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Fragment>
      <Layout>
        <Hero/>
        <About/>
      </Layout>
    </Fragment>

  );
}

export default App;
