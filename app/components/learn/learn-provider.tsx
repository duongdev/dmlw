import type { FC } from 'react'

import { ActionIcon, Box, Container, Group, Title } from '@mantine/core'
import { Link, Outlet } from '@remix-run/react'
import { IconX } from '@tabler/icons-react'

import LearnVideo from './learn-video'
import SidebarTabs from './sidebar-tabs'

export type LearnProviderProps = {}

const LearnProvider: FC<LearnProviderProps> = () => {
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
              <Title order={4}>The history</Title>
            </Group>
          </Container>
        </Box>
        <LearnVideo source="https://stream.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/high.mp4" />
      </Box>
      <Box
        sx={{
          width: '50%',
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

export default LearnProvider
