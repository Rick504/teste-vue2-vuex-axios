<template>
  <div>
    <TesteOne />
    <TesteTwo />
  </div>
</template>

<script>
import TesteOne from './views/Page_one/TesteOne.vue'
import TesteTwo from './views/Page_two/TesteTwo.vue'

export default {
  name: 'App',
  components: {
    TesteOne,
    TesteTwo
  }
}
</script>

