
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

type EnhancedAppProps = AppProps & { renderer?: GriffelRenderer };

export default function App(
  { Component, pageProps: { session, ...pageProps }, renderer }: EnhancedAppProps
) {
  return (
    <SessionProvider session={session}>
      <RendererProvider renderer={renderer || createDOMRenderer()}>
        <SSRProvider>
          <FluentProvider theme={webLightTheme}>
            <Component {...pageProps} />
          </FluentProvider>
        </SSRProvider>
      </RendererProvider>
    </SessionProvider >
  )
}
