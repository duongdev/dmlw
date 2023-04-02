import path from 'path'

import type { Message } from 'esbuild'
import type matter from 'gray-matter'
import json from 'highlight.js/lib/languages/json'
import typescript from 'highlight.js/lib/languages/typescript'

import { readFile } from './fs.server'
import { bundleMDX } from './mdx.server'

export const CONTENTS_DIR = path.join(__dirname, '../contents')

export type MDXContent = {
  slug: string
  title: string
}

export type MDXContentAttribute = {
  title: string
}

export type MDXOutput = {
  code: string
  frontmatter: {
    [key: string]: any
  }
  errors: Message[]
  matter: Omit<matter.GrayMatterFile<string>, 'data'> & {
    data: {
      [key: string]: any
    }
  }
}

export async function getMDXContent(slug: string): Promise<MDXOutput | null> {
  let source = ''

  try {
    source = await readFile(path.join(CONTENTS_DIR, `${slug}.mdx`), 'utf8')
  } catch (e) {
    console.error(e)
    return null
  }

  const rehypeHighlight = await import('rehype-highlight').then(
    (mod) => mod.default,
  )
  const { default: remarkGfm } = await import('remark-gfm')
  const { default: rehypeAutolinkHeadings } = await import(
    'rehype-autolink-headings'
  )
  const { default: rehypeSlug } = await import('rehype-slug')

  const content = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm]

      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeAutolinkHeadings,
        rehypeSlug,
        [
          rehypeHighlight,
          {
            format: 'detect',
            ignoreMissing: true,
            languages: { typescript, json },
          },
        ],
      ]

      return options
    },
  }).catch((e) => {
    console.error(e)
    throw e
  })

  return content
}
