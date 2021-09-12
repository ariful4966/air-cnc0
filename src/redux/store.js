import { createStore } from 'redux'
import bookingReducer from './Reducers/bokkingReducer'


const store = createStore(bookingReducer)

export default store;