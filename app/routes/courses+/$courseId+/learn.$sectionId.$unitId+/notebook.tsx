import type { FC } from 'react'

import { Box } from '@mantine/core'

import CreateNote from '~/components/create-note'

export type NotebookProps = {}

const Notebook: FC<NotebookProps> = () => {
  return (
    <Box px="sm" py="lg">
      <CreateNote />
    </Box>
  )
}

export default Notebook
