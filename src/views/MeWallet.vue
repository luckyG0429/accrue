<template>
  <div id="mewallet">
    <div class="show-assets">
      <div key="item1" class="div-center">
          <span class="font-14">1000</span>
          <span class="font-12">金币</span>
      </div>
      <div key="item2" class="div-center">
        <span class="font-14">1000</span>
        <span class="font-12">金币</span>
      </div>
    </div>
    <span class="short-title">
      <img src="@/assets/logo.png"> 金币充值
      （1元=10金币）
    </span>
    <div class="item-list" @click="onListCheck">
      <div class="item-li" v-for = "item in arr" :key="'item'+ item.value" :class="{activeli:item.value==checkednum}" :data-value="item.value">
        <input :value="item.value"/>
        <div>
          <span class="font-14">{{item.text}}</span>
          <span class="font-12">¥{{item.value}}.00</span>
        </div>
      </div>
      <div class="item-checked">
        实付金额：<span>¥{{checkednum}}元</span>
      </div>
    </div>
    <span class="short-title">
      <img src="@/assets/logo.png"> 充值方式
    </span>
    <div class="foot-div">
      <button class="submit-btn"><b>确认支付</b></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'me-wallet',
  data () {
    return {
      arr: [{
        value: 20,
        text: '200金币'
      }, {
        value: 50,
        text: '500金币'
      }, {
        value: 100,
        text: '1000金币'
      }, {
        value: 200,
        text: '2000金币'
      }, {
        value: 500,
        text: '5000金币'
      }, {
        value: 1000,
        text: '10000金币'
      }],
     checkednum: 0
    }
  },
  methods: {
    onListCheck (event) {
      if(event.target.tagName === 'DIV') return false;
      this.checkednum = event.target.value
    }
  }
}
</script>

<style scoped lang="less">

@div-bgcolor：rgb(241, 241, 241);
@active-bgcolor:rgb(29, 29, 29);
@border-color: #979797;
@li-bgcolor: #262626;

@text-black-color: rgb(42, 42, 42);
@text-gray-color: rgb(144, 144, 144);

@line-color:rgb(158, 158, 158);
@line-box-shadow:rgb(249, 249, 249);

@text-fontSize-12: calc( (12*100vw)/@layer-width);
@text-fontSize-14:calc( (14*100vw)/@layer-width);
@text-fontSize-16:calc( (16*100vw)/@layer-width);

@layer-width:375;

#computerHeight(@num){
  height: calc( (@num*100vw)/@layer-width);
}

#computerWidth(@num){
  width: calc( (@num*100vw)/@layer-width);
}

#mewallet{
  width:100vw;
  height: auto;
  background-color: #f4f4f4;
  font-family: "Helvetica Neue For Number",  "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Helvetica, Arial;
  overflow: hidden;

  div.show-assets{
    margin-top: 10px;
    background-color: red;
    width: 100vw;
    display: block;
    box-sizing: border-box;
    border-top: 1px solid @line-box-shadow;
    border-bottom: 1px solid @line-box-shadow;
    #computerHeight(96);

    div{
      float: left;
      width: 50%;
      height: 100%;
      display: inline-flex;
      background-color: #fff;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;

      span.font-14{
        font-size: @text-fontSize-14;
        line-height: 1.5;
        font-weight: bolder;
        color: @text-black-color;

      }
      span.font-12{
        font-size: @text-fontSize-12;
        color: @text-gray-color;
        line-height: 1.5;
      }
    }
  }

  span.short-title {
    display: inline-block;
    box-sizing: border-box;
    width: 100vw;
    font-size: @text-fontSize-16;
    line-height: 32px;
    #computerHeight(50);
    padding:9px 15px;
    text-align: left;

    img{
      #computerWidth(24);
    }
  }

  div.item-list{
    background-color: #fafafa;
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    #computerHeight(168);
    color: @text-black-color;
    font-size: @text-fontSize-14;

    div.item-li{
      float: left;
      #computerWidth(110);
      #computerHeight(54);
      border: 1px solid @border-color;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      position: relative;

      input {
        position: absolute;
        z-index: 9;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        width: 100%;
      }

      div{
        #computerHeight(39);

        span{
          display: inline-block;
          width: 100%;
        }
        span.font-14{
          font-size: @text-fontSize-14;
          font-weight: bolder;
          line-height: 1.5;
          #computerHeight(21);
          color: @text-black-color;
        }
        span.font-12{
          font-size: @text-fontSize-12;
          line-height: 1.5;
          #computerHeight(18);
          color: @text-gray-color;
        }
      }

      &.activeli{
        background-color:@li-bgcolor;
        color: #fff;
        animation: downUp 0.5s ease-out 1;
        animation-fill-mode:forwards;
        -webkit-animation-fill-mode:forwards;

        div {
          span.font-14{
            font-size: @text-fontSize-14;
            font-weight: bolder;
            color: #fff;
          }
          span.font-12{
            font-size: @text-fontSize-12;
            color: #fff;
          }
        }

      }

    }


    div.item-checked{
      width:100%;
      #computerHeight(20);
      text-align: left;
      line-height: 1.5;
      text-indent: 1rem;
      color: @text-gray-color;

      span{
        font-size: @text-fontSize-14;
        color: @text-black-color;
      }
    }

  }

  div.foot-div {
    background-color: #fafafa;
    padding: 10px 10px;
    border-top: 1px solid @line-color;
    .submit-btn {
      #computerWidth(352);
      #computerHeight(48);
      margin: auto;
      background-color: @li-bgcolor;
      border-radius: 12px;
      color: #fff;
      font-size: @text-fontSize-16;
      letter-spacing: 1.5px;
      outline: 0;
    }
  }
}

@keyframes downUp{
  0% { box-shadow: inset 0 2px 4px #666,inset -2px 0px 4px #666,inset 2px 0px 4px #666;}
  50% { box-shadow: 0 0 0px #666}
  100% { box-shadow: 0 1px 1px #666}
}

</style>
