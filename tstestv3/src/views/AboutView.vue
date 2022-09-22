<template>
  <div class="about">
    <TSComp1></TSComp1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import TSComp1 from '@/components/TSComp1.vue'
@Options({
  /* eslint-disable */
  components: {
    TSComp1
  }
})
export default class HomeView extends Vue {}
</script>

<style>
</style>
