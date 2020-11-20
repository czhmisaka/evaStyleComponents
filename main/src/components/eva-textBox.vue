<template>
    <div class="textBox">
        <div class="bg">
        </div>
        <div class="content">
            <div class="title">
                {{title}}
            </div>
            <div class="word" v-for="(item ,index) in wordList" :key="index" :style="item.style">
                {{item.context}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "eva-textBox",
        data() {
            return {

            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            wordList: {
                type: Array,
                default: [{
                    style: '',
                    context: '',
                }]
            },
            bgStyle: {
                type: Object,
                default: {
                    
                }
            }
        },
        components: {}
    };
</script>

<style>
    .textBox {}

    .textBox>.bg {}

    .textBox>.content {
        width: 100%;
        height: 100%;
        font-family: 'eva_Chinese';
    }

    .textBox>.content>.title {}

    .textBox>.content>.word {}
</style>