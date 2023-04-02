import type { ColorScheme } from '@mantine/core'
import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { StylesPlaceholder } from '@mantine/remix'
import type { LinksFunction, V2_MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import { createHead } from 'remix-island'

import { theme } from './theme'
import { emotionCache } from './utils/emotion-cache'

export const Head = createHead(() => (
  <>
    <meta charSet="utf-8" />
    <meta
      content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, width=device-width, height=device-height, target-densitydpi=device-dpi"
      name="viewport"
    />

    <Meta />
    <Links />
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
    <link
      href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;1,200;1,300;1,400;1,500;1,600&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,400;0,500;0,600;0,700;1,200;1,400;1,500;1,600;1,700&display=swap"
      rel="stylesheet"
    />
  </>
))

export const meta: V2_MetaFunction = () => [
  {
    name: 'viewport',
    content: 'width=device-width,initial-scale=1',
  },
]

export const links: LinksFunction = () => {
  return [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
}

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'color-scheme',
    defaultValue: 'light',
  })
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={emotionCache}
        theme={{ ...theme, colorScheme }}
      >
        <StylesPlaceholder />
        <Head />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
