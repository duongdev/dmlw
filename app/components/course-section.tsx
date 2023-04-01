import type { FC, ReactNode } from 'react'

import { Title } from '@mantine/core'

export type CourseSectionProps = {
  children: ReactNode
}

const CourseSection: FC<CourseSectionProps> = ({ children }) => {
  return <Title order={3}>{children}</Title>
}

export default CourseSection
