<template>
  <div>
      <h1>componente 1</h1>
      <p>{{ pageOneModule.teste }}</p>
      <button @click="mudarEstadoOne()">Mudar estado</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations([ 'mudarEstadoOne' ])
  },
  computed: {
    ...mapState(["pageOneModule"])
  }
}
</script>
