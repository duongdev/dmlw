import type { FC } from 'react'

import type { LoaderArgs } from '@remix-run/node'

import LearnContainer from '~/components/learn-container'
import { course as courseData } from '~/data/data.server'
import { superjson, useSuperLoaderData } from '~/utils/data'
import { getMDXContent } from '~/utils/mdx'

export async function loader({ params }: LoaderArgs) {
  const { courseId, sectionId, unitId } = params

  const mdxPath = `${courseId}/${sectionId}/${unitId}`

  const mdx = await getMDXContent(mdxPath)

  return superjson({ course: courseData, mdx })
}

export type LearnViewProps = {}

const LearnView: FC<LearnViewProps> = () => {
  const { course, mdx } = useSuperLoaderData<typeof loader>()

  return <LearnContainer course={course} mdx={mdx} />
}

export default LearnView
