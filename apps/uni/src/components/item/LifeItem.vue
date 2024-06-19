<script setup lang="ts">
import Logo from '@/static/logo.png'
import ItemFooter from "@/components/item/item-footer.vue";


defineProps<{
  item: any
}>()
</script>

<template>
  <view class="p-10 bg-white mb-10">
    <view class="flex justify-between items-center">
      <view class="flex">
        <view>
          <image :src="Logo" class="w-40 h-40 b-rd-100" mode="widthFix"/>
        </view>
        <view class="flex flex-col ml-5">
          <text class="text-18 font-bold">{{ 'name' }}</text>
          <text class="text-12">2021</text>
        </view>
      </view>
      <view>
        <view class="p-x-15 p-y-3 b-rd-30 text-12" style="border: 1px solid #273347">关注</view>
      </view>
    </view>
    <view class="p-10">
      <view>
        缺点是/无法打空格/我不喜欢打标点符号。然后还没有办法换行/以及发表因为很卡顿、我点了三遍就发了三...
      </view>
      <view class="pt-10">
        <view class="grid grid-cols-3 gap-10">
          <image v-for="i in 5" :src="Logo" class="w-full b-rd-10" mode="widthFix"/>
        </view>
      </view>
    </view>
    <ItemFooter/>
  </view>
</template>

<style scoped>

</style>