import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const module1 = {
  state: () => ({
      teste: 'teste em modules'
  })
}

const module2 = {
  state: () => ({
      teste: 'teste em modules 2'
  })
}

export default new Vuex.Store({
   modules: {
    module1,
    module2
  }
})
