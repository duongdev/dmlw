import type { FC } from 'react'

import { Box } from '@mantine/core'

import SectionTimeline from '~/components/section-timeline'
import { COURSE_SECTION_ITEMS } from '~/data-base'

export type ContentProps = {}

const Content: FC<ContentProps> = () => {
  return (
    <Box pl="sm" pr="lg" py="xl">
      <SectionTimeline items={COURSE_SECTION_ITEMS} />
    </Box>
  )
}

export default Content
