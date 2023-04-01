import type { FC } from 'react'

import LearnContainer from '~/components/learn-container'
import { course as courseData } from '~/data/data.server'
import { superjson, useSuperLoaderData } from '~/utils/data'

export async function loader() {
  return superjson({ course: courseData })
}

export type LearnViewProps = {}

const LearnView: FC<LearnViewProps> = () => {
  const { course } = useSuperLoaderData<typeof loader>()
  return <LearnContainer course={course} />
}

export default LearnView
