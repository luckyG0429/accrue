<template>

    <div class="work">
      <div class="work-title">
        <span v-for="item in list" :class="'span-'+item">人讲故事</span>
      </div>
      <div class="work-list"></div>
    </div>
</template>

<script>
  export default {
    name: 'Works',
    data(){
      return {
        list:[1,2,3,4,5]
      }
    }
  }
</script>

<style scoped lang="less">
.work{
  height: 100%;
  overflow-y: auto;
  display: flex;
  padding-top: 20px;

  &-list{
    flex: 1 1 auto;
    height: 3000px;
    border-left: 1px solid #eee;
  }

  &-title{
    flex: 0 0 200px;
    position: relative;

    .loop(5);

    .loop( @count )when( @count > 0 ){
      .span-@{count}{
        top: 20px * @count * @count;;
        right: -10px * @count;
      }
      .loop((@count - 1));
    }


    span{
      position: absolute;
      top: 10px;
      right: -10px;
      line-height: 1.5;
      padding:5px 10px;
      border:1px solid #115aa3;





    }
  }


}
</style>
