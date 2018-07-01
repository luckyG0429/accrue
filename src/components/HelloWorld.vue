<template>
  <div class="hello">
    <h>{{ msg }}</h>
    <my-text/>
    <h2>接下来的这些模块，我主要做的是样式的绑定。</h2>
    <button @click="changeBg">我要改变div的背景色</button>
    <button @click="changeFn">我要改变p切换字体大小</button>
    <div v-bind:class="divclass">
      div
      <p :class="[pclass1?'pclass1':'',pclass2]">p tag:我是p标签</p>
    </div>
    <div v-bind:id="styleId">
    <button v-bind:disabled="isA">{{ isA?'isA是true':'isA是false' }}</button>
    <button v-bind:disabled="isB">isB</button>
    <button v-bind:disabled="isC" @click="onClick">isC</button>
    <button v-bind:disabled="isD" v-bind:class="'btn-'+isD">isD</button>
    </div>
    <p>你选择的：{{checkname}}</p>
    <div id="example" @click="checkboxname">
      <template v-for="item in arrlist">
        <input type="checkbox" v-model="checkname" :key="item.id" :value="item.value" :data-id="date"/>
        <label>{{item.value}}</label>
      </template>
      <input type="radio" v-model="radioname" true-value="123" false-value="abc"/>
      <label>动态abc/123</label>
    </div>
    <p v-if="seen">
      <a :href="url">这是我的个人主页</a>
    </p>
    <p>
      <span>date的string：{{date}}</span>
      <span>时间戳是：{{dataToTimestramp}}</span>
    </p>
    <p>
      <label>fullname:
      <input v-model="fullname"/>
      </label>
      <label>
        <input v-model="lastname"/>
      </label>
      <hr>
      <span>全名：{{username}}</span>
    </p>
    <p>
      <label>fullname:
        <input v-model="fullnamew"/>
      </label>
      <label>
        <input v-model="lastnamew"/>
      </label>
    <hr>
    <span>全名：{{usernamew}}</span>
    </p>
    <p>
      <label>请输入你想问的问题：
        <input v-model="question"/>
      </label>
    </p>
    <link href=""/>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      radioname:'',
      arrlist: [
        {id: 1, value: 'jack'},
        {id: 2, value: 'tom'},
        {id: 3, value: 'alisa'}
      ],
      checkname: [],
      msg: 'Welcome to Your Vue.js App',
      isA: true,
      isB: null,
      isC: false,
      isD: 1,
      styleId: 'btnlist',
      url: 'www.zai18.club',
      seen: true,
      date: '2018-01-02',
      fullname: 'zaizai',
      lastname: 'liu',
      fullnamew: 'zaizai',
      lastnamew: 'liu',
      usernamew: 'zaizai liu',
      question: '',
      answer: '',
      divclass: {
        bgcolor: true, // 对象中的应用，属性就是class名，值则代表的是否引用
        bg: false
      },
      pclass1: true,
      pclass2: 'pclass2' // 其值代表的就是class名
    }
  },
  methods: {
    checkboxname (event) {
      const userId = event.target.attributes['data-id'].value
      console.log(userId);
    },
    onClick () {
      alert('you click me');
      this.seen = !this.seen;
    },
    changeBg () {
      const { bgcolor , bg} = this.divclass;
      this.divclass = {
        bgcolor: !bgcolor,
        bg: !bg
      }
    },
    changeFn () {
      this.pclass1 = !this.pclass1;
    },

  },
  computed: {
    dataToTimestramp () {
      let newStr = new Date(this.date);
      return Date.parse(newStr);
    },
    username () {
      return this.fullname + this.lastname
    }
  },
  watch: {
    fullnamew(val){
      this.usernamew = val + ' ' + this.lastnamew
    },
    lastnamew(val){
      this.usernamew = this.fullnamew + ' ' + val;
    },
    question (newVal,oldVal) {
      console.log(newVal);
      if (newVal.indexOf('?') === -1) {
        this.answer = '思考着....'
      }
      this.answer = '我想想'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#btnlist{
  border:1px solid #eee;
  padding: 5px;
  background: red;
}
.btn-1{
  background: red;
  color: yellow;
}
.pclass1{font-size: 35px}
.pclass2{font-weight:bolder; border: 1px solid black;}
.bg{background: red}
.bgcolor{background: yellowgreen}

</style>
