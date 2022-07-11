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
      state.teste = data;
    }
  },
  actions: {
    async httpUserDetails (context) {
      let res = await teste.userDetail()
      let data = res.data

      context.commit("sendData", data);
    }
  }
}

export default pageTwoModule
