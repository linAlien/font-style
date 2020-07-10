<template>
  <div class="font-box">
    <!-- 普通字体 -->
    <span :style="{ 'font-size': size, color: color }" v-if="type == 'primary'">{{font}}</span>
    <!-- 彩色字体 -->
    <span class="color-font" :style="{ 'font-size': size, color: color }" v-if="type == 'ColorText'">{{font}}</span>
    <!-- 阴影文字 -->
    <span class="shadow-font" :style="{'font-size': size, 'background-color': color}" v-if="type == 'ShadowText'">{{font}}</span>
  </div>
</template>

<script>
export default {
  name: "FontStyle",
  props:{
    type: {
      type: String,
      default: "primary"
    },
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

<style  scoped>

.font-box{
  display: inline-block;
}
.color-font{
    /* font-style: oblique;  */
    text-align: left;
    background-image: -webkit-linear-gradient(left,green,yellow,pink, blue, red 25%,green 35%,
    blue 50%,yellow 60%, red 75%, pink 85%,blue 100%);    /* //括号内可添加多种颜色，多种百分比   线性渐变 */
    background-image: linear-gradient(to left,green,yellow,pink, blue, red 25%,green 35%,
    blue 50%,yellow 60%, red 75%, pink 85%,blue 100%);
    background-image: -moz-linear-gradient(left,green,yellow,pink, blue, red 25%,green 35%,
    blue 50%,yellow 60%, red 75%, pink 85%,blue 100%);
    background-image: -o-linear-gradient(left,green,yellow,pink, blue, red 25%,green 35%,
    blue 50%,yellow 60%, red 75%, pink 85%,blue 100%);
    -webkit-text-fill-color: transparent;    /* //颜色填充 透明 */
    -webkit-background-clip: text;
    animation: stream 15s infinite linear;   /* //流动 15秒 循环 直线 */
    background-size: 500% 100%;
}
 @keyframes stream {       /*匀速流动 */
    0%  {
        background-position: 0 0;
    }
    100% {
        background-position: -100% 0;
    }
}

.shadow-font {
  color: transparent;
  background-color : #376FFF;
  text-shadow : rgba(255,255,255,0.5) 0 5px 6px, rgba(255,255,255,0.2) 1px 3px 3px;
  -webkit-background-clip : text;
}
</style>



