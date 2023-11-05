import moment from 'moment'

export const convertTimestampToDate = (timestamp: any) => {
  if (timestamp === '0' || timestamp === 0 || timestamp === undefined || timestamp === null) return 'Redemption Date'
  const formatted = moment.unix(timestamp).format('YYYY-MM-DD')
  return formatted
}

export const convertTimestampToTime = (timestamp: any) => {
  if (timestamp === '0' || timestamp === 0 || timestamp === undefined || timestamp === null) return 'Redemption Date'
  const formatted = moment.unix(timestamp).format('HH:mm:ss')
  return formatted
}

export const checkAfterTime = (endTime: any) => {
  const currentTime = moment(new Date()).format('YYYY-MM-DD')
  const check = moment(currentTime).isBefore(endTime)
  return check
}
