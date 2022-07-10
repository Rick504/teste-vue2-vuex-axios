<template>
  <div>
      <p>{{ module1.teste }}</p>
      <p>{{ module2.teste }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(["module1", "module2"])
  }
}
</script>
