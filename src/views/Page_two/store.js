const pageTwoModule = {
  state: () => ({
      teste: 'teste em modules 2'
  }),
  mutations: {
    mudarEstadoTwo (state) {
      state.teste = state.teste + " Adicionando uma frase em componete 2"
    }
  }
}

export default pageTwoModule
