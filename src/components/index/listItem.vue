<template>
    <div>
      <h1>{{itemobj.id}}</h1>
      <ul v-if="!!itemobj.child.length">
        <li v-for="item in itemobj.child" :key="item.id" @click="handleDel({'pId':itemobj.id,'cId':item.id})">
           {{item.name}}
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'listItem',
    props:['itemobj'],
    methods:{
      handleDel(payload){
        this.$emit('del',payload)
      }
    }
  }
</script>

<style scoped>
  h1{
    background-color: yellow;
    color:red
  }
li{
  border:1px solid red
}
</style>
