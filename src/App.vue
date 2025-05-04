<template>
  <div style="width: 100%;height: 100%">
    <router-view />
  </div>
</template>


<script>

import router from "@/router";

export default {
  name: 'App',
  components: {

  },
  data(){
    return{

    }
  },
  mounted() {
    this.denglu();
  },
  methods:{
    denglu(){
      router.push("/")
    }
  }
}
</script>

<style>
#app {
  height: 100%;
}
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
