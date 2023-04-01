import type { FC } from 'react'

import { Box } from '@mantine/core'

import CreateTATicket from '~/components/create-ta-ticket'

export type AssistantProps = {}

const Assistant: FC<AssistantProps> = () => {
  return (
    <Box px="sm" py="lg">
      <CreateTATicket />
    </Box>
  )
}

export default Assistant
