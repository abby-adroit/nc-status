import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head';
import MainContext from '../src/contexts/mainContext';
import theme from '../src/theme';


axios.defaults.baseURL = process.env.api_server;

// axios.defaults.baseURL = "http://192.168.2.105:5555/api";
//axios.defaults.baseURL = "http://localhost:5555/api";

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const [isAPI, setIsAPI] = useState(false);
  const appTitle = process.env.app_title;
  
  const swrCon: any = { 
    fetcher: (url: string) => axios(url).then(r => r.data),
    dedupingInterval: 2000,
    refreshInterval: 1000
  };

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
    console.log(axios.defaults.baseURL)
  }, []);

  // useEffect(() => {
  //   console.log("isAPI changed "+isAPI);
  //   if(!isAPI){
  //     console.log("isAPI is false, fetching token");
  //     getToken()
  //   }
  // }, [isAPI])
  
  

  return (
    <Fragment>
      <Head>
        <title>{appTitle}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <MainContext.Provider value={{ isAPI, setIsAPI }}>
          <SWRConfig value={ swrCon }>
            <CssBaseline />
            <Component {...pageProps} />
          </SWRConfig>
        </MainContext.Provider>
      </ThemeProvider>
    </Fragment>
  )
}

