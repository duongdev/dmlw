export const fDuration = (duration: number) => {
  const hours = Math.floor(duration / 3600)
  const minutes = Math.floor((duration % 3600) / 60)
  const seconds = Math.floor(duration % 60)

  const time = [hours, minutes, seconds]

  if (hours === 0) time.shift()

  const formatted = time.map((unit) => String(unit).padStart(2, '0')).join(':')

  return formatted
}
