import type { FC } from 'react'

import { Stack, Title } from '@mantine/core'

import type { CourseSection } from '~/data-base'

import SectionTimeline from './section-timeline'

export type CourseOutlinesProps = {
  sections: CourseSection[]
}

const CourseOutlines: FC<CourseOutlinesProps> = ({ sections }) => {
  return (
    <Stack spacing="xl">
      {sections.map((section) => (
        <Stack key={section.id} spacing="sm">
          <Title order={3}>{section.title}</Title>

          <SectionTimeline items={section.units} />
        </Stack>
      ))}
    </Stack>
  )
}

export default CourseOutlines
