import type { FC } from 'react'
import { useMemo } from 'react'

import { Tabs } from '@mantine/core'
import {
  useLocation,
  useMatches,
  useNavigate,
} from '@remix-run/react'

export type SidebarTabsProps = {
  children?: React.ReactNode
}

const TABS: { value: string; label: string }[] = [
  { label: 'Content', value: '.' },
  { label: 'Discussion', value: 'discussion' },
  { label: 'Notebook', value: 'notebook' },
  { label: 'Ask CoderSchool', value: 'assistant' },
]

const SidebarTabs: FC<SidebarTabsProps> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const matches = useMatches()

  const handleTabChange = (value: string) => {
    navigate(`./${value}`)
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
      <Tabs
        mt="sm"
        onTabChange={handleTabChange}
        radius="md"
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
      {children}
    </>
  )
}

export default SidebarTabs
