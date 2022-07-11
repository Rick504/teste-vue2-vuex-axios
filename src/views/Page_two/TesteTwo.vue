<template>
  <div>
      <h1>componente 2</h1>
      <p>{{ pageTwoModule.teste }}</p>
      <button @click="mudarEstadoTwo()">Mudar estado</button>
      <br><br>
      <button @click="httpUserDetails()">Chamada axios</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  methods: {
    ...mapMutations([ 'mudarEstadoTwo' ]),
    ...mapActions([ "httpUserDetails" ])
  },
  computed: {
    ...mapState(["pageTwoModule"])
  }
}
</script>
