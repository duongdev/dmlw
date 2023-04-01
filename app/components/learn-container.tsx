import type { FC } from 'react'

import { ActionIcon, Box, Container, Group, ScrollArea, Title } from '@mantine/core'
import { Link, Outlet, useParams } from '@remix-run/react'
import { IconX } from '@tabler/icons-react'

import type { Course } from '~/data/data.server'

import SidebarTabs from './sidebar-tabs'
import UnitContents from './unit-contents'

export type LearnContainerProps = {
  course: Course
}

const LearnContainer: FC<LearnContainerProps> = ({ course }) => {
  const { sectionId, unitId } = useParams()
  const section =
    course.sections.find((section) => section.id === sectionId) ?? null
  const unit = section?.units.find((unit) => unit.id === unitId) ?? null

  return (
    <Box sx={{ height: '100vh', display: 'flex', overflow: 'hidden' }}>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Box sx={{ borderBottom: `solid 1px #dee2e6` }}>
          <Container fluid>
            <Group h={48}>
              <ActionIcon component={Link} to="/">
                <IconX />
              </ActionIcon>
              <Title order={4}>
                {unit?.title ?? section?.title ?? '(Unnamed)'}
              </Title>
            </Group>
          </Container>
        </Box>
        <ScrollArea h="100%">
          <UnitContents contents={unit?.contents ?? []} />
        </ScrollArea>
      </Box>
      <Box
        sx={{
          width: '50%',
          maxWidth: 720,
          minWidth: 480,
          borderLeft: `solid 1px #dee2e6`,
        }}
      >
        <SidebarTabs>
          <Outlet />
        </SidebarTabs>
      </Box>
    </Box>
  )
}

export default LearnContainer
