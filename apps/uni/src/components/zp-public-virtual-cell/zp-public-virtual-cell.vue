<script setup lang="ts">
import LifeItem from "@/components/item/LifeItem.vue";
import ValuableItem from "@/components/item/ValuableItem.vue";
import TeacherItem from "@/components/item/TeacherItem.vue";

defineProps<{
  item: any,
  extraData: { id: string, total?: number, flushed?: Function }
}>()

</script>

<template>
  <LifeItem v-if="extraData.id==0" :item="item"/>
  <ValuableItem v-if="extraData.id==1" :item="item"/>
  <TeacherItem v-if="extraData.id==2" :item="item"/>
</template>