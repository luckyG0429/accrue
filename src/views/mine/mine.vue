<template>
  <div class="mine" id="my">
    <div class="mine-cont">
      <h1>zai18</h1>
      <ul>
        <router-link tag="li" :to="item.path" :key="item.id" v-for="(item,index) in listnav">
          {{item.label}}
        </router-link>
      </ul>
    </div>
    <p class="mine-p">
      本博客所采用的库有：vue， Trianglify，
    </p>
  </div>
</template>

<script>
  import Trianglify from 'Trianglify'
  export default {
    name: 'mine',
    data(){
      return {
        listnav:[{
          path:"/book",
          label:'读书笔记',
          id:'2018'
        },{
          path:"/life",
          label:'日常记录',
          id:'2019'
        },{
          path:"/times",
          label:'时间轴',
          id:'2010'
        }]
      }
    },
    mounted(){
      let pattern = Trianglify({
        width:window.innerWidth,
        height:window.innerHeight,
        cell_size:40,
        x_colors:'Blues',
        stroke_width:10
      })

      document.getElementById("my").appendChild(pattern.canvas())
    }
  }
</script>

<style scoped lang="less">
  .mine{
    position: relative;
    height: 100%;

    &-cont{
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      color: #aaa;
      flex-direction: column;
      justify-content: center;
      -ms-user-select: none;
      user-select: none;

      h1{
        color:#fafcfda8;
        font-size: 8rem;
        line-height: 1.2;
        font-family: cursive;
        display: inline-block;
        align-self: center;
      }

      ul{
        list-style: none;
        min-width: 5rem;
        display: inline-block;
        align-self: center;
        padding:1rem 1.5rem 0;
        border-top: 1px solid #fafcfd45;
        color:#fafcfd7d;
        li{
          display: inline;
          padding:0 1rem;
          cursor:pointer;
          transition: color .2s linear;
          &:hover{
             color: #fff;
          }
        }
        li+li{
          border-left:1px solid #fafcfd45;
        }
      }
    }

    &-p{
      position: absolute;
      left: 0;
      bottom: 0px;
      width:100%;
      text-align: center;
      height: 30px;
      font-size:12px;
      color: rgba(0,0,0,.3);
      line-height: 30px;
    }
  }

</style>
