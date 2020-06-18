<template>
  <div>
    <font-style :color="color" :font="hello" :size="size"></font-style>
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
      hello: 'hello',
      color: '#cccccc',
      size: '20px'
    }
  },
  components:{
    FontStyle
  }

}
</script>
