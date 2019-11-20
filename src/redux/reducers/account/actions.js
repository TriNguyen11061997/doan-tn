import { GET_ACCOUNT } from './actionTypes'
import { accountAPI } from '../../../api'

export const getAccount = (payload) => ({
  type: GET_ACCOUNT,
  payload
})

export const getAccountAPI = () => {
  return (dispatch => {
    accountAPI.getAccount().then(
      res => res && dispatch(getAccount(res))
    )
  })
}