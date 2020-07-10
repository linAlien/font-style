# vue-font-style-simple
vue设置字体小插件

### 下载该组件 
```javascript
npm install vue-font-style-simple
```

### 组件的使用
```javascript

import FontStyle from 'vue-font-style-simple'

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

<font-style :color="color" :font="hello" :size="size"></font-style>
 
```

### 参数
参数 | 类型 | 可选值 | 说明
---|---|---|---
font | String | | 文字
color | String | | #cccccc
size | String | | 12px
type| String | primary,ColorText,ShadowText | 文字类型




