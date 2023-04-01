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
    id: '1',
    title: 'The history',
    description: 'The history of React',
    type: 'video',
    duration: 510,
    content: 'https://www.youtube.com/watch?v=9U3IhLAnSxM',
  },
  {
    id: '2',
    title: 'Thinking in React',
    description:
      "In this tutorial, we'll guide you through the thought process of building a searchable product data table with React.",
    type: 'text',
    duration: 600,
  },
  {
    id: '3',
    title: 'Challenge yourself',
    description: 'Let see whether you can build a simple todo app with React',
    type: 'challenge',
    duration: 2700,
  },
  {
    id: '4',
    title: 'Project time',
    description: "It's time to show off your skills",
    type: 'project',
    isLocked: true,
  },
]
