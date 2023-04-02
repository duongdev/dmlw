/* eslint-disable react/prop-types */
import { Container, Paper, Text, Title } from '@mantine/core'
import type { MDXContentProps } from 'mdx-bundler/client'

import LearnVideo from '../learn-video'

const mdxComponents: MDXContentProps['components'] = {
  // Mantine components
  Container: Container,
  h2: ({ children }) => (
    <Container my="lg">
      <Title order={2}>{children}</Title>
    </Container>
  ),
  p: ({ children }) => (
    <Container mb="sm">
      <Text>{children}</Text>
    </Container>
  ),
  pre: ({ children }) => (
    <Container my="lg">
      <Paper
        withBorder
        p="sm"
        radius="md"
        shadow="xl"
        sx={{ overflow: 'auto' }}
      >
        <pre>{children}</pre>
      </Paper>
    </Container>
  ),

  // Custom components
  Video: LearnVideo,
  Intro: ({ children }) => (
    <Text mt="xl" size="lg">
      {children}
    </Text>
  ),
}

export default mdxComponents
