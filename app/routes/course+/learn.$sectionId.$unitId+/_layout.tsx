import type { FC } from 'react'

import LearnProvider from '~/components/learn/learn-provider'

export type LearnViewProps = {}

const LearnView: FC<LearnViewProps> = () => {
  return <LearnProvider />
}

export default LearnView
