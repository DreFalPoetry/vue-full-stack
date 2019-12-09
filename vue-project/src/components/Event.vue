<template>
  <div>
    <div>{{res1}}</div>
  </div>
</template>

<script>
export default {
  name: 'EV',
  data () {
    return {
      list1: [['a','b','c'], ['d','e']]
    }
  },
  computed: {
    res1: function(){
      return this.cartesian(this.list1)
    }
  },
  methods: {
    getListRes () {
      return '1'
    },
    cartesian (lists) {
      let res = []
      res = lists.map(list => {
        let ceil1 = []
        ceil1 = list.map(item => [item])
        return ceil1
      }).reduce((listsA, listsB) => {
        return listsA.reduce((list, listA) =>
            list.concat(
              listsB.map(listB => listA.concat(listB))
            ), []
          )
        } 
      )
      return res
    }
  }
}
</script>

<style scoped>

</style>