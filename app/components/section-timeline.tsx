import type { FC } from 'react'
import { useMemo } from 'react'

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

import type { CourseUnit } from '~/data/data.server'
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

// eslint-disable-next-line no-unused-vars
export type BuildUnitPath = (props: { unitId: string }) => string

export type SectionTimelineProps = {
  units: CourseUnit[]
  buildPath: BuildUnitPath
  // eslint-disable-next-line no-unused-vars
  isUnitActive?: (unitId: CourseUnit) => boolean
}

const ITEM_TYPE_ICON: Partial<Record<CourseUnit['type'], Icon>> = {
  video: IconPlayerPlayFilled,
  text: IconBook,
  challenge: IconCode,
  project: IconBrain,
}

const SectionTimeline: FC<SectionTimelineProps> = ({
  units,
  buildPath,
  isUnitActive,
}) => {
  return (
    <Box ml="0.5rem">
      <Timeline active={0}>
        {units.map((unit) => {
          const ItemIcon = ITEM_TYPE_ICON[unit.type]
          return (
            <Timeline.Item
              bullet={ItemIcon && <ItemIcon size={BULLET_SIZE - 16} />}
              bulletSize={BULLET_SIZE}
              key={unit.id}
            >
              <SectionTimelineItem
                buildPath={buildPath}
                courseUnit={unit}
                isActive={isUnitActive}
              />
            </Timeline.Item>
          )
        })}
      </Timeline>
    </Box>
  )
}

const SectionTimelineItem: FC<{
  courseUnit: CourseUnit
  buildPath: BuildUnitPath
  // eslint-disable-next-line no-unused-vars
  isActive?: (unitId: CourseUnit) => boolean
}> = ({ courseUnit, buildPath, isActive }) => {
  const { id, title, description, duration, isLocked } = courseUnit
  const path = useMemo(() => {
    if (!buildPath) return `./${id}`
    return buildPath({ unitId: id })
  }, [buildPath, id])

  const active = useMemo(
    () => (isActive ? isActive(courseUnit) : false),
    [isActive, courseUnit],
  )

  return (
    <Box
      component={Link}
      sx={{ color: 'unset', textDecoration: 'unset' }}
      to={path}
    >
      <Box
        sx={{
          marginLeft: '0.5rem',
          position: 'relative',
          ':before': {
            transition: 'background-color 0.2s ease',
            content: '""',
            position: 'absolute',
            top: '-0.5rem',
            left: '-0.5rem',
            right: '-0.5rem',
            bottom: '-0.5rem',
            borderRadius: '1rem',
            zIndex: -1,
            ...(active && {
              backgroundColor: `#fa525224 !important`,
            }),
          },
          '&:hover': {
            ':before': {
              backgroundColor: 'rgba(0, 0, 0, 0.035)',
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
