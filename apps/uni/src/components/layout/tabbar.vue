<script setup>
import TuiTabBar from "@/components/thorui/tui-tabbar/tui-tabbar.vue"
import {storeToRefs} from "pinia"
import {useAppStore} from "@/state/modules/useAppStore";
import Add from '@/static/icon/add.png'
import Home from '@/static/icon/Home.png'
import HomeFill from '@/static/icon/Home-fill.png'
import User from '@/static/icon/User.png'
import UserFill from '@/static/icon/User-fill.png'

const {currentTabBar} = storeToRefs(useAppStore())
const tabBar = [
  {
    pagePath: '/pages/home/index',
    text: '首页',
    iconPath: Home,
    selectedIconPath: HomeFill
  },
  {
    pagePath: '',
    selectedIconPath: Add,
    iconPath: Add,
    PathSize: '90rpx'
  },
  {
    pagePath: '/pages/mine/index',
    text: '我的',
    iconPath: User,
    selectedIconPath: UserFill
  }
]

function tabbarSwitch(e) {
  //获取登录状态，此处默认未登录
  //跳转切换逻辑需自行实现
  let isLogin = false;
  if (e.verify && !isLogin) {
    uni.showToast({
      title: "ces1"
    })
  } else {
    currentTabBar.value = e.index;
    uni.switchTab({url: e.pagePath})
  }
}

uni.hideTabBar()
</script>

<template>
  <TuiTabBar :current="currentTabBar" backdropFilter :tabBar="tabBar" @click="tabbarSwitch" unlined/>
</template>
