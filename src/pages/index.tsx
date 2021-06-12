import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { AuthContext } from '../contexts/AuthContext';

// import Logo from '../assets/logo.svg'
import error from '../assets/error.png';

import { Container } from '../styles/pages/Home';

type SignInData = {
  email: string;
  password: string;
}

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data: SignInData): Promise<void> {
    await signIn(data);
  }

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      {/* <Logo /> */}
      <img src={error} alt="" />
      <h1>
        Hello World!
      </h1>

      <form onSubmit={handleSubmit(handleSignIn)}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div>
          <div>
            <label htmlFor="email-address">
              Email address
            </label>
            <input
              {...register('email')}
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Email address"
            />
          </div>

          <div>
            <label htmlFor="password">
              Password
            </label>
            <input
              {...register('password')}
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button type="submit">
            Sign in
          </button>
        </div>
      </form>

      <Link
        href={{
          pathname: '/dashboard',
          query: { id: 'Dashboard' },
        }}
      >
        <a>Dashboard</a>
      </Link>
    </Container>
  );
};

export default Home;
