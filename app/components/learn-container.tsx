import type { FC } from 'react'
import { useMemo } from 'react'

import { ActionIcon, Box, Container, Group, Text, Title } from '@mantine/core'
import { Link, Outlet, useParams } from '@remix-run/react'
import { IconX } from '@tabler/icons-react'

import type { Course } from '~/data/data.server'
import type { MDXOutput } from '~/utils/mdx'

import MdxComponent from './mdx/mdx-component'
import SidebarTabs from './sidebar-tabs'

export type LearnContainerProps = {
  course: Course
  mdx?: MDXOutput | null
}

const LearnContainer: FC<LearnContainerProps> = ({ course, mdx }) => {
  const { sectionId, unitId } = useParams()
  const section =
    course.sections.find((section) => section.id === sectionId) ?? null
  const unit = section?.units.find((unit) => unit.id === unitId) ?? null

  const content = useMemo(() => {
    if (!mdx) {
      return (
        <Container py="xl">
          <Text>Working in Progress</Text>
        </Container>
      )
    }
    return <MdxComponent mdx={mdx} />
  }, [mdx])

  const title = useMemo(() => {
    return (
      mdx?.frontmatter.title ?? unit?.title ?? section?.title ?? '(Unnamed)'
    )
  }, [mdx?.frontmatter.title, section?.title, unit?.title])

  return (
    <Box sx={{ height: '100vh', display: 'flex', overflow: 'hidden' }}>
      <Box
        sx={(theme) => ({
          flexGrow: 1,
          overflow: 'auto',
          backgroundColor: theme.colorScheme === 'dark' ? '#121212' : '#fff',
          paddingBottom: '4rem',
        })}
      >
        <Box
          sx={(theme) => ({
            borderBottom: `solid 1px ${
              theme.colorScheme === 'dark' ? '#373A40' : '#dee2e6'
            }`,
            backgroundColor: theme.colorScheme === 'dark' ? '#1e1e1e' : '#fff',
            position: 'sticky',
            top: 0,
            marginTop: 0,
            zIndex: 1,
            backdropFilter: 'saturate(180%) blur(5px)',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
          })}
        >
          <Container fluid>
            <Group h={48}>
              <ActionIcon component={Link} to="/">
                <IconX />
              </ActionIcon>
              <Title order={4}>{title}</Title>
            </Group>
          </Container>
        </Box>
        {content}
      </Box>
      <Box
        sx={(theme) => ({
          width: '30%',
          maxWidth: '50%',
          minWidth: 480,
          borderLeft: `solid 1px ${
            theme.colorScheme === 'dark' ? '#373A40' : '#dee2e6'
          }`,
          flexShrink: 0,
        })}
      >
        <SidebarTabs>
          <Outlet />
        </SidebarTabs>
      </Box>
    </Box>
  )
}

export default LearnContainer
