<script setup lang="ts">
import Logo from '@/static/logo.png'
import tuiIcon from "@/components/thorui/tui-icon/tui-icon.vue"

</script>

<template>
  <view class="p-20">
    <view class="text-end p-y-10">
      <tuiIcon name="setup" color="white" size="25"/>
      <tuiIcon name="notice" color="white" size="25" class="pl-10"/>
    </view>
    <view class="justify-between flex text-white">
      <view>
        <view>
          <text class="text-18 font-bold">八九的音乐播放器</text>
        </view>
        <view class="flex text-14 mt-10">
          <view v-for="i in 3" class="mr-20 text-center">
            <view>0</view>
            <view>关注</view>
          </view>
        </view>
      </view>
      <view class="avatar w-70 h-70">
        <image :src="Logo" class="w-full h-full" mode="center"/>
      </view>
    </view>
  </view>
</template>

