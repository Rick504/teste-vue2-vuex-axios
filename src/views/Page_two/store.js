const pageTwoModule = {
  state: () => ({
      teste: 'teste em modules 2'
  }),

  mutations: {
    mudarStado (state) {
      state.teste = state.teste + " tipo de frase"
    }
  }
}

export default pageTwoModule
