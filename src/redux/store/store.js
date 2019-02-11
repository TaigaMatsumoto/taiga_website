import { createStore } from 'redux'
import rootReducer from '../reducers/reducers'

const store = createStore(rootReducer)

export default store
// import { createStore as reduxCreateStore } from "redux"
// import rootReducer from '../reducers/reducers'
// const reducer = (state, action) => {
//   if (action.type === `INCREMENT`) {
//     return Object.assign({}, state, {
//       count: state.count + 1,
//     })
//   }
//   return state
// }

// const initialState = { count: 0 }

// const createStore = () => reduxCreateStore(rootReducer, initialState)
// export default createStore
