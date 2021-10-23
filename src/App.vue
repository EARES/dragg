<template>
  <Tree/>
</template>

<script>
import Tree from "@/components/Tree";

export default {
  name: 'App',
  components: {
    Tree
  }
}
</script>

<style>
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
