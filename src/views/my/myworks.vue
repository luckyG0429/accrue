<template>
    <div class="work">
      <div class="work-cont">
        <div class="work-title">
          <h1>听别人讲故事</h1>
          <p class="tips">读万卷书</p>
          <ul>
            <li v-for="item in list" :class="'span-'+item">书名{{item}}</li>
          </ul>
        </div>
        <div class="work-list">
          <to-li v-for="item in data" :item="item" :key="item" @remove="handleRemove"></to-li>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import AsideList from '../../components/artical/list'
  let cooo = Vue.component('to-li',{
    props:['item'],
    template:`<div>
<span>{{item}}</span>
<button @click="$emit(\'remove\',item)">shanchu</button>
</div>`
  })

  export default {
    name: 'Works',
    data(){
      return {
        list:[1],
        data:['1','saklas','1290']
      }
    },
    components:{
      'aside-list':AsideList
    },
    methods:{
      handleRemove(item){
        console.log(item)
        let _index = ''
        this.data.filter((it,index)=>{
          if(it===item){
            _index = index
            return true;
          }
        })

        this.data.splice(_index,1);
      }
    },
    mounted(){
      console.log(window.Three)
    }
  }
</script>

<style scoped lang="less">
.work{
  height: 100%;
  /*background-image: url(../../assets/logo.png);*/
  /*background-position: left bottom;*/
  /*background-repeat: no-repeat;*/

  &-cont{
    width: 100%;
    display: flex;
    height: 100%;
    overflow-y: auto;
    padding: 20px 0;
  }

  &-list{
    flex: 1 1 auto;
    height: 3000px;
    border-left: 1px solid #eee;
  }

  &-title{
    flex: 0 0 200px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding:0 20px;

    h1{
      font-size: 1.25rem;
      color:#aaa;
      font-weight: normal;
      line-height: 2;
    }

    p{
      font-size: 0.8rem;
      color:#aaa;
      line-height: 2;
    }

    ul{
      list-style: none;
      text-align: right;
      display: inline-block;
      border-top: 1px solid #f1f1f1;
      padding-top: 20px;
    }


  }


}
</style>
