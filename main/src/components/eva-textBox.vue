<template>
    <div class="textBox animation_blurToClear">
        <div class="bg">
            <div class="textBox_animation">
                <div class="borderL"></div>
                <div class="borderB"></div>
                <div class="borderT"></div>
                <div class="borderR"></div>
            </div>
        </div>
        <div class="content">
            <div class="title" v-if="title">
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

<style scoped>
   
    .textBox {
    }

    .textBox>.bg {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .textBox>.content {
        width: 100%;
        height: 100%;
        font-family: 'eva_Chinese';
    }

    .textBox>.content>.title {
        font-size: 26px;
        margin-bottom: 20px;
    }

    .textBox>.content>.word {
        text-indent: 1.2em;
        text-align: left;
        margin: 6px 0px;
        line-height: calc(1em + 6px);
    }
</style>
<style scoped>
    @keyframes Border_l {
        from {
            transform: translateY(130px);
            opacity: 0;
        }

        to {
            opacity: 1;
            transform: translateY(-30px);
        }
    }

    @keyframes Border_R {
        from {
            opacity: 0;
            transform: translateY(-130px);
        }

        to {
            opacity: 1;
            transform: translateY(30px);
        }
    }

    @keyframes Border_T {
        from {
            opacity: 0;
            transform: translateX(130px);
        }

        to {
            opacity: 1;
            transform: translateX(-30px);
        }
    }

    @keyframes Border_B {
        from {
            opacity: 0;
            transform: translateX(-130px);
        }

        to {
            opacity: 1;
            transform: translateX(30px);
        }
    }

    .textBox_animation {
        width: calc(100% + 60px);
        height: calc(100% + 60px);
        margin-left: -30px;
        margin-top: -30px;
        position: absolute;
    }

    .textBox_animation>div {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .textBox_animation>.borderL {
        border-left: 1px #000 solid;
        transform: translateY(-30px);
        animation: Border_l 1.2s ease-out;
    }

    .textBox_animation>.borderT {
        border-top: 1px #000 solid;
        transform: translateX(-30px);
        animation: Border_T 1.2s ease-out;
    }

    .textBox_animation>.borderR {
        border-right: 1px #000 solid;
        transform: translateY(30px);
        animation: Border_R 1.2s ease-out;
    }

    .textBox_animation>.borderB {
        border-bottom: 1px #000 solid;
        transform: translateX(30px);
        animation: Border_B 1.2s ease-out;

    }
</style>