<script>
  export default {
    data () {
      return {
        name: 'Vue.js',
        style: {
          link: {
            'text-decoration': 'underline'
          }
        }
      }
    },
    methods: {
      greet: function (event) {
        window.alert('Hello ' + this.name)

        // event 是原生 DOM 事件
        window.alert(event.target.tagName)
      },
      say1: function (msg) {
        window.alert(msg)
      },
      say2: function (msg, event) {
        window.alert(event.target.tagName)
      },
      onSubmit: function () {
        window.alert('提交事件不再重载页面')
      },
      doThat: function () {
        window.alert('点击链接')
      }
    }
  }
</script>

<template>
  <div>
   <hr>
   <h1>绑定方法处理器</h1>
   <button v-on:click="greet">greet</button>

   <hr>
   <h1>內联 JavaScript 语句</h1>
   <button v-on:click="say1('hi')">Say Hi</button>
   <button v-on:click="say1('what')">Say Waht</button>

   <h3>传递 $event</h3>
   <button v-on:click="say2('Hello', $event)">target.tagName</button>

   <hr>
   <h1>事件修饰符</h1>
   <h3>提交事件不再重载页面</h3>
   <form action="" v-on:submit.prevent="onSubmit">
     <input type="submit" value="提交">
   </form>

   <h3>串联修饰符</h3>
   <a v-bind:style="style.link" v-on:click.stop.prevent="doThat">stop(阻止单击事件冒泡)+prevent(阻止默认行为)</a>

   <h3>按键修饰符</h3>
   <form action="" v-on:submit.prevent="onSubmit">
     <input type="text">
     <input type="submit" value="keyCode为13触发" v-on:keyup.13="submit">
   </form>

   <h3>为按键提供别名</h3>
   <form action="" v-on:submit.prevent="onSubmit">
     <input type="text" >
     <input v-on:keyup.enter="submit">
     <!-- 缩写语法 -->
     <!-- <input @keyup.enter="submit"> -->
   </form> 
  </div>
</template>