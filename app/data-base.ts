import type { ArrayElement } from './utils/types'

export type CourseSectionItem = {
  id: string
  title: string
  description?: string
  type: 'text' | 'video' | 'challenge' | 'project'
  duration?: number
  content?: string
  isLocked?: boolean
}

export const COURSE_SECTION_ITEMS: CourseSectionItem[] = [
  {
    id: 'the-history',
    title: 'The history',
    description: 'The history of React',
    type: 'video',
    duration: 510,
    content: 'https://www.youtube.com/watch?v=9U3IhLAnSxM',
  },
  {
    id: 'thinking-in-react',
    title: 'Thinking in React',
    description:
      "In this tutorial, we'll guide you through the thought process of building a searchable product data table with React.",
    type: 'text',
    duration: 600,
  },
  {
    id: 'challenge-your-self',
    title: 'Challenge yourself',
    description: 'Let see whether you can build a simple todo app with React',
    type: 'challenge',
    duration: 2700,
  },
  {
    id: 'project-time',
    title: 'Project time',
    description: "It's time to show off your skills",
    type: 'project',
    isLocked: true,
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
      units: COURSE_SECTION_ITEMS,
    },
  ],
}

export type Course = typeof course
export type CourseSection = ArrayElement<Course['sections']>
