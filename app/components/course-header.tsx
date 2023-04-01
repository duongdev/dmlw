import type { FC } from 'react'

import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { IconDisabled2 } from '@tabler/icons-react'

export type CourseHeaderProps = {
  title: string
  description?: string
  bannerImage?: string
}

const CourseHeader: FC<CourseHeaderProps> = ({
  title,
  bannerImage,
  description,
}) => {
  return (
    <BackgroundImage py="4rem" src={bannerImage!}>
      <Container>
        <Stack>
          <Box>
            <Title color="white" order={1}>
              {title}
            </Title>
            <Text color="white">{description}</Text>
          </Box>
          <Box>
            <Button leftIcon={<IconDisabled2 />}>Learn now</Button>
          </Box>
        </Stack>
      </Container>
    </BackgroundImage>
  )
}

export default CourseHeader
