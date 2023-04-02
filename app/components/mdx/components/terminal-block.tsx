import type { FC, ReactNode } from 'react'

import {
  ActionIcon,
  Box,
  Container,
  CopyButton,
  Group,
  Paper,
  Text,
  Tooltip,
  useMantineTheme,
} from '@mantine/core'
import { IconCheck, IconCopy, IconTerminal2 } from '@tabler/icons-react'

export type TerminalBlockProps = {
  children: ReactNode
}

const TerminalBlock: FC<TerminalBlockProps> = ({ children }) => {
  const theme = useMantineTheme()
  return (
    <Container my="lg">
      <Paper
        radius="md"
        sx={{ overflow: 'hidden', color: theme.colors.gray[3] }}
      >
        <Group
          px="sm"
          py="xs"
          sx={{
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.dark[4],
          }}
        >
          <IconTerminal2 />
          <Text size="sm" sx={{ flex: 1 }}>
            Terminal
          </Text>
          <CopyButton value={children as string}>
            {({ copied, copy }) => (
              <Tooltip
                withArrow
                label={copied ? 'Copied' : 'Copy'}
                position="right"
              >
                <ActionIcon color={copied ? 'teal' : 'gray'} onClick={copy}>
                  {copied ? (
                    <IconCheck size="1rem" />
                  ) : (
                    <IconCopy size="1rem" />
                  )}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
        </Group>
        <Box
          p="lg"
          pb="xs"
          sx={{
            background:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[7]
                : theme.colors.dark[5],
            whiteSpace: 'pre',
            overflow: 'auto',
            '& *': {
              fontFamily: 'monospace !important',
            },
          }}
        >
          {children}
        </Box>
      </Paper>
    </Container>
  )
}

export default TerminalBlock
