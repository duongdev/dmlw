import type { FC } from 'react'
import { useCallback } from 'react'

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
    <Stack>
      {contents.map((content) => (
        <Box key={content.id}>{renderContent(content)}</Box>
      ))}
    </Stack>
  )
}

export default UnitContents
