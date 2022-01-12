import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <NextNProgress
        height={3}
        options={{ showSpinner: false }}
        color="#c9e265"
      />
      <Component {...pageProps} />
      <Toaster />
    </SessionProvider>
  );
}

export default MyApp;
