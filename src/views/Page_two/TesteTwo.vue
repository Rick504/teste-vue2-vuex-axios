<template>
  <div>
      <h1>componente 2</h1>
      <p>{{ pageTwoModule.teste }}</p>
      <button @click="mudarEstadoTwo()">Mudar estado</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations([ 'mudarEstadoTwo' ])
  },
  computed: {
    ...mapState(["pageTwoModule"])
  }
}
</script>
