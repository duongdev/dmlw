import type { FC, ReactNode} from 'react';
import { useEffect, useState , Suspense, useCallback } from 'react'

import { Box, Container, Stack } from '@mantine/core'

import type { CourseUnitContent } from '~/data/data.server'

import MDXContent from './mdx'
import VideoContent from './video'

export type UnitContentsProps = { contents: CourseUnitContent[] }

const UnitContents: FC<UnitContentsProps> = ({ contents }) => {
  const renderContent = useCallback((content: CourseUnitContent) => {
    switch (content.type) {
      case 'mdx':
        return <MDXContent content={content} />
      case 'video':
        return <VideoContent content={content} />
      default:
        return (
          <Container>
            Not supported: <b>{content.type}</b>
          </Container>
        )
    }
  }, [])

  return (
    <ClientOnly>
      <Stack>
        <Suspense fallback={<div>Loadinggg...</div>}>
          {contents.map((content) => (
            <Box key={content.id}>{renderContent(content)}</Box>
          ))}
        </Suspense>
      </Stack>
    </ClientOnly>
  )
}

function ClientOnly({ children }: { children: ReactNode }) {
  let [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return mounted ? <>{children}</> : null
}

export default UnitContents
