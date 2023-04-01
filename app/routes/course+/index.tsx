import { Container, Space, Stack, Text, Title } from '@mantine/core'
import type { V2_MetaFunction } from '@remix-run/node'

import CourseSection from '~/components/course-section'
import SectionTimeline from '~/components/section-timeline'
import { COURSE_SECTION_ITEMS } from '~/data-base'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'New Remix App' }]
}

export default function Index() {
  return (
    <Container py="4rem">
      <Title order={1}>The next course we&apos;re gonna build</Title>
      <Text color="dimmed">
        LearnWorlds did very well and it&apos;s the time for it to retire.
        <br />
        Thanks for your service and we will miss you a lot.
      </Text>

      <Space h="xl" />

      <Stack spacing="xl">
        <CourseSection>Section 1: The big picture</CourseSection>

        <SectionTimeline items={COURSE_SECTION_ITEMS} />
      </Stack>
    </Container>
  )
}
