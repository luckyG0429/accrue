<!--
组件：发说说，但是主题初始值是父组件传给他的，也可以选择发在哪个主题下。
-->

<template>
   <textarea v-model="textTitle"></textarea>
</template>

<script>
export default {
  name: 'PostMsg',
  props: {
    activekey: {
      type: [String,Number],
      required: false
    },
    activeName: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      text: this.activeName
    }
  },
  computed: {
    textTitle: {
      get () {
        return `#${this.activeName}#`
      },
      set (newvalue) {
        console.log(newvalue);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
