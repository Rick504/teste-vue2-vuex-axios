<template>
  <div>
      <h1>componente 2</h1>
      <p>{{ pageTwoModule.teste }}</p>
      <button @click="mudarEstadoTwo()">Mudar estado</button>
      <br><br>
      <button @click="httpUserDetailsGet()">Chamada axios</button>
      <br><br>
      <button @click="httpUserDetailsPost()">Fazer um post axios</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  methods: {
    ...mapMutations([ 'mudarEstadoTwo' ]),
    ...mapActions([ "httpUserDetailsGet", "httpUserDetailsPost" ])
  },
  computed: {
    ...mapState(["pageTwoModule"])
  }
}
</script>
