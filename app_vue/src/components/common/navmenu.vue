<template>
    <div id="navmenu" style="z-index:9999;position: fixed;width: 100%;min-width: 1300px;">
            <div id="navmenu_bg"
                    :style="{backgroundColor:navmenu_theme_color}"></div>
            <div id="navbar" style="height: 60px;position: absolute;background-color: transparent;">
                <div style="display: inline-block; " id="logodiv" >
                    <img height="58px" :src="logo" />
                </div>
            </div>
            <el-menu :default-active="activeIndex" class="" mode="horizontal" @select="handleSelect" :router="true" theme="light"
                     style="background-color: rgba(255,255,255,0.0);width: auto;right:0;position: absolute;padding-right: 50px;">

                <el-menu-item :style="{color: menu_item_color}" v-for="(item,index) in menulist" :key="item" :index="index">{{item}}</el-menu-item>

                <el-menu-item v-if='user_scope.name' :style="{color: menu_item_color}" index="append_user">
                    <img style="border-radius: 200px" :src='user_scope.img'>
                    <p style="display: inline">{{user_scope.name }}</p>
                </el-menu-item>

            </el-menu>


            </div>

</template>



<script>
//    import router_build from '../../app_config/router-build'
    import Velocity from 'velocity-animate'
    import Vue from 'vue'
import ElMenuItem from "../../../node_modules/element-ui/packages/menu/src/menu-item";

    export default {
        components: {ElMenuItem},
        data() {
            return {
                activeIndex:'w_m_b_site_ctrl',
                navmenu_list:[],

            };
        },
        props:{
            logo:{
                type: String,
                default: 'https://res.wx.qq.com/mpres/htmledition/images/bg/bg_logo318e8e.png', //left_top
                required: false,

            },
            menulist:{
                default: [1,2,3,4],
                required: false,

            },
            navmenu_theme_color:{
                default: 'rgba(255,255,255,0.33)',
                required: false,

            },
            menu_item_color:{
                default: 'black',
                required: false,
            },
            user_scope:{
                type: Object,
                default: function () {
                    return {
                        img:'',
                        name:''
                    }
                },
                required: false,
            }


        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                this.$root.eventHub.$emit('changeNavMenu',key)


            }
        },
        created(){
            var vm = this
            this.$root.eventHub.$on('init_navmenu',(data) => {
                console.log('on->init_navmemnu',data)
                vm.activeIndex = data
            })
        },
        mounted(){

        },

        computed:{

        }

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
#navmenu_bg
    position: absolute;width: 100%;height: 60px;hsla(0,0%,100%,.5);
    background-color: rgba(255,255,255,0.33);box-shadow: 0 0 20px black;
    border-radius: 2px;
.slide-fade-out-in-enter{
    /*
    transition: all 1.5s
    opacity: 0
    transform translateX(-20%)
    */
}
.slide-fade-out-in-leave-active{
    /*
    transition: all 1.5s
    opacity: 0
    transform translateX(20%)
    */
    animation:content-fade-out 2s 1;

}
.slide-fade-out-in-enter-active{
    animation:content-fade-in 2s 1;
}
.slide-fade-out-in-leave{
    /*
    transition: all 1.5s
    */
}

.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

@keyframes content-fade-out{
    0%   {
        transform: scale(1,1);


    }
    50% {
        transform: scale(0.9,0.9);

    }
    100% {

        /*transform: scale(0.9,0.9);*/
        transform: translateY(-100%) scale(0.9,0.9);

        /*transform: translateY(-100%);*/
        background-color: #232e3d;
    }
}
@keyframes content-fade-in {
    0% {
        transform: translateY(-100%);
        background-color: #232e3d;

    }
    100% {
        transform: translateY(0);
        background-color: #3D4D5C;

    }
}
    #navmenu>li
        font-family "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", "WenQuanYi Micro Hei", Arial, sans-serif !important
        word-spacing 2px
        letter-spacing 2px
        transition all 1.5s
        font-weight 400
        font-size 16px !important
    #navmenu>li:after
        content ''
    .is-active
        color #57DCDF !important

</style>
