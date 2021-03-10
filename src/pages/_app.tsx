import React from 'react';
import { Provider } from 'next-auth/client';
import { AppInitialProps } from 'next/dist/next-server/lib/utils';
import GlobalStyle from '@/styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '@/utils/usePersistedState';
import light from '@/styles/themes/light';
import dark from '@/styles/themes/dark';

function MyApp({
  Component,
  ...pageProps
}: AppInitialProps & {
  Component: any;
  session: any;
  toggleTheme: void;
}): JSX.Element {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = (): void =>
    setTheme(theme.title === 'light' ? dark : light);
  const sessionApp = pageProps.session;

  return (
    <Provider
      session={sessionApp}
      options={{
        clientMaxAge: 60 * 60,
        keepAlive: 120 * 60,
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {<Component {...pageProps} toggleTheme={toggleTheme} />}
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
