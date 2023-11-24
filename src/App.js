import { Fragment } from 'react';
import Layout from './Layout/Layout';
import Hero from './Pages/Hero/index'
import About from './Pages/About/index'
import Properties from './Pages/Properties';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Fragment>
      <Layout>
        <Hero/>
        <About/>
        <Properties/>
      </Layout>
    </Fragment>

  );
}

export default App;
