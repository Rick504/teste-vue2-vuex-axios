const pageOneModule = {
  state: () => ({
      teste: 'teste em modules 1'
  }),

  mutations: {
    mudarEstadoOne (state) {
      state.teste = state.teste + " Adicionando uma frase"
    }
  }
}

export default pageOneModule
