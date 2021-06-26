import { GET_DATA } from '../actions/index'

const reducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      const result = action.data.filter(user => user.id <= 5)
    //   const namae = () => {
    //     state.user.id <= 5
    // }
      console.log(result)
      console.log(action.data)
      console.log(state.user_data)
      return { ...state, user_data: result }
    default:
      return state
  }
}

export default reducer