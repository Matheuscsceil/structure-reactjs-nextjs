import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { parseCookies } from 'nookies';
import { GetServerSideProps } from 'next';

import { Container } from '../../styles/pages/Home';

const Product: React.FC = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  return (
    <Container>
      <Head>
        <title>Product</title>
      </Head>

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

export default Product;
