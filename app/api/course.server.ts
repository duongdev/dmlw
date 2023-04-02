import { existsSync, readdirSync } from 'fs'
import { join } from 'path'

import { compact } from 'lodash'

import { CONTENTS_DIR, getMDXContent } from '~/utils/mdx'
import type { ArrayElement } from '~/utils/types'

export async function getCourse(courseId: string) {
  const courseMdx = await getMDXContent(`${courseId}/index`)
  if (!courseMdx) {
    return null
  }

  const { title, description, banner } = courseMdx.frontmatter

  const sections = await getCourseSections(courseId)

  return {
    id: courseId,
    title,
    description,
    banner,
    mdx: courseMdx,
    sections,
  }
}

export async function getCourseSections(courseId: string) {
  const courseDir = readdirSync(join(CONTENTS_DIR, courseId), {
    withFileTypes: true,
  })

  const folders = courseDir.filter((dirent) => dirent.isDirectory())

  const foldersWithIndexMdx = folders.filter((folder) => {
    return existsSync(join(CONTENTS_DIR, courseId, folder.name, 'index.mdx'))
  })

  const sections = await Promise.all(
    foldersWithIndexMdx.map(async (folder) => {
      const sectionMdx = await getMDXContent(`${courseId}/${folder.name}/index`)

      if (!sectionMdx) {
        return null
      }

      const units = await getSectionUnits({
        sectionId: folder.name,
        courseId,
      })

      return {
        id: folder.name,
        title: sectionMdx.frontmatter.title,
        mdx: sectionMdx,
        units,
      }
    }),
  )

  return compact(sections)
}

export async function getSectionUnits({
  sectionId,
  courseId,
}: {
  sectionId: string
  courseId: string
}) {
  const sectionDir = readdirSync(join(CONTENTS_DIR, courseId, sectionId), {
    withFileTypes: true,
  })

  const files = sectionDir.filter((dirent) => dirent.isFile())

  const filesWithMdx = files.filter((file) => {
    return file.name.endsWith('.mdx') && file.name !== 'index.mdx'
  })

  const units = await Promise.all(
    filesWithMdx.map(async (file) => {
      const unitId = file.name.replace(/\.mdx$/, '')

      const unitMdx = await getMDXContent(`${courseId}/${sectionId}/${unitId}`)

      if (!unitMdx) {
        return null
      }

      const { title, description, type, duration } = unitMdx.frontmatter

      return {
        id: unitId,
        mdx: unitMdx,
        title,
        description,
        type: (type || 'text') as CourseUnitType,
        duration,
      }
    }),
  )

  return compact(units)
}

export type Course = NonNullable<Awaited<ReturnType<typeof getCourse>>>
export type CourseSection = ArrayElement<Course['sections']>
export type CourseUnit = ArrayElement<CourseSection['units']>
export type CourseUnitType = 'text' | 'video' | 'challenge' | 'project'
