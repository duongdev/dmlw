import { useCallback, useMemo } from 'react'

import { Button, Container, Group } from '@mantine/core'
import type { LoaderArgs, V2_MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { IconAwardFilled, IconDisabled2 } from '@tabler/icons-react'

import { getCourse } from '~/api/course.server'
import CourseHeader from '~/components/course-header'
import CourseOutlines from '~/components/course-outlines'
import { superjson, useSuperLoaderData } from '~/utils/data'

export const meta: V2_MetaFunction = ({ data }) => {
  return [{ title: data?.course?.title ?? 'DMLW by Dustin' }]
}

export async function loader({ params }: LoaderArgs) {
  const { courseId } = params
  const course = await getCourse(courseId!)
  return superjson({ course })
}

export default function Index() {
  const { course } = useSuperLoaderData<typeof loader>()

  const buildUnitPath = useCallback(
    ({ sectionId, unitId }: { sectionId: string; unitId: string }) =>
      `/courses/${course?.id}/learn/${sectionId}/${unitId}`,
    [course?.id],
  )

  const action = useMemo(() => {
    const firstSection = course?.sections[0]
    const firstUnit = firstSection?.units[0]

    if (!(firstSection && firstUnit)) return null

    return (
      <Group>
        <Button
          component={Link}
          leftIcon={<IconDisabled2 />}
          to={`./learn/${firstSection.id}/${firstUnit.id}`}
        >
          Learn now
        </Button>
        <Button color="yellow" leftIcon={<IconAwardFilled />} variant="outline">
          Claim your certificate
        </Button>
      </Group>
    )
  }, [course?.sections])

  if (!course) return 'Course not found. Please try again later.'

  return (
    <>
      <CourseHeader
        action={action}
        bannerImage={course.banner}
        description={course.description}
        title={course.title}
      />
      <Container py="4rem">
        <CourseOutlines buildPath={buildUnitPath} sections={course.sections} />
      </Container>
    </>
  )
}
