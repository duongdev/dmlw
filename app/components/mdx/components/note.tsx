import type { FC, ReactNode } from 'react'

import { Container, Box, Alert } from '@mantine/core'
import { IconNote } from '@tabler/icons-react'

export type NoteProps = {
  children: ReactNode
}

const Note: FC<NoteProps> = ({ children }) => {
  return (
    <Container my="lg">
      <Box>
        <Alert
          color="cyan"
          icon={<IconNote />}
          radius="md"
          title="Note"
          styles={{
            message: {
              '& > div > div': {
                padding: 0,
                margin: 0,
              },
            },
          }}
        >
          <Box sx={{}}>{children}</Box>
        </Alert>
      </Box>
    </Container>
  )
}

export default Note
