import { combineReducers, createStore, redux } from 'redux'
import { compose } from 'redux';


let initialState = {

   uid: '',
   email: ''

}

const authReducers = (state = initialState, action) => {
   switch (action.type) {
      case 'LOGIN_SUCCESS':
         return { ...state, uid: action.payload.uid, email: action.payload.email }
      default:
         return state
   }
}

// Nilai variable composeEnhancers ada dua kemungkinan, antara lain:
// window._REDUX__DEVTOOLS_EXTENSION_COMPOSE__
// yang akan ada ketika proses development
// compose, di import dari redux
let composeEnhancers = window._REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducers = combineReducers({
   auth: authReducers
})

const STORE = createStore(reducers, composeEnhancers())

export default STORE