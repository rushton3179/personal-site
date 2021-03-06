import { AppProps } from 'next/dist/next-server/lib/router/router';
import React, { FC } from 'react';
import '../styles/site.scss';

// This default export is required in a new `pages/_app.js` file.
const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
