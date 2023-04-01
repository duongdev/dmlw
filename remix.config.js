/**
 * @type {import('@remix-run/dev').AppConfig}
 */

const path = require('path')

const { flatRoutes } = require('remix-flat-routes')

module.exports = {
  serverBuildTarget: process.env.VERCEL ? 'vercel' : undefined,
  server:
    process.env.NODE_ENV === 'development' || !process.env.VERCEL
      ? undefined
      : './server.vercel.js',
  ignoredRouteFiles: ['**/*'],
  future: {
    v2_routeConvention: true,
    v2_meta: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    unstable_dev: true,
  },
  routes: (defineRoutes) => {
    return flatRoutes('routes', defineRoutes, {
      appDir: path.resolve(__dirname, 'app'),
    })
  },
  serverDependenciesToBundle: [
    'react-markdown',
    // 'unified',
    // 'remark',
    // 'remark',
    // 'property',
    // 'unist',
    // 'hast',
    // 'space',
    // 'comma',
    // 'vfile',
    // 'remark-parse',
    // 'remark-rehype',
    // 'property-information',
    // 'unist-util-visit',
    // 'bail',
    // 'hast-util-whitespace',
    // 'space-separated-tokens',
    // 'comma-separated-tokens',
    // 'trough',
    // 'mdast-util-to-hast',
    // 'mdast-util-from-markdown',
    // 'vfile-message',
    // 'unist-util-visit-parents',
  ],
}
