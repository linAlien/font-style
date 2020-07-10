<template>
  <div>
    <p><font-style :color="color" :font="hello" :size="size"></font-style></p>
    <p><font-style :color="color" :font="hello" :size="'100px'" :type="'ShadowText'"></font-style></p>
    <p><font-style :color="color" :font="hello" :size="'120px'" :type="'ColorText'"></font-style></p>
  </div>
</template>

<script>
import FontStyle from "./components/vue-font-style.vue";

export default {
  name: 'app',
  data () {
    return {
      hello: 'hello',
      color: '#cccccc',
      size: '80px'
    }
  },
  components:{
    FontStyle
  }

}
</script>
