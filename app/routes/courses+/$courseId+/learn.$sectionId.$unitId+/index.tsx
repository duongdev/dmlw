import type { FC } from 'react'

import { Box } from '@mantine/core'
import type { LoaderArgs } from '@remix-run/node'
import { useParams } from '@remix-run/react'

import { getCourseSections } from '~/api/course.server'
import CourseOutlines from '~/components/course-outlines'
import { superjson, useSuperLoaderData } from '~/utils/data'

export async function loader({ params }: LoaderArgs) {
  const { courseId } = params

  const sections = await getCourseSections(courseId!)

  return superjson({ sections })
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
