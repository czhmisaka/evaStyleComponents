<template>
  <div class="happy">
    <eva-textBox class="tBox_1" :title="text.title" :wordList="text.wordList" v-for="(item,index) in [1,2,3,4,5,6]" v-bind:key="index"></eva-textBox>
  </div>
</template>

<script>
  export default {
    name: "happy",
    data() {
      return {
        text: {
          title: '一个测试用的文本框',
          wordList: [{
            context: '一段测试用的文本。'
          }, {
            context: '第二段比较长的文本第二段比较长的文sadasdasd a s本第二段比较长的文本第二段比较长的文本第二段比较长的文本第二段比较长的文本第二段比较长的文本第二段比较长的文本第二段比较长的文本第二段比较长的文本第二段比较长的文本。'
          }]
        }
      }
    },
    components: {}
  };
</script>

<style scoped>
  .tBox_1 {
    display: inline-block;
    position:relative;
    float:left;
    height: auto;
    width: 400px;
    text-overflow: ellipsis;
    margin:80px;
  }
</style>