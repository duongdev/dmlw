/* eslint-disable react/prop-types */
import {
  Box,
  Center,
  Container,
  Image,
  Paper,
  Text,
  Title,
} from '@mantine/core'
import type { MDXContentProps } from 'mdx-bundler/client'

import LearnVideo from '../../learn-video'

import Note from './note'
import TerminalBlock from './terminal-block'

const mdxComponents: MDXContentProps['components'] = {
  // Mantine components
  Container: Container,
  h2: ({ children }) => (
    <Container my="lg">
      <Title order={2}>{children}</Title>
    </Container>
  ),
  h3: ({ children }) => (
    <Container my="lg">
      <Title order={3}>{children}</Title>
    </Container>
  ),
  h4: ({ children }) => (
    <Container my="lg">
      <Title order={4}>{children}</Title>
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
  ul: ({ children }) => (
    <Container mb="sm">
      <Box component="ul" sx={{ paddingInlineStart: '2rem' }}>
        {children}
      </Box>
    </Container>
  ),

  // Custom components
  Video: LearnVideo,
  Intro: ({ children }) => (
    <Text mt="xl" size="xl">
      {children}
    </Text>
  ),
  Image: (props: any) => (
    <Center my="lg">
      <Image {...props} />
    </Center>
  ),
  TerminalBlock,
  Note,
}

export default mdxComponents
