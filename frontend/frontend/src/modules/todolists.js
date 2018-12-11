
const initialState = {
  todolists: []
}

const todolists = (state=initialState, action) => {
  switch(action.type){
    case GET_TODOLISTS_REQUEST_SUCCESS:
      return {...state, todolists: action.todolists}
    default:
      return state
  }
}

const GET_TODOLISTS_REQUEST_SUCCESS = 'GET_TODOLISTS_REQUEST_SUCCESS'
const getTodolistsRequestSuccess = (todolists) => {
  return {
    type: GET_TODOLISTS_REQUEST_SUCCESS,
    todolists
  }
}
const getTodolists = (dispatch) => {
  return dispatch => {
    return fetch('http://127.0.0.1:8000/api/')
    .then(response => response.json())
    .then(res => {
      dispatch(getTodolistsRequestSuccess(res))
    })
  }
}

export {
  todolists,
  getTodolists
}
