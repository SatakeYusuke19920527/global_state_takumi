import {GET_DATA, GET_TODODATA} from '../actions/index'

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
    
    case GET_TODODATA:
      console.log(action.data)
      const resulttwo = action.data.filter(comment => comment.id = comment.id * 2 - 1 )
      return { ...state, comment_data: resulttwo }
    
    
    default:
      return state
  }
}

export default reducer