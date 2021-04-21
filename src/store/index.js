import { createStore } from 'vuex'
import cities from './modules/cities.js'

export default createStore({
  state: {
    id: 0,
    name: '',
    description: ''
  },
  modules: {
    cities
  }
})
