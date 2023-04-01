import { readFileSync } from 'fs'
import { join } from 'path'
import { cwd } from 'process'

import type { ArrayElement } from '../utils/types'

const readMdx = (name: string) => {
  try {
    return readFileSync(join(cwd(), `app/data/mdx/${name}.mdx`), 'utf-8')
  } catch (error) {
    console.error(error)
    return ''
  }
}

export const units = [
  {
    id: 'the-history',
    title: 'The history',
    description: 'The history of React',
    type: 'video',
    duration: 510,
    contents: [
      {
        id: 'the-history-text',
        type: 'mdx',
        mdx: 'the-history',
      },
    ],
  },
  {
    id: 'thinking-in-react',
    title: 'Thinking in React',
    description:
      "In this tutorial, we'll guide you through the thought process of building a searchable product data table with React.",
    type: 'text',
    duration: 600,
    contents: [],
  },
  {
    id: 'challenge-your-self',
    title: 'Challenge yourself',
    description: 'Let see whether you can build a simple todo app with React',
    type: 'challenge',
    duration: 2700,
    contents: [],
  },
  {
    id: 'project-time',
    title: 'Project time',
    description: "It's time to show off your skills",
    type: 'project',
    isLocked: true,
    contents: [],
  },
]

export const course = {
  id: 'react',
  title: "The next course we're gonna build",
  description:
    "LearnWorlds did very well and it's the time for it to retire.\nThanks for your service and we will miss you a lot.",
  banner: '/assets/react-banner.webp',
  sections: [
    {
      id: 'the-big-picture',
      title: 'Section 1: The big picture',
      units,
    },
  ],
}

export type Course = typeof course
export type CourseSection = ArrayElement<Course['sections']>
export type CourseUnit = ArrayElement<CourseSection['units']>
export type CourseUnitContent = ArrayElement<CourseUnit['contents']>
