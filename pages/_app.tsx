
import {
  createDOMRenderer,
  FluentProvider,
  GriffelRenderer,
  SSRProvider,
  RendererProvider,
  webLightTheme,
} from '@fluentui/react-components';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { SessionProvider } from "next-auth/react"
import { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react'
import Layout from '../components/Layout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type EnhancedAppProps = AppProps & { renderer?: GriffelRenderer };

type AppPropsWithLayout = EnhancedAppProps & {
  Component: NextPageWithLayout
}

export default function App(
  { Component, pageProps: { session, ...pageProps }, renderer }: AppPropsWithLayout
) {

  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <SessionProvider session={session}>
      <RendererProvider renderer={renderer || createDOMRenderer()}>
        {/* @ts-ignore */}
        <SSRProvider >
          <FluentProvider theme={webLightTheme}>
            <Layout>
              {getLayout(
                <Component {...pageProps} />
              )}
            </Layout>
          </FluentProvider>
        </SSRProvider>
      </RendererProvider>
    </SessionProvider >
  )
}
