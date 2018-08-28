<template>
    <div>
      <ul>
        <router-link tag="li" v-for="item in listarray" :class="activeli.id==list.id?'now':'no'">
          {{item.name}}
        </router-link>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'asideList',
    props:{
      listarray: {
        type: Array,
        required: true
      },
      activeli: Object
    },
    mounted () {

    }

  }
</script>

<style scoped>

</style>
