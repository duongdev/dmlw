import type { FC } from 'react'

import { Textarea, Group, Button, Box, Stack } from '@mantine/core'

export type CreateTATicketProps = {}

const CreateTATicket: FC<CreateTATicketProps> = () => {
  return (
    <Stack spacing="sm">
      <Textarea
        autoFocus
        placeholder="Just ask. We know where you are struggling"
      />
      <Group position="apart">
        <Box />
        <Button>Start conversation</Button>
      </Group>
    </Stack>
  )
}

export default CreateTATicket
