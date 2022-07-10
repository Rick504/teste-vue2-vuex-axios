<template>
  <div>
      <p>{{ pageOneModule.teste }}</p>
      <p>{{ pageTwoModule.teste }}</p>
      <button @click="mudarStado()">Increment</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations([ 'mudarStado' ])
  },
  computed: {
    ...mapState(["pageOneModule", "pageTwoModule"])
  }
}
</script>
