import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Container } from '../styles/pages/Home';

const Dashboard: React.FC = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  return (
    <Container>
      <Head>
        <title>Dashboard</title>
      </Head>

      <h1>
        {id}
      </h1>
    </Container>
  );
};

export default Dashboard;
