import type { FC } from 'react'

import { Button, Group, Stack, Text, Textarea } from '@mantine/core'

import { useLearn } from '~/hooks/useLearn'
import { fDuration } from '~/utils/format'

export type CreateNoteProps = {}

const CreateNote: FC<CreateNoteProps> = () => {
  const { videoTimestamp } = useLearn()

  return (
    <Stack spacing="sm">
      <Textarea autoFocus placeholder="Jot something down..." />
      <Group position="apart">
        <Text size="sm">
          <strong>Timestamp:</strong> {fDuration(videoTimestamp)}
        </Text>
        <Button>Add note</Button>
      </Group>
    </Stack>
  )
}

export default CreateNote
