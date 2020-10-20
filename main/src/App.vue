<template>
  <div class="background" :style="'background-color:'+$route.meta.background">
    <router-view />
    <div class="control" :style="'border:0.5px solid '+$route.meta.color">
      <div class="wholeElement blur10px_start"></div>
      <div class="button" @click="navTo('happy')" :style="'color:'+$route.meta.color">个人信息</div>
      <div class="button" @click="navTo('normal')" :style="'color:'+$route.meta.color">czhmisaka</div>
      <div class="button" :style="'color:'+$route.meta.color+';font-size:2vw;'">{{time}}</div>
    </div>
    <eva-textBox class="tBox_1"></eva-textBox>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        time: ''
      }
    },
    components: {},
    mounted() {
      let interval = setInterval(() => {
        let date1 = new Date()
        this.time = date1.toLocaleString()
      }, 999)
    },
    methods: {
      navTo(name) {
        this.$router.push({
          name: name
        })
      },
      init(){
        
      }
    }
  };
</script>


<style>
  #app {
    font-family: "eva";
    /* font-family: "eva_Chinese"; */
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .background {
    animation: blurToClear 0.2s;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: 0px;
    transition: all 0.5s;
    overflow: hidden;
  }

  .wholeElement {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translate(-10px, -10px);
    z-index: -1;
  }

  .control {
    position: fixed;
    top: 2vw;
    left: 2vw;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.5);
    border: 0.5px rgba(0, 0, 0, 0.9) solid;
    width: 24vw;
    padding: 1vw;
    height: auto;
    display: inline-block;
    padding-bottom: 0px;
    animation: blurToClear 1s;
  }

  .control>.button {
    text-align: left;
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 1vw;
    z-index: 100;
  }

  .blur10px_start {
    filter: blur(10px);
  }

  .tBox_1{
    width:400px;
    height:200px;
    text-overflow: ellipsis;
  }
</style>