export const convertToMinutes = (time: number) => {
  const seconds = Math.floor(time)

  const remainder = seconds % 60

  return `${Math.floor(seconds / 60)}:${
    remainder > 9 ? remainder : `0${remainder}`
  }`
}
