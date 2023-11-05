import { InviteMember } from 'apis'

// Thunks
// eslint-disable-next-line import/prefer-default-export
export const fetchInviteMember = (data) => async () => {
  const response: any = await InviteMember(data)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const datas = response?.data?.data
}
