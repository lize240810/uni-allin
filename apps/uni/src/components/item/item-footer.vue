<script setup lang="ts">

import TuiIcon from "@/components/thorui/tui-icon/tui-icon.vue";
</script>

<template>
  <view class="flex justify-between text-theme text-14 mt-10 flex-rows">
    <view class="flex">
      <view class="mr-20 center">
        <tuiIcon size="20" class="mr-8" color="#273347" name="eye"/>
        <text>1</text>
      </view>
      <view class="mr-20">
        <tuiIcon size="20" class="mr-8" color="#273347" name="share-fill"/>
      </view>
    </view>
    <view class="flex">
      <view class="mr-20">
        <tuiIcon size="20" class="mr-8" color="#273347" name="agree-fill"/>
        <text>1</text>
      </view>
      <view class="mr-20">
        <tuiIcon size="20" class="mr-8" color="#273347" name="message-fill"/>
        <text>1</text>
      </view>
      <view class="mr-20">
        <tuiIcon size="20" class="mr-8" color="#273347" name="star-fill"/>
        <text>1</text>
      </view>
    </view>
  </view>
</template>

<style scoped>

</style>