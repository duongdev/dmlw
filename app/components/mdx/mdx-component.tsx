import type { FC} from 'react';
import { memo , useMemo } from 'react'

import { getMDXComponent } from 'mdx-bundler/client'

import type { MDXOutput } from '~/utils/mdx'

import mdxComponents from './components'

export type MDXComponentProps = {
  mdx: MDXOutput
}

const MDXComponent: FC<MDXComponentProps> = ({ mdx }) => {
  const Component = useMemo(() => getMDXComponent(mdx.code), [mdx.code])

  return <Component components={mdxComponents} />
}

export default memo(MDXComponent)
