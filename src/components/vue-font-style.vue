<template>
  <span :style="{ 'font-size': size, color: color }">{{font}}</span>
</template>

<script>
export default {
  name: "FontStyle",
  props:{
    font: {
      type: String,
      default: "文字"
    },
    size: {
      type: String,
      default: "16px"
    },
    color: {
      type: String,
      default: "#ff0000"
    }
  }
}
</script>

