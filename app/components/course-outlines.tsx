import type { FC } from 'react'

import { Stack, Title } from '@mantine/core'

import type { CourseSection, CourseUnit } from '~/data/data.server'

import SectionTimeline from './section-timeline'

export type CourseOutlinesProps = {
  sections: CourseSection[]
  // eslint-disable-next-line no-unused-vars
  buildPath: (props: { sectionId: string; unitId: string }) => string
  // eslint-disable-next-line no-unused-vars
  isUnitActive?: (unitId: CourseUnit) => boolean
}

const CourseOutlines: FC<CourseOutlinesProps> = ({
  sections,
  buildPath,
  isUnitActive,
}) => {
  return (
    <Stack spacing="xl">
      {sections.map((section) => (
        <Stack key={section.id} spacing="sm">
          <Title order={3}>{section.title}</Title>

          <SectionTimeline
            isUnitActive={isUnitActive}
            units={section.units}
            buildPath={({ unitId }) =>
              buildPath({ sectionId: section.id, unitId })
            }
          />
        </Stack>
      ))}
    </Stack>
  )
}

export default CourseOutlines
