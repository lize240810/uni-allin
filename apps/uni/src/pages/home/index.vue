<script setup lang="ts">
import {ref} from "vue";
import ZTabs from "@/components/thorui/z-tabs/components/z-tabs/z-tabs.vue";
import ZPaging from "@/components/thorui/z-paging/components/z-paging/z-paging.vue";
import Tabbar from "@/components/layout/tabbar.vue";


const tabData = ["生活圈", "干货帖", "前辈帮"];
const current = ref(0)

function onTabChange(index: number) {
  current.value = index
}


const pagingRef = ref(),
  queryList = async (pageNo?: number, pageSize?: number) => {
    pagingRef.value.complete([1, 2, 3, 4, 5]);
  };
</script>

<template>
  <ZPaging ref="pagingRef" @query="queryList" use-virtual-list use-compatibility-mode
           back-to-top-bottom="200rpx"
           bgColor="#f2f2f2" :extra-data="{id: current}" auto-show-back-to-top :show-scrollbar="false">
    <template #top>
      <ZTabs :current="current" :list="tabData" bgColor="#fff" @change="onTabChange"/>
    </template>
    <template #bottom>
      <view class="h-40">
        <Tabbar/>
      </view>
    </template>
  </ZPaging>
</template>

<style scoped>

</style>