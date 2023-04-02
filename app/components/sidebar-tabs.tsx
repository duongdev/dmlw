import type { FC, ReactNode } from 'react'
import { useMemo } from 'react'

import { Box, Group, Tabs } from '@mantine/core'
import { useLocation, useMatches, useNavigate } from '@remix-run/react'

export type SidebarTabsProps = {
  children?: React.ReactNode
}

const dot = (
  <Box
    sx={{
      height: '0.375rem',
      width: '0.375rem',
      borderRadius: '50%',
      backgroundColor: 'red',
    }}
  />
)

const TABS: { value: string; label: ReactNode }[] = [
  { label: 'Content', value: '.' },
  { label: 'Discussion', value: 'discussion' },
  { label: 'Notebook', value: 'notebook' },
  {
    label: (
      <Group spacing="xs">
        Ask assistant
        {dot}
      </Group>
    ),
    value: 'assistant',
  },
]

const SidebarTabs: FC<SidebarTabsProps> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const matches = useMatches()

  const handleTabChange = (value: string) => {
    navigate(`./${value}`, { replace: true, preventScrollReset: true })
  }

  const value = useMemo(() => {
    const match = matches
      .reverse()
      .find((match) => match.pathname === location.pathname)
    if (!match) return TABS[0].value
    const [tab] = match.pathname.split('/').reverse()
    if (TABS.find((tabItem) => tabItem.value === tab)) {
      return tab
    }
    return TABS[0].value
  }, [location.pathname, matches])

  return (
    <>
      <Box
        sx={{
          height: 'calc(3rem + 1px)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-end',
          width: '100%',
        }}
      >
        <Tabs
          onTabChange={handleTabChange}
          radius="md"
          sx={{flex: 1}}
          value={value}
          variant="outline"
        >
          <Tabs.List px="sm">
            {TABS.map(({ label, value }) => (
              <Tabs.Tab key={value} value={value}>
                {label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </Box>
      {children}
    </>
  )
}

export default SidebarTabs
