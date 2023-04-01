import type { FC} from 'react';
import { useMemo , Suspense } from 'react'

import type { CourseUnitContent } from '~/data/data.server'
import mdx from '~/utils/mdx'

export type MDXContentProps = {
  content: CourseUnitContent
}

const MDXContent: FC<MDXContentProps> = ({ content }) => {
  const Content = useMemo(
    () => (mdx as any)[content.mdx ?? ''] ?? null,
    [content.mdx],
  )

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Content />
    </Suspense>
  )
}

export default MDXContent
