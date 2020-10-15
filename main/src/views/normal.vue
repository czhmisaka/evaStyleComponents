<template>
  <div class="normal" style="animation:blurToClear 2s">
    <div class="bg_barList">
      <div v-for="(item,index) in bg_animationList" :key="index" :class="'bar '+item.width"
        :style="'background-color:'+item.color+';animation: FadeIn_fromLeftTop '+item.time">
      </div>
    </div>
    <div class="act_buttonList">
      <div class="act_button" v-for="(item,index) in act_animationList" :key="index"
        :style="'margin-left:'+item.left+'vw;'">
        <div class="word" v-for="(itemm,indexx) in item.name"
          :style="'color:'+item.color+';animation:FadeIn_fromLeftTopToPoint '+(1.5+index*0.3+(3-indexx)*0.05)+'s'" :key="indexx">
          {{itemm}}
        </div>
      </div>
      <!-- <div class="right_button button_power" style="animation:FadeIn_fromLeftTopToPoint 1s">
        <img src="../../static/icon/power.png" alt="啊哈">
      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "normal",
    data() {
      return {
        bg_animationList: [],
        act_animationList: [{
            name: '文档室',
            url: '',
            left: 36,
            color: 'black'
          },
          {
            name: '会面室',
            url: '',
            left: 60,
            color: 'lawngreen'
          }, {
            name: '研究室',
            url: '',
            left: 84,
            color: 'gray'
          }
        ]
      }
    },
    components: {},
    mounted: function () {
      for (let i = 0; i < 9; i++) {
        let data = {
          width: 'width12',
          color: '',
          time: 0.8 + i * 0.2 + 's'
        }
        switch (i) {
          case 0:
            data.width = 'width128'
            data.color = 'purple'
            break;
          case 1:
            data.color = 'lawngreen'
            break;
          case 2:
            data.color = 'lawngreen'
            break;
          case 3:
            data.color = 'purple'
            break;
          case 4:
            data.color = 'purple'
            break;
          case 5:
            data.color = 'white'
            break;
          case 6:
            data.color = 'white'
            break;
          case 7:
            data.color = 'lawngreen'
            break;
          case 8:
            data.color = 'lawngreen'
            break;
        }
        this.bg_animationList.push(data)
        this.$forceUpdate()
      }
    }
  };
</script>
<style>
  .act_buttonList {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  }

  .act_button {
    position: absolute;
    top: 0px;
    left: -1vw;
    padding-top: 5vw;
    width: 15vw;
    display: flex;
    flex-flow: column;
    justify-content: center;
    font-size: 5vw;
    height: auto;
    transform: skew(-30deg);
    height: 100vh;
  }

  .act_button>.word {
    transform: skew(30deg);
    margin: 1vw 0px;
  }

  .button_power {
    width: 5vw;
    height: 5vw;
  }

  .right_button {
    position: fixed;
    right: 1vw;
    bottom: 1vw;
    opacity: 1;
    transform: translate(0vw, 0vw);
  }
</style>

<style>
  .bg_barList {
    position: fixed;
    width: 1000vw;
    margin-left: -50vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    z-index: 1;
  }

  .bg_barList>.bar {
    position: relative;
    float: left;
    height: 100vh;
    transform: skewX(-30deg) translateX(20%);
    margin: -10px;
    padding: 10px;
  }

  .width128 {
    width: 80vw;
  }

  .width12 {
    width: 12vw;
  }

  .coral {
    background-color: coral;
  }

  .whitesmoke {
    background-color: whitesmoke;
  }

  .purple {
    background-color: purple;
  }

  .lawngreen {
    background-color: lawngreen;
  }
</style>