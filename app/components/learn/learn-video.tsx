import type { FC } from 'react'
import { useCallback } from 'react'

import { AspectRatio } from '@mantine/core'
import ReactPlayer from 'react-player'

import { useLearn } from '~/hooks/useLearn'

export type LearnVideoProps = {
  source: string
}

const LearnVideo: FC<LearnVideoProps> = ({ source }) => {
  const { setVideoTimestamp } = useLearn()

  const handleProgress = useCallback(
    (progress: { playedSeconds: number }) => {
      setVideoTimestamp(progress.playedSeconds)
    },
    [setVideoTimestamp],
  )

  return (
    <AspectRatio mah="50vh" ratio={16 / 9} sx={{ backgroundColor: '#000' }}>
      <ReactPlayer
        controls
        height="100%"
        onProgress={handleProgress}
        url={source}
        width="100%"
      />
    </AspectRatio>
  )
}

export default LearnVideo
