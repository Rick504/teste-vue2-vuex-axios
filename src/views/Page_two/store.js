import teste from '@/services/teste.service'

const pageTwoModule = {
  state: () => ({
      teste: 'Teste em modules 2'
  }),
  mutations: {
    mudarEstadoTwo (state) {
      state.teste = "Mudando o estado da frase em componete 2"
    },
    sendData(state, data) {
      state.teste = data
    }
  },
  actions: {
    async httpUserDetailsGet (context) {
      try {
        let res = await teste.userDetailGet()
        let data = res.data

        context.commit("sendData", data)

      } catch (err) {
        console.log(err)
      }
    },
    async httpUserDetailsPost (context) {
      try {
        let res = await teste.userDetailPost()
        let data = res.data
        console.log(data)

        let msg = "dado envado com sucesso"
        context.commit("sendData", msg)

      } catch (err) {
        console.log(err)
      }
    }
  }
}

export default pageTwoModule
