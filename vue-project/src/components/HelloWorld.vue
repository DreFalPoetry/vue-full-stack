<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1 v-html="msg1"></h1>
    <a-button>ssss</a-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      msg1: '<span style="color:green;">ddddd</span>',
      money: 100,
      a: 1,
      a1: 'test-1',
      a2: 'test-2',
      a3: false,
      obj: {
        'test-1':true
      }
    }
  },
  computed: {//计算属性
    b: function () {
      return this.money - this.a
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
