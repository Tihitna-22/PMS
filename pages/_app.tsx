// import { OrganizationSelector, ProtectedRoute } from '@jiret/auth';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
// import { Shell } from '@shell';
import SideMenu from '../libs/components/side-menu'
// import { PageLoadingIndicator } from '@ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import menus from './menu'
import favicon from '../public/favicon.ico';
import { Menu } from 'material-ui';
import { Shell } from '../libs';
import { RouterTransition } from '../component/transition';
import { useState } from 'react';
// import { store } from '../store/app.store';
// import '../styles/tailwind/main.css';

function myApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <>
      {/* <Head>
        <title>Welcome to forum</title>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="welcome " />
      </Head> */}
      {/* <Provider store={store}> */}
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>

        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS
          // theme={{
          //   colors: {
          //     sky: [
          //       '#f0f9ff',
          //       '#e0f2fe',
          //       '#bae6fd',
          //       '#7dd3fc',
          //       '#38bdf8',
          //       '#0ea5e9',
          //       '#0284c7',
          //       '#0369a1',
          //       '#075985',
          //       '#0c4a6e',
          //     ],
          //   },
          //   primaryColor: 'cyan',
            
          // }}
        >
          <main className="app">
            {/* <ProtectedRoute> */}
              {/* <OrganizationSelector> */}
              <RouterTransition />
                <Shell menus={menus}>
                
                {/* <SideMenu menus={menus} setMenu={undefined} /> */}
                  {/* <PageLoadingIndicator /> */}
                  <Component {...pageProps} />
                </Shell>
              
              {/* </OrganizationSelector> */}
            {/* </ProtectedRoute> */}
          </main>
        </MantineProvider></ColorSchemeProvider>
      {/* </Provider> */}
    </>
  );
}

export default myApp;
