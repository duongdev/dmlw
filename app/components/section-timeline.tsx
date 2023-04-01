import type { FC } from 'react'

import { Box, Group, Text, Timeline } from '@mantine/core'
import { Link } from '@remix-run/react'
import {
  IconBook,
  IconBrain,
  IconCode,
  IconLock,
  IconPlayerPlayFilled,
} from '@tabler/icons-react'
import { format } from 'date-fns'

import type { Icon } from '~/utils/types'

const BULLET_SIZE = 36

export type SectionTimelineItemProps = {
  id: string
  title: string
  description?: string
  type: 'text' | 'video' | 'challenge' | 'project'
  duration?: number
  isLocked?: boolean
}

export type SectionTimelineProps = {
  items: SectionTimelineItemProps[]
}

const ITEM_TYPE_ICON: Partial<Record<SectionTimelineItemProps['type'], Icon>> =
  {
    video: IconPlayerPlayFilled,
    text: IconBook,
    challenge: IconCode,
    project: IconBrain,
  }

const SectionTimeline: FC<SectionTimelineProps> = ({ items }) => {
  return (
    <Box ml="0.5rem">
      <Timeline active={0}>
        {items.map((item) => {
          const ItemIcon = ITEM_TYPE_ICON[item.type]
          return (
            <Timeline.Item
              bullet={ItemIcon && <ItemIcon size={BULLET_SIZE - 16} />}
              bulletSize={BULLET_SIZE}
              key={item.id}
            >
              <SectionTimelineItem {...item} />
            </Timeline.Item>
          )
        })}
      </Timeline>
    </Box>
  )
}

const SectionTimelineItem: FC<SectionTimelineItemProps> = ({
  id,
  title,
  description,
  duration,
  isLocked,
}) => {
  return (
    <Box
      component={Link}
      sx={{ color: 'unset', textDecoration: 'unset' }}
      to={`./learn/section-1/${id}`}
    >
      <Box
        sx={{
          marginLeft: '0.5rem',
          position: 'relative',
          ':before': { transition: 'all 0.5s' },
          '&:hover': {
            ':before': {
              content: '""',
              position: 'absolute',
              top: '-0.5rem',
              left: '-0.5rem',
              right: '-0.5rem',
              bottom: '-0.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.015)',
              borderRadius: '1rem',
              zIndex: -1,
            },
          },
        }}
      >
        <Group noWrap align="start" position="apart">
          <Box>
            <Group spacing="xs">
              <Text size="lg">{title}</Text>
              {!!duration && (
                <Text color="dimmed">{format(duration * 1000, 'mm:ss')}</Text>
              )}
              {!!isLocked && (
                <Box component={IconLock} opacity={0.5} size="1.2rem" />
              )}
            </Group>
            <Text color="dimmed">{description}</Text>
          </Box>
        </Group>
      </Box>
    </Box>
  )
}

export default SectionTimeline
