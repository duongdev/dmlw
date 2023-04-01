import { Container, Space, Text, Title } from '@mantine/core'
import type { V2_MetaFunction } from '@remix-run/node'

import CourseHeader from '~/components/course-header'
import CourseOutlines from '~/components/course-outlines'
import { course as courseData } from '~/data-base'
import { superjson, useSuperLoaderData } from '~/utils/data'

export const meta: V2_MetaFunction = ({ data }) => {
  return [{ title: data?.course?.title ?? 'DMLW by Dustin' }]
}

export async function loader() {
  return superjson({ course: courseData })
}

export default function Index() {
  const { course } = useSuperLoaderData<typeof loader>()

  return (
    <>
      <CourseHeader
        bannerImage={course.banner}
        description={course.description}
        title={course.title}
      />
      <Container py="4rem">
        <Title order={1}>The next course we&apos;re gonna build</Title>
        <Text color="dimmed">
          LearnWorlds did very well and it&apos;s the time for it to retire.
          <br />
          Thanks for your service and we will miss you a lot.
        </Text>

        <Space h="xl" />

        <CourseOutlines sections={course.sections} />
      </Container>
    </>
  )
}
