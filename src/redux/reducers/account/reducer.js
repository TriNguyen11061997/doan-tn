import { GET_ACCOUNT } from './actionTypes'
const INITIAL_STATE = {
  data: [],
  loading: false
};
export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_ACCOUNT: {
      return {
        ...state,
        data: payload
      }
    }
    default: return state;
  }
}