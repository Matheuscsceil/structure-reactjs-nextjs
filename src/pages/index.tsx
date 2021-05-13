import React from 'react';
import Head from 'next/head';

// import Logo from '../assets/logo.svg'
import error from '../assets/error.png';

import { Container } from '../styles/pages/Home';

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>Homepage</title>
    </Head>

    {/* <Logo /> */}
    <img src={error} alt="" />
    <h1>
      Hello World!
    </h1>
  </Container>
);

export default Home;
