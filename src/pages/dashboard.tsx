import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Link from 'next/link';

import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';
// import { getAPIClient } from '../services/axios';

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

      <Link
        href={{
          pathname: `/product/${446}`,
        }}
      >
        <a>Product</a>
      </Link>

      <h1>
        {id}
      </h1>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const apiClient = getAPIClient(ctx);
  const { 'nextauth.token': token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  // await apiClient.get('/users');

  return {
    props: {},
  };
};

export default Dashboard;
