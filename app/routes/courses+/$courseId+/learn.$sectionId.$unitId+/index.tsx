import type { FC } from 'react'

import { Box } from '@mantine/core'
import { useParams } from '@remix-run/react'

import CourseOutlines from '~/components/course-outlines'
import { course as courseData } from '~/data/data.server'
import { superjson, useSuperLoaderData } from '~/utils/data'

export async function loader() {
  const sections = courseData.sections

  return superjson({ sections, course: courseData })
}

export type ContentProps = {}

const Content: FC<ContentProps> = () => {
  const { unitId } = useParams()
  const { sections } = useSuperLoaderData<typeof loader>()

  return (
    <Box pl="sm" pr="lg" py="xl">
      <CourseOutlines
        buildPath={({ unitId }) => `./../${unitId}`}
        isUnitActive={(unit) => unit.id === unitId}
        sections={sections}
      />
    </Box>
  )
}

export default Content
