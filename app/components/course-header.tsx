import type { FC, ReactNode } from 'react'

import {
  BackgroundImage,
  Box,
  Container,
  Stack,
  Text,
  Title,
} from '@mantine/core'

export type CourseHeaderProps = {
  title: string
  description?: string
  bannerImage?: string
  action?: ReactNode
}

const CourseHeader: FC<CourseHeaderProps> = ({
  title,
  bannerImage,
  description,
  action,
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
          {action && <Box>{action}</Box>}
        </Stack>
      </Container>
    </BackgroundImage>
  )
}

export default CourseHeader
