import type { FC } from 'react'

import { useMantineColorScheme, ActionIcon } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons-react'

export type ThemeTogglerProps = {}

const ThemeToggler: FC<ThemeTogglerProps> = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <ActionIcon
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      variant="outline"
    >
      {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
    </ActionIcon>
  )
}

export default ThemeToggler
