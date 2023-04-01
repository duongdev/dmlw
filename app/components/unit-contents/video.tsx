import type { FC } from 'react'

import type { CourseUnitContent } from '~/data/data.server'

import LearnVideo from '../learn-video'

export type VideoContentProps = {
  content: CourseUnitContent
}

const VideoContent: FC<VideoContentProps> = ({ content }) => {
  if (!content.url) throw new Error('Video content must have a URL')
  
  return <LearnVideo source={content.url} />
}

export default VideoContent
