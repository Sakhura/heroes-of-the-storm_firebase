import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function extractObjects(firebaseResponseJson) {
  const arrayOfObjects = []

  for (const idHeroe in firebaseResponseJson) {
    arrayOfObjects.push(firebaseResponseJson[idHeroe])

  }
  return arrayOfObjects
}

export default new Vuex.Store({
  state: {
    listaHeroes: [], 
    currentUser: undefined,

  },
  mutations: {
    SET_USER(state, user) {
      state.currentUser = user
    },
    SET_HEROES(state, heroes) {
      state.listaHeroes = heroes
    },
    SET_HEROE(state, heroe) {
      state.heroe = heroe
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user)

    },
    setHeroes({ commit }) {
      axios.get('https://heroes-a74d1-default-rtdb.firebaseio.com/heroes.json').
        then((response) => {
          commit('SET_HEROES', extractObjects(response.data))
        })
    },

    // setHeroe({ commit }, nombre) {
    //   axios.get(`https://heroes-a74d1-default-rtdb.firebaseio.com/heroes.json${nombre}`).
    //     then((response) => {
    //       commit('SET_HEROE', response.data)

    //     })

    // }
  },
  modules: {
  },
  getters: {
    getHeroeByName: (state) => (nombre) => {
      const heroe = state.listaHeroes.find(heroe => heroe.nombre === nombre)
      return heroe
    }
  }

})
