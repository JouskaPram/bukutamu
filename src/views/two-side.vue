<template>
  <div >
    <div class="px-24 pt-14">
    <navbarcomponentVue/>
    <div class="w-full grid grid-cols-5">
      <div class="col-span-3"><HomeViewVue/></div>
      <div class="col-span-2"><TambahViewVue/></div>
    </div>
  </div>
  </div>
</template>

<script>
import HomeViewVue from './HomeView.vue';
import TambahViewVue from './TambahView.vue';
import navbarcomponentVue from '@/components/navbarcomponent.vue';
  export default {
    components:{
      HomeViewVue,
      TambahViewVue,
      navbarcomponentVue,
    }
  }
</script>

<style lang="scss" scoped>

</style>