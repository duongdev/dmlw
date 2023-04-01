import type { FC } from 'react'

import { Box } from '@mantine/core'

import CourseOutlines from '~/components/course-outlines'
import { course } from '~/data-base'
import { superjson, useSuperLoaderData } from '~/utils/data'

export async function loader() {
  const sections = course.sections

  return superjson({ sections })
}

export type ContentProps = {}

const Content: FC<ContentProps> = () => {
  const { sections } = useSuperLoaderData<typeof loader>()

  return (
    <Box pl="sm" pr="lg" py="xl">
      <CourseOutlines sections={sections} />
    </Box>
  )
}

export default Content
