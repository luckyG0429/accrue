<template>
    <div>
      <m-list v-for="item in listdata" :key="item.id" :itemobj="item" @del="handleDel" v-if="listdata.length">
      </m-list>
    </div>
</template>

<script>
  import itemList from '../../components/index/listItem'
  export default {
    name: 'Index',
    data(){
      return {
        listdata:[{
          id:'1001',
          child:[
            {
              id:'11001',
              name:'sds',
            },
            {
              id: '11002',
              name:'zai10',
            }
          ]
        },{
          id:'2001',
          child:[{
            id:'22001',
            name:'alice',
          }]
        },]
      }
    },
    components:{
      'm-list':itemList
    },
    methods:{
      handleDel(payload){
        const vm = this;
        console.log(payload)
        let _index = '',
        temp = '';

        vm.listdata.filter((item,index) =>{
          if(item.id === payload.pId) {
            if(item.child.length === 1){
              vm.listdata.splice(index,1)
            }else{
              _index = index
              temp = item
            }
            return true;
          }
        });

        if(typeof _index != 'string'){
          temp.child.filter((item,index)=>{
            if(item.id == payload.cId){
              temp.child.splice(index,1)
            }
          })

          vm.listdata[_index] = Object.assign({},temp)

        }

      }
    }
  }
</script>

<style scoped>

</style>
