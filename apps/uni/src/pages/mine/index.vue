<script setup lang="ts">
import HomeLayout from "@/components/layout/home.vue";
import ZTabs from "@/components/thorui/z-tabs/components/z-tabs/z-tabs.vue";
import Header from "./components/Header.vue";

const tabData = ["动态", "收藏", "喜欢"];
</script>

<template>
  <HomeLayout>
    <view class="header-bg">
      <Header/>
      <view class="content-bg b-rd-t-20 overflow-hidden">
        <ZTabs :list="tabData" bgColor="#fff" fixed/>
        <view>

        </view>
      </view>
    </view>
  </HomeLayout>
</template>

<style scoped>
.header-bg {
  background: linear-gradient(90deg, #1B318B 0%, #5874DC 100%);
}

.content-bg {
  background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 98.61%);
}
</style>