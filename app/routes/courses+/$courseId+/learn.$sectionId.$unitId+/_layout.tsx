import type { FC } from 'react'

import type { LoaderArgs } from '@remix-run/node'

import { getCourse } from '~/api/course.server'
import LearnContainer from '~/components/learn-container'
import { redirect, superjson, useSuperLoaderData } from '~/utils/data'

export async function loader({ params }: LoaderArgs) {
  const { courseId, unitId } = params

  const course = await getCourse(courseId!)
  if (!course) {
    return redirect('/')
  }

  const unit = course?.sections
    .flatMap((section) => section.units)
    .find((unit) => unit.id === unitId)

  return superjson({ course, mdx: unit?.mdx })
}

export type LearnViewProps = {}

const LearnView: FC<LearnViewProps> = () => {
  const { course, mdx } = useSuperLoaderData<typeof loader>()

  return <LearnContainer course={course} mdx={mdx} />
}

export default LearnView
