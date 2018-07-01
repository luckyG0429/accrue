<template>
  <success-msg/>
</template>

<script>
const SucMsg = {
  template: '<h4>Congratulation for you</h4>'
};
export default {
  name: 'user-msg',
  components: {
    'success-msg': SucMsg
  },
  data () {
    return {
      isSuc: true
    }
  }
}
</script>

<style scoped>

</style>
